webpack 打包
1.初始化   npm init 
2.安装webpack    npm i webpack webpack-cli -D
	配置webpack.config.js 文件 
		const path=require("path")
		module.exports={
			mode:"development",
			entry:path.join(__dirname,"./src/js/index.js"),
			output:{
				path:path.join(__dirname,"./dist"),
				filename:"build.js"
			}
		}
3.安装html插件  npm i html-webpack-plugin -D
	配置webpack.config.js 文件 
	const HtmlWebpackPlugin = require('html-webpack-plugin');
	plugins: [new HtmlWebpackPlugin(,
			{
				template:"./src/index.html",
				filename:"idnex.html"
			}
	)]
4.安装css loader   npm i style-loader css-loader -d
	配置webpack.config.js 文件 
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, ]
	}
5.安装自动打包，webpack服务   npm i webpack-dev-server -D
	配置package.json 文件：
	"scripts": {
		"dev":"webpack-dev-server"
	}
	配置webpack.config.js 文件 
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		open:true,
		hot: true,
		port: 8080
	},
6.配置打包
	配置package.json 文件：
	"scripts": {
		"build":"webpack"
	}	