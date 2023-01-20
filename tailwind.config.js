/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      borderColor: ['focus-within']
    }
  }
}
