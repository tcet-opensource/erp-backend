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
  // TODO: setup import export path resolver
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["#app", "./app.js"],
          ["#util", "./util.js"],
          ["#constant", "./constant.js"],
          ["#routes", "./routes"],
          ["#models", "./models"],
          ["#middleware", "./middleware"],
          ["#controller", "./controller"],
          ["#services", "./services"],
          ["#error", "./error"]
        ],
        "extensions": [".js"]
      }
    }
  }
};
