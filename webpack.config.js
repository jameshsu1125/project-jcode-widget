var p = process.env.NODE_ENV;
console.log('****** NODE_ENV = ' + p + ' *******');

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
	const config = {
		entry: {
			index: './src/index.js',
			get: './src/get.js',
		},
		module: {
			rules: [
				{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader?retainLines=true' },
				{ test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'] },
				{ test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
				{ test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'file-loader', options: { name: 'bundle/img/[path][name].[ext]', context: 'src' } }] },
				{ test: /\.(ogv|mp4)$/, use: [{ loader: 'file-loader', options: { name: 'bundle/vid/[path][name].[ext]', context: 'src' } }] },
				{ test: /\.(wav|mp3)$/, use: [{ loader: 'file-loader', options: { name: 'bundle/aud/[path][name].[ext]', context: 'src' } }] },
				{ test: /\.(eot|woff|woff2|ttf)$/, use: [{ loader: 'file-loader', options: { name: 'bundle/font/[path][name].[ext]', context: 'src' } }] },
			],
		},
		resolve: {
			extensions: ['*', '.js', '.jsx'],
		},
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: 'bundle/js/[name].min.js',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				__REACT_DEVTOOLS_GLOBAL_HOOK__: '({ isDisabled: true })',
			}),
		],
		optimization: {
			minimize: p == 'production',
			minimizer: [
				new TerserPlugin({
					sourceMap: false,
					cache: true,
					parallel: true,
					extractComments: false,
					terserOptions: { output: { comments: false } },
				}),
			],
		},
		devtool: 'cheap-inline-module-source-map',
		devServer: {
			contentBase: './dist',
			hot: true,
			host: '0.0.0.0',
			port: 8080,
			public: 'localhost:8080',
			disableHostCheck: true,
			https: false,
		},
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
	};
	if (p == 'production') {
		config.plugins.push(
			new CleanWebpackPlugin({
				cleanOnceBeforeBuildPatterns: ['bundle/**'],
			})
		);
	}
	if (env && env.unused)
		config.plugins.push(
			new UnusedFilesWebpackPlugin({
				globOptions: {
					patterns: ['src/**/*.js', 'src/**/*.png', 'src/**/*.jpg'],
					ignore: ['node_modules/**/*', 'dist/**/*', '*.json', '**/*.config.*', '*.md', 'src/LESCA/**/*'],
				},
			})
		);
	return config;
};
