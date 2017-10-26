/****************
 * Webpack vars *
 ****************

 Author      : Florian Dupeyron (My?terious)
 Description : Common config rules for webpack
*/

const path = require( 'path' )
const merge = require( 'webpack-merge' ) 
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' ) 

module.exports = {
    project_root_dir : path.resolve( path.join( __dirname, '../' ) ),
    project_path : function( where )
    {
        return path.join( module.exports.project_root_dir, where );
        //return path.join( __dirname, `../${where}` )
    },

    build_sass_rules : function() {
        return [
            { loader : 'css-loader'  },
            { loader : 'sass-loader' },
            {
                loader  : 'sass-resources-loader',
                options : {
                    resources : module.exports.project_path( 'src/config/style/index.scss' )
                } 
            }
        ]
    },

    // DIRTY THING :'(
    build_sass_loader : function( env ) {
        if( env === 'dev' ) {
            return [{loader:'vue-style-loader'}].concat(
                module.exports.build_sass_rules()
            );
        }

        else if (env === 'prod') {
            return ExtractTextPlugin.extract({
                fallback : 'vue-style-loader',
                use      : module.exports.build_sass_rules()
            })
        }
    }
}
