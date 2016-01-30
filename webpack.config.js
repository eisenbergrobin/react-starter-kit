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
            },
            {
                test: require.resolve("underscore"),
                loader: 'expose?_'
            },
            {
                test: require.resolve("react"),
                loader: 'expose?React'
            },
            {
                test: require.resolve("react-dom"),
                loader: 'expose?ReactDOM'
            },
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