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
                test: /\.tsx?$/, // Transpile jsx and js
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
        ],
    },
    devtool: 'inline-source-map',
}
