module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'cypress',
    'jest'
  ],
  rules: {
  }
}
