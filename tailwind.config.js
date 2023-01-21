/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blackTransparent": "rgba(0, 0, 0, 0.5)",
      },
      maxHeight: {
        '435': '435px',
       }
    }
  },
  plugins: [
    require("tailwind-accent-color")(),
    require("@tailwindcss/forms")
  ],
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['focus-within', 'checked'],
      ringColor: ['focus'],
    }
  }
}
