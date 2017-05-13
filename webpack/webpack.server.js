const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const address = require('ip').address();

const config = require('./webpack.config');
const paths = require('./paths');

const port = 10100;

const publicPath = `http://${address}:${port}${paths.publicPath}`;

config.entry.app.unshift(`webpack-dev-server/client?http://${address}:${port}`);

var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    public: address
});
server.listen(port, err => {
    if (err) {
        console.log(err); //eslint-disable-line no-console
    }
    console.log('\nStarted a server at http://%s:%s\n', address, port); //eslint-disable-line no-console
});
