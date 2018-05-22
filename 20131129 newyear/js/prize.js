
(function($){
	//充值结束倒计时
	var day = $('#global-time-day'),
		hour = $('#global-time-hour'),
		minute = $('#global-time-minute'),
		second = $('#global-time-second'),
		dayNum,
		hourNum,
		minuteNum,
		secondNum,
		timer,
		//总秒数
		timeTotal = Number(day.text()) * 24 * 3600 + Number(hour.text()) * 3600 + Number(minute.text()) * 60 + Number(second.text());
	if(timeTotal <= 0){
		return;
	}
	
	timer = setInterval(function(){
		dayNum = Math.floor(timeTotal/3600/24);
		hourNum = Math.floor(timeTotal/3600%24);
		minuteNum = Math.floor(timeTotal/60%60);
		secondNum = Math.floor(timeTotal%60);
		day.text(dayNum);
		hour.text(hourNum);
		minute.text(minuteNum);
		second.text(secondNum);
		if(timeTotal <= 0){
			clearInterval(timer);
			//$('#J-button-getRed').text('活动已结束').removeClass('btn-receive-current');
			location.href = location.href;
		}
		timeTotal--;
	}, 1000);
})(jQuery);
	


(function($){
	var mask = phoenix.Mask.getInstance(),
		tip = phoenix.Tip.getInstance(),
		currentWd = null; 


	//领取红包
	var button = $('#J-button-getRed');
	button.click(function(e){
		//可领取
		if(button.hasClass('btn-receive-current')){
			$.ajax({
				url:'getred.json',
				cache:false,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						var wd = $('#J-wd-getred');
						$('#J-getRed-num').text(data['data']);
						//console.log(data);
						showWd(wd);
					}else{
						alert(data['msg']);
					}
				}
			});
		}
	});





	//查看规则
	var buttonRule = $('#J-button-rule, #J-button-rule-all'),wdRule = $('#J-wd-rule');
	buttonRule.click(function(e){
		showWd(wdRule);
	});
	
	
	//公共关闭窗口按钮
	$('.pop .ico-close, .pop .btn-close, .btn-click, .control-refresh').click(function(){
		var el = $(this);
		
		if(el.hasClass('control-close')){
			var wd = $('#J-wd-submit-not');
			showWd(wd);
		}else if(el.hasClass('control-close-cancel')){
			$('#J-wd-submit-not').hide();
		}else if(el.hasClass('control-close-confirm')){
			$('#J-wd-submit-not').hide();
			$('#J-wd-item').hide();
			hideWd();
		}else if(el.hasClass('control-refresh')){
			location.href = location.href;
		}else{
			hideWd();
		}
	});
	function showWd(dom){
		phoenix.util.toViewCenter(dom);
		mask.show();
		dom.show();
		currentWd = dom;
	}
	function hideWd(){
		if(currentWd && currentWd.hide){
			currentWd.hide();
			mask.hide();
		}
	}
	
	
	//中奖名单滚动
	var tab = new phoenix.Slider({
		par:'#J-cont-tab',
		panels:'.cont-tab-panel',
		sliderIsCarousel:true
	});
	
	//右侧导航菜单高亮
	var menuList = $('#J-right-menu li');
	var scrollList = [0, 600, 1500];
	var menuIndex = -1;
	$(window).scroll(function(){
		checkScroll();
	});
	menuList.click(function(){
		$('body,html').animate({scrollTop:scrollList[menuList.index(this)]},500);
	});
	function checkScroll(){
		var top = $(window).scrollTop(),index = 0;
		index = top >= 600 ? 1 : 0;
		index = top >= 1300 ? 2 : index;
		if(menuIndex != index){
			menuIndex = index;
			menuList.removeClass('current');
			menuList.eq(index).addClass('current');
		}
	}
	setTimeout(function(){
		checkScroll();
	}, 500);
	
	
	
	
	
	//抽奖部分
	//奖品序号对应表
	var prizeSort = [1, 13, 2, 7, 4,   6, 5, 9, 2,   10, 1, 14, 1, 11,   1, 12, 3, 8];
	//特等奖位置
	var prizeBigPos = [0,10,12,14];
	//中奖列表数据
	var prizeData = {};
	$.each($('#J-items-list > li'), function(){
		var el = $(this),id = $.trim(el.attr('data-id')),title = $.trim(el.text()),value = Number(el.attr('data-value')),type = Number(el.attr('data-type')),img = $.trim(el.attr('data-img'));
		prizeData[id] = {id:id,title:title,value:value,type:type,img:img};
	});

	var gameButton = $('#J-button-start'),resultid = -1;
	var game = new phoenix.GameFruit({
								items:'#J-game-panel .game-item',
								expands:{
									getCurrentClass:function(){
										var me = this;
										return 'current-' + me.index;
									}
								}
				});
	function getPizeIndexById(id){
		var len = prizeSort.length,i = 0;
		for(;i < len;i++){
			if(id === prizeSort[i]){
				return i;
			}
		}
	}
	function getPizeByValue(value){
		var p,arr = [];
		for(p in prizeData){
			if(prizeData.hasOwnProperty(p) && prizeData[p]['value'] == value){
				arr.push(prizeData[p]);
			}
		}
		return arr;
	}
	function getRandom(){
		return Math.floor(Math.random() * 3);
	}
	function play(id){
		game.start(id);
	}
	//玩游戏
	gameButton.click(function(){
		if(game.runing){
			return;
		}
		if(Number($('#J-game-user-times').text()) < 1){
			return;
		}
		$.ajax({
			url:'prize.json',
			cache:false,
			beforeSend:function(){
				$('#J-button-to-play-game').hide();
				$('#J-button-change-integration').hide();
			},
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var id = data['data']['id'],times = data['data']['times'],numsDom = $('#J-wd-bigPrize-nums span');
					$('#J-game-user-times').text(times);
					$('#J-user-info-game-times').text(times);
					//特别奖有多个位置
					if(id === 1){
						play(prizeBigPos[getRandom()]);
						var nums = data['data']['number'].split('');
						numsDom.each(function(i){
							this.innerHTML = nums[i];
							if(i > 4){
								$(this).show();
							}
						});
						if(nums.length < 6){
							numsDom.eq(numsDom.size() - 1).hide();;
						}
					}else{
						play(getPizeIndexById(id));	
					}
				}else{
					alert(data['msg']);
				}
			}
			
		});
	});	
		
	game.addEvent('afterRunFinish', function(){
		var me = this,id = prizeSort[me.index],prizeItem = prizeData[id],wd,itemArr = [],strArr = [],cls = '';
		
		$('#J-button-to-play-game').show();
		$('#J-button-change-integration').show();
		
		//虚拟物品类型
		if(prizeItem['type'] == 0){
			//乐利特等奖
			if(prizeItem['id'] == 1){
				wd = $('#J-wd-bigPrize');
				showWd(wd);
			}else{
			//积分类型
				wd = $('#J-wd-int');
				$('#J-wd-int-num').text(prizeItem['value']);
				showWd(wd);
			}
		}else{
		//实物类型
			selectItems(id);
						
		}
	});
	
	
	
	//选择同等价值实体物品
	function selectItems(id){
		//实物类型
			//同等奖品价值
			hideWd();
			var strArr = [];
			var prizeItem = prizeData[id];
			var itemArr = getPizeByValue(prizeItem['value']);
			var wd = $('#J-wd-item');
			$('#J-wd-item-img').attr('src', prizeItem['img']);
			$.each(itemArr, function(){
				cls = prizeItem['id'] == this['id'] ? 'current' : '';
				strArr.push('<a class="wd-item-list-select '+ cls +'" href="javascript:void(0);" data-img="'+ this['img'] +'" data-title="'+ this['title'] +'" data-id="'+ this['id'] +'"><img src="'+ this['img'] +'" alt=""><span>'+ this['title'] +'<br>价值：<em>'+ this['value'] +'</em>元</span></a>');
			});
			$('#J-wd-item-list').html(strArr.join(''));
			$('#J-wd-item-money').text(prizeItem['value']);
			$('#J-wd-item-title').text(prizeItem['title']);
			$('#J-wd-selectItem-id').val(prizeItem['id']);
			showWd(wd);
	}
	
	window.selectItems = selectItems;
	
	
	$('#J-wd-item').on('click', '.wd-item-list-select', function(){
		var el = $(this),cls = 'current';
		$('#J-wd-item-img').attr('src', el.attr('data-img'));
		$('#J-wd-item-title').text(el.attr('data-title'));
		$('#J-wd-selectItem-id').val(el.attr('data-id'));
		el.parent().find('.wd-item-list-select').removeClass(cls);
		el.addClass(cls);
	});
	var subIsLoading = false;
	var subMobile = $('#J-wd-item-mobile');
	var subEmail = $('#J-wd-item-email');
	new phoenix.Input({el:subMobile,defText:'手机号码'});
	new phoenix.Input({el:subEmail,defText:'电子邮件'});
	function checkSubMobile(){
		var mobile = $.trim(subMobile.val()),isPass = false;
		if(!(/^1\d{10}/).test(mobile)){
			$('#J-error-mobile').show();
			isPass = false;
		}else{
			isPass = true;
			$('#J-error-mobile').hide();
		}
		return isPass;
	}
	function checkSubEmail(){
		var email = $.trim(subEmail.val()),isPass = false;
		if(!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(email)){
			$('#J-error-email').show();
			isPass = false;
		}else{
			isPass = true;
			$('#J-error-email').hide();
		}
		return isPass;
	}
	subMobile.blur(checkSubMobile);
	subEmail.blur(checkSubEmail);
	$('#J-wd-item-submit').click(function(e){
		var mobile = $.trim(subMobile.val()),email = $.trim(subEmail.val()),itemId = Number($('#J-wd-selectItem-id').val());
		if(subIsLoading || !checkSubMobile() || !checkSubEmail()){
			return;
		}
		$.ajax({
			url:'submitcontact.json',
			dataType:'json',
			data:{mobile:mobile,email:email,itemid:itemId},
			method:'post',
			cache:false,
			sendBefore:function(){
				subIsloading = true;
			},
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var wd = $('#J-wd-submit-success');
					hideWd();
					showWd(wd);
				}else{
					alert(data['msg']);
				}
			},
			complete:function(){
				subIsloading = false;
			}
		});
	});
	
	
	//查看积分明细
	$('#J-button-viewdetail, #J-button-view-integration, #J-button-viewdetail-3').click(function(){
		var wd = $('#J-wd-integration-list'),iframe = $('#J-iframe-integration');
		iframe.attr('src', iframe.attr('data-src') + '?' + Math.random());
		hideWd();
		showWd(wd);
	});
	
	//查看中奖结果
	$('#J-button-view-result').click(function(){
		var wd = $('#J-wd-result-list'),iframe = $('#J-iframe-result');
		iframe.attr('src', iframe.attr('data-src') + '?' + Math.random());
		hideWd();
		showWd(wd);
	});
	
	
	//积分换抽奖机会
	$('#J-button-change-integration, #J-button-change-2').click(function(){
		//获取最新积分信息
		$.ajax({
			url:'getintegration-info.json',
			dataType:'json',
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					$('#J-user-integration').text(data['data']);
					hideWd();
					showWd($('#J-wd-change'));
				}else{
					alert(data['msg']);
				}
			}
		});

	});
	$('#J-button-change-submit').click(function(){
		var num = Number($('#J-input-change-num').val());
		if(num < 1){
			$('#J-wd-change-input-num').show();
			$('#J-input-change-num').focus();
			return;
		}
		$('#J-wd-change-input-num').hide();
		$.ajax({
			url:'changeintegration.json',
			dataType:'json',
			cache:false,
			data:{num:num},
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var addtimes = data['data']['addtimes'],times = data['data']['times'];
					hideWd();
					$('#J-change-success-num').text(addtimes);
					$('#J-game-user-times').text(times);
					$('#J-user-info-game-times').text(times);
					showWd($('#J-wd-change-success'));
				}else{
					hideWd();
					showWd($('#J-wd-change-fail'));
				}
			}
			
		});
	});
	$('#J-input-change-num').keyup(function(){
		this.value = this.value.replace(/[^\d]/g, '');
	}).blur(function(){
		var v = Number(this.value),maxnum = Math.floor(Number($('#J-user-integration').text())/5);
		this.value = v > maxnum ? maxnum : v;
		if(Number(this.value) > 0){
			$('#J-wd-change-input-num').hide();
		}else{
			$('#J-wd-change-input-num').show();
		}
	});
	
	
	//积分兑换游戏币
	$('#J-button-change-game').click(function(){
		$.ajax({
			url:'integration-game.json',
			dataType:'json',
			cache:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var num = Number(data['data']);
					hideWd();
					$('#J-wd-change-game-num').text(num);
					$('#J-wd-change-game-num-money').text(num);
					
					updateUserInfo();
					
					showWd($('#J-wd-change-game-success'));
				}else{
					hideWd();
					showWd($('#J-wd-change-game-success-old'));
				}
			}
		});
	});
	
	
	//活动3倒计时
	var p3Timer;
	var p3Day = $('#J-part3-day'),
		p3Hour = $('#J-part3-hour'),
		p3Minute = $('#J-part3-minute'),
		p3Second = $('#J-part3-second'),
		p3DayNum = Number(p3Day.val()),
		p3HourNum = Number(p3Hour.val()),
		p3MinuteNum = Number(p3Minute.val()),
		p3SecondNum = Number(p3Second.val()),
		p3TimeTotal = p3DayNum * 24 * 3600 + p3HourNum * 3600 + p3MinuteNum * 60 + p3SecondNum;
	if(p3TimeTotal <= 0){
		return;
	}
	
	p3Timer = setInterval(function(){
		p3DayNum = Math.floor(p3TimeTotal/3600/24);
		p3HourNum = Math.floor(p3TimeTotal/3600%24);
		p3MinuteNum = Math.floor(p3TimeTotal/60%60);
		p3SecondNum = Math.floor(p3TimeTotal%60);
		p3DayNum = p3DayNum < 10 ? '0' + p3DayNum : '' + p3DayNum;
		p3HourNum = p3HourNum < 10 ? '0' + p3HourNum : '' + p3HourNum;
		p3MinuteNum = p3MinuteNum < 10 ? '0' + p3MinuteNum : '' + p3MinuteNum;

		$('#J-p3-day-dom1').text(p3DayNum.split('')[0]);
		$('#J-p3-day-dom2').text(p3DayNum.split('')[1]);
		$('#J-p3-hour-dom1').text(p3HourNum.split('')[0]);
		$('#J-p3-hour-dom2').text(p3HourNum.split('')[1]);
		$('#J-p3-minute-dom1').text(p3MinuteNum.split('')[0]);
		$('#J-p3-minute-dom2').text(p3MinuteNum.split('')[1]);

		if(p3TimeTotal <= 0){
			clearInterval(p3Timer);
			//$('#J-button-getRed').text('活动已结束').removeClass('btn-receive-current');
			location.href = location.href;
		}
		p3TimeTotal--;
	}, 1000);
	
	
	//排行榜tab
	new phoenix.Tab({par:'#J-p3-tab',triggers:'.tab-title li',panels:'.tab-content li',eventType:'click'});
	
	
	//查看礼包
	$('#J-button-view-all-items').click(function(){
		
		$.ajax({
			url:'viewgifts.json',
			dataType:'json',
			cache:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var wd = $('#J-all-items-list'),list = data['data'],strArr = [];
					$.each(list, function(){
						strArr.push('<a href="javascript:void(0);" data-value="'+ this['value'] +'" data-id="'+ this['id'] +'" data-title="'+ this['title'] +'"><img src="'+ this['img'] +'" alt="" /><span><div style="height:22px;line-height:22px;overflow:hidden;">'+ this['title'] +'</div>价值：<em>'+ this['value'] +'</em>元</span></a>');
					});
					$('#J-wd-all-items-cont').html(strArr.join(''));
					hideWd();
					showWd(wd);
				}else{
					alert(data['msg']);
				}
			}
		});

	});
	
	
	//选择组合商品
	//可选商品总值
	var allItemsValueSum = 0;
	$('#J-button-get-items').click(function(){
		allItemsValueSum = 0;
		$.ajax({
			url:'getbigitems.json',
			cache:false,
			dataType:'json',
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var wd = $('#J-wd-adjust-items'),list = data['data'],strArr = [];
					$.each(list, function(){
						strArr.push('<a href="javascript:void(0);" data-value="'+ this['value'] +'" data-id="'+ this['id'] +'" data-title="'+ this['title'] +'"><img src="'+ this['img'] +'" alt="" /><span>'+ this['title'] +'<br />价值：<em>'+ this['value'] +'</em>元</span></a>');
					});
					$('#J-select-big-list').html(strArr.join(''));
					setTimeout(function(){
						$('#J-select-big-list > a').each(function(){
							allItemsValueSum += Number($(this).attr('data-value'));
							$('#J-p3-all-items-value').text(allItemsValueSum.toFixed(2));
						});
					}, 500);
					hideWd();
					showWd(wd);
				}else{
					alert(data['msg']);
				}
			}
		});
	});
	var itemsObj = {};
	var p3SubMobile = $('#J-input-select-big-mobile'),
		p3SubEmail = $('#J-input-select-big-email');
	$('#J-select-big-list').on('click', 'a', function(){
		var el = $(this),id = el.attr('data-id'),title = el.attr('data-title'),value = Number(el.attr('data-value')),cont = $('#select-big-selected-cont'),strArr = [],cls = 'current';
		if(el.hasClass(cls)){
			el.removeClass(cls);
			if(itemsObj.hasOwnProperty(id)){
				delete itemsObj[id];
			}
			cont.find('tr[data-id="'+ id +'"]').remove();
		}else{
			itemsObj[id] = {id:id,value:value,num:1};
			console.log(itemsObj);
			el.addClass(cls);
			strArr.push('<tr data-id="'+ id +'" data-value="'+ value +'"><td>'+ title +'</td><td><i class="ico-sub">-</i><input class="row-num" type="text" value="1" style="width:18px;" /><i class="ico-add">+</i></td><td><span class="row-money">'+ value.toFixed(2) +'</span>元</td></tr>');
			cont.prepend($(strArr.join('')));
		}
		updateTotal();
		phoenix.util.toViewCenter($('#J-wd-adjust-items'));
	});
	function updateTotal(){
		var p,totalValue = 0,maxmoney = Number($('#J-p3-all-items-value').text());
		for(p in itemsObj){
			if(itemsObj.hasOwnProperty(p)){
				totalValue += itemsObj[p]['value'] * itemsObj[p]['num'];
			}
		}
		if(totalValue > maxmoney){
			$('#J-p3-error-money').show();
		}else{
			$('#J-p3-error-money').hide();
		}
		$('#J-p3-select-total-value').text(totalValue.toFixed(2));
	}
	function editP3SelectNum(id, num){
		if(itemsObj.hasOwnProperty(id)){
			itemsObj[id]['num'] = num;
		}
	}
	new phoenix.Input({el:p3SubMobile,defText:'手机号码'});
	new phoenix.Input({el:p3SubEmail,defText:'电子邮件'});
	function checkP3SubMobile(){
		var mobile = $.trim(p3SubMobile.val()),isPass = false;
		if(!(/^1\d{10}/).test(mobile)){
			$('#J-p3-error-mobile').show();
			isPass = false;
		}else{
			isPass = true;
			$('#J-p3-error-mobile').hide();
		}
		return isPass;
	}
	function checkP3SubEmail(){
		var email = $.trim(p3SubEmail.val()),isPass = false;
		if(!(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/).test(email)){
			$('#J-p3-error-email').show();
			isPass = false;
		}else{
			isPass = true;
			$('#J-p3-error-email').hide();
		}
		return isPass;
	}
	p3SubMobile.blur(checkP3SubMobile);
	p3SubEmail.blur(checkP3SubEmail);
	$('#select-big-selected-cont').on('keyup', 'input[type="text"]', function(){
		var v = this.value,row = $(this).parent().parent(),id = row.attr('data-id');
		this.value = v.replace(/[^\d]/g, '');
		if(this.value == ''){
			editP3SelectNum(id, 0);
		}else{
			editP3SelectNum(id, Number(this.value));
		}
		p3SelectUpdateRow(row);
	});
	$('#select-big-selected-cont').on('blur', 'input[type="text"]', function(){
		var v = $.trim(this.value),row = $(this).parent().parent(),id = row.attr('data-id');
		v = v.replace(/[^\d]/g, '');
		if(v == ''){
			v = 1;
		}
		this.value = v;
		if(this.value == ''){
			editP3SelectNum(id, 0);
		}else{
			editP3SelectNum(id, Number(this.value));
		}
		p3SelectUpdateRow(row);
	});
	function p3SelectUpdateRow(row){
		var num = Number(row.find('.row-num').val()),value = Number(row.attr('data-value'));
		value *= num;
		row.find('.row-money').text(value.toFixed(2));
		updateTotal();
	}
	$('#select-big-selected-cont').on('click', 'i', function(){
		var el = $(this),row = el.parent().parent(),id = row.attr('data-id'),input = row.find('.row-num'),num = Number(input.val());
		if(el.hasClass('ico-sub')){
			num -= 1;
		}
		if(el.hasClass('ico-add')){
			num += 1;
		}
		num = num < 0 ? 0 : num;
		input.val(num);
		editP3SelectNum(id, num);
		p3SelectUpdateRow(row);
		
	});
	$('#J-button-select-submit').click(function(){
		var maxmoney = Number($('#J-p3-all-items-value').text()),money = Number($('#J-p3-select-total-value').text());
		if((money > maxmoney) || !checkP3SubMobile() || !checkP3SubEmail()){
			return;
		}
		if(money <= 0){
			alert('您还未选择任何奖品');
			return;
		}
		$.ajax({
			url:'submitselected.json',
			dataType:'json',
			cache:false,
			method:'post',
			data:itemsObj,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var wd = $('#J-wd-select-submit-success'),money = Number(data['data']);
					hideWd();
					$('#J-wd-select-success-money').text(money.toFixed(2));
					showWd(wd);
				}else{
					alert(data['msg']);
				}
			}
			
		});
		
	});
	
	
	$('#J-button-got-items').click(function(){
		$.ajax({
			url:'viewgifts-got.json',
			dataType:'json',
			cache:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var wd = $('#J-all-items-list-got'),list = data['data'],strArr = [];
					$.each(list, function(){
						strArr.push('<a href="javascript:void(0);" data-value="'+ this['value'] +'" data-id="'+ this['id'] +'" data-title="'+ this['title'] +'"><img src="'+ this['img'] +'" alt="" /><span>'+ this['title'] +'<br />价值：<em>'+ this['value'] +'</em>元</span></a>');
					});
					$('#J-wd-all-items-got-cont').html(strArr.join(''));
					hideWd();
					showWd(wd);
				}else{
					alert(data['msg']);
				}
			}
		});
	});
	
	
	function updateNews(){
		
		$.ajax({
			url:'getnews.json',
			dataType:'json',
			cache:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var list = data['data'],lis = $('#J-cont-tab li');
					$.each(list, function(i){
						lis.get(i).innerHTML = this;
					});
				}
			}
		});
		
	}
	
	setTimeout(updateNews, 1000 * 10);
	
	
	function updateUserInfo(){
		
		$.ajax({
			url:'getuserinfo.json',
			dataType:'json',
			cache:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					var info = data['data'];
					$('#J-user-info-recharged').text(info['recharged']);
					$('#J-user-info-sort').text(info['sort']);
					$('#J-user-info-integration-all').text(info['integration_all']);
					$('#J-user-info-integration').text(info['integration']);
					$('#J-user-info-game-times').text(info['game_times']);
					
					$('#J-game-user-times').text(info['game_times']);
				}
			}
		});
		
	}
	updateUserInfo();
	setTimeout(updateUserInfo, 1000 * 60);
	
	
	$('.show-hover-tip').hover(function(){
		tip.setText('<div style="width:260px;background:#FFFFE1;padding:10px;border:1px solid #CCC;">活动结束后可在此点击申请，申请截止日期为：2014年3月5日24:00之前。</div>');
		tip.show(-170, 20, this);
	},function(){
		tip.hide();
	});
	
	
	$('#J-to-top').click(function(){
		$(window).scrollTop(0);
	});
	
	if(phoenix.util.isIE6){
		phoenix.util.startFixed($('#J-sliderbar'), 500);
	}
	
	
	
	var video = {
		box:$('#J-box-video'),
		content:$('#J-box-video-content'),
		show:function(){
			mask.show();
			this.box.show();
			phoenix.util.toViewCenter(this.box);
			this.content.html($('#J-tpl-video-code').html());
		},
		hide:function(){
			this.box.hide();
			mask.hide();
			this.content.html('');
		}
	};
	
	$('#J-button-video').click(function(){
		video.show();
	});
	$('#J-box-video-close').click(function(){
		video.hide();
	});
	
	
})(jQuery);










