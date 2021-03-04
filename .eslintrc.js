module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        'import/resolver': 'node',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'import/prefer-default-export': 'off',
        'object-curly-newline': ['error', {
            ObjectExpression: 'always',
            ObjectPattern: {
                multiline: true,
            },
            ImportDeclaration: 'never',
            ExportDeclaration: {
                multiline: true, minProperties: 3,
            },
        }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'import/no-unresolved': 'off',
        'import/extensions': ['error', 'never'],
        'react/jsx-indent': ['error', 2],
        indent: ['error', 2],
        'max-len': ['error', {
            code: 120,
        }],
        '@typescript-eslint/indent': 'off',
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
    },
};
