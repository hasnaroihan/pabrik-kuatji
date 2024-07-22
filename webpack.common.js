const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const { optimize } = require("webpack");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        new HtmlWebpackPlugin({
            title: "Production",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        allowTsInNodeModules: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: "asset",
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.svg/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        // make all svg images to work in IE
                        iesafe: true,
                    },
                },
            },
        ],
    },
    optimization: {
        minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
                encodeOptions: {
                    jpeg: {
                        quality: 100,
                    },
                    webp: {
                        lossless: true,
                    },
                    avif: {
                        lossless: true,
                    },
                    png: {},
                    gif: {},
                },
            },
        },
    },
    resolve: {
        extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
    },
};
