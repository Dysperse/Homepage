/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  safelist: ["text-3xl", "mb-1"],
  plugins: [
    require('@tailwindcss/typography')
  ],
};
