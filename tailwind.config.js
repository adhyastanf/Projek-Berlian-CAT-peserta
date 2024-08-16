/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        third: '#0e32a0', // Custom color with the name 'third'
      },
    },
  },
  darkMode: false, // Ensure Tailwind CSS does not generate dark mode variants
  daisyui: {
    themes: ['light'], // Enable DaisyUI themes
    darkTheme: null, // Explicitly disable dark mode by setting darkTheme to null
  },
  plugins: [require('daisyui')],
};
