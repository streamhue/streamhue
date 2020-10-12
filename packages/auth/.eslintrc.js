module.exports = {
  ignorePatterns: ['*.js'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 2019,
    project: './tsconfig.json'
  },

  env: {
    es6: true,
    node: true
  },

  extends: 'standard-with-typescript',
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': [2, {
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowAny: false
    }]
  }
}
