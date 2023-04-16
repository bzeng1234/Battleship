let path = require('path');

module.exports = {
    entry: './src/dom.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules:[
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
        ]
    }
}