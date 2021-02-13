const withFonts = require('nextjs-fonts');

module.exports = {
  fonts: withFonts({
    enableSvg: true,
    webpack(config,) {
      return config;
    }
  }),
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://api.github.com'
  },
};