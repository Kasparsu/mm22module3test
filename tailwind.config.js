/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{njk,html}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'primary': ['Komikazoom', 'sans-serif'],
      'secondary': ['Kenyan Coffee', 'sans-serif']
    }
  },
  plugins: [],
}

