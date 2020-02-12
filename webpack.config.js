const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	entry: ['./src/index'],
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'build'),
		compress: true,
		port: 9000,
		publicPath: '/build/'
	},
	module: {
		rules: [
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
		extensions: ['*', '.js', '.jsx', '.scss']
	}
};
