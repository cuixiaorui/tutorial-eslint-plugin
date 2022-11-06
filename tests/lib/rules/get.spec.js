const { RuleTester } = require("eslint");
const { rules } = require("../../../lib");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run("get", rules.get, {
  valid: [
    {
      code: "function getName(){ return 'cxr'}",
    },
    {
      code: "function setName(){}",
    },
  ],
  invalid: [
    {
      name: "should throw error when function doesn't return value",
      code: "function getName(){}",
      output: "function getName(){return ''\r}",
      errors: [{ message: "getXX function name must return a value" }],
    },
    {
      name: "should throw error when function doesn't return value",
      code: "function getName(){ const name = 'cxr'}",
      errors: [{ message: "getXX function name must return a value" }],
      output: `function getName(){ const name = 'cxr';return ''\r}`,
    },
    {
      name: "no fix",
      code: "function getName(){}",
      output: "function getName(){}",
      options: [false],
      errors: [{ message: "getXX function name must return a value" }],
    },
  ],
});
