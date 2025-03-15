module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
};
