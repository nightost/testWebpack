var path = require('path');
module.exports = {
    entry: "./src/js/testInput",
    output: {
        path: 'build/js/',
        filename: "[name]-input.js"
    },
    resolve: {
        modulesDirectories: ['src/modules'],
        extensions : ['.js']
    },
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015']
                },
                exclude: /node_modules/
             }
        ],
        resolveLoader: {
            modulesDirectories : ['node_modules/']
        }
    }
};