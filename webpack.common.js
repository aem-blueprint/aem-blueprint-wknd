/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

'use strict';

const path                    = require('path');
const webpack                 = require('webpack');
const TSConfigPathsPlugin     = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin       = require('copy-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const MiniCssExtractPlugin    = require('mini-css-extract-plugin');

const SOURCE_ROOT = __dirname + '/src';

module.exports = {
    resolve: {
        extensions: ['.js', '.ts'],
        plugins: [new TSConfigPathsPlugin({
            configFile: "./tsconfig.json"
        })]
    },
    entry: {
        theme: `${SOURCE_ROOT}/main.ts`,
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: [
                    /(node_modules)/
                ],
                use: [
                    {
                        loader: 'ts-loader'
                    },
                    {
                        loader: 'webpack-import-glob-loader',
                        options: {
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: (chunkData) => {
                            let filepath = chunkData.split('src')[1];
                            filepath = filepath.replace(filepath.slice(filepath.lastIndexOf('/')),'/');
                            return `${filepath}[name].[ext]`;
                        },
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/theme.css',
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, SOURCE_ROOT + '/resources/images'), to: './resources' },
            { from: path.resolve(__dirname, SOURCE_ROOT + '/resources/dam'), to: path.resolve(__dirname,'../site/src/main/content/jcr_root/content/dam/aem-site-template-basic') },
            { from: path.resolve(__dirname, 'node_modules/bootstrap-icons/icons'), to: path.resolve(__dirname,'../site/src/main/content/jcr_root/content/dam/aem-site-template-basic/icons') },
        ]),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ],
    stats: {
        assetsSort: "chunks",
        builtAt: true,
        children: false,
        chunkGroups: true,
        chunkOrigins: true,
        colors: false,
        errors: true,
        errorDetails: true,
        env: true,
        modules: false,
        performance: true,
        providedExports: false,
        source: false,
        warnings: true
    }
};
