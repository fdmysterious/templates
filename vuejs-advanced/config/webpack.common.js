/******************************
 * Webpack common config file *
 ******************************

 Author      : Florian Dupeyron (My?terious)
 Description : Common config rules for webpack
*/

const path              = require('path');
const webpack           = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    path       : require( './path.js'  ),
    file_rules : require( './files.js' )
}

// Global config vars //
//const config = require( './config.js' );

module.exports = env => {

    return {
        entry    : config.path.resolve( 'src/main.js' ),
        output   : {
            path       : config.path.build( env ),
            publicPath : '/',
            filename   : '[name].build.js'
        },

        /////////////////////////////////////////////////////////
        module: {
            //////////////////////////////////////////
            // Règles fichiers
            //////////////////////////////////////////
            rules : config.file_rules( env )
        },

        //////////////////////////////////////////
        // Règles resolve
        //////////////////////////////////////////
        resolve : {
            alias : {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },

        ////////////////////////////////////////////
        //// Options développement
        ////////////////////////////////////////////
        //devServer : {
        //    historyApiFallback : true,
        //    noInfo             : true
        //},

        performance : {
            hints : false
        },

        devtool : '#eval-source-map'
    }
}
