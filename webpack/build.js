var webpack = require('webpack');

module.exports = function(mode,port,dev_port){

    var webpackFile;
    switch (mode){
        case 'development':  webpackFile = './development.js'; break;
        case 'hot':  webpackFile = './hot.js'; break;
        case 'hotify':  webpackFile = './hotify.js'; break;
        case 'production': webpackFile ='./production.js'; break;
        default: throw new Error('node enviroment = '+ mode +' does not map to a config build, use development, hot, hotify or production');
      //  case 'production': webpackFile ='./test.js'; break;
      //  case 'test': webpackFile ='./test.js'; break;
    }

    var bundleStart = null;
    var compiler = webpack(require(webpackFile)(dev_port));

    compiler.plugin('compile', function() {
        bundleStart = Date.now();
    });
    compiler.plugin('done', function() {
        console.log('Bundled em ' + (Date.now() - bundleStart) + 'ms!');
    });



    if (mode !== 'production'){
        var WebpackDevServer = require('webpack-dev-server');
        var bundler = new WebpackDevServer(compiler, {
            publicPath: '/build/',
            proxy: { "*": 'http://localhost:'+port},
            hot: true,
            quiet: false,
            noInfo: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            historyApiFallback: true,
            stats: {
                progress:true,
                colors: true
            }
        });//                      localhost   coloquei ip para acessar do celular
        bundler.listen(dev_port, 'localhost', function () {
     //   bundler.listen(dev_port, '192.168.25.10', function () {
            console.log('Aguarde...');
        });
    }else {
        compiler.run(function(err, stats) {
        });
    }

};



