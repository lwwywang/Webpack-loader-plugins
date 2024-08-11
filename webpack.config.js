const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FileListPlugin = require('./plugins/file-list-plugin.js')
const CleanPlugin = require('./plugins/clean-plugin.js')
const CountTimePlugin = require('./plugins/count-time.js')


module.exports = {
	resolveLoader: {
    modules: ['node_modules', 'loaders']
	},

	entry: {
		index: './src/js/index.js'
	},

	stats: {
		all: false,
		timings: true,
		warnings: true,
		errors: true,
	},

	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
				{
					loader: 'html-loader'
				},
				{
					loader: 'markdown-loader',
					options: {}
				}],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			  },
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css',
		  }),
		new FileListPlugin(),
		new CleanPlugin({exclude: 'a'}),
		new CountTimePlugin(),
	]
}