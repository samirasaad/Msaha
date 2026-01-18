// Import ESLint base config for JS
import js from '@eslint/js'
// Import React plugin for linting React code
import react from 'eslint-plugin-react'
// Import React Hooks plugin for linting hooks usage
import reactHooks from 'eslint-plugin-react-hooks'
// Import TypeScript ESLint plugin
import tsPlugin from '@typescript-eslint/eslint-plugin'
// Import helpers for defining config and ignoring files
import { defineConfig, globalIgnores } from 'eslint/config'

// Export the ESLint configuration
export default defineConfig([
  // Ignore dist folder from linting
  globalIgnores(['dist']),

  {
    // Apply these settings to TypeScript and TSX files
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      // Set parser options for ECMAScript and JSX
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      // Define global variables
      globals: {
        window: 'readonly',
        document: 'readonly',
      },
    },
    // Register plugins for React, React Hooks, and TypeScript
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin,
    },
    // Extend recommended configs from JS, TypeScript, React, and React Hooks
    extends: [
      js.configs.recommended,
      tsPlugin.configs.recommended,
      react.configs.recommended,
      reactHooks.configs.recommended,
      'plugin:prettier/recommended' 
    ],
    rules: {
      // Custom rule: Don't require React in scope for JSX (React 17+)
      'react/react-in-jsx-scope': 'off',
      // Warn if function return types are not explicit in TypeScript
      '@typescript-eslint/explicit-function-return-type': 'warn',
      // Warn for unused variables, but ignore those starting with _
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      // Enforce rules of hooks
      'react-hooks/rules-of-hooks': 'error',
      // Warn if dependencies array in hooks is not exhaustive
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])
