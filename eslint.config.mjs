import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
];

const baseConfig = js.configs.recommended;

const tsConfig = {
  files: ['**/*.ts', '**/*.tsx'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: true,
      tsconfigRootDir: __dirname,
    },
    sourceType: 'module',
  },
  rules: {
    ...ts.configs['recommended-type-checked'].rules,
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-console': ['warn', { allow: ['warn'] }],
    eqeqeq: ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'no-underscore-dangle': 'off',
  },
  settings: {
    next: {
      rootDir: ['./app'],
    },
  },
};

const ignoreConfig = [
  {
    ignores: [
      '**/node_modules/*',
      '**/.next/*',
      '**/.temp/*',
      '**/__generated__/*',
      '**/shared-ui/panda-css/*',
      '**.js',
    ],
  },
];

eslintConfig.push(baseConfig);
eslintConfig.push(tsConfig);
eslintConfig.push(...ignoreConfig);

export default eslintConfig;
