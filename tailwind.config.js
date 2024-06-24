/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        colors: {
            black: '#1E1E1E',
            white: '#FFFFFF',
            blue: '#3A31C1',
            grey: '#F6F7F8',
        },
        fontFamily: {
            heading: ['Poppins', 'sans-serif'],
            body: ['Poppins', 'sans-serif'],
        },
    },
    plugins: [],
};
