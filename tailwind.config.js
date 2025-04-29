/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Fixed double slash too
  ],
  theme: {
    extend: {
      colors: {
        primary: '#95584A',
        secondary: '#C7AB8E',
        highlight: '#3C1113',
      },
    },
  },
  plugins: [],
}

