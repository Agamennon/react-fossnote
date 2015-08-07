var webpack = require('webpack');
var _ = require('lodash');
var cfg =  require('./base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(){


     //   "css-loader",
     //   "autoprefixer-loader?browsers=last 2 version",

    cfg.module.loaders[1].loader =  ExtractTextPlugin.extract(
        // activate source maps via loader query
        'css?sourceMap!' +
        "autoprefixer-loader?browsers=last 2 version!" +
        'sass?sourceMap'

    );
    //"!autoprefixer-loader?browsers=last 2 version" +
    //"sass-loader?indentedSyntax=sass&includePaths[]=" + path.resolve(__dirname, "./src"),
    cfg.plugins = _.union([
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }

        })
    ],cfg.plugins);

    return cfg
};


