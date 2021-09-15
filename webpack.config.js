var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$|jsx/, use:'babel-loader'},
            // {test: /\.css$/, use:['css-loader', 'style-loader']}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: 'index.html'
        })
    ],
    resolve:{
        extensions:['.js','.jsx']
    }
}