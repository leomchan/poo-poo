// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import tsEslint from '@typescript-eslint/eslint-plugin';
import html from 'eslint-plugin-html';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = defineConfig([
  globalIgnores(['dist/**/*', 'docs/**/*']),
  {
    ignores: ['eslint.config.mjs'],
    extends: compat.extends(
      'plugin:prettier/recommended',
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended'
    ),
    plugins: {
      prettier,
      '@typescript-eslint': tsEslint,
      html,
    },
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 2017,
      sourceType: 'commonjs',

      parserOptions: {
        project: ['./tsconfig.eslint.json'],
      },
    },
  },
]);

export default config;
