const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common.config');

const productionConfig = require('./webpack.production.config');

const developmentConfig = require('./webpack.development.config');

module.exports = function(env) {
  if (env.development) {
    return merge(commonConfig, developmentConfig)
  } else {
    return merge(commonConfig, productionConfig);
  }
}