module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
    'plugin:mocha/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'func-names': 'off',
    'prefer-arrow-callback': 'off',
  },
  plugins: [
    'mocha',
  ],
};
