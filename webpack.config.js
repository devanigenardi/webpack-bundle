const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                    loader: "html-loader",
                    options: {
                            minimize: false,
                        }
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg?g|png|svg)$/i,
                use: ["file-loader?name=assets/[name].[ext]"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
        new FaviconsWebpackPlugin('./src/assets/favicon.png')
    ]
}