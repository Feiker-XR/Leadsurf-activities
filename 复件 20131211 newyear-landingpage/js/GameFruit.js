

//水果机
(function(host, name, Event, $, undefined){
	var defConfig = {
		//获取水果列表
		items:'#J-panel .game-item',
		currentCls:'game-item-current',
		//起始索引号
		index:0,
		//加速开始速度
		startSpeed:300,
		//加速增量
		startSpeedNum:-35,
		//幻影尾巴1class
		tailCls1:'game-item-tail1',
		//幻影尾巴2class
		tailCls2:'game-item-tail2'
		
	},
	Tween = host.Tween,
	//d 运行长度参数
	//i 减速段增量
	//last 开始减速距离
	//通过相互调配，达到最佳模拟效果和特殊号码效果
	params = {
		//index:10
		'1':{d:1050,i:10,last:50},
		'2':{d:1800,i:10,last:50},
		'3':{d:2000,i:10,last:50},
		'4':{d:2200,i:10,last:50},
		//index:0
		'5':{d:1600,i:10,last:50},
		
		'6':{d:2700,i:10,last:50},
		'7':{d:2900,i:10,last:50},
		'8':{d:3200,i:10,last:50},
		//index:4
		'9':{d:2500,i:10,last:50},
		
		'10':{d:7300,i:10,last:50},
		'11':{d:7800,i:20,last:50},
		'12':{d:8400,i:20,last:50},
		//index:8
		'13':{d:6800,i:20,last:50},
		'14':{d:14500,i:30,last:50}
		
	};
	
	var pros = {
		init:function(cfg){
			var me = this;
			me.index = cfg.index;
			me.runing = false;
			me.testTimes = 0;
			me.timer = null;
			//空转圈数
			me.emptyNum = 3;
			//空转速度
			me.emptySpeed = 15;
			//空执行时的计数器
			me.emptyI = 0;
			//速度增减量
			me.i = 0;
			//普通段速度增量
			me.iBefore = 0;
			//减速段速度增量
			me.iAfter = 10;
			//距离结尾多少开始手动减速
			me.lastDis = 50;
			//步长增值
			me.tt = 2;
			
			me.startSpeed = cfg.startSpeed;
			me.startSpeedNum = cfg.startSpeedNum;
			me.startRunTimes = 0;
			//是否启用幻影尾巴
			me.isTail = cfg.isTail;
			
			
			me._t = 0;
			me._b = 40;
			me._c = 500;
			me._d = 1000;
			
		},
		getItems:function(){
			var me = this,cfg = me.defConfig,list = $(cfg.items);
			if(me.items){
				return me.items;
			}
			me.items = [];
			list.each(function(){
				me.items.push($(this));
			});
			return me.items;
		},
		start:function(targetIndex){
			var me = this;
			if(me.runing){
				return;
			}
			//console.log(targetIndex);
			me.targetIndex = targetIndex;
			me.reSet();
			//me.runEmpty();
			me.runEmptyStart();
		},
		reSet:function(){
			var me = this;
			clearTimeout(me.timer);
			me.i = 0;
			me.emptyI = 0;
			me._t = 0;
		},
		//加速空转
		runEmptyStart:function(){
			var me = this;
			me.runing = true;
			
			me.timer = setTimeout(function(){
				me.runActon();
				me.startRunTimes += 1;
				me.startSpeed += me.startSpeedNum;
				if(me.startSpeed <= 0){
					me.runing = false;
					clearTimeout(me.timer);
					me.startSpeed = me.defConfig.startSpeed;
					me.startRunTimes = 0;
					me.runEmpty(me.startRunTimes);
				}else{
					me.runEmptyStart();
				}
			}, me.startSpeed);
			
		},
		//极速空转
		runEmpty:function(addNum){
			var me = this,len = me.getItems().length,target,addNum = addNum || 0;
			me.runing = true;
			//开启尾巴
			me.switchTail(true);
			
			me.timer = setTimeout(function(){
				me.runActon();
				me.emptyI += 1;
				
				if(me.emptyI <= me.emptyNum*len){
					me.timer = setTimeout(function(){
						me.runEmpty();
					}, me.emptySpeed);
				}else{
					clearTimeout(me.timer);
					
					
					//关闭尾巴
					me.switchTail(false);
					
					if(me.targetIndex - me.index < 0){
						target = len + me.targetIndex - me.index;
					}else{
						target = me.targetIndex - me.index;
					}
					
					target += 1;
					target += addNum;
					
					target = target >= len ? len : target;
					
					
					$('#J-text-move').text(target);
					//console.log('移动量：' + target);
					

					me._d = params[''+target]['d'];
					me.iAfter = params[''+target]['i'];
					me.lastDis = params[''+target]['last'];
					
					
					me.run();
				}
			}, me.emptySpeed);
		},
		//幻影尾巴
		runTail:function(){
			var me = this,t1 = me.getTail(1),t2 = me.getTail(2),t3 = me.getTail(3),cls1 = me.defConfig.tailCls1,cls2 = me.defConfig.tailCls2;
			t1.addClass(cls1);
			t2.removeClass(cls1).addClass(cls2);
			t3.removeClass(cls2);
		},
		getTail:function(i){
			var me = this,index = me.index,items = me.getItems(),len = items.length,i = index - i;
			i = i < 0 ? len + i : i;
			//console.log(i);
			return items[i];
		},
		switchTail:function(isOpen){
			var me = this,cls1 = me.defConfig.tailCls1,cls2 = me.defConfig.tailCls2;
			me.isTail = !!isOpen;
			if(!!!isOpen){
				me.getTail(1).removeClass(cls1);
				me.getTail(2).removeClass(cls2);
			}
		},
		run:function(){
			var me = this,list = me.getItems(),time = Tween.Quint.easeInOut(me._t, me._b, me._c, me._d);
			me.runing = true;
			me.timer = setTimeout(function(){
				if(time - me._c < me.lastDis){
					me.i += me.iAfter;
				}else{
					me.i += me.iBefore;
				}
				
				me.runActon();
				
				me._t += me.tt;
				me._t += me.i;
				if(me._t < me._d){
					me.run();
				}else{
					//console.log('索引值：' + me.index);
					//console.log('空圈数：' + Math.floor(me.testTimes/24));
					//console.log('-----------------------------');
					//doit();
					clearTimeout(me.timer);
					
					
					try{
						//me.getMedia().pause();
						//me.getMedia().currentTime = 0;
					}catch(e){
					}
					
					
					
					
					/**自动测试代码
					$('#J-text-result').text(me.index);
					if(Number(me.index) !== Number($('#J-text-target').text())){
						alert('发生错误');
					}
					//console.log('结束值：' + me.index);
					//console.log('----------------------');
					**/
					
					
					
					//强制纠正
					me.cancelCurrent();
					me.index = me.targetIndex;
					me.setCurrent(me.index);
					
					me.runing = false;
					
					me.fireEvent('afterRunFinish');
				}
				
			}, time);
		},
		runActon:function(){
			var me = this,len = me.getItems().length;
			me.cancelCurrent();
			me.index += 1;
			if(me.index >= len){
				me.index = 0;
			}
			me.setCurrent(me.index);
			me.testTimes += 1;
			
			if(me.isTail){
				me.runTail();
			}
		},
		getCurrentClass:function(){
			return this.defConfig.currentCls;
		},
		//取消当前高亮
		cancelCurrent:function(){
			var me = this,list = me.getItems(),cls = me.getCurrentClass();
			if(list[me.index]){
				list[me.index].removeClass(cls);
			}
		},
		//设置一个高亮
		//index 
		setCurrent:function(index){
			var me = this,list = me.getItems(),cls = me.getCurrentClass();
			list[index].addClass(cls);
			
			try{
				me.getMedia().currentTime = 500;
				me.getMedia().play();
			}catch(e){
			}
		},
		getMedia:function(){
			var me = this;
			return (me.media || (me.media = document.getElementById('J-media')));
		}

	};

	var Main = host.Class(pros, Event);
		Main.defConfig = defConfig;
	host[name] = Main;

})(phoenix, "GameFruit", phoenix.Event, jQuery);







