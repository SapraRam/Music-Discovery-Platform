/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      borderRadius: {
        'large': '60px',
      }
    },
  },
  plugins: [],
}

