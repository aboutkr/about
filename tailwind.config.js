/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#203f9a',
                secondary: '#94c2da',
                accent: '#e84797',
                highlight: '#e7a0cc',
                light: '#efe8e0',
                deepblue: '#4e7cb2',
            },
        },
    },
    plugins: [],
};
