/********************************
 * Webpack dev env. config file *
 ********************************

 Author      : Florian Dupeyron (My?terious)
 Description : Dev config rules for webpack
*/

const path    = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');

const config        = require( './config.js' )
const config_common = require( './webpack.common.js' )

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin  = require('html-webpack-plugin')


module.exports = merge( config_common('dev'), {
    output: {
        path       : path.resolve( config.project_path( 'dist/dev' ) ),
        publicPath : '/',
		filename   : 'app.js'
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize : false,
            debug    : true
        }),

        new HtmlWebpackPlugin({
            template : config.project_path( 'index.html' ),
            inject   : 'body',
            chunks   : ['main']
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
