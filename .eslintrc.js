module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'react-app'
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0
  }
};
