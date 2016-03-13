var webpack = require('webpack');
options = {
  entry: {
  app: './public/javascripts/index.js',
},
target: "node",
output: {
  path: './public/javascripts/built',
  filename: 'bundle.js'
},
plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': '"production"'
    }
  })
],

}

module.exports = options;
