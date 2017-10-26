const merge              = require( 'webpack-merge' )
const config = {
    path : require('./config/path.js')
}

const CleanWebpackPlugin = require( 'clean-webpack-plugin') 

module.exports = function(env) {
    return merge(
        {
            plugins : [
                //here so that we don't have the "not in project dir" thing
                new CleanWebpackPlugin( [config.path.build(env)] ) 
            ]
        },
        require(`./config/webpack.${env}.js`)
    );
};
