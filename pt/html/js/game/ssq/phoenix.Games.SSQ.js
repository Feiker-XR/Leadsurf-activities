

(function(host, name, Game, undefined){
	var defConfig = {
		//游戏名称
		name:'SSQ',
		basePath:'../js/game/SSQ/',
		baseNamespace:'phoenix.Games.SSQ.'
		
	},
	instance;
	
	var pros = {
		init:function(){
			var me = this;
			
			//初始化事件放在子类中执行，以确保dom元素加载完毕
			me.eventProxy();
			//获取服务器端配置数据
			me.getDynamicConfig();
		},
		getGameConfig:function(){
			return host.Games.SSQ.Config;
		}
	};
	
	var Main = host.Class(pros, Game);
		Main.defConfig = defConfig;
		//游戏控制单例
		Main.getInstance = function(cfg){
			return instance || (instance = new Main(cfg));
		};
	host.Games[name] = Main;
	
})(phoenix, "SSQ", phoenix.Game);










