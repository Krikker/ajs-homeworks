import js from '@eslint/js';
import globals from 'globals';
import jest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest, // ← вот что добавляет test, expect и т.д.
      },
    },
    plugins: {
      jest,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },
];