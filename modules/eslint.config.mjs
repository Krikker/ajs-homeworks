import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], ignores: 
  ["node_modules/**", "dist/**", ".eslintrc.js", "webpack.config.js"], languageOptions: {globals: {
      console: "readonly",
      window: "readonly",
      document: "readonly",
    }},},
  pluginReact.configs.flat.recommended,
]);
