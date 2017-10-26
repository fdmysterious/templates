/*********************************
 * Webpack prod env. config file *
 *********************************

 Author      : Florian Dupeyron (My?terious)
 Description : Prod. config rules for webpack
*/

const path    = require("path");
const merge   = require('webpack-merge');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = merge(CommonConfig, {
    output: {
        path: path.join( __dirname, '../dist/prod'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new CleanWebpackPlugin(['dist/prod']),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug   : false
        }),

        new webpack.DefinePlugin({
            'precess.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle  : {
                screw_ie8  : true,
                keep_fnames: false
            },

            compress: {
                screw_ie8  : true
            },
            comments: false
        })
    ]
});
