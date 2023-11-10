import {StorybookConfig} from '@storybook/web-components-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        docs: false,
      },
    },
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/web-components-webpack5',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    skipBabel: true,
  },
  webpackFinal: async (config) => {
    config.module!.rules!.push(
      ...[
        {
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
        },
        {
          test: /\.([cm]?ts|tsx)$/,
          loader: 'ts-loader',
          options: {configFile: '../tsconfig.storybook.json'},
        },
      ]
    );

    return config;
  },
};
export default config;
