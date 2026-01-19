import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  // ========================
  // TypeScript + React files
  // ========================
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "@typescript-eslint": tsPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      js.configs.recommended,
      tsPlugin.configs.recommended,
      react.configs.recommended,
      reactHooks.configs.recommended,
      "plugin:prettier/recommended",
    ],
    rules: {
      "react/react-in-jsx-scope": "off",

      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // JSX ONLY in TSX
      "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],

      // Ban JSX files completely
      "no-restricted-syntax": [
        "error",
        {
          selector: "Program[filename=/\\.jsx$/]",
          message: "Use .tsx instead of .jsx",
        },
      ],
    },
  },
]);
