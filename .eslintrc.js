module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:ember-suave/recommended'
    ],
    rules: {
        'indent': [2, 4],
        'no-console': 'off',
        'ember-suave/no-direct-property-access': 'off'
    },
    globals: {
        module: true,
        process: false
    }
};