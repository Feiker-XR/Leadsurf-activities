/**
 * 十周年活动JS
 * Author by Cliff 
 */
(function(undefined) {

	//活动细则table切换
	var box = {
		//权益按钮
		joinButton : '.tab-title li:first',
		//活动细则
		rules : '.tab-title li:last',
		//权益内容
		joinInfo : '.tab-content > li:first',
		//细则内容
		rulesInfo : '.tab-content > li:last'
	},

	//倒计时
	LASTTIME = '2013/9/15,00:00:00',

	/**
	 * 头部下拉计算
	 */
	animateHeader = function() {
		var header = $('.header'),
			top = $(window).scrollTop(),
			time;

		$(window).scroll(function() {
			if(time){
				clearTimeout(time);
				time = null;
			}

			time = setTimeout(function(){
				//下拉
				if($(window).scrollTop() > 0) {
					//如果是IE6 && 程序员要坚持优雅降级观念！
					if('undefined' == typeof(document.body.style.maxHeight)) {
						header.show();
					}else{
						if(header.css('top') == '-98px') {
							header.animate({
								'top': 0
							})
						}
					}
					
				//上滚
				}else {
					//如果是IE6 && 程序员要坚持优雅降级观念！
					if('undefined' == typeof(document.body.style.maxHeight)) {
						header.hide();
					}else{
						if(header.css('top') == '0px') {
							header.animate({
								'top': -98
							})
						}
					}
				}

				top = $(window).scrollTop();
				clearTimeout(time);
				time = null;
			},30)
		})
	},

	//数字检查
	checkNum = function(num) {
		if(num < 10){
			return '0' + num;
		}
		return num;
	},

	//
	infoChange = function() {
		//参赛按钮
		$('.tab-title li:first').bind('click', function() {
			$(box.rules).removeClass('current');
			$(this).addClass('current');
			$(box.joinInfo).show();
			$(box.rulesInfo).hide();
		})

		//活动细则
		$('.tab-title li:last').bind('click', function() {
			$(box.joinButton).removeClass('current');
			$(this).addClass('current');
			$(box.rulesInfo).show();
			$(box.joinInfo).hide();
		})
	},

	/**
	 * 倒计时时间计算
	 * @param {[num]} [year] [年份]
	 */
	time = function(endtime) { 
		var endtime = new Date(endtime),
			nowtime = new Date(),
			leftsecond = parseInt((endtime.getTime() - nowtime.getTime())/1000),
			__d = parseInt(leftsecond/3600/24),
			__h = parseInt((leftsecond/3600)%24),
			__m = parseInt((leftsecond/60)%60),
			__s = parseInt(leftsecond%60),
			c = new Date(),
			q = ((c.getMilliseconds())%10),
			timeArea = $('.lottery-countdown');

		__d = __d == 0  ? '&nbsp;&nbsp;0' : checkNum(__d);
		
		timeArea.find('.hour').text(checkNum(__h));
		timeArea.find('.minute').text(checkNum(__m));
		timeArea.find('.second').text(checkNum(__s));
	},

	prizeDialog = function() {
			
		var btn = $('.tab-content .pic a'),
			//btn = content.find('.more'),
			top = ($(window).height() - 700)/2,
			left = ($(window).width() - 944)/2;
		
		btn.eq(0).bind('click', function() {
			//打开活动细则窗口
			window.open('prize.html#title1', 'newwindow','height=700,width=944,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(1).bind('click', function() {
			//打开活动细则窗口
			window.open('prize.html#title2', 'newwindow','height=700,width=944,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(2).bind('click', function() {
			//打开活动细则窗口
			window.open('prize.html#title3', 'newwindow','height=700,width=944,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(3).bind('click', function() {
			//打开活动细则窗口
			window.open('prize.html#title4', 'newwindow','height=700,width=944,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
	},
	
	rulesDialog = function() {
		var content = $('.tab-content'),
			btn = content.find('.more'),
			top = ($(window).height() - 700)/2,
			left = ($(window).width() - 938)/2;

		btn.eq(0).bind('click', function() {
			//打开活动细则窗口
			window.open('activity-rules.html#signup', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(1).bind('click', function() {
			//打开活动细则窗口
			window.open('activity-rules.html#lottery', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(2).bind('click', function() {
			//打开活动细则窗口
			window.open('activity-rules.html#week', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(3).bind('click', function() {
			//打开活动细则窗口
			window.open('activity-rules.html#weekrank', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
		btn.eq(4).bind('click', function() {
			//打开活动细则窗口
			window.open('activity-rules.html#allrank', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
		});
	};
	

	//倒计时时间计算
	if($('.lottery-countdown').size() > 0) {
		time(LASTTIME);

		window.setInterval(function(){
			time(LASTTIME);
		}, 1000);
	}

	/**
	 * 页面环节控制
	 */
	//头部动画控制
	animateHeader();
	//内容切换
	infoChange();
	//细则更多
	rulesDialog();
	
	prizeDialog();

})();

$(function() {
	var c = new loading(),
		a = 0,b = 0;

	//判断距离
	makeSize = function(num, yilong, size, min, max, numa) {
		var em = $('.loading_num em'),
			span = $('.loading_num span');

		//显示当前目标值
		$('.tip' + max).show();
		//显示奖金差值
		$('.left_font .tt .yuan,.right_font .tt .yuan').text(max-num);
		//显示加奖差值
		$('.left_font .tt .jia,.right_font .tt .jia').text(numa);
		//显示数字
		$('.loading_num em').text(num);

		var text = num + '';

		switch(true)
		{
			case text.length == 1:
				em.css('fontSize', '50px');
				span.css('top', 28)
			break;
			case text.length == 2:
				em.css('fontSize', '43px');
			break;
			case text.length == 3:
				em.css('font-size', '38px');
				span.css('top', 23)
			break;
			case text.length == 4:
				em.css('fontSize', '32px');
				span.css('top', 22)
			break;
			case text.length == 5:
				em.css('fontSize', '28px');
				span.css('top', 20)
			break;
		}
		
		return {
			nums : (yilong-75) +  parseInt((num - min) / (max - min) * size),
			load : Math.round((num - min) / (max - min) * 100)
		}
	}

	//汽车动画
	carAnimate = function(num) {
		var nums = 830/80000 * num,
			thisNum = num,
			TNum = (num + '').length,
			dom = $('.animate_area'),
			numArea = $('.over_bg');
			b = num > 200 ?  num - 200 :  0;

		switch(true)
		{
			case num >= 8 && num < 48:
				num = makeSize(num, 132, 135, 8, 48, 688);
			break;
			case num >= 48 && num < 218:
				num = makeSize(num, 266, 145, 48, 218, 2888);
			break;
			case num >= 218 && num < 1568:
				num = makeSize(num, 412, 140, 218, 1568, 18888);
			break;
			case num >= 1568 && num < 18000:
				num = makeSize(num, 551, 152, 1568, 18000, 200000);
			break;
			case num >= 18000 && num <= 88000:
				num = makeSize(num, 703, 152, 18000, 88000, 800000);
			break;
			default:
				return;
			break;
		}



		dom.animate({
			left : num.nums
		},3000,'easeInOutQuad',function(){

			//显示DOM
			numArea.css('visibility','visible');
			$('.container_bobo .text_area').show();

			var sNum = setInterval(function() {

				if(thisNum == 0){ 
					clearInterval(sNum);
					sNum = null;
					return;
				}

				if(b >= thisNum){
					$('.loading_num em').text(thisNum);
					clearInterval(sNum);
					sNum = null;
					return;
				}

				b+=2;

				$('.loading_num em').text(b);
			},1)

			var s = setInterval(function() {
				if(num.load == 0){ 
					c.toLoadNum(0);
					return;
				}
				if(a == num.load){
					c.toLoadNum(0, function() {
						//判断当前注释显示
						if(nums >  830 - $('.animate_area').width() - 300){
							dom.find('.left_font').show();
						}else {
							dom.find('.right_font').show();
						}
					});
					clearInterval(s);
					s = null;
					$('.loading_num em').text(thisNum);
					clearInterval(sNum);
					sNum = null;
					return
				}
				if(a >= num.load){
					clearInterval(s);
					s = null;
					$('.loading_num em').text(thisNum);
					clearInterval(sNum);
					sNum = null;
					return;
				}
				a++;
				c.toLoadNum(a);
			},10)
		})
	}
	carAnimate(9980);
})