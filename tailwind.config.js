module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "mainGrey":'#FCFCFC',
        "mainBlack":'#1b1b1b',
        "darkBlue":"#444C5C",
        "mainPunsh":"#CE5A57",
        "oceanView":"#78A5A3",
        "mainWarm":"#E1B16A"
      },
      dropShadow: {
        '3xl': '0 0 10px rgba(0, 0, 0, 0.10)',
      },
      boxShadow:{
        'mainSh': '0 0 30px rgba(0, 0, 0, 0.15)'
      },
      fontSize: {
        'bt': ['14px', '14px'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
