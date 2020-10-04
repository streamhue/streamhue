module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },

  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    'jest/prefer-expect-assertions': 'off'
  },
  plugins: ['jest'],
  extends: ['plugin:jest/all']
}
