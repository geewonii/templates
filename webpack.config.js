var webpack = require('webpack');
var path = require("path");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var loaders = [
    {loader: 'css-loader'},
    {
		loader: 'postcss-loader',
		options: {
			sourceMap: true,
			config: { path: 'postcss.config.js' }
		}
	},
	{loader: 'sass-loader'}
];
var config = {
	entry: { main: SRC_PATH },
	output: {
    path: DIST_PATH,
		publicPath: '/',
		filename: '[name].bundle.[hash:8].js'
	},
	module: {
		rules:[
			{
				test: /\.(scss|css)$/,
				use: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', use: loaders}),
				include: SRC_PATH
			},
			{
				test:/\.(png|svg|jpg|gif)$/,
				use: ['url-loader?limit=8192&name=img/[name][hash:8].[ext]','image-webpack-loader']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: SRC_PATH,
				options: { presets: ["env"] }
		    }
		]
	},
	
	devServer: {
	    historyApiFallback: true,
	    contentBase: DIST_PATH,
	    stats: 'errors-only',
	    hot: true,
		inline: true,
		overlay: true,
		compress: true
	},
  
	plugins: [
	    new HtmlwebpackPlugin({
	      title: 'title',
	      filename: 'index.html',
	      template: './src/Template/index.ejs',
	      favicon: ""
	    }),
	    new ExtractTextPlugin("css/[name].min.css"),
	    new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config;