module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": ["error", "unix"],
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
      },
    ],
    eqeqeq: [
      "error",
      "always",
      {
        null: "ignore",
      },
    ],
    "no-else-return": [
      "error",
      {
        allowElseIf: false,
      },
    ],
    "no-floating-decimal": "error",
    "no-implicit-coercion": "error",
    "no-multi-spaces": [
      "warn",
      {
        ignoreEOLComments: true,
      },
    ],
    yoda: "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        args: "none",
      },
    ],
    "no-tabs": "off",
    "max-len": [
      "error",
      {
        code: 120,
        ignoreComments: true,
        tabWidth: 3,
      },
    ],

    "consistent-return": "off",
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "no-nested-ternary": "error",
    "no-return-assign": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "off",
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "import/no-cycle": "off",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "import/extensions": "off",
    "no-underscore-dangle": [
      "error",
      {
        allowAfterThis: true,
      },
    ],
    "no-continue": "off",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-void": "off",
    curly: ["error", "all"],
    "no-return-await": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
  },
};
