const fs = require("fs");

const tsConfigPath = fs.existsSync("./tsconfig.lint.json")
  ? "./tsconfig.lint.json"
  : "./tsconfig.json";

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@next/next/core-web-vitals",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["simple-import-sort"],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    project: tsConfigPath,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: tsConfigPath,
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "arrow-body-style": ["error", "always"],
    /** @see https://github.com/typescript-eslint/typescript-eslint/issues/1277 */
    // "consistent-return": "error",
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-implicit-coercion": "error",
    "no-param-reassign": "error",
    "no-multiple-empty-lines": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
    ],
    "no-var": "error",
    "no-throw-literal": "error",
    "prefer-const": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "generic",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    // "import/order": [
    //   "error",
    //   {
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //     "newlines-between": "always",
    //     pathGroups: [
    //       {
    //         pattern: "@/**",
    //         group: "internal",
    //       },
    //       {
    //         pattern: "~/**",
    //         group: "internal",
    //         position: "before",
    //       },
    //     ],
    //   },
    // ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/no-autofocus": [
      "error",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/no-onchange": "off",
    "react/boolean-prop-naming": "error",
    "react/function-component-definition": "error",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: [
        "**/__tests__/**/*.@(js|ts|tsx)",
        "**/*.@(spec|test).@(js|ts|tsx)",
      ],
      excludedFiles: "@(cypress|e2e)/**",
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended",
      ],
    },
  ],
};
