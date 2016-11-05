'use strict';

const path = require('path');
const webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        app: "./src/assets/js/app.js",
    },
    output: {
        filename: "./[name].bundle.js",
        path: __dirname + "/dist/assets/js",
        publicPath: "/assets",
    },
    devServer: {
        contentBase: __dirname,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["es2015"] }
                }],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    },
                    "sass?sourceMap"
                ],
            },
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
};