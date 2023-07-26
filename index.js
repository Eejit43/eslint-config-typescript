module.exports = {
    extends: [
        'eslint:recommended', //
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:jsdoc/recommended-typescript',
        'plugin:unicorn/recommended'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jsdoc', 'unicorn'],
    root: true,
    rules: {
        // TypeScript ESLint
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/dot-notation': 'error',
        '@typescript-eslint/naming-convention': ['error', { selector: ['default', 'variableLike', 'method'], format: ['strictCamelCase', 'UPPER_CASE'] }, { selector: ['default', 'variableLike', 'method'], format: null, filter: { regex: '^\\d+$', match: true } }, { selector: 'typeLike', format: ['StrictPascalCase'] }, { selector: 'memberLike', format: null, filter: { regex: '[-]', match: true } }],
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],

        // JSDoc
        'jsdoc/check-indentation': 'warn',
        'jsdoc/require-description-complete-sentence': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
        'jsdoc/require-returns': 'off',

        // Unicorn
        'unicorn/no-await-expression-member': 'off',
        'unicorn/no-null': 'off',

        // ESLint
        curly: ['error', 'multi'],
        'default-case-last': 'error',
        'default-param-last': 'off',
        'dot-notation': 'off',
        eqeqeq: ['error', 'always'],
        'no-await-in-loop': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-lonely-if': 'error',
        'no-return-await': 'error',
        'no-template-curly-in-string': 'error',
        'no-unneeded-ternary': 'error',
        'no-unused-expressions': 'off',
        'no-useless-concat': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
        yoda: 'error'
    }
};
