﻿
//选二任选二中二复式
(function(host, GameMethod, undefined){
	var defConfig = {
		//名称
		name:'xuansan.qiansanzhixuan.zhixuanfushi',
		//玩法提示
		tips:'',
		//选号实例
		exampleTip: ''
	},
	Games = host.Games,
	LLN115 = host.Games.LLN115.getInstance();
	
	//定义方法
	var pros = {
		init:function(cfg){
			var me = this;
			
			//初始化冷热号事件
			me.initHotColdEvent();
		},
		//复位选球数据
		rebuildData:function(){
			var me = this;
			me.balls = [
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
						[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
						];
		},
		buildUI:function(){
			var me = this;
			me.container.html(html_all.join(''));
		},
		makePostParameter: function(original){
			var me = this,
				result = [],
				current = [],
				saveArray = [],
				len = original.length,
				i = 0;
			for (; i < len; i++) {
				saveArray = [];
				current = original[i];
				for (var k = 0; k < current.length; k++) {
					if(Number(current[k]) < 10){
						saveArray.push('0' + current[k]);
					}else{
						saveArray.push(current[k]);
					}
				};
				result.push(saveArray.join(' '));
			};
			return result.join(',') + ',-,-';
		},
		//检测选球是否完整，是否能形成有效的投注
		//并设置 isBallsComplete 
		checkBallIsComplete: function(){
			var me = this,
				ball = me.getBallData(),
				i = 0,
				len = ball[0].length,
				firstNum = 0,
				secondNum = 0,
				thirdNum = 0;

			for(;i < len;i++){
				if(ball[0][i] > 0){
					firstNum++;
				}
				if(ball[1][i] > 0){
					secondNum++;
				}
				if(ball[2][i] > 0){
					thirdNum++;
				}
			}
			//二重号大于1 && 单号大于3
			if(firstNum >= 1 && secondNum >= 1 && thirdNum >= 1){
				return me.isBallsComplete = true;
			}
			return me.isBallsComplete = false;
		},
		//过滤结果集合中的双重号和豹子号
		filterErrorData: function(arr, len, num, saveArray){
			var me = this,
				saveArray = saveArray || [],
				num = num || 0,
				len = len || arr.length;

			if(num == len){
				return saveArray;
			}else{
				if(arr[num][0] != arr[num][1] && arr[num][0] != arr[num][2] && arr[num][1] != arr[num][2]){
					saveArray.push(arr[num]);
				}
				num++;
				return me.filterErrorData(arr, len, num, saveArray);
			}
		},
		//获取总注数/获取组合结果
		//isGetNum=true 只获取数量，返回为数字
		//isGetNum=false 获取组合结果，返回结果为单注数组
		getLottery:function(isGetNum){
			var me = this,data = me.getBallData(),
				i = 0,len = data.length,row,isEmptySelect = true,
				_tempRow = [],
				j = 0,len2 = 0,
				result = [],
				//总注数
				total = 1,
				rowNum = 0;
			
			//检测球是否完整
			for(;i < len;i++){
				result[i] = [];
				row = data[i];
				len2 = row.length;
				isEmptySelect = true;
				rowNum = 0;
				for(j = 0;j < len2;j++){
					if(row[j] > 0){
						isEmptySelect = false;
						//需要计算组合则推入结果
						if(!isGetNum){
							result[i].push(j);
						}
						rowNum++;
					}
				}
				if(isEmptySelect){
					//alert('第' + i + '行选球不完整');
					me.isBallsComplete = false;
					return [];
				}
				//计算注数
				total *= rowNum;
			}
			me.isBallsComplete = true;
			//返回注数
			if(isGetNum){
				return total;
			}
			
			if(me.isBallsComplete){
				result = me.filterErrorData(me.combination(result));
				//组合结果
				return result;
			}else{
				return [];
			}
		},
		//生成单注随机数
		createRandomNum: function(){
			var me =this,
				current = [],
				arr = [],
				len = me.getBallData().length,
				rowLen = me.getBallData()[0].length;

			//建立索引数组
			for (var i = rowLen - 1; i >= 0; i--) {
				if(i > 0){
					arr.push(i);
				}
			};	
			//随机数
			for(var k=0;k < len; k++){
				var ranDomNum = Math.floor(Math.random() * arr.length);
				current[k] = [arr[ranDomNum]];
				arr.splice(ranDomNum, 1);
			};
			return current;
		}
	};
	
	//html模板
	var html_head = [];
		//头部
		html_head.push('<div class="number-select-title balls-type-title clearfix">');
			html_head.push('<ul class="function-select-title game-frequency-type">');
				html_head.push('<li class="lost" data-type="lost">遗漏</li>');
				html_head.push('<li class="fre" data-type="fre">冷热</li>');
			html_head.push('</ul>');
			html_head.push('<ul class="function-select-content">');
				html_head.push('<li class="game-frequency-lost-length"><a href="javascript:void(0);" data-type="currentFre" class="periodcurrentFre">当前遗漏</a><a data-type="maxFre" href="javascript:void(0);" class="periodmaxFre">最大遗漏</a></li>');
				html_head.push('<li style="display:none" class="game-frequency-fre-length"><a href="javascript:void(0);" data-type="30" class="period30">30期</a><a href="javascript:void(0);" data-type="60" class="period60">60期</a><a href="javascript:void(0);" data-type="100" class="period100">100期</a></li>');
			html_head.push('</ul>');
		html_head.push('</div>');
		html_head.push('<div class="number-select-content">');
		html_head.push('<ul class="ball-section">');
		//每行
	var html_row = [];
			html_row.push('<li>');
			html_row.push('<div class="ball-title">');
			html_row.push('<strong><#=title#></strong>');
			html_row.push('<span>当前遗漏</span>');
			html_row.push('</div>');
			html_row.push('<ul class="ball-content">');
			$.each([0,1,2,3,4,5,6,7,8,9,10,11], function(i){
				if(i == 0){
					html_row.push('<li style="display:none;"><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>');	
				}else{
					if(i < 10){
						html_row.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value=' + '0' + this +'&row=<#=row#>" class="ball-number">' + '0' +this+'</a><span class="ball-aid-hot">0</span></li>');
					}else{
						html_row.push('<li class="arrange"><a href="javascript:void(0);" data-param="action=ball&value='+ this +'&row=<#=row#>" class="ball-number">'+this+'</a><span class="ball-aid-hot">0</span></li>');
					}
				}
			});
			html_row.push('</ul>');
			html_row.push('<div class="ball-control">');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=all&start=1" href="javascript:void(0);">全</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=big&start=1" href="javascript:void(0);">大</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=small&start=1" href="javascript:void(0);">小</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=odd" href="javascript:void(0);">奇</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=even&start=1" href="javascript:void(0);">偶</a>');
				html_row.push('<a data-param="action=batchSetBall&row=<#=row#>&bound=none" href="javascript:void(0);">清</a>');
			html_row.push('</div>');
		html_row.push('</li>');
	var html_bottom = [];
		html_bottom.push('</ul>');
		html_bottom.push('</div>');
		//拼接所有
	var html_all = [],rowStr = html_row.join('');
		html_all.push(html_head.join(''));
		$.each(['第一位','第二位','第三位'], function(i){
			html_all.push(rowStr.replace(/<#=title#>/g, this).replace(/<#=row#>/g, i));
		});
		html_all.push(html_bottom.join(''));
		
	
	
	//继承GameMethod
	var Main = host.Class(pros, GameMethod);
		Main.defConfig = defConfig;
	//将实例挂在游戏管理器实例上
	LLN115[defConfig.name] = new Main();
	
})(phoenix, phoenix.GameMethod);

