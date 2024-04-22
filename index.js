// @ts-check

import eslint from '@eslint/js';
import stylisticTypescript from '@stylistic/eslint-plugin-ts';
import jsdoc from 'eslint-plugin-jsdoc';
import unicorn from 'eslint-plugin-unicorn';
import typescriptEslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
// @ts-ignore
export default [
    eslint.configs.recommended,
    ...typescriptEslint.configs.recommended,
    ...typescriptEslint.configs.recommendedTypeChecked,
    ...typescriptEslint.configs.stylisticTypeChecked,
    jsdoc.configs['flat/recommended-typescript'],
    {
        plugins: { '@stylistic/ts': stylisticTypescript, jsdoc, unicorn },
        rules: {
            // TypeScript ESLint
            '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
            '@typescript-eslint/default-param-last': 'error',
            '@typescript-eslint/dot-notation': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: ['default', 'variableLike', 'method'], format: ['strictCamelCase', 'UPPER_CASE'] },
                { selector: ['default', 'variableLike', 'method'], format: null, filter: { regex: '^(\\d+|Querystring|Params|Body)$', match: true } },
                { selector: 'typeLike', format: ['StrictPascalCase'] },
                { selector: 'memberLike', format: null, filter: { regex: '[-]', match: true } },
                { selector: 'import', format: ['camelCase', 'PascalCase'] },
            ],
            '@typescript-eslint/no-floating-promises': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unnecessary-type-assertion': 'off',
            '@typescript-eslint/no-unused-expressions': 'error',
            '@typescript-eslint/non-nullable-type-assertion-style': 'off',
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],

            // ESLint Stylistic (TS)
            '@stylistic/ts/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],

            // JSDoc
            'jsdoc/check-indentation': 'warn',
            'jsdoc/require-description-complete-sentence': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
            'jsdoc/require-returns': 'off',

            // Unicorn
            ...unicorn.configs['flat/recommended'].rules,

            'unicorn/no-await-expression-member': 'off',
            'unicorn/no-nested-ternary': 'off',
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
            'no-template-curly-in-string': 'error',
            'no-unneeded-ternary': 'error',
            'no-unused-expressions': 'off',
            'no-useless-concat': 'error',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
            yoda: 'error',
        },
    },
];
