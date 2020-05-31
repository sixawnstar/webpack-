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
5.安装css自动添加前缀插件   npm i postcss-loader autoprefixer -d
	创建postcss.config.js
		配置
			const autoprefixer = require("autoprefixer")
			module.exports={
				plugins:[autoprefixer]   //挂在插件
			}
	配置package.json 文件：
		use: ['style-loader', 'css-loader',"postcss-loader"] 
6.安装自动打包，webpack服务   npm i webpack-dev-server -D
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
7.配置打包
	配置package.json 文件：
	"scripts": {
		"build":"webpack"
	}	