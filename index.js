// @ts-check

import eslint from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { jsdoc as jsdocPlugin } from 'eslint-plugin-jsdoc';
import regexpPlugin from 'eslint-plugin-regexp';
import unicornPlugin from 'eslint-plugin-unicorn';
import { defineConfig, globalIgnores } from 'eslint/config';
import typescriptEslint from 'typescript-eslint';

export default defineConfig(
    globalIgnores(['eslint.config.js']),
    eslint.configs.recommended,
    typescriptEslint.configs.strictTypeChecked,
    typescriptEslint.configs.stylisticTypeChecked,
    regexpPlugin.configs.recommended,
    unicornPlugin.configs.recommended,
    jsdocPlugin({
        config: 'flat/recommended-typescript',
        rules: {
            'jsdoc/check-indentation': 'warn',
            'jsdoc/require-description-complete-sentence': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/require-returns': 'off',
        },
    }),
    jsdocPlugin({ config: 'flat/stylistic-typescript' }),
    {
        plugins: { '@stylistic': stylisticPlugin },
        rules: {
            // TypeScript ESLint
            '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
            '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
            '@typescript-eslint/naming-convention': [
                'error',
                { selector: ['default', 'variableLike', 'method'], format: ['strictCamelCase', 'UPPER_CASE'] },
                {
                    selector: ['default', 'variableLike', 'method'],
                    format: null,
                    filter: { regex: '^(\\d+|Querystring|Params|Body)$', match: true },
                },
                { selector: ['typeLike', 'enumMember'], format: ['StrictPascalCase'] },
                { selector: 'memberLike', format: null, filter: { regex: '[-]', match: true } },
                { selector: 'import', format: ['camelCase', 'PascalCase'] },
            ],
            '@typescript-eslint/no-import-type-side-effects': 'error',
            '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { arguments: false } }],
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
            '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
            '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',

            // ESLint Stylistic (TS)
            '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: 'avoidEscape' }],

            // Unicorn
            'unicorn/no-await-expression-member': 'off',
            'unicorn/no-nested-ternary': 'off',
            'unicorn/no-null': 'off',
            'unicorn/number-literal-case': ['error', { hexadecimalValue: 'lowercase' }],
            'unicorn/numeric-separators-style': ['error', { hexadecimal: { minimumDigits: 0, groupLength: 6 } }],
            'unicorn/prefer-global-this': 'off',
            'unicorn/prefer-string-raw': 'off',

            // ESLint
            'curly': ['error', 'multi'],
            'default-case-last': 'error',
            'eqeqeq': ['error', 'always'],
            'no-await-in-loop': 'error',
            'no-console': ['error', { allow: ['warn', 'error'] }],
            'no-lonely-if': 'error',
            'no-template-curly-in-string': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-concat': 'error',
            'object-shorthand': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-destructuring': ['error', { array: false, object: true }, { enforceForRenamedProperties: false }],
            'yoda': 'error',
        },
    },
);
