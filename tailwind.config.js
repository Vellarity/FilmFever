module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "legacymainBlack":'#1b1b1b',
        "legacymainGreen":'#00ff97',
        "legacymainWhite":'#ffffff',
        "legacymainGrey":'#5e5e5e',
        "legacydarkGreen":'#3bb33b',

        "mainBlack":'#1b1b1b',
        "mainGrey":'#FCFCFC',
        "mainBlue":'#9999FF',
        "mainSand":'#FFCC66',
        "accentBlue":'#CCCCFF',
        "accentSand":'#FFFFCC'
      },
      dropShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.10)',
      },
      boxShadow:{
        'mainSh': '0 0 30px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
