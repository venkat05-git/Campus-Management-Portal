module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended", // or 'plugin:vue/base'
  ],
  rules: {
    // override/add rules' settings here
    "vue/no-v-model-argument": "off",
  },
};
