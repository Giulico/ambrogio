const webpack = require('webpack');
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;

const env = {
    production: NODE_ENV === 'production',
    staging: NODE_ENV === 'staging',
    test: NODE_ENV === 'test',
    development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

Object.assign(env, {
    build: (env.production || env.staging)
});

const addPlugin = (add, plugin) => add ? plugin : undefined; // eslint-disable-line no-confusing-arrow
const ifProd = plugin => addPlugin(env.production, plugin);
const removeEmpty = array => array.filter(i => !!i);

module.exports = {

    entry: {
        app: [
            './assets/js/app.js'
        ]
    },

    output: {
        path: resolve(__dirname, '../dist'),
        filename: 'assets/js/[name].bundle.js'
    },

    context: resolve(__dirname, '../src'),

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        // webpack understands the native import syntax, and uses it for tree shaking
                        presets: [['es2015', {modules: false}]]
                    }
                }]
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
                ]
            }
        ]
    },

    plugins: removeEmpty([

        new HtmlWebpackPlugin({
            template: './views/index.html'
        }),

        new webpack.DefinePlugin({
            __DEV__: env.development,
            __STAGING__: env.staging,
            __PRODUCTION__: env.production,
            __CURRENT_ENV__: `'${NODE_ENV}'`
        }),

        ifProd(new webpack.optimize.OccurrenceOrderPlugin(true)),

        ifProd(new webpack.optimize.DedupePlugin()),

        ifProd(new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }))

    ])

};