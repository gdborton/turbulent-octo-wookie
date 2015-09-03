var webpack = require('webpack');
var port = process.env.PORT || 3001;
var address = 'http://localhost:' + port;
var entries = ['webpack-dev-server/client?' + address, 'webpack/hot/dev-server'];
var config = {
    entry: {
        game: entries.concat('./src/js/components/app.jsx')
    },
    debug: true,
    devtool: 'source-map',
    output: {
        path: __dirname + 'dist/js',
        publicPath: '/dist/',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
          { test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader?harmony']}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify('development')}
        })
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};

module.exports = config;
