import { Linter } from 'eslint';

export default [
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    parserOptions: {
      ecmaVersion: 2020, // Set ECMAScript version
      sourceType: 'module', // Use module system
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'next',
      'next/core-web-vitals',
    ],
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/react-in-jsx-scope': 'off', // Next.js automatically handles this
      'no-unused-vars': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    env: {
      browser: true,
      node: true,
    },
    ignorePatterns: ['.next/', 'node_modules/', 'out/'],
  },
];
