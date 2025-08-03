/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundOpacity: ({ theme }) => theme('opacity'), // Enable all opacity values
    },
  },
  plugins: [],
};