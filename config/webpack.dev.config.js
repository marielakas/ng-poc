const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// project paths
const rootPath = path.resolve(path.join(__dirname, '..'));
const buildPath = path.join(rootPath, 'build');
const srcPath = path.join(rootPath, 'src');
const modulesPath = path.join(rootPath, 'modules');

module.exports = {
    // home directory for webpack
    context: srcPath,
    
    // how sourcе maps are generated
    devtool: 'source-map',

    // where webpack strats executing
    // split two separate bundles - app code and vendor code
    entry: {
        app: './bootstrap.js'
    },

    // where the output files are generated
    output: {
        // filename tempalte for entry chunks
        filename: '[name].bundle.js',

        // target directory for all output files
        path: buildPath,

        // the url to the output directory resolved relative to the html page 
        publicPath: '/'
    },

    // modules configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                        plugins: ["react-hot-loader/babel", "transform-object-rest-spread"],
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                    }
                }, {
                    loader: 'postcss-loader'
                }]
            }
        ]
    },
    
    plugins: [
        // a plugin which generates a html page by a given template and
        // injects the files generated by webpack by default
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'template.html'),
            path: buildPath,
            filename: 'index.html',
            title: "POC"
        }),

        // cleans the build folder each time the project is built
        new CleanWebpackPlugin(buildPath, { 
            root: rootPath 
        }),
        
        // creates separate chunk, consisting of common modules shared between multiple entry points
     
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        contentBase: srcPath,
        historyApiFallback: true,
        inline: true,
        port: 3000
    }
};