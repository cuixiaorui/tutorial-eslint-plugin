module.exports = {
  root: true,
  plugins: ["tutorial"],
  rules: {
    "tutorial/get": ["warn",false],
  },
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
