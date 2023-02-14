module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/typedef': [
      'error',
      {
        arrowParameter: true,
        parameter: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowTypedFunctionExpressions: false }],
    '@typescript-eslint/no-inferrable-types': true,
  },
};
// implement explicit typescript: https://www.fun4code.com/typescript-explicit-vs-implicit/
