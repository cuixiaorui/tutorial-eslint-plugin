// const { ESLint } = require("eslint");
// const path = require("path");


// ;(async function () {
	
// const eslint = new ESLint();

// // 2. Lint files.
// // const results = await eslint.lintFiles(["demo/*.js"]);
// const results = await eslint.lintFiles(["lib/**/*.js"]);

// console.log(results);

// })()

const { ESLint } = require("eslint");

(async function main() {
  // 1. Create an instance with the `fix` option.
  const eslint = new ESLint({ fix: true });

  // 2. Lint files. This doesn't modify target files.
  const results = await eslint.lintFiles(["lib/**/*.js"]);

  // 3. Modify the files with the fixed code.
  await ESLint.outputFixes(results);

  // 4. Format the results.
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // 5. Output it.
  console.log(resultText);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});