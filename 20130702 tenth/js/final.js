//十周年结束页面
(function(win, $, undefined){
	var garyImg = $('.garyImg');

	//添加遮罩层
	garyImg.append('<div class="garyMask"></div>');
	
	for (var i = $('.garyMask').length - 1; i >= 0; i--) {
		var current = $('.garyMask').eq(i);

		if(current.parent().hasClass('current')){
			current.fadeOut(0);
			current.prev().css('bottom', 0)
		}else{
			current.css({
				'opacity' : 0.68
			})
		}
	};
	
	//鼠标经过动画
	garyImg.bind('mouseenter', function(){
		var mask = $(this).find('.garyMask'),
			alt = $(this).find('.show-info');

		if(mask.is(':animated')){return}
		
		alt.stop();
		
		mask.fadeOut(500, 'easeInOutQuart');

		alt.animate({
			bottom : 0
		}, 200, 'easeInOutQuart');
	}).bind('mouseleave', function(){
		var mask = $(this).find('.garyMask'),
			alt = $(this).find('.show-info');
			
		if(mask.parent().hasClass('current')){
			mask.css({
				'opacity' : 0.68
			})
		}
		alt.stop();

		alt.animate({
			bottom : -74
		}, 300, 'easeInOutQuart');

		mask.fadeIn(300, 'easeInOutQuart');
	});

	//渐隐渐显
	var carNavDoms = $('.carimg-nav').find('li'),
		imgListDoms = $('.carimg-list').find('li');


	carNavDoms.bind('click', function(){
		var index = carNavDoms.index($(this));
		carNavDoms.removeClass('current');
		imgListDoms.fadeOut('slow');
		imgListDoms.eq(index).fadeIn('slow')
		$(this).addClass('current');
	});

	var pageDoms = $('#J-page-list > li'),
		mainWidh =  0;

	for (var i = pageDoms.length - 1; i >= 0; i--) {
		mainWidh += pageDoms.eq(i).width();
	};

	
	$('#J-page-list').width(mainWidh);

	//切换动画
	//上翻
	$('.pre').bind('click', function(){
		controlImgPage('pre');
	});
	//下翻
	$('.next').bind('click', function(){
		controlImgPage('next');
	});

	//
	function controlImgPage(mode){
		var parentDom = $('#J-page-list'),
			domList = parentDom.find('li'),
			width = domList.eq(0).width(),
			mode = mode || 'next';

		if(domList.is(':animated')){
			return;
		}

		if(mode == 'pre'){
			domList.eq(0).animate({
				marginLeft :  -width
			}, 800, 'easeInOutExpo',  function(){
				parentDom.append(domList.eq(0));
				domList.eq(0).css('marginLeft',0);
			});
		}else if(mode == 'next'){
			var dom = domList.eq(domList.length - 1);
			parentDom.prepend(dom);
			dom.css('marginLeft', -width);
			dom.eq(0).animate({
				marginLeft :  0
			}, 800, 'easeInOutExpo');
		}
	}

	//比赛记录
	$('.btn-race-record').bind('click', function(){
		$('.race-record-title h3').toggle();
		$('.race-record-content').toggle();
	});
	
})(window, jQuery);