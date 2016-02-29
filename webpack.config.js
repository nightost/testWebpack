var path = require('path');
module.exports = {
    entry: "./src/js/testReact",
    output: {
        path: 'build/js/',
        filename: "[name]-bundle.js"
    },
    resolve: {
        modulesDirectories: ['src/modules'],
        extensions : ['.js']
    },
    module: {
        loaders: [
            { 
                loader: "babel-core" 
            }
        ]
    }
};