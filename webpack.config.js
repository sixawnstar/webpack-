const path = require("path")
//引入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
//引入html插件
module.exports = {
	mode: "development",
	//生产环境
	entry: {
		index: "./src/js/index.js",
		index1: "./src/js/index1.js"
	},
	//多个入口
	output: {
		path: path.resolve(__dirname, "./dist"), //出口目录
		filename: '[name].js', //[name]代表入口设置的名称
	},
	//多个出口
	devServer: {
		contentBase: path.join(__dirname, 'src'), // 默认打开目录
		open: true, //启动后是否自动打开
		hot: true, //热启动，内容更改自动更新
		port: 8080 //端口号
	},
	//服务器
	plugins: [
		new HtmlWebpackPlugin({ //打包html的插件   
			template: "./src/index.html", //打包html的路径
			filename: "idnex.html", //打包后名称
			chunks: ['index'] //多个入口时使用，添加对应js文件
		}),
		new HtmlWebpackPlugin({
			template: "./src/index1.html",
			filename: "idnex1.html",
			chunks: ['index1']
		})
	],
	module: { //loader的使用
		rules: [{
			test: /\.css$/, //匹配后缀为css的文件
			use: ['style-loader', 'css-loader', "postcss-loader"] //用的loader名称  注意顺序不能改变     
		}, ]
	}
}
