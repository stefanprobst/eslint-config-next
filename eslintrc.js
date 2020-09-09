module.exports = {
  extends: [
    "@stefanprobst/eslint-config-next-component",
    "plugin:@next/next/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": ["error", "src/pages"],
  },
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
