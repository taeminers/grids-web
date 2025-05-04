import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["check-file", "prettier"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "import/no-cycle": "error",
      "linebreak-style": ["error", "unix"],
      "react/prop-types": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/default": "off",
      "import/no-named-as-default-member": "off",
      "import/no-named-as-default": "off",
      "react/react-in-jsx-scope": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/explicit-function-return-type": ["off"],
      "@typescript-eslint/explicit-module-boundary-types": ["off"],
      "@typescript-eslint/no-empty-function": ["off"],
      "@typescript-eslint/no-explicit-any": ["off"],
      "prettier/prettier": ["error", {}, { usePrettierrc: true }],
      "check-file/filename-naming-convention": [
        "error",

        {
          "**/!(*.stories|*.config).{ts,tsx}": "KEBAB_CASE",
        },
      ],
    },
  }),
];

export default eslintConfig;
