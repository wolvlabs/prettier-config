import { createRequire } from "node:module";
import base from "./index.js";

const require = createRequire(import.meta.url);

/**
 * @param {string} stylesheet - Path to Tailwind-Entry-CSS (v4)
 * @returns {import("prettier").Config}
 */
export default function tailwind(stylesheet) {
  return {
    ...base,
    plugins: [require.resolve("prettier-plugin-tailwindcss")],
    tailwindStylesheet: stylesheet,
  };
}
