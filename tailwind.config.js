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
    extend: {
      colors:{
        primary: '#1F41BB',
        black: '#000000',
        white: '#ffffff',
        gray: '#D9D9D9',
        gray2: '#B1B1B1',
      },
    },
    fontFamily: {
      jalnan: ["Jalnan"],
      score: ["SCoreDream"]
    }
  },
  plugins: [],
}

