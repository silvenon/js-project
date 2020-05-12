module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'pre-push': 'tsc && yarn lint && yarn test',
  },
}
