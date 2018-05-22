
	


(function($){
	var mask = phoenix.Mask.getInstance(),
		tip = phoenix.Tip.getInstance(),
		currentWd = null; 


	
	//公共关闭窗口按钮
	$('.pop .ico-close, .pop .btn-close, .btn-click, .control-refresh').click(function(){
		var el = $(this);
		if(el.hasClass('control-close')){
			var wd = $('#J-wd-submit-not');
			$('#J-wd-item').hide();
			hideWd();
			showWd(wd);
		}else if(el.hasClass('control-close-cancel')){
			$('#J-wd-submit-not').hide();
			$('#J-wd-item').show();
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
		//phoenix.util.toViewCenter(dom);
		dom.css('marginTop', dom.height()/2*-1);
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
	
	
	
	
	
	
	//抽奖部分
	//奖品序号对应表
	var prizeSort = [1, 13, 7, 4,   6, 5, 9,   2, 10, 1, 12,    14, 11, 8 ];
	//特等奖位置
	var prizeBigPos = [0, 9, 12];
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
										return 'current';
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
	function play(index){
		game.start(index);
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
					var id = data['data']['id'],times = data['data']['times'],numsDom = $('#J-wd-bigPrize .wd-balls');
					$('#J-game-user-times').text(times);
					$('#J-user-info-game-times').text(times);
					
					play(getPizeIndexById(id));
					
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
	
	
	$('#J-wd-item-button-go').click(function(){
		hideWd();
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
			var gobutton = $('#J-wd-item-button-go');
			$('#J-wd-item-img').attr('src', prizeItem['img']);
			$.each(itemArr, function(){
				cls = prizeItem['id'] == this['id'] ? 'current' : '';
				
				strArr.push('<li class="wd-item-list-select '+ cls +'" data-img="'+ this['img'] +'" data-title="'+ this['title'] +'" data-id="'+ this['id'] +'"><img src="'+ this['img'] +'" alt="" width="100%" ><span>'+ this['title'] +'<br>价值：<em>'+ this['value'] +'</em>元</span></li>');
				
			});
			$('#J-wd-item-list').html(strArr.join(''));
			$('#J-wd-item-money').text(prizeItem['value']);
			$('#J-wd-item-title').text(prizeItem['title']);
			$('#J-wd-selectItem-id').val(prizeItem['id']);
			
			gobutton.attr('href', gobutton.attr('href').replace(/\?.*$/g, '') + '?id=' + id);
			
			showWd(wd);
	}
	
	window.selectItems = selectItems;
	
	
	$('#J-wd-item').on('click', '.wd-item-list-select', function(){
		var el = $(this),cls = 'current';
		var gobutton = $('#J-wd-item-button-go');
		$('#J-wd-item-img').attr('src', el.attr('data-img'));
		$('#J-wd-item-title').text(el.attr('data-title'));
		$('#J-wd-selectItem-id').val(el.attr('data-id'));
		el.parent().find('.wd-item-list-select').removeClass(cls);
		el.addClass(cls);
		gobutton.attr('href', gobutton.attr('href').replace(/\?.*$/g, '') + '?id=' + el.attr('data-id'));
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
						lis.eq(i).html('<i></i> ' + this);
					});
				}
			}
		});
		
	}
	
	setTimeout(updateNews, 1000 * 10);
	
	
	
	
})(jQuery);










