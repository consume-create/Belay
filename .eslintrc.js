module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    semi: 1,
    "no-console": "off",
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": "off",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "warn",
    "no-unused-vars": "warn",
    "no-extra-semi": "warn",
    "quotes": ["warn", "double"],
    "vue/no-use-v-if-with-v-for": "off",
    "vue/attributes-order": "off",
    "vue/no-v-html": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
  },
};
