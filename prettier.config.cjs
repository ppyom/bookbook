module.exports = {
  semi: true,
  trailingComma: 'all',
  printWidth: 80,
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      options: {
        singleQuote: true,
        jsxSingleQuote: false,
      },
    },
  ],
};
