const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/templates/index.html'),
        }),

        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/templates/about.html'),
        }),

        new HtmlWebpackPlugin({
            filename: 'profile.html',
            template: path.resolve(__dirname, 'src/templates/profile.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public/'),
                    to: path.resolve(__dirname, 'dist/'),
                },
                {
                    from: path.resolve(__dirname, 'src/public/images/'),
                    to: path.resolve(__dirname, 'dist/images/'),
                },
                {
                    from: path.resolve(__dirname, 'src/public/icons/'),
                    to: path.resolve(__dirname, 'dist/icons/'),
                },
            ],
        }),
    ],
};