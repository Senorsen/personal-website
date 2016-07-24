import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

import babelConfig from './babel.config';

export default {
    entry: './src/entry.js',
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract('style!css!postcss')
            },
            {
                test: /\.(html|png|svg)$/,
                loader: 'raw'
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
        })
    ],
    postcss: () => [precss, autoprefixer]
};
