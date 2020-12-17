const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    // './public/**/*.html',
    // './src/**/*.vue',
  ],
  theme: {
    colors: {
      primary: {
        dark: "#8F144A",
        DEFAULT: "#981851",
        light: "#EF4E9A",
      },
      ...defaultTheme.colors
    },
    screens: {
      xs: "512px",
      ...defaultTheme.screens
    },
    fontFamily: {
      "sans": ["Inter", ...defaultTheme.fontFamily.sans],
      "museoSansRounded-100": ['"Museo Sans Rounded 100"', "sans-serif"],
      "museoSansRounded-300": ['"Museo Sans Rounded 300"', "sans-serif"],
      "museoSansRounded-500": ['"Museo Sans Rounded 500"', "sans-serif"],
      "museoSansRounded-700": ['"Museo Sans Rounded 700"', "sans-serif"],
      "museoSansRounded-900": ['"Museo Sans Rounded 900"', "sans-serif"],
      "museoSansRounded-1000": ['"Museo Sans Rounded 1000"', "sans-serif"],
    },
 
  },
  variants: {},
  plugins: [],
};
