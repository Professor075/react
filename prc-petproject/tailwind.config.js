/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Point to index.html in the current folder
    "./src/**/*.{js,ts,jsx,tsx}", // Point to all JS/TS files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}