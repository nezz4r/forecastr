module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'next/core-web-vitals',
    'next'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-confusing-arrow': 'off',
    'import/no-unresolved': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx'] }],
    'import/no-anonymous-default-export': 'off',
    'jsx-quotes': 'off',
    'react/require-default-props': 'off',
    'comma-dangle': ['warn', 'never'],
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
};
