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
    else if (a === '--year' || a === '-y') args.year = argv[++i];
    else if (a === '--include-competitions') args.includeCompetitions = true;
    else if (a === '--help' || a === '-h') args.help = true;
    else args._.push(a);
  }
  if (!args.in && args._[0]) args.in = args._[0];
  return args;
}

function usage(code = 0) {
  const msg = [
    'Generate a headcount-estimate CSV template from history_full_list.txt',
    '',
    'Usage:',
    '  node tools/generate-headcount-csv.cjs --year 2013',
    '',
    'Options:',
    '  --in, -i <path>      Default: docs/contents/_source/history_count/history_full_list.txt',
    '  --out, -o <path>     Default: docs/reports/photo_headcount_estimates_<year>_TEMPLATE.csv',
    '  --year, -y <YYYY>    Required',
    '  --include-competitions  Do not filter out competition-like sessions',
  ].join('\n');
  process.stdout.write(msg + '\n');
  process.exit(code);
}

function isExcludedSessionName(sessionName) {
  const name = String(sessionName || '');
  if (!name) return false;

  // Exception: company sports day is considered a client/corporate event.
  if (/(회사체육대회|사내체육대회)/.test(name)) return false;

  // Exclusions requested:
  // - 대회, 체전
  // - 체육대회 (except company sports day)
  // - obvious competition labels
  if (/(체전)/.test(name)) return true;
  if (/(체육대회)/.test(name)) return true;
  if (/(선수권|협회장배|시장배|탄금호배)/.test(name)) return true;
  if (/(대회)/.test(name)) return true;

  return false;
}

function parseSessionLine(line) {
  const l = String(line || '').trim();
  if (!l) return null;

  // Accept lines like:
  // - 2013.04.04 메트라이프 ...
  // 2014.10.14-21 인천장애인아시안게임 ...
  // 2013.05.30-06.02 경기국제보트쇼 ...
  // 2014.03 고촌중학교
  //
  // Keep the *date token* in session_name to avoid collisions (e.g., multiple "메트라이프").
  const cleaned = l.replace(/^[-–•]\s*/, '');
  const parts = cleaned.split(/\s+/);
  if (parts.length < 2) return null;

  const dateToken = parts[0];
  const rest = parts.slice(1).join(' ').trim();

  // Date token must start with YYYY and be punctuation/digits only.
  if (!/^\d{4}$/.test(dateToken.slice(0, 4))) return null;
  if (!/^\d{4}[0-9.\-\/]*$/.test(dateToken)) return null;
  if (!/[.\-\/]/.test(dateToken)) return null;
  if (!rest) return null;

  const year = dateToken.slice(0, 4);
  const sessionName = `${dateToken} ${rest}`;
  return { year, sessionName };
}

function csvEscape(v) {
  const s = String(v ?? '');
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) usage(0);

  const year = String(args.year || '').trim();
  if (!/^\d{4}$/.test(year)) usage(1);

  const defaultIn = path.resolve('docs/contents/_source/history_count/history_full_list.txt');
  const inPath = path.resolve(args.in || defaultIn);
  if (!fs.existsSync(inPath)) throw new Error(`Input not found: ${inPath}`);

  const outPath = path.resolve(
    args.out || `docs/reports/photo_headcount_estimates_${year}_TEMPLATE.csv`,
  );

  const lines = fs.readFileSync(inPath, 'utf8').split(/\r?\n/);
  const rows = [];
  const seen = new Set();

  for (const line of lines) {
    const parsed = parseSessionLine(line);
    if (!parsed) continue;
    if (parsed.year !== year) continue;
    if (!args.includeCompetitions && isExcludedSessionName(parsed.sessionName)) continue;
    const key = parsed.sessionName;
    if (seen.has(key)) continue;
    seen.add(key);
    rows.push(parsed);
  }

  const header =
    'year,session_name,session_path,session_type,people_min,people_max,confidence,evidence,notes';
  const out = [header];
  for (const r of rows) {
    out.push(
      [
        r.year,
        r.sessionName,
        '',
        '',
        '',
        '',
        '',
        '',
        'source=history_full_list.txt',
      ].map(csvEscape).join(','),
    );
  }

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, out.join('\n') + '\n', 'utf8');
  process.stdout.write(outPath + '\n');
}

main();
