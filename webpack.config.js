var path = require('path');
var webpack = require('webpack');

var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'public');
var config = {
	entry: SRC + '/app.js',
	output: {
		filename: 'app.bundle.js',
		path: DIST
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react', 'es2015', 'stage-0']
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin()
	]
};

module.exports = config;