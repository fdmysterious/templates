const path = require( "path" )

module.exports = {
    root    : path.resolve( path.join( __dirname, "../") ),
    resolve : to => {
        return path.join( module.exports.root, to )
    },

    build : env => {
        return module.exports.resolve( `dist/${env}` )
    }
}
