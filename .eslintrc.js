const jestConfig = require('./jest.config')

module.exports = {
  reportUnusedDisableDirectives: true,
  parserOptions: {
    // for async/await
    ecmaVersion: 8,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: '**/*.ts?(x)',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: jestConfig.testMatch,
      extends: ['plugin:jest/recommended'],
    },
  ],
}
