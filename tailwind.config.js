/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        background: "#473E66",
        innerBackground : "#BD83B8"
      },

      fontFamily: {
        headFont : ['Playwrite US Modern']
      },
    },
  },
  plugins: [],
}

