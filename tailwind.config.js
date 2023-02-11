/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#7856FF'
      },
      width: {
        'post': '42rem', 
      },
      height: {
        'post': '16rem',
      },
    }
  },
  plugins: [],
}
