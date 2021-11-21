module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "mainBlack":'#1b1b1b',
        "mainGreen":'#00ff97',
        "mainWhite":'#ffffff',
        "mainGrey":'#5e5e5e',
        "darkGreen":'#3bb33b'
      },
      dropShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.10)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
