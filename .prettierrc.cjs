module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    printWidth: 100,
    tabWidth: 4,
    semi: true,
    bracketSameLine: true,
    endOfLine: 'auto',
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro'
            }
        }
    ]
};
