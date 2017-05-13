const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        app: [
            './assets/js/app.js'
        ]
    },

    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].bundle.[chunkhash].js'
    },

    context: resolve(__dirname, '../src'),

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: { presets: [['es2015', {modules: false}]] }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    'sass-loader?sourceMap'
                ],
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './views/index.html'
        })
    ]

};