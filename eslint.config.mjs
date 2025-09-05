import antfu from '@antfu/eslint-config';
import nextPlugin from '@next/eslint-plugin-next';

export default antfu({
  nextjs: true,
  type: 'app',
  formatters: true,
  typescript: true,
  stylistic: {
    semi: true,

  },
  ignores: [
    'node_modules',
    '.next',
    './src/lib/db/migrations/**',

  ],
  plugins: {
    next: nextPlugin,

  },
}, {
  rules: {
    'no-console': 'off',
    'style/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'style/object-curly-newline': [
      'error',
      {
        ImportDeclaration: { multiline: true, maximum: 3 },
        ExportDeclaration: { multiline: true, minimum: 3 },
      },
    ],
    'antfu/no-top-level-await': 'off', // Allow top-level await
    'style/brace-style': ['error', '1tbs'], // Use the default brace style
    'ts/consistent-type-definitions': ['error', 'type'], // Use `type` instead of `interface`
    'react/prefer-destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    'node/prefer-global/process': 'off', // Allow using `process.env`
    'test/padding-around-all': 'error', // Add padding in test files
    'test/prefer-lowercase-title': 'off', // Allow using uppercase titles in test titles
    ...nextPlugin.configs.recommended.rules,
    'unicorn/filename-case': ['error', { case: 'kebabCase', ignore: ['README.md'] }],
    'better-tailwindcsss/no-unregistered-classes': 'off',

  },

});
