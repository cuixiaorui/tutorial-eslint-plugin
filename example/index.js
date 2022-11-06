const { ESLint } = require("eslint");

(async function main() {
  const eslint = new ESLint();

  // 2. Lint files.
  const results = await eslint.lintFiles(["lib/**/*.js"]);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
