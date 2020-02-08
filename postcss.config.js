// eslint-disable-next-line import/no-extraneous-dependencies
const purgeCSS = require('@fullhuman/postcss-purgecss')({

  content: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies,global-require
    require('tailwindcss'),
    // eslint-disable-next-line import/no-extraneous-dependencies,global-require
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgeCSS]
      : [],
  ],
};
