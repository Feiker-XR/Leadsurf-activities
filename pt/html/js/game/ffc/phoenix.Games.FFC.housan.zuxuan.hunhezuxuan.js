
(function(host, Danshi, undefined){
	var defConfig = {
		name:'housan.zuxuan.hunhezuxuan',
		//父容器
		UIContainer:'#J-balls-main-panel'
	},
	Games = host.Games,
	FFC = Games.FFC.getInstance();
	
	
	//定义方法
	var pros = {
		init:function(cfg){
			var me = this;
			//建立编辑器DOM
			//防止绑定事件失败加入定时器
			setTimeout(function(){
				me.initFrame();
			},25);
		},
		rebuildData:function(){
			var me = this;
			me.balls = [
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		},
		checkNumSameIndex: function(num, index){
			var me = this,
				result,
				arr = num.length > 0 ? num : [];
			
			for (var i = 0; i < arr.length; i++) {
				if(me.arrIndexOf(arr[i], arr) == index){
					result = true;
					break;
				}
			};
			
			return result || false;
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete 
		checkBallIsComplete:function(data){
			//去除中文 && 全角符号 && 英文字符
			var me = this,
				i = 0,
				result = [];
				me.aData = [];
				me.sameData = [];
				me.errorData = [];
				me.tData = [];
				me.vData = [];

				me.vDataBack= [];
				me.aDataBack = [];
				me.tDataBack = [];
				me.sameDataBack = [];
				me.errorDataBack = [];
				
			//按规则进行拆分结果
			result = me.iterator(me.filterLotters(data)) || [];
			//判断结果
			for(;i<result.length;i++){
				var splitData = result[i].split(''),
					current = result[i],
					tDataLength = me['tData'].length,
					vDataLength = me['vData'].length;

				if(me.defConfig.checkNum.test(current) 
					&& current.length == me.balls.length
					&& !me.checkNumSameIndex(current, 3)){
					
					if(me.checkResult(current, me['tDataBack']) == -1){
						//正确结果[已去重]
						me['tData'][tDataLength] = splitData;
						me['tDataBack'][tDataLength] = current;
					}else{
						if(me.checkResult(current, me['sameDataBack'])){
							me['sameData'][me['sameData'].length] = splitData;
							me['sameDataBack'][me['sameDataBack'].length] = current;
						}
					}
					//正确结果[不去重]
					me['vData'][vDataLength] = splitData;
				}else{
					if(me.checkResult(current, me['errorDataBack']) == -1){
						me['errorData'][me['errorData'].length] = splitData;
						me['errorDataBack'][me['errorDataBack'].length] = current;
					}else{
						me['sameData'][me['sameData'].length] = splitData;
						me['sameDataBack'][me['sameDataBack'].length] = current;
					}
				}
				//所有结果[已去重]
				if(me.checkResult(current, me['aDataBack']) == -1){
					me['aData'][me['aData'].length] = splitData;
					me['aDataBack'][me['aDataBack'].length] = current;
				}
			}
			//校验
			if(me.tData.length > 0){
				me.isBallsComplete = true;
				if(me.isFirstAdd){
					return me.vData;
				}else{
					return me.tData;	
				}
			}else{
				me.isBallsComplete = false;
				return [];
			}
		},
		randomNum:function(){
			var me = this,
				i = 0, 
				current = [], 
				currentNum, 
				ranNum,
				lotterys = [],
				order = null,
				original = [],
				dataNum = me.getBallData(),
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length,
				name = me.defConfig.name;		

			//增加机选标记
			me.addRanNumTag();		

			//生成随机数
			for(;i < len; i++){
				if(i == 2){
					current[i] = me.removeSameNum(current)
				}else{
					current[i] = Math.floor(Math.random() * rowLen);
				}
			}
			current.sort(function(a, b){
				return a > b ? 1 : -1;
			});

			original = [[current.join(',')],[],[]];
			lotterys.push(current);

			//生成投注格式
			order = {
				'type':  Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
				'original':original,
				'lotterys': lotterys,
				'moneyUnit': Games.getCurrentGameStatistics().getMoneyUnit(),
				'multiple': Games.getCurrentGameStatistics().getMultip(),
				'onePrice': Games.getCurrentGameStatistics().getOnePrice(),
				'num': lotterys.length
			};
			order['amountText'] = Games.getCurrentGameStatistics().formatMoney(order['num'] * order['moneyUnit'] * order['multiple'] * order['onePrice']);
			return order;
		}
	};
	
	
	//继承Danshi
	var Main = host.Class(pros, Danshi);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器上
	FFC[defConfig.name] = new Main();
	
	
	
})(phoenix, phoenix.Games.FFC.Danshi);
