/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      poppins: "'Poppins', sans-serif"
    },
    colors: {
      primaryBlue: "#1570EF",
      fadedBlue: "#158FFF",
      darkMidnightBlue: "#002651",
      mediumMidnightBlue: "#003366"
    },
  },
  plugins: [],
}

