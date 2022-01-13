const mode = process.env.NODE_ENV || 'development'
const production = mode === 'production'

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('tailwindcss'),
        require('postcss-preset-env')({
            stage: 1,
            features: {
                'focus-within-pseudo-class': false
            }
        }),
        production && require('cssnano')()
    ]
}