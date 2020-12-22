module.exports = {
  bracketSpacing: false,
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  importOrder: [
    '^model/(.*)$',
    '^api/(.*)$',
    '^utils/(.*)$',
    '^components/(.*)$',
    '^assets/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
};
