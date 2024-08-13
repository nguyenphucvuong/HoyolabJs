/* global module */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'eslint-disable no-undef': 'off',
    'eslint-disable-next-line no-undef': 'off',
    'no-undef': 'off',
    'eslint-disable no-unused-vars': 'off',

  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};