const sharedRules = {
  "import/prefer-default-export": [0, false],
  "jsx-a11y/anchor-is-valid": [0, false],
  "max-classes-per-file": [0, false],
  "no-octal": [0, false],
  "no-shadow": [0, false],
  "no-underscore-dangle": [0, false],
  "prettier/prettier": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/jsx-filename-extension": [0, false],
  "react/jsx-one-expression-per-line": [0, false],
  "react/jsx-props-no-spreading": [0, false],
  "react/prop-types": [0, false],
  "react/no-unescaped-entities": [0, false],
  "react/react-in-jsx-scope": "off", // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
  "no-use-before-define": "off", // must disable base rule to use proper typescript-eslint rule
  "import/no-extraneous-dependencies": [0, false], // This is useful for lodash imports like "import get from lodash/get"
  camelcase: [0, false], // This is unavoidable in data coming from the BE
  "import/extensions": [
    "error",
    "ignorePackages",
    {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    },
  ],
  "jsx-a11y/label-has-associated-control": [0, false], // Just a hassle, you can nest inputs inside labels and it works fine. Check checkbox component for example.
  "jsx-a11y/control-has-associated-label": [0, false],
  "jsx-a11y/no-noninteractive-tabindex": [0, false],
  "jsx-a11y/click-events-have-key-events": [0, false],
  "jsx-a11y/no-static-element-interactions": [0, false],
};

const typeScriptRules = {
  "@typescript-eslint/explicit-function-return-type": [0, false],
  "@typescript-eslint/no-explicit-any": 1,
  "@typescript-eslint/ban-ts-comment": 1,
  "@typescript-eslint/no-use-before-define": ["error"],
  "@typescript-eslint/no-non-null-assertion": 0,
  ...sharedRules,
};

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  globals: {
    createMockHttpRequest: true,
    createStore: true,
    mockAjaxRequest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "eslint-plugin-prettier"],
  rules: { ...sharedRules },
  overrides: [
    {
      extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/react",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      rules: { ...typeScriptRules },
      settings: {
        "import/resolver": {
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
    },
  ],
};
