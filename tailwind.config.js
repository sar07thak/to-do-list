/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        background: "#473E65",
        innerBackground : "#BD83B8",
        newcolor : "#6495ED"
      },

      fontFamily: {
        headFont : ['Playwrite US Modern']
      },
    },
  },
  plugins: [],
}

