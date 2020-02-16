const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	entry: {
		app: './src/main.js',
		vendors: ['phaser']
	},
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
		port: 9000,
		https: false
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
								{
									plugins: [
										'@babel/plugin-proposal-class-properties'
									]
								}
							]
						}
					}
				]
			},
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							sourceMap: isDevelopment
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(png|jpg|gif)$/i,
				exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							fallback: require.resolve('file-loader')
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.scss', '.ts', '.tsx', '.js']
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, 'index.html'),
				to: path.resolve(__dirname, 'build')
			},
			{
				from: path.resolve(__dirname, 'assets', '**', '*'),
				to: path.resolve(__dirname, 'build')
			}
		]),
		new webpack.DefinePlugin({
			'typeof CANVAS_RENDERER': JSON.stringify(true),
			'typeof WEBGL_RENDERER': JSON.stringify(true)
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
};
