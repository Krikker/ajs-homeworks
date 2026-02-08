import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default defineConfig([
  // 🔥 ГЛАВНОЕ — игнор
  {
    ignores: [
      'dist',
      'node_modules',
      'eslint.config.mjs',
    ],
  },

  // JS база
  js.configs.recommended,

  // TS база
  ...tseslint.configs.recommended,

  // TS файлы
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
  },

  // тесты
  {
    files: ['**/*.test.ts'],
    rules: {
      'jest/expect-expect': 'off',
    },
  },
]);