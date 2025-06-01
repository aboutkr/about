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
                Adeepblue: '#99ADEE',
                Ablue: '#CDD4EF',
                Apink: '#FFDFE1',
                Abeige: '#FFFCFB',
                Aviolet: '#98A7E2',
            },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dmserif: ['"DM Serif Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        quicksand: ['"Quicksand"', 'sans-serif'],
        cafe24: ['"Cafe24 Ssurround"', 'sans-serif'],
        pretendard: ['"Pretendard"', 'sans-serif'],
        nanumpen: ['"Nanum Pen Script"', 'cursive'],
      },
        },
    },
    plugins: [],
};
