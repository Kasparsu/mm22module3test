import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import glob from 'glob';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        hot: true,
        watchFiles: ["./src/*"],
        port: 9000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", 'css-loader', "postcss-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            },
            {
                test: /\.njk$/i,
                use: ['simple-nunjucks-loader']
            },
            {
                test: /\.png/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/index.njk'
        }),
        new HtmlWebpackPlugin({
            filename: '200.html',
            template: './src/pages/index.njk'
        }),
        new MiniCssExtractPlugin(),
        // new PurgeCSSPlugin({
        //     paths: glob.sync(`src/views/**/*`, { nodir: true }),
        // }),
    ],
}