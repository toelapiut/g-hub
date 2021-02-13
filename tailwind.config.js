module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '320px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1279px'},
      'lg': {'min': '1280'},
      'xl': {'min': '1280px', 'max': '2399px'},
      // 'xxl': {'min': '2400px'}
    },
    colors: {
      night: '#040D21',
      manatee: '#040D21',
      grey: '#C1C1C1',
      whisper: '#C1C1C1',
      white: '#fff',
      blue: '#007ace',
      darkblue:'#06163c',
      red: '#CA2C33',
      error: '#ED4337',
      lightpink: '#FFB1B3',
    },
    fontFamily: {
      // Comma-delimited format:
      'sans': 'averta, Arial, sans-serif',
    }
  },
  variants: {},
  plugins: [],
};