/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: ['../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'sass-to-string',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              outputStyle: 'compressed',
            },
          },
        },
      ],
    });

    return config;
  },
};
export default config;
