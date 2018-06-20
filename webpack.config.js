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
        contentBase: path.join(__dirname, 'dist'),
        port: 8000
    }
};
