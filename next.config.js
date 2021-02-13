const withFonts = require('nextjs-fonts');

module.exports = {
  fonts: withFonts({
    enableSvg: true,
    webpack(config,) {
      return config;
    }
  }),
};