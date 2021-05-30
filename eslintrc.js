module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "next",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  settings: {},
  rules: {
    "no-multiple-empty-lines": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "isNaN",
        message: "Use Number.isNaN instead.",
      },
    ],
    "no-var": "error",
    "prefer-const": "error",
    "sort-imports": "off",
    "import/first": "error",
    "import/namespace": "off",
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "error",
    "import/no-duplicates": "error",
    "import/no-named-as-default": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "jsx-a11y/no-autofocus": [
      "warn",
      {
        ignoreNonDOM: true,
      },
    ],
    "jsx-a11y/no-onchange": "off",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["**/*.@(ts|tsx)"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        // "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: "./tsconfig.json",
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "generic",
          },
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/strict-boolean-expressions": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
      },
    },
  ],
};
