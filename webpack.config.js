const path = require('path');
// html-webpack-plugin
const htmlWebpackPlugin = require('html-webpack-plugin')
// clean-webpack-plugin
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {

    entry: "./src/index.ts",

    output: {
        path: path.join(__dirname, 'docs'),
        filename: "bundle.js"
    },


    module: {
        rules: [
            // ts
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node-modules/
            },
            // less
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    plugins: [
        // clean-webpack-plugin
        new CleanWebpackPlugin(),
        //html-webpack-plugin
        new htmlWebpackPlugin({
            title: 'snake',
            template: "./src/index.html"
        })
    ]
}