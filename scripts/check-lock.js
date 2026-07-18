// scripts/check-lock.js
// Verifies package-lock.json is in sync with package.json before building.
// Cross-platform (works on Windows/Mac/Linux) — run via "npm run build".

const { execSync } = require("child_process");

function run(cmd, opts = {}) {
  return execSync(cmd, { stdio: "pipe", encoding: "utf-8", ...opts });
}

console.log("🔍 Checking package-lock.json sync...\n");

try {
  // Regenerate lock file entries only (does NOT touch node_modules)
  run("npm install --package-lock-only");
} catch (err) {
  console.error("❌ npm install --package-lock-only failed:\n", err.stdout || err.message);
  process.exit(1);
}

// Check if package-lock.json changed after regeneration
let diff = "";
try {
  diff = run("git diff --name-only package-lock.json").trim();
} catch (err) {
  console.error("❌ Could not check git diff. Is this a git repo?");
  process.exit(1);
}

if (diff) {
  console.error("❌ package-lock.json is OUT OF SYNC with package.json!");
  console.error("   This will make EAS build fail at 'npm ci'.\n");
  console.error("👉 Fix it:");
  console.error("   git add package-lock.json");
  console.error('   git commit -m "fix: sync package-lock.json"');
  console.error("   git push\n");
  process.exit(1);
}

// Confirm lock file is tracked by git (not accidentally ignored/untracked)
let tracked = "";
try {
  tracked = run("git ls-files package-lock.json").trim();
} catch {
  tracked = "";
}

if (!tracked) {
  console.error("❌ package-lock.json exists but is NOT committed to git!");
  console.error("   EAS build servers only see committed files.\n");
  console.error("👉 Fix it:");
  console.error("   git add package-lock.json");
  console.error('   git commit -m "chore: track package-lock.json"\n');
  process.exit(1);
}

console.log("✅ package-lock.json is in sync and tracked by git.");
console.log("✅ Safe to build.\n");