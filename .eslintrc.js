const jestConfig = require('./jest.config')

module.exports = {
  parserOptions: {
    // for async/await
    ecmaVersion: 8,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  overrides: [
    {
      files: jestConfig.testMatch,
      extends: [
        'plugin:jest/recommended',
      ],
    },
  ],
}
