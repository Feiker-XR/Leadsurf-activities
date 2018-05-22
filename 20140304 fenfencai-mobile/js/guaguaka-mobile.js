



//返回和刷新按钮
(function(){
	$('#J-button-back').click(function(e){
		e.preventDefault();
		history.back(-1);
	});
	$('#J-button-refresh').click(function(){
		location.href = location.href;
	});
})();



//切换卡片类型
(function($){
	var sel = $('#J-select-card-change');
	
	sel.change(function(){
		var index = Number(this.value);
		Fenfencai2014.changeCardType(index);
	});
	
	
})(jQuery);





//卡片
(function($){
	var cardPanel = $('#J-panel-card'),
		namesCn = ['一', '二', '三', '四', '五'],
		cardsData = [{}, {}, {}, {}, {}],
		getCardData = function(callback){
			$.ajax({
				url:'getcards.php',
				cache:false,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						//可刮卡总数量
						var overSum = 0,
							totalSum = 0;
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
							Fenfencai2014.isCardsValid = false;
							$('#J-button-raspall').hide();
						}else{
							Fenfencai2014.isCardsValid = true;
							$('#J-button-raspall').show();
						}
						$.each(data['data'], function(i){
							cardsData[i]['sum'] = this['sum'];
							cardsData[i]['over'] = this['over'];
							
							overSum += this['over'];
							totalSum += this['sum'];
						});
						
						
						
						//更新界面卡片相关信息
						//可刮数量
						$('#J-card-num-over').text(overSum);
						$('#J-card-num-total').text(totalSum);
						
						if(overSum > 100){
							$('#J-button-raspall').text('刮开100张卡片');
							$('#J-wd-text-num').text('100张');
						}else{
							$('#J-button-raspall').text('刮开全部星级卡片');
							$('#J-wd-text-num').text('全部');
						}
						
						
						if($.isFunction(callback)){
							callback(data['data']);
						}
					}else{
						alert(data['msg']);	
					}
				}
			});
		},
		isMobile = function(){
			return (/(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i).test(navigator.userAgent);
		},
		//切换卡片类型
		changeCardType = function(type){
			$('#J-select-card-change').val('' + type);
			$('#J-text-select').text(namesCn[type] + '星卡');
			cardPanel.find('.card-title').text(namesCn[type] + '星卡');
			cardPanel.find('.card-star').removeClass().addClass('card-star card-star' + (type + 1));
			
			
			//在该类型卡下是否显示 下一张
			if(cardsData[type]['over'] > 1){
				$('#J-button-card-next').show();
			}else{
				$('#J-button-card-next').hide();
			}
			
			
			initNewCard(type);
		},
		//生成一张卡片
		initNewCard = function(type){
			var panel = $('#J-card-panel-prize'),data = cardsData,cardMask = $('#J-card-mask');

			var isIPhone = /iPhone/i.test(navigator.userAgent),
				isIPad = /iPad/i.test(navigator.userAgent),
				isAndroid = /android/i.test(navigator.userAgent),
				isIOS = isIPhone  || isIPad;
			
			
			
			cardMask.html('');
			$('#J-card-result').html('');
			panel.find('canvas').remove();
			$('#J-card-mask').show();
			
			
			//卡有效，未过期
			if(Fenfencai2014.isCardsValid){
				if(data[type]['over'] < 1){
					cardMask.html('<img class="card-bg" src="images/card-prize.png" alt="" width="100%;" /><div class="card-word"><h4>您目前没有可刮的'+ namesCn[type] +'星卡</h4></div>');
				}else{
					cardMask.html('<img class="card-bg" src="images/card-prize.png" alt="" width="100%;" /><div class="card-mask"><img src="images/canvas-mask-start.png" width="100%" /></div>');
					if(!isAndroid){
						Fenfencai2014.imgReady(Fenfencai2014.preLoadedImg.src, function(){
							setCanvasMask(panel, cardMask);
						});
					}else{
						cardMask.html('<img class="card-bg" src="images/canvas-mask-result.png" alt="" width="100%;" /><div class="card-mask"><img src="images/canvas-mask-start.png" width="100%" /></div>');
					}
				}
			}else{
			//已过期
				cardMask.html('<img class="card-bg" src="images/fbg-mask-invalid.png" alt="" width="100%;" />');
			}
			
			
			

			
		},
		//设置刮卡层
		setCanvasMask = function(par, cardMask){
			var w = $('#J-card-mask').get(0).offsetWidth,h = $('#J-card-mask').get(0).offsetHeight;
			var el = $('<canvas class="canvas-mask" width="'+ w +'" height="'+ h +'"></canvas>'),
				dom = el.get(0),
				context = dom.getContext('2d'),
				img = Fenfencai2014.preLoadedImg;
				
			context.drawImage(img, 0, 0, w, h);
			context.beginPath();
			context.fillStyle = 'rgba(225, 194, 20, 1)';
			//context.font = "oblique 600 24px 微软雅黑";
			//context.fillText('刮  奖  区', 180, 136, 400);
			
			var panel = par,
				offset = panel.offset(),
				isPressDown = false;
			
			if(isMobile()){
				el.get(0).addEventListener("touchstart",function(e){
					var e = e.touches[0];
					offset = panel.offset();
					isPressDown = true;
					context.globalCompositeOperation = "destination-out";
					context.beginPath();
					e.stopPropagation();
					e.preventDefault();
				}, false);
				el.get(0).addEventListener("touchmove",function(e){
					var e = e.targetTouches[0];
					var x = e.pageX - offset.left,
						y = e.pageY - offset.top;
					if(!isPressDown){
						return;
					}
					//圆形擦除
					context.arc(x, y, 10, 0, 2*Math.PI);
					//矩形擦除
					//context.fillRect(x - 5, y - 5, 10, 10);
					context.strokeStyle = "rgba(250,250,250,0)";
					context.fill();
					context.closePath();
					e.stopPropagation();
					e.preventDefault();
				}, false);
				el.get(0).addEventListener("touchend",function(e){
					var e = e.targetTouches[0];
					isPressDown = false;
					context.globalCompositeOperation = "source-over";
					context.closePath();
				}, false);
			}else{
				el.mousedown(function(e){
					offset = panel.offset();
					isPressDown = true;
					context.globalCompositeOperation = "destination-out";
					context.beginPath();
				}).mousemove(function(e){
					if(!isPressDown){
						return;
					}
					var x = e.pageX - offset.left,
						y = e.pageY - offset.top;
					//圆形擦除
					context.arc(x, y, 10, 0, 2*Math.PI);
					//矩形擦除
					//context.fillRect(x - 5, y - 5, 10, 10);
					context.strokeStyle = "rgba(250,250,250,0)";
					context.fill();
					context.closePath();
				}).mouseup(function(e){
					isPressDown = false;
					context.globalCompositeOperation = "source-over";
					context.closePath();
				});
			}
				
			/**
			el.mousedown(function(e){
				offset = panel.offset();
				isPressDown = true;
				context.globalCompositeOperation = "destination-out";
				context.beginPath();
			}).mousemove(function(e){
				var x = e.pageX - offset.left,
					y = e.pageY - offset.top;
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
			**/
			panel.append(dom);
		},
		//刮开所有卡片
		raspAll = function(){
			$.ajax({
				url:'raspallcards.php',
				cache:false,
				dataType:'json',
				beforeSend:function(){
					$('#J-wd-raspall').hide();
				},
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						var dom = $('#J-wd-raspall-tip');
						
						$('#raspall-cardsnum').text(data['data']['totalNum']);
						$('#raspall-rednum').text(data['data']['redNum']);
						$('#raspall-lotterysnum').text(data['data']['numberNum']);
						
						dom.show();
					}else{
						alert(data['msg']);
					}
				}
			});
		};
		
		//点击刮奖遮罩，获取卡片结果
		cardPanel.on('click', '.card-mask', function(e){
			var mask = $(this),type = Number($('#J-select-card-change').val());
			$.ajax({
				url:'getOneCardResult.php?type=' + type,
				cache:false,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						var result = Number(data['data']['result']),num = 0;
						num = Number($('#J-card-num-over').text()) - 1;
						$('#J-card-num-over').text(num);
						
						cardsData[type]['over'] -= 1;
						
						//如果当前类型卡片数量为0，则隐藏 下一张 按钮
						if(cardsData[type]['over'] < 1){
							$('#J-button-card-next').hide();
						}
						
						if(num > 100){
							$('#J-button-raspall').text('刮开100张卡片');
							$('#J-wd-text-num').text('100张');
						}else{
							$('#J-button-raspall').text('刮开全部星级卡片');
							$('#J-wd-text-num').text('全部');
						}
						
						
						
						if(result == 0){
							$('#J-card-result').html('<img src="images/card-prize0.png" alt="" width="100%;" /><div class="card-word"><h4>恨爹不成刚，怨爸不双江！</h4>命不好，再来一次吧！</div>');
						}
						if(result == 1){
							$('#J-card-result').html('<img src="images/card-prize1.jpg" alt="" width="100%;" /><div class="card-word"><h4>你手气真好！</h4>刮出了<span style="color:#D94C61;">'+ data['data']['info'] +'</span>元吉利红包</div>');
						}
						if(result == 2){
							$('#J-card-result').html('<img src="images/card-prize2.jpg" alt="" width="100%;" /><div class="card-word"><h4>恭喜您！</h4>获得<span style="color:#D94C61;">'+ data['data']['info'] +'</span>个幸运抽奖号码！</div>');
						}
						
						$('#J-card-mask').hide();
						mask.hide();
					}else{
						alert(data['msg']);	
					}
				}
			});
		});
	
	
	//下一张
	$('#J-button-card-next').click(function(e){
		e.preventDefault();
		var type = Number($('#J-select-card-change').val());
		initNewCard(type);
	});
	//刮开全部
	$('#J-button-raspall').click(function(e){
		e.preventDefault();
		Mask.show();
		$('#J-wd-raspall').show();
	});
	$('#J-button-raspall-ajax').click(function(e){
		e.preventDefault();
		raspAll();
	});
	$('#J-button-close-raspall').click(function(e){
		e.preventDefault();
		Mask.hide();
		$('#J-wd-raspall').hide();
		
	});
	
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
	
	
	Fenfencai2014.isCardsValid = true;;
	Fenfencai2014.cardsData = cardsData;
	Fenfencai2014.getCardData = getCardData;
	Fenfencai2014.changeCardType = changeCardType;
})(jQuery);


(function($){
	$(window).load(function(){
		Fenfencai2014.getCardData(function(){
			Fenfencai2014.changeCardType(1);
		});
	});
})(jQuery);



//图像预加载
(function($){
	var imgReady = (function () {
		var list = [], intervalId = null,
	
		// 用来执行队列
		tick = function () {
			var i = 0;
			for (; i < list.length; i++) {
				list[i].end ? list.splice(i--, 1) : list[i]();
			};
			!list.length && stop();
		},
	
		// 停止所有定时器队列
		stop = function () {
			clearInterval(intervalId);
			intervalId = null;
		};
	
		return function (url, ready, load, error) {
			var onready, width, height, newWidth, newHeight,
				img = new Image();
	
			img.src = url;
	
			// 如果图片被缓存，则直接返回缓存数据
			if (img.complete) {
				ready.call(img);
				load && load.call(img);
				return;
			};
	
			width = img.width;
			height = img.height;
	
			// 加载错误后的事件
			img.onerror = function () {
				error && error.call(img);
				onready.end = true;
				img = img.onload = img.onerror = null;
			};
	
			// 图片尺寸就绪
			onready = function () {
				newWidth = img.width;
				newHeight = img.height;
				if (newWidth !== width || newHeight !== height ||
					// 如果图片已经在其他地方加载可使用面积检测
					newWidth * newHeight > 1024
				) {
					ready.call(img);
					onready.end = true;
				};
			};
			onready();
	
			// 完全加载完毕的事件
			img.onload = function () {
				// onload在定时器时间差范围内可能比onready快
				// 这里进行检查并保证onready优先执行
				!onready.end && onready();
	
				load && load.call(img);
	
				// IE gif动画会循环执行onload，置空onload即可
				img = img.onload = img.onerror = null;
			};
	
			// 加入队列中定期执行
			if (!onready.end) {
				list.push(onready);
				// 无论何时只允许出现一个定时器，减少浏览器性能损耗
				if (intervalId === null) intervalId = setInterval(tick, 40);
			};
		};
	})();
	
	
	Fenfencai2014.imgReady = imgReady;
	
})(jQuery);











