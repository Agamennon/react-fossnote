var webpack = require('webpack');
var _ = require('lodash');
//var cfg =  require('./base.js');
var ReactStylePlugin = require('react-style-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path');
var p = require('./paths.js');

var cfg = {
    context: p.root,
    entry: [
        'webpack-dev-server/client?http://localhost:4000',
        'webpack/hot/dev-server',
        path.resolve(p.app,'src','main','main.jsx')
    ],


    output: {
        path: p.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                     ReactStylePlugin.loader(),
                    'babel?stage=0'
                ],
                include: path.join(p.root, 'app', 'src','main')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ReactStylePlugin('bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                // To enable production mode:
                // NODE_ENV: JSON.stringify('production')
            }
        })


    ]
};



module.exports = function(dev_port) {

//cfg.devtool = 'cheap-module-eval-source-map';
    cfg.devtool = 'sourcemap';



  //  cfg.module.loaders[0].loaders[1] = 'react-hot,' +  cfg.module.loaders[0].loaders[1]
    return cfg;
};





/*
var cfg = {
    context: p.root,
    entry: {
        app: [
            path.resolve(p.app,'src','main','main.jsx')
        ],
        vendors:['react/addons','react-router']

    },
    output: {
        path: p.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: [
                    ReactStylePlugin.loader(),
                    'react-hot',
                    'babel?stage=0'
                ],
                include: path.join(p.root, 'app', 'src','main'),
                exclude: [p.node,p.build]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            /!*    {
             test: /\.css$|scss/,
             loader: 'style!css!sass'
             },*!/
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new ReactStylePlugin('bundle.css'),
        new webpack.DefinePlugin({
            'process.env': {
                // To enable production mode:
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "Radium": "radium",
            "StyleSheet": "react-style",
            "color": "color",
            "classnames": 'classnames',
            "sa": "superagent",
            "Reflux":"reflux",
            "_": "lodash"
        })

    ]
};
*/
