const config = {
  stories: [
    '../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: async (config) => {
    // Find and remove existing CSS rules to avoid conflicts
    const rules = config.module?.rules || [];
    
    // Remove existing CSS rules
    const filteredRules = rules.filter((rule) => {
      if (!rule || typeof rule === 'string') return true;
      const test = rule.test;
      if (!test) return true;
      
      const testString = test.toString();
      return !testString.includes('.css');
    });
    
    // Add our custom CSS rules
    filteredRules.push(
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    );
    
    config.module.rules = filteredRules;
    
    // Ensure proper extensions are resolved
    config.resolve = config.resolve || {};
    config.resolve.extensions = [...(config.resolve.extensions || []), '.ts', '.tsx'];
    
    return config;
  },
};

export default config;