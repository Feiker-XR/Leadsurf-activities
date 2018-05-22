

(function(host, name, GameTypes, undefined){
	var defConfig = {
		navDom : '#J-play-select .play-select-title'
	},
	//渲染实例
	instance,
	//游戏实例
	Games = host.Games;
	
	//渲染方法
	var pros = {
		init:function(cfg){
			var me = this;
			
			setTimeout(function(){
				me.divideNav();
			},0);
		},
		//划分导航层级
		divideNav: function(){
			var me = this,
				navDom = $(me.defConfig.navDom);

			navDom.find('li.p3sanxing').before('<div class="superior pailie3">排列3：</div>')
			navDom.find('li.p5houer').before('<div class="superior pailie5">排列5：</div>')
		}
		/*切换事件
		, changeMode: function(modeName){
			var me = this,name = modeName.split('.'),
				titles,panels,buttons,currPanel,
				selectArea = me.container.find('.play-select-title'),
				cls = 'current';
			
			selectArea.find('li').removeClass('blue');
			if(name[0] == 'p3sanxing' || name[0] == 'p3houer' || name[0] == 'p3qianer'){
				selectArea.find('.pailie3, .p3sanxing, .p3houer, .p3qianer').addClass('blue');
			}
			
			if(name[0] == 'p5houer' || name[0] == 'p5yixing'){
				selectArea.find('.p5houer, .p5yixing, .pailie5').addClass('blue');
			}

			try{
				if(modeName == Games.getCurrentGame().getCurrentGameMethod().getGameMethodName()){
					return;
				}
			}catch(e){
			}

			//执行自定义事件
			me.fireEvent('beforeChange');
			//执行切换
			Games.getCurrentGame().switchGameMethod(modeName);
			//执行高亮
			titles = me.container.find('.play-select-title li');
			titles.removeClass(cls);
			me.container.find('.play-select-title').find('.' + name[0]).addClass(cls);
			
			panels = me.container.find('.play-select-content li');
			panels.removeClass(cls);
			currPanel = me.container.find('.play-select-content').find('.' + name[0]);
			currPanel.addClass(cls);
			
			buttons = currPanel.find('dd').removeClass(cls);
			currPanel.find('.' + name[1] + ' .' + name[2]).addClass(cls);
			
			//alert(name[]);
			//执行自定义事件
			me.fireEvent('endChange');
			
		}*/

	};
	
	var Main = host.Class(pros, GameTypes);
		Main.defConfig = defConfig;
		Main.getInstance = function(cfg){
			return instance || (instance = new Main(cfg));
		};
	host[name] = Main;
	
})(phoenix, "P5GameTypes", phoenix.GameTypes);










