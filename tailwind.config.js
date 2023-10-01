/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
    ],
    theme: {
        screens: {
            'tablet': {'max': '640px'},
        },
        extend: {
            colors: {
                primary: '#1F41BB',
                black: '#000000',
                white: '#ffffff',
                gray: '#EFEFEF',
                gray2: '#D9D9D9',
                gray3: '#B1B1B1',
            },
        },
        fontFamily: {
            jalnan: ["Jalnan"],
            score: ["SCoreDream"]
        }
    },
    plugins: [
        require('tailwind-scrollbar-hide'),
    ],
}

