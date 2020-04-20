const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Transpile jsx and js
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    devtool: 'inline-source-map',
};
