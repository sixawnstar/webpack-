const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	entry: {
		index: "./src/js/index.js",
		index1: "./src/js/index1.js"
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: '[name].js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		open:true,
		hot: true,
		port: 8080
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "idnex.html",
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			template: "./src/index1.html",
			filename: "idnex1.html",
			chunks: ['index1']
		})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, ]
	}
}
