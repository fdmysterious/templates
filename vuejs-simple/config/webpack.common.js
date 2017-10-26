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

// Global config vars //
const config = require( './config.js' );

console.log( config.project_path( 'src/config/style/index.scss') );
// End of section     //

module.exports = env => { return {
    entry    : config.project_path( 'src/main.js' ),

    //output   : {
    //    path       : config.path.build( env )
    //    publicPath : config.path.build( env )
    //    filename   : '[name].build.js'
    //},

    /////////////////////////////////////////////////////////
    module: {
        //////////////////////////////////////////
        // Règles fichiers
        //////////////////////////////////////////
        rules : [
            // RÈGLE FICHIERS VUE //
            {
                test    : /\.vue$/,
                loader  : 'vue-loader',
                options : {
                    loaders : {
                        'scss' : config.build_sass_loader( env )
                    }
                }
            },
            // FIN SECTION //

            // REGLES FICHIER JS //
            {
                test    : /\.js$/,
                loader  : 'babel-loader',
                exclude : /node_modules/
            },
            // FIN SECTION //

            // REGLES IMAGES //
            {
                test    : /\.(png|jpg|gif|svg)/,
                loader  : 'file-loader',
                options : {
                    name : '[name].[ext]?[hash]'
                }
            }
            // FIN SECTION //
        ],

    },

    //////////////////////////////////////////
    // Règles resolve
    //////////////////////////////////////////
    resolve : {
        alias : {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    //////////////////////////////////////////
    // Options développement
    //////////////////////////////////////////
    devServer : {
        historyApiFallback : true,
        noInfo             : true
    },

    performance : {
        hints : false
    },

    devtool : '#eval-source-map'
}}
