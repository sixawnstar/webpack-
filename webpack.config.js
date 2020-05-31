const path = require("path")
//����pathģ��
const HtmlWebpackPlugin = require('html-webpack-plugin');
//����html���
module.exports = {
	mode: "development",
	//��������
	entry: {
		index: "./src/js/index.js",
		index1: "./src/js/index1.js"
	},
	//������
	output: {
		path: path.resolve(__dirname, "./dist"), //����Ŀ¼
		filename: '[name].js', //[name]����������õ�����
	},
	//�������
	devServer: {
		contentBase: path.join(__dirname, 'src'), // Ĭ�ϴ�Ŀ¼
		open: true, //�������Ƿ��Զ���
		hot: true, //�����������ݸ����Զ�����
		port: 8080 //�˿ں�
	},
	//������
	plugins: [
		new HtmlWebpackPlugin({ //���html�Ĳ��   
			template: "./src/index.html", //���html��·��
			filename: "idnex.html", //���������
			chunks: ['index'] //������ʱʹ�ã���Ӷ�Ӧjs�ļ�
		}),
		new HtmlWebpackPlugin({
			template: "./src/index1.html",
			filename: "idnex1.html",
			chunks: ['index1']
		})
	],
	module: { //loader��ʹ��
		rules: [{
			test: /\.css$/, //ƥ���׺Ϊcss���ļ�
			use: ['style-loader', 'css-loader', "postcss-loader"] //�õ�loader����  ע��˳���ܸı�     
		}, ]
	}
}
