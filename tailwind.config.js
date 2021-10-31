module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                pr: '#111111',
                sc: '#ffb400',
                tr: '#2b2a2a',

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}