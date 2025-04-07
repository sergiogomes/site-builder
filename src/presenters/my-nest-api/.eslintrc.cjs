module.exports = {
  ...existingConfig,
  plugins: ['prettier'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    ...existingRules,
    'prettier/prettier': 'error',
  },
}
