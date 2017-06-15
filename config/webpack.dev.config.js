var path = require('path');

var buildPath = path.resolve(path.join(__dirname, '..', 'build'));
var srcPath = path.resolve(path.join(__dirname, '..', 'src'));

module.exports = {
    context: srcPath,
    
    devtool: 'source-map',

    entry: {
        app: './bootstrap.js',
        vendor: ['lodash', 'react', 'react-dom']
    },

    output: {
        filename: '[name].bundle.js',
        path: buildPath,
        publicPath: '/'
    }
};