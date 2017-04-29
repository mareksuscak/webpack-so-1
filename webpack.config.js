var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/app.bundle.js',
        publicPath: 'js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 8888
    },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use : 'css-loader!sass-loader'
              })

            }
        ]
      },
    plugins: [
            new ExtractTextPlugin('css/styles.css')
    ]
}
