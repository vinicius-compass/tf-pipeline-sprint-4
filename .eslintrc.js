module.exports = {
    root: true,
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended", "prettier"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        "no-console": "warn",
        "no-unused-vars": ["error", { argsIgnorePattern: "(^_|req|res|next)" }],
    },
};
