const { resolve } = require('path');
const webpack = require('webpack');
const fedModulePlugin = require('@redhat-cloud-services/frontend-components-config/federated-modules');

const plugins = [
  fedModulePlugin({
    root: resolve(__dirname, '../'),
    debug: true,
    exposes: {
      // Application root
      './RootApp': resolve(__dirname, '../src/AppEntry'),
    },
  }),
];

// Save 20kb of bundle size in prod
if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.NormalModuleReplacementPlugin(/redux-logger/, resolve(__dirname, './empty.js')),
  );
}

module.exports = plugins;
