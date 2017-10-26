/********************************
 * Webpack dev env. config file *
 ********************************

 Author      : Florian Dupeyron (My?terious)
 Description : Dev config rules for webpack
*/

const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
    output: {
        path     : path.join( __dirname, '../dist/dev' ),
        filename : '[name].bundle.js'
    },

    devtool : "inline-source-map",

    plugins: [
        new CleanWebpackPlugin(['dist/dev']),
        new webpack.LoaderOptionsPlugin({
            minimize : false,
            debug    : true
        })
    ],

    devServer: {
        port: 8080,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal'
    }
});
