var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
    entry: './src/index',

    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname), 'node_modules', 'app', 'app/redux'],
    },

    output: {
        path: __dirname + "/public",
        filename: '[hash].bundle.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: path.resolve('./src/app'),
                loaders: [
                    'style-loader',
                    'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: path.resolve('./src/app'),
                loaders: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2)(\?.*)?$/,
                loader: 'file-loader?name=fonts/[hash].[ext]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader?limit=1000&name=images/[hash].[ext]'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'One Two Trip!',
            template: __dirname + '/index.html'
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: {
                postcss: function () {
                    return [
                        postcssNext(),
                        postcssAssets({
                            relative: true
                        }),
                    ];
                },
            }
        })
    ],

    devServer: {
        contentBase: '.',
        host: 'localhost',
        port: 9000
    },

    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    }
};