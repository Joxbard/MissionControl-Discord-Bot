module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'always'],
    'no-console': 'off',
    'linebreak-style': 'off',
    'no-unused-vars': 'warn',
    'max-len': 'warn',
  },
};
