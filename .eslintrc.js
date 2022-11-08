module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:chai-friendly/recommended',
    'plugin:cypress/recommended'
  ],
  plugins: ['cypress', 'prettier'],
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
        tabWidth: 2
      }
    ],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
    'no-console': 'off',
    'no-eval': 'error',
    'no-multi-spaces': 'error',
    'no-new': 'warn',
    'no-return-assign': 'warn',
    'comma-dangle': ['error', 'never'],
    'func-call-spacing': ['error', 'never'],
    'max-len': ['error', { code: 150, ignoreComments: true }],
    'new-cap': ['error', { newIsCap: true }],
    'new-parens': 'error',
    quotes: [
      'warn',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-var': 'warn',
    'no-unused-vars': ['warn', { vars: 'local' }],
    'no-magic-numbers': ['warn', { ignore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]
  }
}
