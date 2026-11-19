import js from '@eslint/js';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/', 'playwright-report/', 'test-results/'],
  },

  js.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  {
    ...playwright.configs['flat/recommended'],
    files: ['specs/**/*.spec.js'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/expect-expect': [
        'warn',
        {
          assertFunctionPatterns: ['^expect.*'],
        },
      ],
    },
  },

  eslintConfigPrettier,
];
