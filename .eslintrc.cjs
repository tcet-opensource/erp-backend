module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
    "no-console": 0,
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "import/prefer-default-export": "off"
  },
};
