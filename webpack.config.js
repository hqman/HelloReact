var path = require('path');

var projectRoot = process.env.PWD; // Absolute path to the project root
var resolveRoot = path.join(projectRoot, 'node_modules'); // project root/node_modules



module.exports = {
    entry: "./app/main.js",

    output: {
        path: "./build",
        filename: "bundle.js"
    },

    'devtool': 'source-map',
   resolve: {
      root: [
        resolveRoot,
        path.join(__dirname, 'node_modules')
      ],
      extensions:['', '.js', '.jsx', '.json']
    },

    module: {
        loaders: [{ //出错了  to fix
            test: /\.js[x]?$/,
            // loader: 'babel',
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }]
    }
}
