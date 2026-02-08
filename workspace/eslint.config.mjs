import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: {
    globals: {
      console: "readonly",
      window: "readonly",
      document: "readonly",
    }
  }, plugins: { js }, extends: ["js/recommended"], ignores: ["node_modules/**", "dist/**", ".eslintrc.js"] },
]);
