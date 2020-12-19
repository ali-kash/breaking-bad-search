const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ useBuiltIns: 'usage', corejs: 3, targets: 'defaults' },
							],
							'@babel/preset-react',
						],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify: true,
		}),

		new MinifyPlugin(
			{},
			{
				comments: false,
			}
		),
	],
};
