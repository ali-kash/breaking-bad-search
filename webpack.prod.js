const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[hash:6].js',
		path: path.resolve(__dirname, 'build'),
	},
	module: {
		rules: [
			{
				test: /\.(jpeg|png|jpg|svg|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[hash:6].[ext]',
					outputPath: 'images',
					publicPath: 'images',
					emitFile: true,
					esModule: false,
				},
			},
			{
				test: /\.(scss|css)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].[hash:6].css',
		}),
		new CleanWebpackPlugin(),
	],
});
