/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');

const alias = {
  'fonts': path.resolve('./src/assets/fonts')
}

module.exports = {
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  'slateTools': {
    extends: {
      dev: {
        resolve: { alias }
      },
      prod: { 
        resolve: { alias }
      }
    }
  },
  'webpack.extend': {
    resolve: {
      alias: {
        jquery: path.resolve('./node_modules/jquery'),
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    }
  },
};
