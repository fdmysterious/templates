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

module.exports = {
    entry : {
        main    : './src/index.ts'
    },

    resolve : {
        extensions: [
            ".webpack.js", ".web.js", ".ts", ".tsx", ".js"
        ],

        modules:[
            path.resolve(__dirname, '../src'),
            "node_modules"
        ]
    },

    module: {
        rules: [
            //////////////////////////////////////////
            // Source file rules
            //////////////////////////////////////////
            // JS rule //
            //{
            //    test : /\.js$/,
            //    exclude : /node_modules/,
            //    use  : "babel-loader"
            //},
            // End of section //

            // TS(X) rule //
            {
                test: /\.tsx?$/,
                use : [
                    { loader: "ts-loader" }
                ]
            },
            // End of section //

            // CSS rule //
            {
               test: /\.css$/,
                use : [
                    { loader: "style-loader" },
                    { loader: "css-loader"   }
                ]
            },
            // End of section //

            // SASS rule //
            {
                test: /\.scss$/,
                //use : [
                //    { loader: "css-loader"   },
                //    {
                //        loader  : "sass-loader",
                //        options : {
                //            data: "@import \"~style/index.scss\";"
                //        }
                //    }
                //]

                use : ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use : [
                        { loader : "css-loader" },
                        { loader  : "sass-loader" }
                    ]
                })
            },
            // End of section //

            //// EJS rule //
            //{
            //    test: /\.template\.ejs$/,
            //    use : [
            //        { loader: "ejs-html-loader" }
            //    ]
            //},
            // End of section //

            //////////////////////////////////////////
            // Multimedia file rules
            //////////////////////////////////////////
            // Images //
            {
                test: /\.(jpg|png|svg|gif)$/,
                use : [
                    {
                        loader  : 'file-loader',
                        options : {
                            outputPath : "assets"
                        }
                    }
                ],

            },
            // End of section //

            // Fonts //
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    'file-loader'
                ]
            },
            // End of section //

            // Audio //
            {
                test: /\.(mp3|ogg)$/,
                use : [
                    'file-loader'
                ]
            },
            // End of section //

            // Video //
            {
                test: /\.(webm|mp4)$/,
                use : [
                    'file-loader'
                ]
            }
            // End of section //
        ]
    },

    plugins: [
        new ExtractTextPlugin("[name].css", {
            allChunks : true
        }),

        // Main template
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title   : 'Mugcat − Much meow ! - Site personnel de Florian Dupeyron',
            filename: 'index.html',
            inject  : 'body',

            chunks: ['main'] // Only for app entry
        })
    ]
};
