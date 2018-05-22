jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing,{
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	}
});


(function($) {
	window.clockTag = {};

	var doms = $('#J-panel-money-countdown-2').find('em'),
		timer = null,
		seconds = Number($('#J-value-money-countdown-2').val()),
		namesCn = ['一', '二', '三', '四', '五'],
		hh,
		mm,
		ss;
	if (doms.size() < 1) {
		return;
	}
	


	start = function(){

		stop();

		timer = setInterval(function() {

			if (seconds < 0) {
				clearInterval(timer);
				window.location.reload();
			}
			dd = Math.floor(seconds / 3600 / 24);
			hh = Math.floor(seconds / 3600 % 24);
			mm = Math.floor(seconds / 60 % 60);
			ss = Math.floor(seconds % 60);
			hh = hh < 10 ? '0' + hh : hh;
			mm = mm < 10 ? '0' + mm : mm;
			ss = ss < 10 ? '0' + ss : ss;
			doms.eq(0).html(dd);
			doms.eq(1).html(hh);
			doms.eq(2).html(mm);
			doms.eq(3).html(ss);
			seconds -= 1;


		}, 1000);

	}
	
	stop = function() {

		clearTimeout(timer);
		timer = null;

		doms.eq(0).html('--');
		doms.eq(1).html('--');
		doms.eq(2).html('--');
		doms.eq(3).html('--');
	}

	//数字动画
	numAnimate = function(setting) {

		this.setting = {
			//单一数字Dom高度
			domHeight : 45,
			//需要动画的数字
			animateDom: '',
			//动画运行速度
			animateTime: 3,
			//动画运行停止速度
			animateStopTime: 3
		}

		this.init(setting);
	};

	$.extend(numAnimate.prototype, {
		init: function(setting) {
			var me = this;

			me['bindDom'] = [];
			me['stopTag'] = false;

			$.extend(
				this.setting, setting
			)
		},

		startAnimate: function() {
			var me = this,
				dom = this.setting['animateDom'];

			if (me['stopTag']) {
				me['stopTag'] = false;
			}

			dom.stop();
			dom.css('top', 0);
			me.defaultControl();
			window.clockTag = {};
			clearTimeout(window.ss);
			clearTimeout(window.hh);

			//setTimeout(function(){
				me.domAnimate();
			//},1000);
			
		},

		stopAnimate: function() {
			var me = this;

			me['stopTag'] = true;
		},

		domAnimate: function() {
			var me = this,
				dom = this.setting['animateDom'],
				height = dom.height() / 2;

			if (me['stopTag']) {
				return;
			}

			dom.animate({
				top: -height

			}, 200, function() {
				dom.css('top', 0);
				me.domAnimate();
			});


		},

		toNumPosition: function(num) {
			var me = this,
				domHeight = this.setting['domHeight'],
				dom = this.setting['animateDom'];

			//me['stopTag'] = true;
			dom.stop().css('top', 0);

			if(num > 1){
				dom.css('top', -((Number(num) - 2) * domHeight));

				dom.animate({
					top : - (num * domHeight)	
				}, 1000, 'easeInOutQuad');
			}else if(num == 1){
				dom.css('top', -(9 * domHeight));

				dom.append('<li class="test">0</li><li  class="test">1</li>')
				dom.animate({
					top : - (11 * domHeight)	
				}, 1000, 'easeInOutQuad', function(){
					
					dom.css('top', -(1 * domHeight));
					dom.find('.test').remove();
				});

			}else if(num == 0){
				dom.css('top', -(8 * domHeight));

				dom.append('<li class="test">0</li>')
				dom.animate({
					top : - (10 * domHeight)	
				}, 1000, 'easeInOutQuad', function(){
					
					dom.css('top', 0);
					dom.find('.test').remove();
				});
			}

			
		},

		toNumNoAnimate: function(num){
			var me = this,
				domHeight = this.setting['domHeight'],
				dom = this.setting['animateDom'];

			me.defaultControl();
			me.stopAnimate();
			dom.stop();

			//setTimeout(function(){
				dom.css('top', -(num * domHeight));
			//},200);
		},

		defaultControl: function(tagText) {
			var me = this;


			if(tagText == 'none'){
				
				$('#J-panel-balls em span').show();
				$('#J-panel-balls em ul').hide();
			}else{
				$('#J-panel-balls em span').hide();
				$('#J-panel-balls em ul').show();
			}
		}

	});

	var saveDom = [];

	bulidDom = function() {
		var me = this,
			dom = $('#J-panel-balls'),
			emDom = dom.find('ul'),
			length = emDom.size();

		for (var i = 0; i < length; i++) {
			
			saveDom[i] = new numAnimate({
				
				animateDom: emDom.eq(i)
			});
		};
	}

	toNum = function(num) {
		var data = num + '',
			tagNum = (+new Date);
		for (var i = 0; i < saveDom.length; i++) {		
				saveDom[i].startAnimate();
		};
	
	};

	toNumNoAnimate= function(num){
		var data = num + '';

		for (var i = 0; i < saveDom.length; i++) {
				
				
					var dd = saveDom[i];

					dd.toNumNoAnimate(data.charAt(i));
				
			};
	};

	toDefaultControl= function(){

		for (var i = 0; i < saveDom.length; i++) {
				
				
					var dd = saveDom[i];

					dd.defaultControl('none');
				
			};
	};

	loadLotteryNum = function() {
		dateSelect = $('#date-select');

		dateSelect.on('change', function(){
			changeDate($(this).val());
		});
		
	}
	
	var changeDate = function(type){
			var selectDom = $('.selcect-simulation .select'),num = Number(type);

			selectDom.text('第'+namesCn[Number(num - 1)]+'期');

			$.ajax({
				url: 'getlottery.php',
				type: 'GET',
				dataType: 'json',
				data: {dateNum : num},
				success: function(r) {
					
					if(r['isSuccess'] == 1) {
						seconds = r['data']['time'];

						if(r['data']['iscurrent'] == 1) {
							toNum(r['data']['lotterys']);

						}else {

							if(seconds <= 0){
								toNumNoAnimate(r['data']['lotterys']);
							}else{
								toDefaultControl();
							}
						}

						if(seconds <= 0) {
							stop();
						}else{ 
							start();
						}
					}
				}
			});
	};

	//建立摇号实例
	bulidDom();
	//绑定期数切换
	loadLotteryNum();	
	//
	//toNum();
	
	/**
	//初始执行
	if(seconds <= 0) {
		stop();
	}else{ 
		start();
	}
	**/
	
	
	changeDate(Number($('#J-value-current').val()) + 1);
	
})(jQuery);

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