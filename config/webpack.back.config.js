const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const createUrlLoaders = require('./lib/createUrlLoaders');
const createAlias = require('./lib/createAlias');


const includedDirectories = [
    path.join(__dirname, '../src/server'),
    path.join(__dirname, '../src/common'),
    path.join(__dirname, '../src/public'),
    /flexboxgrid/
];


const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: 'src/server/index',
    target: 'node',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            ...createUrlLoaders({ emitFile: false }),
            {
                test: /\.pug?$/,
                loader: 'pug-loader',
                include: includedDirectories
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: includedDirectories
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'css-loader/locals',
                    options: {
                        modules: true,
                        localIdentName: '[folder]__[local]__[hash:base64:5]'
                    }
                },
                include: includedDirectories
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.woff2$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'static/',
                        name: path.join('fonts', '[name].[ext]'),
                        limit: 30000,
                    }
                }
            },
            {
                test: /\.woff$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'static/',
                        name: path.join('fonts', '[name].[ext]'),
                        limit: 1 // always emit
                    }
                }
            },
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, '../'),
            'node_modules'
        ],
        extensions: ['.pug', '.jsx', '.js', '.json', '.css'],
        alias: createAlias()
    },
    externals: nodeModules,
    plugins: [
        new webpack.BannerPlugin({
            banner: 'require("source-map-support/register");', // the banner as string, it will be wrapped in a comment
            raw: true, // if true, banner will not be wrapped in a comment
            entryOnly: false, // if true, the banner will only be added to the entry chunks
        }),
    ],
    devtool: 'inline-source-map'
};