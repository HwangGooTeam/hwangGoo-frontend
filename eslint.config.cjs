module.exports = [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: require('eslint-plugin-react'),
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
    },
  },
];
