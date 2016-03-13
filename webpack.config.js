var webpack = require('webpack');
options = {
  entry: {
  app: ['webpack/hot/dev-server', './public/javascripts/index.js'],
},
target: "node",
output: {
  path: './public/javascripts/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
 plugins: [
   new webpack.DefinePlugin({
     'process.env': {
       'NODE_ENV': '"development"'
     }
   }),
   new webpack.HotModuleReplacementPlugin()
 ]
}

module.exports = options;
