const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // 'storybook-custom-event-broadcaster/dist/presets.js'
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //     },
    //     sourceLoaderOptions: {
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
    '@storybook/addon-storysource',
  ],
};
