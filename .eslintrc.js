// eslint-disable-next-line
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "prettier"],
  rules: {
    "no-unused-vars": "warn",
    "simple-import-sort/exports": "error",
    "prettier/prettier": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // React-related imports
          ["^react$", "^prop-types$"],
          // other external imports
          ["^@?\\w"],
          // app's internal relative imports
          ["^../../../"],
          ["^../../"],
          ["^../"],
          ["^./"],
          // image imports
          ["^.*\\.(png|jpg)$"],
          // CSS imports
          ["^\\u0000\\S+.css$", "^\\u0000\\S+(?<!.css)$"],
        ],
      },
    ],
  },
};
