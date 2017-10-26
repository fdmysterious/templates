const merge              = require( 'webpack-merge' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin') 

module.exports = function(env) {
    return merge(
        {
            plugins : [
                new CleanWebpackPlugin( [ `dist/${env}` ] ) // Here or get the "not in project dir" thing
            ]
        },
        require(`./config/webpack.${env}.js`)
    );
};
