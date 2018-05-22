//后二直选复式玩法实现类
(function(host, name, GameMethod, undefined) {
	var defConfig = {

		},
		Games = host.Games,
		FFC = host.Games.FFC;

	//定义方法
	var pros = {
		init: function(cfg) {
			var me = this;
			var mode = location.search;

			me.addEvent('beforeShow', function(e, $dom) {
				var parent = $dom.parent();

				parent.animate({
					height: 0
				}, 200);
			});

			me.addEvent('afterShow', function(e, $dom) {
				var parent = $dom.parent(),
					heightNum = 0;


				setTimeout(function() {
					heightNum = $dom.outerHeight();

					parent.animate({
						height: heightNum
					}, 500);
				}, 0);
			});
		}
	};

	//继承GameMethod
	var Main = host.Class(pros, GameMethod);
	Main.defConfig = defConfig;

	//将实例挂在游戏管理器实例上
	FFC[name] = Main;
	
})(phoenix, 'FFCMethod', phoenix.GameMethod);