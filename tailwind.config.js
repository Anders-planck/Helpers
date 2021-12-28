module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./*.{vue,js,ts}"
  ],
  media:false,
  theme: {
    extend: {
      colors:{
      'primary': '#033038ff',
      'secondary': '#2b575eff',
      'metal': '#052a30ff',
      'jaune': '#f4d06fff',
      dark: '#020203ff',
      white: '#f4faffff',
      'jean':'#00AAFFff',
      'bleuTherne':'#1F2937'
    },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
