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
                Ablue: '#0A54D9',
                Apink: '#F3CDD8',
                Abeige: '#F9F4EE',
                Aorange: '#F3442C',
            },
      fontFamily: {
        english: ['Nunito', 'sans-serif'],     // 영어
        korean: ['Pretendard', 'sans-serif'],  // 한글
        main: ['Pretendard', 'Nunito', 'sans-serif'], // 기본 통합형 (혼용)
      },
        },
    },
    plugins: [],
};
