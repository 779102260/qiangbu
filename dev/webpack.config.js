const path              =require('path'),
	  webpack           =require('webpack'),
      autoprefixer      = require('autoprefixer');

module.exports={
	entry:[
		'react-hot-loader/patch',
		// 'webpack-hot-middleware/client?path=http://localhost:9000/__webpack_hmr',
		'webpack-dev-server/client?http://localhost:9000/',
		'webpack/hot/only-dev-server',
		'./src/index.js',
	],
	plugins:[
        new webpack.optimize.UglifyJsPlugin(), //把合并文件中的注释符号去掉
        new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin(),
    ],
	output:{
		filename:"bundle.js",

		//入口文件打包输出目录
		//所有的输出目录都在这儿
		//bundle.js必须放在最外面，这样才能images文件夹输出到bundle.js同一级，而不里面
		//否导致其他output如css url路径不对
		//最好的方式：
		//devServer的根目录在server根目录外
		//这样可以把文件输出到server目录
		//
		path:path.resolve(__dirname,'../'),
		//css内的 url相对路径 ./相对于html计算
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer: {
	    hot: true,
	    contentBase:path.resolve(__dirname, '../'),
	    publicPath: '/',
	    port:9000,
	    // proxy:{

	    // }
	},
	// 引用但不打包的文件
  	externals: { 'react': 'React', 'react-dom': 'ReactDOM' ,'jquery':'jQuery'},
	module:{
		rules:[{
			//css处理
			//安装：npm install --save-dev css-loader style-loader
			//		npm install --save-dev extract-text-webpack-plugin
			// 引入var ExtractTextPlugin = require('extract-text-webpack-plugin');
			//ExtractTextPlugin帮助css作为一个单独标签添加到html中，去掉第二个use，则作为内置样式写入html
			test:/\.css$/,
			use:[
				{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				},{
					loader: 'postcss-loader',
					options: {
		              	plugins() {
			                return [
			                  autoprefixer
			                ]
		              	}
		            }
				}
			]
			// use:ExtractTextPlugin.extract({
			// 	use:"css-loader"
			// })
		},{
			//babel处理js
			//安装：npm install webpack babel-core babel-loader babel-plugin-react-require babel-plugin-transform-object-rest-spread babel-preset-es2015 babel-preset-react
			//
			test:/\.jsx?$/,
			use:{
				loader:'babel-loader',
				options:{//参数
					// false是,不使用.babelrc文件
	            	babelrc: false,
	            	presets:[
	            		['es2015',
	            		// webpack2 需要设置modules 为false
	            		{ 'modules': false }],
	            		'react'
	            	],
	            	// babel的插件
		            plugins: [
		              'react-require',
		              'transform-object-rest-spread'
		            ]
				}
			}
		},
		// 当图片文件大于10KB时，复制文件到指定目录，小于10KB转为base64编码
		// name是file-loader的配置项
		// 	输出到指定路径下，包括输出名称，和publicPath连接
		// name: '/[path][name].[ext]' 按照图片devServer路径输出到publicPath下
		// 对于jsx里直接引用的图片 icon等需要手动import，jsx并不检查其url，原路径输出
		// 
		// 热加载不会打包图片，手动webpack
		// 
	    {
	        test: /\.(png|jpg|jpeg|gif|svg)$/,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 10000,
	              name: 'images/[name].[ext]',
	            }
	          }
	        ]
	    }]
	}
}