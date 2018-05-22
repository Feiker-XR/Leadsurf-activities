/**
 * APP下载页面JS
 * @version $Id$
 */
(function($, WIN, undefined) {
	var banner = $('.banner'), 
		topHeight = $('.top').height(),
		nav = $('.nav'),
		iphoneBtn = $('.menu li:first'),
		button = nav.find('li'),
		imgList = $('.hand').find('li'),
		controlBtn = $('.banner .btn-per,.banner .btn-next'),
		prev = $('.banner .btn-per'),
		next = $('.banner .btn-next'),
		mainAnimateTime = 1000,
		buttonAnimateTime = 500,
		//动画自动切换时间
		ANIMATETIME = 10000,
		//指定切换
		selectNum = $('.slider-dot li'),
		//下拉内容
		content = $('.tab-content li'),
		//内容容器
		container = $('.content_area'),
		//底部
		foot = $('.footer'),
		//图片预加载判断时间
		loadTime = null,
		//允许的高度
		allowHeight = 900,
		//题目
		titleList = $('#j_pic_list > li'),
		sliderButton = $('#slider-control'),
		currentPicNum = 0,
		doAnimate = null, c = null, a = 0, b=null, lock = true;

	reHeight = function(){
		var height = $(WIN).height();
		if(height < allowHeight){
			$('body').addClass('mini');
		}else{
			$('body').removeClass('mini');
		}
	}

	$(WIN).resize(function(){
		reHeight();
	})

	//动画控制
	changePage = function(num) {
		a =  num >= 0 ? num : 1;
		//开始执行定时动画		
		doAnimate = window.setInterval(function() {
			b=true;
			if(a > 2){
				a = 0
			}
			titleList.fadeOut();
			if($.browser.msie == true && $.browser.version == 6.0){
				titleList.eq(a).show();
			}else{
				titleList.eq(a).fadeIn(1000)
			}
			sliderButton.removeClass().hide();
			sliderButton.addClass('slider-dot slider-dot' + a).fadeIn(1000);
			selectNum.removeClass('current');
			selectNum.eq(a).addClass('current');
			setTimeout(function(){
				b=null;
			},1200);
			a++;
		}, ANIMATETIME)
	}

	choseNumPage = function(num, type){
		if(b){
			return
		};
		b=true;
		a = num + type;
		if(a < 0){
			a = 2;
		}else if(a > 2){
			a = 0;
		}
		sliderButton.removeClass().hide();
		sliderButton.addClass('slider-dot slider-dot' + a).fadeIn(800);
		selectNum.removeClass('current');
		selectNum.eq(a).addClass('current');

		clearInterval(doAnimate), clearTimeout(c);
		doAnimate = null, c = null;
		
		titleList.stop();
		titleList.hide()
		if($.browser.msie == true && $.browser.version == 6.0){
			titleList.eq(a).show();
		}else{
			titleList.eq(a).fadeIn(1000)
		}
		setTimeout(function(){
			b=null;
		},1000);
		c = setTimeout(function(){
			if(type == 0){type=1}
			changePage(a + type);
		}, ANIMATETIME - 2000)
	}

	selectNum.bind('click', function(){
		var index = $(this).index();
		choseNumPage(index, 0);
	})
	prev.bind('click', function() {
		choseNumPage(a, -1);
	})
	next.bind('click', function() {
		choseNumPage(a, 1);
	})

	//面板收起
	button.bind('click', function() {
		var index = $(this).index(),
			changeTime = container.css('display')=='block' ? 0 : 600;

		if(index == 3){return};
		button.removeClass('current');
		$(this).addClass('current');

		banner.hide().animate({
			height : 0
		},mainAnimateTime,'easeOutExpo',function() {
			overflow : 'hidden'
		})
		controlBtn.animate({
			top : 0
		},buttonAnimateTime)
		nav.animate({
			top : topHeight
		},changeTime,'easeOutExpo',function() {
			
		})
		//菜单变化
		setTimeout(function() {
			nav.addClass('nav-show')
		}, 100)

		if($(WIN).height()<allowHeight){
			$('.slider-dot').hide();
		}

		container.show(), foot.show();

		if(index < 3){
			content.hide().eq(index).fadeIn(1500);
			lock = null;
		}
	});

	// button.bind('mouseover', function(){
	// 	var index = $(this).index();
	// 	if(content.eq(index).attr('status')!='over'){
	// 		showImg(content.eq(index));
	// 	}
	// })

	// showImg	= function(dom){
	// 	var domList = dom.find('div');
	// 	dom.attr('status','over');
	// 	domList.each(function(){
	// 		var cssName = 'url("images/'+$(this).attr('class')+'.png") no-repeat scroll 0 0 transparent';
	// 		$(this).css('background', cssName);
	// 	})
	// };


	//面板展开
	// iphoneBtn.bind('click', function() {
	// 	//是否展开
	// 	if(lock){return}
	// 	button.removeClass('current');
	// 	banner.show().animate({
	// 		height : '100%'
	// 	},mainAnimateTime,'easeOutExpo',function() {
	// 		overflow : 'visable'
	// 	})
	// 	controlBtn.animate({
	// 		top: $(WIN).height()/2
	// 	},buttonAnimateTime)

	// 	if($('body').hasClass('mini')){
	// 		nav.animate({
	// 			top : 725
	// 		},mainAnimateTime,'easeOutExpo', function() {
				
	// 		})
	// 	}else{
	// 		nav.animate({
	// 			top : $(WIN).height()<allowHeight ? $(WIN).height() : $(WIN).height() - 255
	// 		},mainAnimateTime,'easeOutExpo', function() {
				
	// 		})
	// 	}

	// 	//菜单变化
	// 	setTimeout(function() {
	// 		nav.removeClass('nav-show');
	// 		//隐藏容器
	// 		container.hide(), foot.hide();
	// 	}, 100)

	// 	if($(WIN).height()<allowHeight){
	// 		$('.slider-dot').show();
	// 	}

	// 	lock = true;
	// });
	controlBtn.css('top', $(WIN).height()/2);
	reHeight();
	//开始执行动画
	$(function(){

		changePage();

		var link = [
			'http://126.am/yQPFh7',
			'http://126.am/tfuWV4',
			'http://126.am/ZSfxY6',
			'http://126.am/iz37e6',
			'http://126.am/dfO5f6'
		];

		var num = Math.floor(Math.random() * 5);

		//随机链接
		$('.reg-link').attr('href', link[num]);

	})


	$('#j_pic_list').bind('mouseover', function(){
		clearInterval(doAnimate);
		doAnimate = null;
	}).bind('mouseout', function(){
		if(doAnimate){
			clearInterval(doAnimate);
			doAnimate = null;
		}
		changePage(a);
	})
	
	$(".banner-inner .install-iphone li").mouseover(function(){
		$(this).find('.install-tool').show();
	})
	$(".banner-inner .install-iphone li").mouseout(function(){
		$(this).find('.install-tool').hide();
	})
	
	$(window).scroll(function(){
		
		if($(window).scrollTop() < 565){
		$('.menu').hide();
		$('.dropdown-2').hide();
		$('.dropdown-1').show();
		$('.dropdown-1').addClass("current");
		$('.dropdown-2').remove("current");
		}
		else if($(window).scrollTop() >= 565){
			$('.menu').show();
			$('.dropdown-1').hide();
			$('.dropdown-2').show();
			$('.dropdown-2').addClass("current");
			$('.dropdown-1').remove("current");
		}
		//$('.mask').css("top",$(window).scrollTop() + "px");
		//$('#pop-iphone').css("top",$(window).scrollTop() +$(window).height()/2 -$('.pop').height() /2+ "px");
		//$('#pop-android').css("top",$(window).scrollTop() +$(window).height()/2 -$('.pop').height() /2+ "px");
	})
	$('.menu li').eq(0).click(function(){
		/*
		$('.mask').bind('mousewheel',function(e){
			e.stopPropagation();
			e.preventDefault();
			
		})
		
		$('.mask').bind('DOMMouseScroll',function(e){
			e.stopPropagation();
			e.preventDefault();
			
		})
		$('#pop-iphone').bind('mousewheel',function(e){
			e.preventDefault();
			
		})
		$('#pop-iphone').bind('DOMMouseScroll',function(e){
			e.preventDefault();
			
		})
		
		$('#pop-iphone .list2').unbind('mousewheel')
		$('#pop-iphone .list2').unbind('DOMMouseScroll')
		*/
		$('.mask').css("opacity","0.5");
		//$('.mask').css("top",$(window).scrollTop() + "px");
		$('.mask').show();
		//$('#pop-iphone').css("top",$(window).scrollTop() +$(window).height()/2 -$('.pop').height() /2+ "px");
		$('#pop-iphone').show();
	})
	$('.menu li').eq(1).click(function(){
		/*
		$('.mask').bind('mousewheel',function(e){
			e.stopPropagation();
			e.preventDefault();
			
		})
		$('.mask').bind('DOMMouseScroll',function(e){
			e.stopPropagation();
			e.preventDefault();
			
		})
		*/
		$('.mask').css("opacity","0.7");
		//$('.mask').css("top",$(window).scrollTop() + "px");
		$('.mask').show();
		//$('#pop-android').css("top",$(window).scrollTop() +$(window).height()/2 -$('.pop').height()/2 + "px");
		$('#pop-android').show();
	})
	$('.pop .close').click(function(){
		$('.pop').hide();
		$('.mask').hide();
	})
	
	var tabTitle = $("#pop-iphone .tab-title li");
	var tabContent = $("#pop-iphone .tab-content li");
	var first = 0;
	tabContent.hide().eq(first).show();
	tabTitle.removeClass("current").eq(first).addClass("current");
	
	tabTitle.click(function(){
		first = tabTitle.index(this);
		showpic(first);
	});
	function showpic(first){
		tabContent.hide().eq(first).show();
		tabTitle.removeClass('current').eq(first).addClass('current');
	};
	
})(jQuery, window)

