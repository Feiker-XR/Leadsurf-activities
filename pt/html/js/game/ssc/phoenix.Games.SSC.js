

(function(host, name, Game, undefined){
	var defConfig = {
		//游戏名称
		name:'ssc',
		basePath:'http://static.firefrog.com/static/js/game/ssc/',
		baseNamespace:'phoenix.Games.SSC.' 
		
	},
	instance,
	Games = host.Games;
	
	var pros = {
		init:function(){
			var me = this;
			
			//初始化事件放在子类中执行，以确保dom元素加载完毕
			me.eventProxy();
			//获取服务器端配置数据
			me.getDynamicConfig();
		},
		getGameConfig:function(){
			return host.Games.SSC.Config;
		},
		//前三后三的混合组选，需要手动拆分出组六和组三进行提交
		editSubmitData:function(data){
			var me = this,list = data['balls'],i = 0,len = list.length,type = '',singleList = [],balls = [],
				temp,len2,j;
			for(;i < len; i++){
				type = list[i]['type'];
				if(type == 'housan.zuxuan.hunhe' || type == 'housan.zuxuan.hezhi' || type == 'housan.zuxuan.baodan'){
					temp = Games.getCurrentGameOrder().getOrderById(list[i]['id'])['lotterys'];
					len2 = temp.length;
					j = 0;
					for(;j < len2;j++){
						/**
						ball: "10"
						id: 1
						moneyunit: 1
						multiple: 1
						type: "housan.zuxuan.zuxuanhezhi"
						**/
						if(temp[j][0] == temp[j][1] || temp[j][1] == temp[j][2] || temp[j][0] == temp[j][2]){
							singleList.push({ball:temp[j].join(','), id:list[i]['id'], moneyunit:list[i]['moneyunit'], multiple:list[i]['multiple'], type: 'housan.zuxuan.zusan'});
						}else{
							singleList.push({ball:temp[j].join(','), id:list[i]['id'], moneyunit:list[i]['moneyunit'], multiple:list[i]['multiple'], type: 'housan.zuxuan.zuliu'});
						}
					}
				}else{
					balls.push(list[i]);
				}
			}
			balls = balls.concat(singleList);
			
			data['balls'] = balls;
			
			return data;
		}
	};
	
	var Main = host.Class(pros, Game);
		Main.defConfig = defConfig;
		//游戏控制单例
		Main.getInstance = function(cfg){
			return instance || (instance = new Main(cfg));
		};
	host.Games[name] = Main;
	
})(phoenix, "SSC", phoenix.Game);










