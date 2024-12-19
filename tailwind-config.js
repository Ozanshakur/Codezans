/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          purple: {
            500: '#8B5CF6',
            600: '#7C3AED',
            900: '#4C1D95',
          },
          pink: {
            500: '#EC4899',
          },
        },
      },
    },
    plugins: [],
  }
  
  