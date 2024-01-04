const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        port: 8000
    }
};
