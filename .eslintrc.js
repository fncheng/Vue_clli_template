module.exports = {
  root: true,
  env: {
    node: true,
  },
  // @vue/eslint-config-prettier
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  // eslint-plugin-pretter
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
  },
}
