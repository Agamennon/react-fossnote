var webpack = require('webpack');
var path = require('path');
var p = require('./paths.js');
rmdir = require('rimraf');

//remove build dir
rmdir(p.build,function(error){
    if (error)
      console.log(error);
});

module.exports = {
    context: p.root,
    entry: {
        app: [
          //  path.resolve(p.app,'src','fossnote_redux','main.jsx')
            path.resolve(p.app,'src','cerebral_fossnote','main.jsx')
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
                    'babel?optional=es7.decorators'
                   // 'babel?stage=0'
                ],
               //include: path.join(p.node, 'reactive-router','index.js'),

                exclude: [p.node,p.build]
            },
            {
                test: /\.css$|scss/,
                loader: 'style!css!sass'

            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },

    plugins: [

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
