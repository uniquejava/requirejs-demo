require.config({
	//baseUrl是相对路径, 不指定则相对index.html
	baseUrl: 'js/',
	paths: {
		'c': '../myjs/c',
		'd': 'lib/d.min'
	},

	//升级网站版本后, 更新版本号, 这样客户的浏览器会自动使用最新的js文件
	urlArgs: 'v=1.0.0',

	shim: {

		//a, b, c都没有使用AMD, 它们之间不需要exports, 只需要指定依赖
		//a比较特殊, 它被main依赖所以要指定exports
		'a': {
			deps: ['b'],
			exports: 'a1'
		},

		//如果不需要exports, 直接在[]中指定依赖.
		'b': ['c'],

		'c': []
	}
});

require(['a','d'], function (a,d) {
	console.log(a)
	a();
	d();
});
