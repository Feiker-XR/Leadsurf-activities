﻿
(function(host, Danshi, undefined){
	var defConfig = {
		name:'p3houer.zuxuan.zuxuanp3houerdanshi',
		//玩法提示
		tips: '后二组选单式玩法提示',
		//选号实例
		exampleTip: '后二组选单式弹出层1111提示'
	},
	Games = host.Games,
	P5 = Games.P5.getInstance();
	
	
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
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete 
		checkBallIsComplete:function(data){
				//去除中文 && 全角符号 && 英文字符
			var me = this,
				i = 0,
				current = '',
				result = [];
				
				me.aData = [];
				me.sameData = [];
				me.errorData = [];
				me.tData = [];
				me.vData = [];

			//按规则进行拆分结果
			result = me.iterator(me.filterLotters(data)) || [];
			
			//判断结果
			for(;i<result.length;i++){
				current = result[i].split('').sort(function(a, b){
					return a-b;
				}).join('');

				if(me.defConfig.checkNum.test(current) 
					&& current.length == me.balls.length
					&& !me.checkNumSameIndex(current, 2)){
					if(me.checkResult(current, me.tData)){
						me.tData.push(current.split(''))
					}else{
						if(me.checkResult(current, me.sameData)){
							//重复结果
							me.sameData.push(current.split(''));
						}
					}
					//正确结果[不去重]
					me.vData.push(current.split(''));
				}else{
					if(me.checkResult(current, me.errorData)){
						me.errorData.push(current.split(''));
					}
				}
				//记录
				if(me.checkResult(current, me.aData)){
					me.aData.push(current.split(''));
				}
			}
			//校验
			if(me.tData.length > 0){
				me.isBallsComplete = true;
				return me.tData;
			}else{
				me.isBallsComplete = false;
				return [];
			}
		},
		//生成单注随机数
		createRandomNum: function(){
			var me = this,
				i = 0,
				current = [],
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length;
			
			//生成随机数
			for(;i < 2; i++){
				var num = me.removeSameNum(current);
				current.push(num);
			}
			current.sort(function(a, b){
				return a > b ? 1 : -1;
			});
			return current;
		},
		randomNum:function(){
			var me = this,
				i = 0, 
				current = [], 
				currentNum, 
				ranNum,
				lotterys = [],
				order = null,
				dataNum = me.getBallData(),
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length,
				name = me.defConfig.name,
				original = [];				

			//增加机选标记
			me.addRanNumTag();

			current = me.checkRandomBets();
			original = [current.join('').split('')];
			lotterys.push(current);

			//生成投注格式
			order = {
				'type':  Games.getCurrentGame().getCurrentGameMethod().getGameMethodName(),
				'original': original,
				'lotterys': lotterys,
				'moneyUnit': Games.getCurrentGameStatistics().getMoneyUnit(),
				'multiple': Games.getCurrentGameStatistics().getMultip(),
				'onePrice': Games.getCurrentGameStatistics().getOnePrice(),
				'num': lotterys.length
			};
			order['amountText'] = Games.getCurrentGameStatistics().formatMoney(order['num'] * order['moneyUnit'] * order['multiple'] * order['onePrice']);
			return order;
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
		}
		
		
	};
	
	
	//继承Danshi
	var Main = host.Class(pros, Danshi);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器上
	P5[defConfig.name] = new Main();
	
	
	
})(phoenix, phoenix.Games.P5.Danshi);

