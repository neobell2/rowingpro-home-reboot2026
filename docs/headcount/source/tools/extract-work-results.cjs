#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--in' || a === '-i') args.in = argv[++i];
    else if (a === '--out' || a === '-o') args.out = argv[++i];
    else if (a === '--mode') args.mode = argv[++i];
    else if (a === '--min-chars') args.minChars = Number(argv[++i]);
    else if (a === '--only-say') args.onlySay = argv[++i];
    else if (a === '--must-include') {
      args.mustInclude ||= [];
      args.mustInclude.push(argv[++i]);
    }
    else if (a === '--stats') args.stats = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else args._.push(a);
  }
  if (!args.in && args._[0]) args.in = args._[0];
  return args;
}

function usage(code = 0) {
  const msg = [
    'Extract "work result report" messages from a Claude-Dev task JSON export.',
    '',
    'Usage:',
    '  node tools/extract-work-results.cjs --in <taskDir|ui_messages.json> [--out <mdFile>]',
    '',
    'Options:',
    '  --mode <work|all>        Default: work',
    '  --min-chars <n>          Default: 80',
    '  --only-say <value>       Restrict to messages where say/role matches',
    '  --must-include <text>    Keep only texts containing this (repeatable)',
    '  --stats                  Print message field stats and exit',
    '  --out, -o <mdFile>       If omitted, prints to stdout',
    '',
    'Examples:',
    '  node tools/extract-work-results.cjs --in \"C:\\\\...\\\\tasks\\\\1771525407267\" --out docs\\\\reports\\\\EXTRACTED_1771525407267.md',
  ].join('\n');
  process.stdout.write(msg + '\n');
  process.exit(code);
}

function resolveInput(inputPath) {
  const p = path.resolve(inputPath);
  if (!fs.existsSync(p)) throw new Error(`Input not found: ${p}`);
  const stat = fs.statSync(p);
  if (stat.isDirectory()) {
    const ui = path.join(p, 'ui_messages.json');
    const api = path.join(p, 'api_conversation_history.json');
    if (fs.existsSync(ui)) return ui;
    if (fs.existsSync(api)) return api;
    throw new Error(`No ui_messages.json or api_conversation_history.json in: ${p}`);
  }
  return p;
}

function safeJsonParse(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(raw);
}

function tsToLocalString(ts) {
  if (!Number.isFinite(ts)) return String(ts);
  const ms = ts > 10_000_000_000 ? ts : ts * 1000;
  try {
    return new Date(ms).toLocaleString();
  } catch {
    return String(ts);
  }
}

function isProbablyToolDump(text) {
  const t = String(text || '');
  if (!t.trim()) return true;

  if (t.includes('<environment_details>')) return true;
  if (t.includes('TODO LIST UPDATE REQUIRED')) return true;
  if (t.includes('File list truncated')) return true;
  if (t.includes('Current Working Directory')) return true;

  if (t.startsWith('{"request":"[read_file') || t.startsWith('{"request":"[list_files')) return true;
  if (t.startsWith('{"request":"<task>')) return true;
  if (t.includes('"request":"[read_file') || t.includes('[read_file for')) return true;

  if (t.includes('"say":"api_req_started"') || t.includes('"say":"api_req_finished"')) return true;

  // Giant embedded JSON blobs that are clearly tool IO.
  if (/^\s*\{"request":\s*".{0,80}\[read_file/i.test(t)) return true;
  return false;
}

function looksLikeWorkReport(text) {
  const t = String(text || '').trim();
  if (!t) return false;
  if (isProbablyToolDump(t)) return false;

  const hasMarkdownHeaders =
    /\*\*(changes|next steps|notes|results|작업\s*결과|변경\s*사항|다음\s*단계)\*\*/i.test(t) ||
    /^#{1,3}\s+(작업\s*결과|변경\s*사항|요약|결과)/m.test(t);

  const hasBullets = /(^|\n)-\s+\S+/m.test(t);
  const hasFileLikeRefs = /(^|\s)([A-Za-z]:\\|\.\/|src\/|docs\/|public\/|[A-Za-z0-9_.-]+\.(md|astro|ts|js|css|json))\b/m.test(
    t,
  );
  const hasCompletionTone = /(완료|수정|적용|반영|추가|삭제|리팩터|Fix(ed)?|Added|Updated)/i.test(t);

  // Strong signals
  if (hasMarkdownHeaders && (hasBullets || hasFileLikeRefs)) return true;
  if (hasBullets && (hasFileLikeRefs || hasCompletionTone)) return true;
  if (/작업\s*결과|작업결과|변경\s*사항|작업\s*완료/.test(t)) return true;
  return false;
}

function normalizeMessage(m) {
  if (!m || typeof m !== 'object') return null;
  const type = m.type || m.kind || null;
  const say = m.say || m.role || m.speaker || null;
  const text = typeof m.text === 'string' ? m.text : typeof m.content === 'string' ? m.content : null;
  const ts = m.ts ?? m.timestamp ?? null;
  return { type, say, text, ts, raw: m };
}

function extractMessages(data) {
  if (Array.isArray(data)) return data.map(normalizeMessage).filter(Boolean);
  if (data && typeof data === 'object') {
    for (const k of ['messages', 'conversation', 'items']) {
      if (Array.isArray(data[k])) return data[k].map(normalizeMessage).filter(Boolean);
    }
  }
  throw new Error('Unrecognized JSON shape: expected an array of messages');
}

function formatMd({ sourcePath, mode, minChars, selected }) {
  const lines = [];
  lines.push(`# 작업결과보고 추출`);
  lines.push('');
  lines.push(`- Source: \`${sourcePath}\``);
  lines.push(`- Mode: \`${mode}\``);
  lines.push(`- Extracted: \`${new Date().toLocaleString()}\``);
  lines.push(`- Count: \`${selected.length}\``);
  lines.push('');

  selected.forEach((m, idx) => {
    lines.push(`## ${idx + 1}) ${tsToLocalString(m.ts)} (ts=${m.ts})`);
    lines.push('');
    lines.push(m.text.trimEnd());
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  if (selected.length === 0) {
    lines.push(`(조건에 맞는 메시지를 찾지 못했습니다. \`--mode all\`로 전체 텍스트를 먼저 덤프한 뒤, 키워드를 조정하세요.)`);
    lines.push('');
    lines.push(`- 예: \`node tools/extract-work-results.cjs --in \"${sourcePath}\" --mode all --min-chars ${minChars}\``);
  }
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.in) usage(args.in ? 0 : 1);

  const mode = (args.mode || 'work').toLowerCase();
  const minChars = Number.isFinite(args.minChars) ? args.minChars : 80;

  const sourcePath = resolveInput(args.in);
  const data = safeJsonParse(sourcePath);
  const msgs = extractMessages(data);

  const withText = msgs.filter((m) => typeof m.text === 'string' && m.text.trim().length >= minChars);

  if (args.stats) {
    const countBy = (key) => {
      const map = new Map();
      for (const m of msgs) {
        const v = m[key] ?? '(null)';
        map.set(v, (map.get(v) || 0) + 1);
      }
      return [...map.entries()].sort((a, b) => b[1] - a[1]);
    };
    const sayTextCounts = new Map();
    for (const m of withText) {
      const k = m.say ?? '(null)';
      sayTextCounts.set(k, (sayTextCounts.get(k) || 0) + 1);
    }
    const topSayText = [...sayTextCounts.entries()].sort((a, b) => b[1] - a[1]);

    process.stdout.write(`source: ${sourcePath}\n`);
    process.stdout.write(`total: ${msgs.length}\n`);
    process.stdout.write(`withText>=${minChars}: ${withText.length}\n\n`);
    process.stdout.write('type counts:\n');
    for (const [k, v] of countBy('type')) process.stdout.write(`  ${k}: ${v}\n`);
    process.stdout.write('\nsay/role counts (all msgs):\n');
    for (const [k, v] of countBy('say')) process.stdout.write(`  ${k}: ${v}\n`);
    process.stdout.write(`\nwithText say/role counts:\n`);
    for (const [k, v] of topSayText) process.stdout.write(`  ${k}: ${v}\n`);
    process.exit(0);
  }

  const onlySay = args.onlySay ? String(args.onlySay) : null;
  const withTextFiltered = onlySay ? withText.filter((m) => String(m.say) === onlySay) : withText;
  const mustInclude = Array.isArray(args.mustInclude) ? args.mustInclude.filter(Boolean) : [];
  const withTextConstrained =
    mustInclude.length === 0
      ? withTextFiltered
      : withTextFiltered.filter((m) => mustInclude.every((needle) => String(m.text).includes(needle)));

  let selected;
  if (mode === 'all') selected = withTextConstrained.filter((m) => !isProbablyToolDump(m.text));
  else selected = withTextConstrained.filter((m) => looksLikeWorkReport(m.text));

  const md = formatMd({ sourcePath, mode, minChars, selected });

  if (args.out) {
    const outPath = path.resolve(args.out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, md, 'utf8');
    process.stdout.write(outPath + '\n');
  } else {
    process.stdout.write(md + '\n');
  }
}

main();
