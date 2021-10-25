module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: 'storybook-custom-event-broadcaster/dist/presets.js',
      options: {
        useGlobal: true,
        bla: 'Blub',
      },
    },
  ],
};
