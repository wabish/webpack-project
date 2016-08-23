var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
    cache: true,
    devtool: 'inline-source-map',
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        vendor: ['cat']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        preLoaders: [{
            test: /\.js?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: [/node_modules/],
            loader: 'jshint-loader'
        }]
    },
    jshint: {
        camelcase: true,
        eqeqeq: true,
        undef: true,
        browser: true,
        devel: true,
        globals: {
            '$': false
        }
    },
    resolve: {
        alias: {
            cat: path.resolve(__dirname, 'src/cat.js')
        }
    },
    externals: {
        jquery: 'window.$',
        artTemplate: 'window.template',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        new webpack.IgnorePlugin(/\.\/jquery-1.11.1.min.js$/)
    ]
};
