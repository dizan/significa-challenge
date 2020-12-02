const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

console.log('NODE ENV__________', process.env.NODE_ENV);

module.exports = {
    entry: './src/index.tsx',

    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index-bundle.js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        getCustomTransformers: () => ({before: [styledComponentsTransformer]})
                    },
                },
                exclude: /node_modules/,

            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        sourceMap: true,
                    },
                },
            },
            {
                test: /\.module\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true, modules: {localIdentName: '[name]__[local]--[hash:base64:5]'}}
                    },
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/, /\.module\.scss$/],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    },
                    {loader: 'sass-loader', options: {sourceMap: true}},
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

};