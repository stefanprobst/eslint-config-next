const config = {
  root: true,
  reportUnusedDisableDirectives: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:typescript-enum/recommended",
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
    project: [
      "./tsconfig.json",
      "./apps/*/tsconfig.json",
      "./examples/*/tsconfig.json",
      "./packages/*/tsconfig.json",
    ],
    extraFileExtensions: [".cjs", ".mjs"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: [
          "./tsconfig.json",
          "./apps/*/tsconfig.json",
          "./examples/*/tsconfig.json",
          "./packages/*/tsconfig.json",
        ],
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
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-implicit-coercion": "error",
    "no-param-reassign": "error",
    "no-multiple-empty-lines": "error",
    "no-restricted-globals": ["error", { name: "isNaN", message: "Use Number.isNaN instead." }],
    "no-var": "error",
    "no-throw-literal": "error",
    "prefer-const": "error",
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    // "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/sort-type-union-intersection-members": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], aspects: ["invalidHref", "preferButton"] },
    ],
    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/no-onchange": "off",
    "jsx-a11y/no-redundant-roles": ["error", { ul: ["list"], ol: ["list"] }],
    "react/boolean-prop-naming": "error",
    "react/function-component-definition": "error",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["**/*.test.@(ts|tsx)"],
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:jest-dom/recommended",
        "plugin:testing-library/react",
      ],
    },
    {
      files: ["**/*.test.e2e.@(ts|tsx)"],
      extends: "plugin:cypress/recommended",
    },
    {
      files: ["**/*.stories.tsx"],
      extends: "plugin:storybook/recommended",
      rules: {
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};

module.exports = config;
