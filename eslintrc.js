module.exports = {
  extends: [
    "@stefanprobst/eslint-config-next-component",
    "plugin:@next/next/recommended",
  ],
  overrides: [
    {
      files: ["*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
