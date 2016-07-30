import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import HtmlPlugin from 'html-webpack-plugin';

import babelConfig from './babel.config';

const production = process.env.NODE_ENV === 'production';

export default {
    context: path.join(__dirname, '../src'),
    entry: {
        src: './entry'
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style!css!postcss')
            },
            {
                test: /\.(png|svg)$/,
                loader: 'raw'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: babelConfig
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        }),
        new HtmlPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: 'body',
            hash: true,
            minify: {
                caseSensitive: true,
                collapseWhitespace: production,
                conservativeCollapse: production
            }
        })
    ],
    postcss: () => [precss, autoprefixer],
    devServer: {
        port: 3320,
        inline: true,
        host: '0.0.0.0'
    }
};
