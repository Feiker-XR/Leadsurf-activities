





//距离红包截止时间倒计时
(function($){
	//用户无权限或者活动已过期
	if($('#J-panel-money').size() < 1){
		return;
	}
	var doms = $('#J-panel-money-countdown').find('em'),
		timer = null,
		seconds = Number($('#J-value-money-countdown').val()),
		hh,
		mm,
		ss;
	if(doms.size() < 1){
		return;
	}
	timer = setInterval(function(){
		if(seconds <= 0){
			clearInterval(timer);
			//$('#J-panel-money').remove();
		}
		hh = Math.floor(seconds/3600);
		mm = Math.floor(seconds/60%60);
		ss = Math.floor(seconds%60);
		hh = hh < 10 ? '0' + hh : hh;
		mm = mm < 10 ? '0' + mm : mm;
		ss = ss < 10 ? '0' + ss : ss;
		doms.eq(0).html(hh);
		doms.eq(1).html(mm);
		doms.eq(2).html(ss);
		seconds -= 1;
	}, 1000);
})(jQuery);




//距离领取时间倒计时
(function($){
	//用户无权限或者活动已过期
	if($('#J-panel-money').size() < 1){
		return;
	}
	var doms = $('#J-panel-money-countdown-2').find('em'),
		timer = null,
		seconds = Number($('#J-value-money-countdown-2').val()),
		dd,
		hh,
		mm,
		ss;
	if(doms.size() < 1){
		return;
	}
	timer = setInterval(function(){
		if(seconds <= 0){
			clearInterval(timer);
			//$('#J-panel-money').remove();
		}
		dd = Math.floor(seconds/3600/24);
		hh = Math.floor(seconds/3600%24);
		mm = Math.floor(seconds/60%60);
		ss = Math.floor(seconds%60);
		dd = dd < 10 ? '0' + dd : dd;
		hh = hh < 10 ? '0' + hh : hh;
		mm = mm < 10 ? '0' + mm : mm;
		ss = ss < 10 ? '0' + ss : ss;
		doms.eq(0).html(dd);
		doms.eq(1).html(hh);
		doms.eq(2).html(mm);
		doms.eq(3).html(ss);
		seconds -= 1;
	}, 1000);
})(jQuery);



(function($){
	$('.J-hover-tip').hover(function(){
		$(this).parent().find('.base_jmp').show();
	},function(){
		$(this).parent().find('.base_jmp').hide();
	});
})(jQuery);



//领取红包
(function($){
	var isLoading = false;
	$('#J-button-red-get').click(function(e){
		var el = $(this),
			cls = 'red-btn-disable';
		e.preventDefault();
		if(el.hasClass(cls) || isLoading){
			return;
		}
		$.ajax({
			url:'getred.php',
			//dataType:'json',
			cache:false,
			beforeSend:function(){
				isLoading = true;
				el.text('领取中...');
			},
			success:function(data){
				//未登陆
				if($.trim(data).indexOf('<script>') == 0){
					alert('会员登录超时，请重新登录平台');
					top.location = 'index.php?controller=default&action=login';
					return;
				}
				eval('var data = ' + data);
				
				if(Number(data['isSuccess']) == 1){
					//console.log(data['data']['money']);
					el.text('审核中').addClass(cls);
				}else{
					el.text('立即领取');
					alert(data['msg']);
				}
				
			},
			complete:function(){
				isLoading = false;
			}
		});
	});
})(jQuery);



//圆形进度条
(function($){
	var ballMoney = parseInt($('#J-money-text-percentage').text()),
		totalMoney = parseInt($('#J-money-text-total').text());

	if($('#J-panel-money-countdown-2').size() < 1){
		return;
	}
	// var cont = $('#J-money-progress'),
	// 	already = Number($('#J-money-already').val()),
	// 	need = Number($('#J-money-need').val()),
	// 	len = Math.floor(already/need*100),
	// 	i = 0;
	// 	ld = new loading();
	// for(i = 0; i < len; i++){
	// 	ld.toLoadNum(i);
	// }
	// $('#J-money-text-percentage').text(i + '%');
	// 
	
	setTimeout(function(){
		var timeInterVal = null,
			num = 0,
			//需要选择的数值
			currentNum = Math.floor(ballMoney/totalMoney*100),
			c = new loading;
	
		timeInterVal = setInterval(function() {
	
			if(num == currentNum){
	
				clearInterval(timeInterVal);
				timeInterVal = null;
				return;
			}
	
			num++;
	
			c.toLoadNum(num, currentNum, ballMoney, totalMoney);
	
		}, 15);
	}, 3000);


})(jQuery);






//摇奖机
(function($){
	var panel = $('#J-panel-lottery'),
		firstLoad = true,
		triggers = panel.find('.ernie-tab-title li'),
		recordList = $('#J-record-list'),
		objArr = [null, null, null, null, null, null],
		cls = 'current',
		balls = $('#J-panel-balls').find('em'),
		timedom = $('#J-panel-lottery-countdown').find('em'),
		Timer = null,
		timeAdd = 0;
		getFormatTime = function(seconds){
			var result = [],dd,hh,mm,ss;
			dd = Math.floor(seconds/3600/24);
			hh = Math.floor(seconds/3600%24);
			mm = Math.floor(seconds/60%60);
			ss = Math.floor(seconds%60);
			dd = dd < 10 ? '0' + dd : dd;
			hh = hh < 10 ? '0' + hh : hh;
			mm = mm < 10 ? '0' + mm : mm;
			ss = ss < 10 ? '0' + ss : ss;
			result.push(dd);
			result.push(hh);
			result.push(mm);
			result.push(ss);
			return result;
		},
		//获取数据
		getData = function(index){
			$.ajax({
				url:'getlottery.php',
				cache:false,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						if($.trim(data['type']) == 'finish'){
							Fenfencai2014.isFinish = true;
						}
						var data = data['data'];
						
						
						Lottery.setCacheData(data);
						Lottery.setView(data, true);
						
						
						timeAdd = 0;
						clearInterval(Timer);
						Timer = setInterval(function(){
							timeAdd++;
						}, 1000);
						
						
						firstLoad = false;
					}else{
						alert(data['msg']);
					}
				}
			});
		};
	
	
	
	
	//摇奖机
	var Lottery = {
		index:0,
		cacheData:[null,null,null,null,null],
		panel:$('#J-panel-lottery'),
		triggers:$('#J-panel-lottery .ernie-tab-title li'),
		timedoms:$('#J-panel-lottery-countdown em'),
		anmis:[null,null,null,null,null],
		timer:null,
		setView:function(data, isAuto){
			var me = this,
				nameHas = ['一', '二', '三', '四', '五'],
				tabIndex = -1,
				currentIndex = -1,
				currentLi,
				isOld = true;
			
			$.each(data, function(i){
				me.triggers.eq(i).find('.date').text(data[i]['date']);
				me.triggers.eq(i).find('.number').text('第'+ nameHas[i] + '期');
				if(this['iscurrent'] == 1){
					isOld = false;
					currentIndex = i;
					
					if(Fenfencai2014.isFinish){
						me.triggers.eq(i).find('.number').text('第'+ nameHas[i] + '期(已结束)');
					}else{
						me.triggers.eq(i).find('.number').text('第'+ nameHas[i] + '期(当前期)');
					}
					
				}
				if(isOld){
					me.triggers.eq(i).addClass('selected');
				}
			});
			
			
			if(firstLoad){
				currentLi = triggers.parent().find('.current');
				if(currentLi.size() > 1){
					tabIndex = triggers.index(currentLi.get(0));
					me.index = tabIndex;
					me.setTab(tabIndex);
				}else{
				//初始化时，没有高亮选中tab,则默认选中当前期
					me.index = currentIndex;
					me.setTab(currentIndex);
				}
			}else{
				me.setTab(me.index);
			}
			
			clearInterval(me.timer);
			if(me.cacheData[me.index]['time'] > 0 && me.cacheData[me.index]['iscurrent'] == 1){
				me.timer = setInterval(function(){
					if(me.cacheData[me.index]['time'] - timeAdd < 0){
						me.clear();
						getData();
					}else{
						me.setTimes();
					}
				}, 500);
			}else{
				me.timedoms.each(function(i){
					this.innerHTML = '--';;
				});
			}
			
			//console.log(triggers.parent().find('.current').size());
			me.setBalls();
			
			
			me.setText();
			
			me.initList();
			
		},
		setText:function(){
			var me = this,index = me.index,data = me.cacheData[index];
			if(data['iscurrent'] == 1){
				$('#J-lottery-text').text('当前奖期正在进行中，开奖机将于'+data['date']+' '+data['minsec']+'抽取出本期幸运号码，敬请关注');
			}else if(!!data['number'] && $.trim(data['number']) != ''){
				$('#J-lottery-text').text('本期幸运号码已开出，请中奖客户联系在线客服商议派奖事宜！');
			}else{
				$('#J-lottery-text').text('当前奖期尚未开始');
			}
		},
		initList:function(){
			var me = this,list = me.cacheData[me.index]['lotterys'],strArr = [];
			if(!list || list.length < 1){
				recordList.html('<div style="font-size:12px;">您目前没有幸运抽奖号码<br /><a id="J-button-gotoplay" href="#">马上去刮奖获得抽奖号码</a></div>');
			}else{
				$.each(list, function(){
					if(this == me.cacheData[me.index]['number']){
						strArr.push('<span class="high">'+ this +'</span>');
					}else{
						strArr.push('<span>'+ this +'</span>');
					}
				});
				recordList.html(strArr.join(''));
			}
		},
		setBalls:function(){
			var me = this,data = me.cacheData[me.index],numbers,step = 77;
			$.each(me.anmis,function(){
				if(!!this && this.clear){
					this.clear();
				}
			});
			if(!!data['number'] && $.trim(data['number']) != ''){
				numbers = data['number'].split('');
				balls.each(function(i){
					$(this).find('span').hide();
					$(this).find('ul').css({top: step * Number(numbers[i]) * -1});
				});
			}else if(data['iscurrent'] == 1){
				//console.log('动画');
				balls.each(function(i){
					$(this).find('span').hide();
					me.anmis[i] = new AnmiRandomNumber(i);
				});
				
			}else{
				balls.each(function(i){
					$(this).find('span').show();
					$(this).find('ul').css({top: 10000});
				});
			}
		},
		clear:function(){
			clearInterval(this.timer);
		},
		setTimes:function(){
			var me = this,timeArr = getFormatTime(me.cacheData[me.index]['time'] - timeAdd);
			me.timedoms.each(function(i){
				this.innerHTML = timeArr[i];
			});
		},
		setTab:function(index){
			var me = this;
			triggers.removeClass(cls);
			triggers.eq(index).addClass(cls);
			panel.find('.girl').removeClass().addClass('girl girl' + (index + 1));
			
		},
		initDom:function(){
			
		},
		setCacheData:function(data){
			var me = this;
			$.each(this.cacheData, function(i){					
				me.cacheData[i] = data[i];
			});
			
		}
	};
	
	
	
	
	
	
	
	
		
	//tab事件
	triggers.click(function(){
		var index;
		//还未装载数据
		if(!Lottery.cacheData[0]){
			return;
		}
		index = triggers.index(this);
		Lottery.index = index;
		Lottery.setView(index);
	});
	
	//页面滚动到刮奖区域
	$('#J-panel-lottery').on('click', '#J-button-gotoplay', function(e){
		var panel = $('#J-panel-lottery'),top = panel.offset().top;
		$(window).scrollTop(top + 460);
		e.preventDefault();
	});
	
	
	//开奖动画
	var play = function(balls){
		var arr = balls,
			i = 0,
			len = arr.length,
			ball = null;
		for(;i < len; i++){
			(function(j){
				Anmi.timesList[j] = setTimeout(function(){
					if(Anmi.cases[j] && Anmi.cases[j]['clear']){
						Anmi.cases[j].clear();
					}
					Anmi.cases[j] = (new Anmi(j, arr[j]));
				}, j * 500);
			})(i);

		}
		
	};
	var playRandomArr = [null, null, null, null, null, null];
	var playRandom = function(balls){
		$.each(balls, function(i){
			var me = this;
			playRandomArr[i] = new AnmiRandomNumber(i, me);
		});
		
	};
	var AnmiRandomNumber = function(index, num){
		var me = this;
		me.step = 77;
		me.dom = balls.eq(index);
		me.ul = me.dom.find('ul');
		me.num = num;
		me.timer = null;
		me.count = getRandom(0, me.step * 9);
		
		me.timer = setInterval(function(){
			if(me.count >= me.step * 10){
				me.count = 0;
			}
			me.ul.css({top:me.count * -1});
			me.count += 10;
		}, 20);
		
		
		/**
		me.timer = setTimeout(function(){
			var fn = arguments.callee;
			if(me.time >= 1500){
				var dis = me.step * num;
				me.ul.css({top:0}).animate({top: me.step * num * -1}, dis/me.setp*me.time, 'linear');
				clearTimeout(me.timer);
			}else{
				me.ul.css({top:0}).animate({top: me.step * 9 * -1}, me.time, 'linear', function(){
					me.time += 400;
					fn.call();
				});
			}
		}, 0);
		**/
		
	};
	AnmiRandomNumber.prototype.clear = function(){
		var me = this;
		me.ul.stop().css({top:0});
		clearTimeout(me.timer);
	};
	//6个球位置坐标
	var AnmiPos = [[168, 257, 148, 309], [288, 254, 266, 309], [408, 254, 386, 309], [527, 254, 505, 309], [649, 254, 624, 309], [770, 254, 743, 309]];
	var Anmi = function(index, number){
		var me = this,
			pos = AnmiPos[index],
			dom = Anmi.doms[index] || (Anmi.doms[index] = $('<div class="move-ball">').appendTo(panel));
		me.dom = dom;
		dom.stop();
		dom.css({left:pos[0], top:pos[1], width:30, height:30}).show().html('<img width="100%" height="100%" src="image/balls/move-ball-'+ number +'.png" /></div>');
		
		dom.animate({top:160, left:pos[0] - 10, width:50, height:50, borderRadius:25}, 500, function(){
			dom.animate({left:pos[2], top:pos[3], width:80, height:80, borderRadius:40}, 150, function(){
				//Anmi.shake();
				me.shakeSelf(index);
			});
		});
	};
	Anmi.prototype.shakeSelf = function(index){
		var me = this,dom = me.dom,left = AnmiPos[index][2],top = AnmiPos[index][3],
			arrX = [],
			arrY = [],
			i = 0,
			n = 0,
			setpLen = 6,
			len = 6;
			
		for(;i < len; i++){
			arrX[i] = left + getRandom(setpLen * -1, setpLen);
			arrY[i] = top + getRandom(setpLen * -1, 0);
		}
		arrX.push(left);
		arrY.push(top);
		len = arrX.length;
		me.timer = setInterval(function(){
			if(n >= len){
				clearInterval(me.timer);
				dom.css('left', left);
				dom.css('top', top);
			}
			//dom.css('left', arrX[n]);
			dom.css('top', arrY[n]);
			n++;
		}, 30);
		
	};
	Anmi.prototype.clear = function(){
		var me = this;
		me.dom.stop();
	};
	//实例对象存放容器
	Anmi.cases = [null, null, null, null, null, null];
	Anmi.timesList = [null, null, null, null, null, null];
	//页面震动效果
	Anmi.timer = null;
	Anmi.shake = function(){
		var n = 0,
			len = 0,
			setpLen = 10,
			bd = $('body'),
			animArrX = [],
			animArrY = [];
		for(i = 0; i < 6; i++){
			animArrX[i] = getRandom(setpLen * -1, setpLen);
			animArrY[i] = getRandom(0, setpLen);
		}
		animArrX.push(0);
		animArrY.push(0);
		len = animArrX.length;
		Anmi.timer = setInterval(function(){
			if(n >= len){
				clearInterval(Anmi.timer);
			}
			bd.css('paddingLeft', animArrX[n]);
			bd.css('paddingTop', animArrY[n]);
			n++;
		}, 10);
	};
	Anmi.doms = [null, null, null, null, null, null];
	var getRandom = function(min, max){
		return parseInt(Math.random()*(max-min+1) + min); 
	};
	
	
	//投注记录展开与收缩
	$('#J-lottery-number-switch').click(function(e){
		e.preventDefault();
		var panel = $(this).parent(),cls = 'lottery-number-current';
		$('#J-lottery-number-guide').remove();
		if(panel.hasClass(cls)){
			panel.removeClass(cls);
		}else{
			panel.addClass(cls);
		}
	});
	
	
	
	//初次手动加载数据
	getData();
	
	Fenfencai2014.isFinish = false;
	Fenfencai2014.getLotteryData = getData;
	
})(jQuery);



//刮刮卡
(function($){
	var cardPanel = $('#J-panel-card'),
		CardManage = {
			index : -1
		},
		cardsData = [{}, {}, {}, {}, {}],
		getCardData = function(callback){
			$.ajax({
				url:'getcards.php',
				cache:false,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						//可刮卡总数量
						var overSum = 0;
						
						$.each(data['data'], function(i){
							cardsData[i]['overOld'] = this['over'];
							cardsData[i]['isValid'] = 1;
						});
						
						
						
						//卡已失效
						if(Number(data['type']) == 1){
							$.each(data['data'], function(i){
								//保存最开始的可刮卡数
								cardsData[i]['overOld'] = this['over'];
								//卡片是否有效
								cardsData[i]['isValid'] = 0;
								this['over'] = 0;
							});
						}
						
						$.each(data['data'], function(i){
							cardsData[i]['sum'] = this['sum'];
							cardsData[i]['over'] = this['over'];
							
							overSum += this['over'];
						});
						
						
						//更新页面卡信息
						var sumdoms = cardPanel.find('.sum'),
							overdoms = cardPanel.find('.over');
						sumdoms.each(function(i){
							sumdoms.eq(i).text(cardsData[i]['sum']);
							overdoms.eq(i).text(cardsData[i]['over']);
						});
						
						
						//更新 刮开所有卡 还是 刮开100张卡
						if(overSum >= 100){
							$('#J-button-doallcards').text('刮开100张卡片');
							$('#J-wd-panel').find('.button-rasp-all').text('刮开100张卡片');
						}else{
							$('#J-button-doallcards').text('刮开所有卡片');
							$('#J-wd-card-raspall').text('刮开所有卡片');
						}
						
						
						if($.isFunction(callback)){
							callback(cardsData);
						}
						
					}else{
						alert(data['msg']);
					}
				}
			});
		},
		raspCard = function(type){
			$.ajax({
				url:'raspcard.php?type=' + type,
				cache:false,
				dataType:'json',
				success:function(){
					if(Number(data['isSuccess']) == 1){
						Fenfencai2014.getLotteryData();
						Fenfencai2014.reloadRecordList();
						getCardData();
					}else{
						alert(data['msg']);
					}
				}
			});
		},
		raspAllCards = function(callback){
			$.ajax({
				url:'raspallcards.php',
				cache:false,
				dataType:'json',
				beforeSend:function(){
					var wd = $('#J-wd-raspall-loading'),
						top;
					Fenfencai2014.toViewCenter(wd);
					Fenfencai2014.Mask.show();
					
					top = parseInt(wd.css('top'));
					wd.show();
					wd.css({top: top, opacity:0 });
					wd.animate({top: top - 100, opacity: 1}, 400);
				},
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						Fenfencai2014.getLotteryData();
						Fenfencai2014.reloadRecordList();
						//getCardData();
						if($.isFunction(callback)){
							callback(data['data']);
						}
						
					}else{
						alert(data['msg']);
					}
				}
			});
		},
		showRaspAllCardResult = function(data){
			var wd = $('#J-wd-raspall-result'),
				top;
			Fenfencai2014.toViewCenter(wd);
			Fenfencai2014.Mask.show();
			
			$('#J-wd-raspall-result-total').text(data['totalNum']);
			$('#J-wd-raspall-result-red').text(data['redNum']);
			$('#J-wd-raspall-result-lottery').text(data['numberNum']);
					
			top = parseInt(wd.css('top'));
			wd.show();
			wd.css({top: top, opacity:0 });
			wd.animate({top: top - 100, opacity: 1}, 400);
			
			
		},
		//设置弹窗内卡信息
		setWinCardsInfo = function(cardsData){
			var par = $('#J-wd-bd'),
				triggers = par.find('.wd-tab-title li'),
				panels = par.find('.wd-tab-cont'),
				dom,
				doms,
				text = '';
			
			//清空原有的卡列表
			par.find('.card-slider-cont').html('').css('marginLeft', 0);
			
			
			
			$.each(cardsData, function(i){
				var me = this,
					panel = panels.eq(i);
				//更新tab标题上的数量
				dom = triggers.eq(i);
				text = dom.text();
				dom.text(text.replace(/\(\d+\)/, '('+ me['over'] +')'));
				
				//更新面板上的数量
				doms = panels.eq(i).find('.cards-number em');
				doms.each(function(i){
					if(i == 0){
						this.innerHTML = me['sum'];
					}
					if(i == 1){
						this.innerHTML = me['over'];
					}
					if(i == 2){
						this.innerHTML = (me['sum'] - me['overOld']);
					}
				});
				
				//如果没有可刮的卡，则显示不同面板内容
				if(me['overOld'] < 1){
					panel.find('.card-slider-no').show();
					panel.find('.card-slider-have').hide();
				}else{
					panel.find('.card-slider-no').hide();
					panel.find('.card-slider-have').show();
					
					//生成卡
					setNewCard(i);
					
					//只有一张卡的时候，隐藏向后查看下一张按钮
					if(me['overOld'] == 1){
						panel.find('.wd-button, .change').hide();
					}else{
						panel.find('.change').show();
					}
				}
			});
				
		},
		showLoading = function(){
			
		},
		hideLoading = function(){
			
		},
		//生成一张新卡
		//type 类型
		//返回总共元素数量
		setNewCard = function(type){
			var nameHas = ['一', '二', '三', '四', '五'],
				cardsData = Fenfencai2014.cardsData,
				ul = $('#J-wd-bd').find('.wd-tab-cont').eq(type).find('.card-slider-cont'),
				liSize = ul.children().size(),
				li;
			//生成卡数量超过实际可用的卡
			if(liSize >= Fenfencai2014.cardsData[type]['overOld']){
				return liSize;
			}
			//当卡片失效卡时，不生成遮罩
			if(cardsData[type]['isValid'] == 0){
				li = $('<li onselectstart="return false;"><span>'+ nameHas[type] +'星卡</span><div class="card-item-mask-invalid" title="卡片失效"></div></li>');
			}else{
				li = $('<li onselectstart="return false;"><span>'+ nameHas[type] +'星卡</span><div class="card-item-mask" title="撕开刮奖区"></div><div class="card-item-result"></div></li>');
			}
			
			li.appendTo(ul);
			if(!document.all && cardsData[type]['isValid'] == 1){
				setCanvasMask(li);
			}
			return liSize + 1;
		},
		setCanvasMask = function(par){
			var el = $('<canvas width="187" height="140" class="canvas-mask"></canvas>'),
				dom = el.get(0),
				context = dom.getContext('2d'),
				img = Fenfencai2014.preLoadedImg;
				
			context.drawImage(img, 0, 0, 187, 140);
			context.beginPath();
			context.fillStyle = 'rgba(225, 194, 20, 1)';
			context.font = "oblique 600 24px 微软雅黑";
			//context.fillText('刮  奖  区', 180, 136, 400);
			
			
			var panel = par,
				offset = panel.offset(),
				isPressDown = false;
			panel.mousedown(function(e){
				if($.trim(panel.find('.card-item-mask').css('display')) != 'none'){
					return;
				}
				offset = panel.offset();
				isPressDown = true;
				context.globalCompositeOperation = "destination-out";
				context.beginPath();
			}).mousemove(function(e){
				var x = e.pageX - offset.left - 20,
					y = e.pageY - offset.top - 100;
				if(!isPressDown){
					return;
				}
				//console.log(x, y);
				//圆形擦除
				context.arc(x, y, 10, 0, 2*Math.PI);
				//矩形擦除
				//context.fillRect(x - 5, y - 5, 10, 10);
				context.strokeStyle = "rgba(250,250,250,0)";
				context.fill();
				context.closePath();
			}).mouseup(function(){
				isPressDown = false;
				context.globalCompositeOperation = "source-over";
				context.closePath();
			});
			par.append(dom);
		},
		//获取某张卡的结果
		//type 卡类型，几星卡 (0, 1, 2, 3, 4)
		getOneCardResult = function(type, callback){
			if(Fenfencai2014.isLoading){
				return;
			}
			$.ajax({
				url:'getOneCardResult.php?type=' + type,
				cache:false,
				dataType:'json',
				beforeSend:function(){
					Fenfencai2014.isLoading = true;
					showLoading();
				},
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						if($.isFunction(callback)){
							callback(type, data['data']);
						}
						
						//更新数量
						var panel = $('#J-wd-bd').find('.wd-tab-cont').eq(type),
							numsDom = panel.find('.cards-number em'),
							cardsData = Fenfencai2014.cardsData[type];
						cardsData['over'] -= 1;
						
						numsDom.eq(1).text(cardsData['over']);
						numsDom.eq(2).text(cardsData['sum'] - cardsData['over']);
						
						if(cardsData['over'] <= 0){
							panel.find('.change').hide();
						}
						
						Fenfencai2014.reloadRecordList();
						
					}else{
						alert(data['msg']);	
					}
				},
				complete:function(){
					Fenfencai2014.isLoading = false;
				}
			});
		};
	//更新卡信息
	$('#J-button-getcards').click(function(e){
		e.preventDefault();
		getCardData();
	});
	//刮开所有卡
	$('#J-button-doallcards, .button-rasp-all').click(function(e){
		e.preventDefault();
		Fenfencai2014.Window.hide();
		raspAllCards(function(data){
			setTimeout(function(){
				var wd = $('#J-wd-raspall-loading'),
					top;
				Fenfencai2014.Mask.hide();		
				top = parseInt(wd.css('top'));
				wd.show();
				wd.css({top: top, opacity:1 });
				wd.animate({top: top + 100, opacity: 0}, 400, function(){
					wd.hide();
					setTimeout(function(){
						showRaspAllCardResult(data);
					}, 100);
				});
			}, 3000);
			

		});
	});
	//关闭刮开所有卡结果层
	$('#J-button-raspall-result-close, #J-button-raspall-result-close-top').click(function(e){
		e.preventDefault();
		var wd = $('#J-wd-raspall-result'),
			top;
		Fenfencai2014.Mask.hide();		
		top = parseInt(wd.css('top'));
		wd.css({top: top, opacity:1 });
		wd.animate({top: top + 100, opacity: 0}, 400, function(){
			wd.hide();
		});
		Fenfencai2014.getCardsData();
	});
	
	
	//点开刮卡窗口，显示某一类型卡
	cardPanel.on('click', 'a', function(e){
		e.preventDefault();
		var type = Number($(this).attr('data-type'));
		
		//重新获取卡信息
		Fenfencai2014.getCardsData(function(cardsData){
			//设置弹窗面板内卡信息
			setWinCardsInfo(cardsData);
			//显示弹窗
			Fenfencai2014.Window.setCss({width:600});
			Fenfencai2014.Window.show(function(){
				Fenfencai2014.setCardTab(type);
			});
		});
		

	});
	
	Fenfencai2014.isLoading = false;
	Fenfencai2014.getCardsData = getCardData;
	Fenfencai2014.cardsData = cardsData;
	Fenfencai2014.CardManage = CardManage;
	Fenfencai2014.getOneCardResult = getOneCardResult;
	Fenfencai2014.setNewCard = setNewCard;
	
})(jQuery);




//刮刮卡弹窗切换
(function($){
	var panel = $('#J-wd-bd'),
		//设置tab切换
		setCardTab = function(index){
			var triggers = panel.find('.wd-tab-title li'),
				panels = panel.find('.wd-tab-cont');
				
			triggers.removeClass('current').eq(index).addClass('current');
			panels.removeClass('wd-tab-cont-current').eq(index).addClass('wd-tab-cont-current');
			
			Fenfencai2014.CardManage.index = index;
			
			
		};
		
	//触发tab切换
	panel.on('click', '.wd-tab-title li', function(){
		var el = $(this),
			triggers = el.parent().find('li'),
			index = triggers.index(this);
			setCardTab(index);
	});
	
	//左右滚动
	var isSliderMoving = false;
	panel.on('click', '.wd-button-left', function(e){
		var el = $(this),
			par = el.parent(),
			moveCont = par.find('.card-slider-cont'),
			left = parseInt(moveCont.css('marginLeft')),
			addNum = moveCont.find('li').eq(0).outerWidth() + 334;
			e.preventDefault();
			if(!!!left){
				return;	
			}
			if(isSliderMoving){
				return;
			}
			isSliderMoving = true;
			moveCont.animate({marginLeft:left + addNum}, function(){
				isSliderMoving = false;
			});
	});
	panel.on('click', '.wd-button-right, .change', function(e){
		var el = $(this),
			par = el.hasClass('change') ? el.parent().parent() : el.parent(),
			moveCont = par.find('.card-slider-cont'),
			left = parseInt(moveCont.css('marginLeft')),
			addNum = moveCont.find('li').eq(0).outerWidth() + 334,
			//已生成的子元素数量
			liSize = 0,
			index = Fenfencai2014.CardManage.index;
			
		e.preventDefault();
		if(isSliderMoving){
			return;
		}
		
		
		liSize = Fenfencai2014.setNewCard(index);
		if((liSize - 1) * addNum * -1 == left){
			//console.log(liSize);
			return;
		}
		
			
		isSliderMoving = true;
		moveCont.animate({marginLeft:left - addNum}, function(){
			isSliderMoving = false;
		});
	});
	
	
	//剥开刮奖区
	panel.on('mousedown', '.card-item-mask', function(e){
		var el = $(this);
		Fenfencai2014.getOneCardResult(Fenfencai2014.CardManage.index, function(type, data){
			var dom = el.parent().find('.card-item-result');
			dom.addClass('card-prize-' + data['result']);
			//红包
			if(data['result'] == 1){
				dom.html('<div class="card-result-text1-'+ data['result'] +'">您手气真好！</div><div class="card-result-text2-'+ data['result'] +'">刮出了<span>'+ data['info'] +'</span>元吉利红包！</div>');
			}else if(data['result'] == 2){
			//幸运号码
				dom.html('<div class="card-result-text1-'+ data['result'] +'">获得<span>'+ data['info'] +'</span>个幸运抽奖号码！</div><div class="card-result-text2-'+ data['result'] +'">号码详情请到<span>刮奖结果</span>查询</div>');
			}
			
			dom.show();
			el.hide();
		});
	});
	
	
	
	Fenfencai2014.setCardTab = setCardTab;
	
})(jQuery);




//弹窗
(function($){
	var toViewCenter = function(el){
		var el = $(el),bWidth = $('body').width(),bHeight = $('body').height(),wd = $(window),
			h = el.height();
		el.css({'top':wd.scrollTop() + wd.height()/2 - h/2 + 100});
	};
	var Mask = {
		dom: $('#J-wd-mask'),
		bd: $('body'),
		show:function(){
			var me = this,w = me.bd.width(),h = me.bd.height();
			me.dom.css({width: w, height: h, top:0, left:0, opacity: 0}).show();
			me.dom.animate({opacity: .6}, 500);
		},
		hide:function(){
			var me = this;
			me.dom.hide();
		}
	};
	
	
	var Window = {
		dom: $('#J-wd-panel'),
		bd: $('#J-wd-bd'),
		moveNum: 100,
		show:function(callback){
			var me = this,cb = callback || function(){},top = 0;
			toViewCenter(me.dom);
			Mask.show();
			top = parseInt(me.dom.css('top')) + me.moveNum;
			me.dom.show();
			me.dom.css({top: parseInt(me.dom.css('top')) + me.moveNum, opacity:0 });
			me.dom.animate({top: top - (me.moveNum*2), opacity: 1}, 400, function(){
				cb.call(me);
			});
		},
		hide:function(){
			var me = this,top = parseInt(me.dom.css('top'));
			Mask.hide();
			me.dom.animate({top: top + me.moveNum, opacity: 0}, 400, function(){
				me.dom.hide();
			});
			//Fenfencai2014.getCardsData();
		},
		setCss:function(cssObj){
			var me = this;
			me.dom.css(cssObj);
			if(typeof cssObj['width'] != 'undefined'){
				me.dom.css('marginLeft', cssObj['width']/2 * -1);
			}
		},
		setContent:function(html, callback){
			var me = this,cb = callback || function(){};
			me.bd.html(html);
			cb.call(me);
		}
	};
	Window.dom.on('click','.close', function(e){
		e.preventDefault();
		Window.hide();
	});
	
	Fenfencai2014.Mask = Mask;
	Fenfencai2014.Window = Window;
	Fenfencai2014.toViewCenter = toViewCenter;
	
})(jQuery);



//记录列表
(function($){
	var iframe = $('#J-record-iframe'),
		reLoad = function(){
			iframe.attr('src', iframe.attr('data-src') + '?rd=' + Math.random());
		};
	
	Fenfencai2014.reloadRecordList = reLoad;
	
})(jQuery);




//用户符合条件，欢迎弹窗
(function($){
	var welcome = function(){
		setTimeout(function(){
			var wd = $('#J-wd-welcome'),
				top;
			Fenfencai2014.toViewCenter(wd);
			Fenfencai2014.Mask.show();
							
			top = parseInt(wd.css('top'));
			wd.css('marginLeft', -300);
			wd.show();
			wd.css({top: top, opacity:0 });
			wd.animate({top: top - 100, opacity: 1}, 400);
			
			$('#J-wd-welcome-close, #J-wd-welcome-close-top').click(function(e){
				e.preventDefault();
				var wd = $('#J-wd-welcome'),
					top;
				Fenfencai2014.Mask.hide();		
				top = parseInt(wd.css('top'));
				wd.css({top: top, opacity:1 });
				wd.animate({top: top + 100, opacity: 0}, 400, function(){
					wd.hide();
				});
			});
		}, 6000);
	};
	
	Fenfencai2014.welcome = welcome;
	
})(jQuery);
















