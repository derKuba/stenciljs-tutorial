module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "parser": '@typescript-eslint/parser',
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "extends": [
        "plugin:prettier/recommended",
        "plugin:@stencil/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        "@stencil/required-jsdoc": "off"
    }
};
