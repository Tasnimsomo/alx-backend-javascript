module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Add your ESLint rules here
    'no-console': 'off', // Example: Disable no-console rule
  },
};

