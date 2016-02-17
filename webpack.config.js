var webpack = require('webpack');
var path = require('path');
var NyanProgressPlugin = require('nyan-progress-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var APP = __dirname + '/app';
const angularPath = path.resolve(__dirname, './node_modules/angular/angular.min.js')
const lodashPath = path.resolve(__dirname, './node_modules/lodash/lodash.js')

module.exports = {
    context: APP,
    entry: [
        'jquery',
        'imports?jQuery=jquery!bootstrap-sass',
        'angular',
        'angular-ui-router',
        'angular-filter',
        'angularjs-scroll-glue',
        'lodash',
        './app-module'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {
            angular: angularPath,
            lodash: lodashPath
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new NyanProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'jade!' + path.resolve(__dirname, 'app/index.jade')
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /angular.min.js/,
            loader: 'exports?angular'
        }, {
            test: /\.sass$/,
            loader: "style!css!sass-loader?indentedSyntax=true"
        }, {
            test: /\.scss$/,
            loader: "style!css!sass-loader?indentedSyntax=false"
        }, {
            test: /\.(woff|woff2)?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    }
};
