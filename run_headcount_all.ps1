param(
  [int]$Year,
  [double]$Delay = 1.0,
  [string]$Python = "$env:LOCALAPPDATA\Programs\Python\Python312\python.exe"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath $Python)) {
  throw "Python not found: $Python"
}

if (-not $env:GEMINI_API_KEY) {
  $clip = ""
  try { $clip = (Get-Clipboard -Raw).Trim() } catch { }

  if ($clip.Length -ge 10) {
    Write-Host "GEMINI_API_KEY not set; using clipboard content (length=$($clip.Length))."
    $env:GEMINI_API_KEY = $clip
  }
  else {
    Write-Host "GEMINI_API_KEY not set and clipboard is empty/too short."
    $env:GEMINI_API_KEY = Read-Host "GEMINI_API_KEY"
  }
}

$argv = @("headcount.py", "--delay", "$Delay")
if ($PSBoundParameters.ContainsKey("Year")) {
  $argv += @("--year", "$Year")
}
else {
  $argv += "--all"
}

& $Python @argv
exit $LASTEXITCODE
