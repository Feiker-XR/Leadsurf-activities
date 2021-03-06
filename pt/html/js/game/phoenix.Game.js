﻿
//游戏类
//所有游戏应继承该类
(function(host, name, Event, undefined){
	var defConfig = {
		//游戏名称
		name:'',
		//资源存放目录
		basePath:'../game/',
		//文件名前缀
		baseNamespace:'phoenix.Games.',
		//游戏后台配置
		//dynamicConfigUrl:'simulatedata/dynamicconfig.php',
		dynamicConfigUrl:'simulatedata/dynamicConfig.php',
		//添加事件代理的主面板
		eventProxyPanel:'body'
	},
	Games = host.Games;
	//将来仿url类型的参数转换为{}对象格式，如 q=wahaha&key=323444 转换为 {q:'wahaha',key:'323444'}
	//所有参数类型均为字符串
	var formatParam = function(param){
		var arr = $.trim(param).split('&'),i = 0,len = arr.length,
			paramArr,
			result = {};
		for(;i < len;i++){
			paramArr = arr[i].split('=');
			if(paramArr.length > 0){
				if(paramArr.length == 2){
					result[paramArr[0]] = paramArr[1];
				}else{
					result[paramArr[0]] = '';
				}
			}
		}
		return result;
	};

	
	var pros = {
		init:function(cfg){
			var me = this;
			me.setName(cfg.name);
			//当前期号
			me.currentNumber = '';
			//设置当前游戏
			Games.setCurrentGame(me);
			
			//资源加载缓存
			me.loadedHas = {};
			//当前使用的玩法
			me.currentGameMethod = null;
			
			//游戏服务器端配置
			me.dynamicConfig = null;
			
			
			
			me.addEvent('afterSwitchGameMethod', function(){
				Games.getCurrentGame().getCurrentGameMethod().reSet();
				
				
				//切换玩法时，针对当前玩法进行倍数限制设置
				var typeName = Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
					limitObj = Games.getCurrentGame().getDynamicConfig()['gamelimit'];
				if(limitObj[typeName]){
					Games.getCurrentGameStatistics().setMultipleLimit(limitObj[typeName]['maxmultiple']);
				}
				
				//切换后获取对应的走势图
				Games.getCurrentGame().getCurrentGameMethod().updataGamesInfo();
				
				
			});
			me.addEvent('changeDynamicConfig', function(){
				me.updateDynamicConfig();
			});
		},
		//获取当前玩法/指定玩法的最大倍数限制
		getMaxMultipleLimit:function(type){
			var typeName = type || Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
				limitObj = Games.getCurrentGame().getDynamicConfig()['gamelimit'];
			return Number(limitObj[typeName]['maxmultiple']);
		},
		getDynamicConfigUrl:function(){
			return Games.getCurrentGame().getGameConfig().getInstance().getDynamicConfigUrl();
		},
		//从服务器端获取数据
		//返回数据格式
		//{"isSuccess":1,"type":"消息代号","msg":"返回的文本消息","data":{xxx:xxx}}
		getServerDynamicConfig:function(callback){
			var me = this,cfg = me.defConfig,gameType = me.getName();
			$.ajax({
				url:me.getDynamicConfigUrl() + '?gametype=' + gameType,
				dataType:'JSON',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						me.setDynamicConfig(data['data']);
						if($.isFunction(callback)){
							callback.call(me, data['data']);
						}
					}

				}
			});
		},
		getDynamicConfig:function(){
			return this.dynamicConfig;
		},
		setDynamicConfig:function(cfg){
			this.dynamicConfig = cfg;
			this.fireEvent('changeDynamicConfig', cfg);
		},
		addDynamicBonus:function(gameName, data){
			if(typeof this['dynamicConfig']['gamelimit'] != 'undefined'){
				if(typeof this['dynamicConfig']['gamelimit'][gameName] != 'undefined'){
					this['dynamicConfig']['gamelimit'][gameName]['usergroupmoney'] = data;
				}
			}
		},
		//更新后台配置信息后，更新相关内容
		updateDynamicConfig:function(){
			var me = this,dConfig = me.getDynamicConfig(),lastballs = dConfig['lastballs'].split(',');
			
			if(dConfig['isstop'] == 1){
				setTimeout(function(){
					phoenix.Games.getCurrentGameMessage().show({
					   type : 'lotteryClose',
					   data : {
					   		tplData : {
								//当期彩票详情
								lotterys : [1,2,3,4,5,6],
								//彩种名称
								lotteryName : 'shishicai',
								//开奖期数
								lotteryPeriods : '20130528-276',
								//开始购买时间
								orderDate : {'year':'2013','month':'5','day':'3','hour':'1','min':'30'},
								//提示彩票种类
								lotteryType : [{'name':'leli','pic':'#','url':'http://163.com'},{'name':'kuaile8','pic':'#','url':'http://pp158.com'}]
							}
					   }
					});
				}, 1000);
				return;
			}
			
			me.setCurrentNumber(dConfig['number']);
			
			//头部界面更新
			//当前期期号
			$('#J-lottery-info-number').html(dConfig['number']);
			//上一期期号
			$('#J-lottery-info-lastnumber').html(dConfig['lastnumber']);
			//上期开奖号码
			$('#J-lottery-info-balls').find('em').each(function(i){
				this.innerHTML = lastballs[i];
			});

			
			//新奖期已开出，清空数据缓存
			Games.cacheData = {};
		},
		//事件代理，默认只监听鼠标点击事件，如需要监听其他事件，请在具体的游戏类中实现
		//例： <span data-param="action=doSelect&value=10">点击</span>
		eventProxy:function(){
			var me = this,cfg = me.defConfig,panel = $(cfg.eventProxyPanel),
				action = '';
			panel.click(function(e){
				var q = e.target.getAttribute('data-param'),param,gameMethod;
				if(q && $.trim(q) != ''){
					e.preventDefault();
					param = formatParam(q);
					gameMethod = me.getCurrentGameMethod();
					if(gameMethod){
						gameMethod.exeEvent(param, e.target);
					}
				}
			});
		},
		//根据名字返回玩法对象
		getGameMethodByName:function(name){
			var me = this,has = me.loadedHas;
			if(me.hasOwnProperty(name) && has.hasOwnProperty(me.buildPath(name))){
				return me[name];
			}
		},
		//切换游戏玩法
		switchGameMethod:function(name){
			var me = this,p,has = me.loadedHas,obj;
			for(p in me){
				if(me.getGameMethodByName(p)){
					me.fireEvent('beforeSwitchGameMethod');
					if(p != name){
						me[p].hide();
					}else{
						me[p].show();
						me.currentGameMethod = me[p];
						me.fireEvent('afterSwitchGameMethod');
					}
					
				}
			}
			if(!me.getGameMethodByName(name)){
				me.setup(name, function(){
					me.fireEvent('beforeSwitchGameMethod');
					obj = me.getGameMethodByName(name);
					obj.show();
					me.currentGameMethod = obj;
					me.fireEvent('afterSetup');
					me.fireEvent('afterSwitchGameMethod');
				});
			}
		},
		getCurrentGameMethod:function(){
			return this.currentGameMethod;
		},
		//name 玩法类型.玩法组.玩法(如:'wuxing.zhixuan.fushi')
		setup:function(name, callback){
			var me = this,
				src = me.buildPath(name),
				fn = function(){},
				_callback;
			
			//获取最后一个参数作为回调函数
			_callback = arguments.length > 0 ? arguments[arguments.length - 1] : fn;
			if(!$.isFunction(_callback)){
				_callback = fn;
			}
			
			//加载脚本并缓存
			if(!me.isSetuped(name)){
				$.ajax({
					url:src,
					cache:false,
					dataType:'script',
					success:function(){
						me.loadedHas[src] = true;
						_callback.call(me);
					},
					error:function(xhr, type){
						alert('资源加载失败\n' + src + '\n错误类型：' + type);
					}
				});
			}
		},
		//拼接路径
		buildPath:function(name){
			var me = this,
				path = me.defConfig.basePath,
				nameSpace = me.defConfig.baseNamespace,
				//拼接名称为路径，并剔除空参数(空参数为了适应没有三级分组的游戏)
				src = path + nameSpace + name + '.js';
			return src;
		},
		//检测某模块是否已安装
		isSetuped:function(name){
			var me = this,has = me.loadedHas,path = me.buildPath(name);
			return has.hasOwnProperty(path);
		},
		//直接设置某资源已经加载
		setSetuped:function(type, group, method){
			
		},
		//返回该游戏的游戏配置
		//在子类中实现
		getGameConfig:function(){
			
		},
		getName:function(){
			return this.name;
		},
		setName:function(name){
			this.name = name
		},
		setCurrentNumber:function(v){
			this.currentNumber = v;
		},
		getCurrentNumber:function(){
			return this.currentNumber;
		},
		//对最后即将进行提交的数据进行处理
		editSubmitData:function(data){
			return data;
		},
		//过滤URL中的BALL参数
		//该玩法会在页面中的实例中被覆盖修改
		parseBallData: function(gametype,ballData){
			var me = this,
				games = host.Games,
				order = {},
				ballArray = [],
				current = [],
				gameOrder = games.getCurrentGameOrder();

			ballArray = ballData.split('_');

			for (var i = ballArray.length - 1; i >= 0; i--) {
				current = [];
				singel = ballArray[i].split('-');

				for (var k = singel.length - 1; k >= 0; k--) {
					current.push(singel[k].split('')); 
				};

				order = {
					'type':  gametype,
					'original': current,
					'lotterys': current,
					'moneyUnit': Games.getCurrentGameStatistics().getMoneyUnit(),
					'multiple': Games.getCurrentGameStatistics().getMultip(),
					'onePrice': Games.getCurrentGameStatistics().getOnePrice(),
					'num': current.length
				};
				order['amountText'] = Games.getCurrentGameStatistics().formatMoney(order['num'] * order['moneyUnit'] * order['multiple'] * order['onePrice']);

				//返回投注信息
				gameOrder.add(order);
			};			
		},
		//彩种外部投注情况
		//过滤URL中的彩种数据
		parseDataFormUrl: function() {
			var me = this,
				gametypes = host.Games.getCurrentGameTypes(),
				gameType = $.trim(host.util.getParam('gametype')),
				ballData = $.trim(host.util.getParam('ball'));

			//Url投注功能
			//初始化游戏种类数据
			if(gameType) {
				//切换玩法
				gametypes.changeMode(gameType);
			}

			//如果有站外投注数据
			//则开始执行过滤函数
			if(ballData) {
				//向号码栏添加格式化后的参数
				me.parseBallData(gameType, ballData);
			}
		},
		
		// 开奖号码动画
		lotteryBallsAnimation: function(elemTag, realballs, config){
			// return 'aaa';
			var opts = $.extend({
					delay: 30,
					step: 100,
					reverse: true, // 动画是否按球倒序
					maxNum: 9
				}, config),
				$t = $(elemTag),
				$balls = $t.children(),
				ballLen = $balls.length;

			function randomBalls(){
				var balls = [];
				for( var i=0; i<ballLen; i++ ){
					balls.push( Math.ceil( Math.random() * (opts.maxNum - 1) + 1 ) );
				}
				return balls;
			}

			function changeBallNumber(balls){
				// 真实号码，表示开奖
				if( balls && Object.prototype.toString.call(balls) === '[object Array]' ){
					var len = balls.length, delay = 600;
					console.log(ballLen, len)
					if( len != ballLen ){
						alert('开奖号码数据不匹配');
					}
					$balls.removeClass('animation');
					if( opts.reverse ){
						// $balls = $($balls.get().reverse());
						var idx = len, timer;
						timer = setInterval(function(){
							idx -= 1;
							$balls.eq(idx).addClass('animation').html(balls[idx]);
							if( idx <= 0 ){
								clearInterval(timer);
								timer = null;
							}
						}, delay);                    
					}else{
						var idx = -1, timer;
						timer = setInterval(function(){
							idx += 1;
							$balls.eq(idx).addClass('animation').html(balls[idx]);
							if( idx >= len - 1 ){
								clearInterval(timer);
								timer = null;
							}
						}, delay);  
					}
				}else {
					balls = randomBalls();
					$balls.each(function(i) {
						this.innerHTML = balls[i];
					});
				}
			}

			function animation(realBalls){
				var count = 0, timer2 = null;
				(function(){
					changeBallNumber();
					if( count >= opts.step ){
						clearTimeout(timer2);
						changeBallNumber(realBalls);
						return timer2 = null;
					}
					count++;
					timer2 = setTimeout(arguments.callee, opts.delay);
				})();
			}

			// do the main function
			animation(realballs);
		}
	};
	
	var Main = host.Class(pros, Event);
		Main.defConfig = defConfig;
	host[name] = Main;
	
})(phoenix, "Game", phoenix.Event);










