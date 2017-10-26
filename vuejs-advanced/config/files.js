const config = {
    path : require( "./path.js" )
}

const ExtractTextPlugin = require( 'extract-text-webpack-plugin' )

//////////////////////////////////////////
// Rule generator functions
//////////////////////////////////////////
const generate = {
    scss : {
        loaders : env => {
            const common =  [
                { loader : "css-loader"   },
                { loader : "sass-loader"  },
                {
                    loader  : "sass-resources-loader",
                    options : {
                        resources : [ config.path.resolve( "src/style/index.scss" ) ]
                    }
                }
            ]

            if(env === "prod") {
                return ExtractTextPlugin.extract({
                    fallback : 'vue-style-loader',
                    use      : common
                })
            }

            else {
                return [{loader : "vue-style-loader"}].concat( common );
            }
        },

        file_rule : env => {
            return {
                test : /\.scss$/,
                use  : generate.scss.loaders( env )
            }
        }
    },
//////////////////////////////////////////
    pug : {
        loaders : env => {
            return [
                { loader : 'html-loader'     },
                { loader : 'pug-html-loader' }
            ]
        },

        file_rule : env => {
            return {
                test   : '/\.pug$/',
                use    : generate.pug.loaders( env )
            }
        }
    },
//////////////////////////////////////////
    vue : {
        loaders : env => {
            return "vue-loader";
            
        },

        file_rule : env => {
            return {
                test    : /\.vue$/,
                loader  : generate.vue.loaders( env ),
                options : {
                    loaders : {
                        'scss' : generate.scss.loaders()
                    }
                }
            }
        }
    },
//////////////////////////////////////////
    js : {
        loaders : env => {
            return "babel-loader"
        },

        file_rule : env => {
            return {
                test    : /\.js$/,
                loader  : generate.js.loaders( env ),
                exclude : /node_modules/
            }
        }
    },
//////////////////////////////////////////
    asset  : {
        loaders : env => {
            return "file-loader"
        }
    },

    images : {
        file_rule : env => {
            return {
                test   : /\.(png|jpg|gif|svg)$/,
                loader : generate.asset.loaders( env ),
                
                options : {
                    name : '{name}.[ext]?[hash]'
                }
            }
        }
    }
}

module.exports = env => {
    return [
        generate.pug.file_rule( env ),
        generate.vue.file_rule( env ),
        generate.js.file_rule( env ),
        generate.images.file_rule( env )
    ]
}
