var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: './www',
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: [path.resolve(__dirname, 'node_modules')],
            }
        ]
    },
    devServer: {
        contentBase: "./www"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"' + process.env.NODE_ENV + '"'
            }
        })
    ]
};