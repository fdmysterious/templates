/*********************************
 * Webpack prod env. config file *
 *********************************

 Author      : Florian Dupeyron (My?terious)
 Description : Prod. config rules for webpack
*/

const path    = require("path")
const merge   = require('webpack-merge')
const webpack = require('webpack')

const config = {
    path : require( './path.js' )
}
const config_common = require( './webpack.common.js')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
const ExtractTextPlugin  = require('extract-text-plugin')

const PrerenderSpaPlugin = require('prerender-spa-plugin')


module.exports = merge( config_common('prod'), {
    plugins: [
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
        }),

        new ExtractTextPlugin( 'style.css', { allChunks : true } );

        new HtmlWebpackPlugin({
            template : `html-loader!pug-html-loader!${config.path.resolve("index.pug")}`
            inject   : 'body',
            chunks   : ['main']
        }),

        new PrerenderSpaPlugin(
            config.path.build( 'prod' ),
            [ '/', '/test' ]
        )
    ],

    devtool : '#source-map'
});
