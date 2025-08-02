/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9", // Tailwind sky-500
        dark: "#0f172a",
        light: "#f1f5f9",
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'spin-fast': 'spin 1.5s linear infinite',
      },
    },
  },
  darkMode: "class", // enable dark mode
  plugins: [],
};
