var WPDS = require('webpack-dev-server');
var config = require('./webpack.config');
var webpack = require('webpack');
var port = process.env.PORT || 3001;

var address = 'http://localhost:' + port;

new WPDS(webpack(config), {
  hot: true,
  contentBase: './dist',
  publicPath: '/js/',
}).listen(port, function(err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at ' + address);
});
