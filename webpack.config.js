const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'babel-ployfill',
        './src/main'
    ],
    output: {
        publicPath: 'dist/main',
        filename: 'main.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style', 'css-raw!autoprefixer!less')
            },
            {
                test: /\.(html|svg)$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        moduleDirectories: ['src', 'directives', 'components', 'node_modules', 'lib']
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],
    devServer: {
        port: 3333,
        inline: true,
        host: '0.0.0.0'
    },
    debug: true
};
