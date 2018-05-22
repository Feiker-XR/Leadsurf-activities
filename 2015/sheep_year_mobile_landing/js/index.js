/*
** MODAL
*/
function showModal($t, callback){
	if( !$t || !$t.length || $t.is(':visible') ) return false;
	$t.show();
	if( callback && typeof callback == 'function' ){
		callback();
	}
}
function hideModal($t, callback){
	if( !$t || !$t.length || $t.is(':hidden') ) return false;
	$t.hide();
	if( callback && typeof callback == 'function' ){
		callback();
	}
}
var $overlayShadow = $('#overlay-shadow');
var $forbidden = $('#J-messages-forbidden');
function showForbiddenDialog(){
	showModal($overlayShadow);
	showModal($forbidden);
}

$(function(){
	// Forbidden
	$('body').on('click', '[data-action="forbidden"]', function(e){
		e.preventDefault();
		showForbiddenDialog();
		return false;
	});

	$nav = $('#float-nav a');
	$nav.on('click', function(){
		var $target = $($(this).attr('href'));
		if( $(this).hasClass('active') || !$target.length ) return false;
		$(this).addClass('active').siblings('.active').removeClass('active');
		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 1000);
		return false;
	});

	// 弹窗关闭事件
	$('[data-modal="close"]').on('click', function(){
		var $t = $(this).parents('.pop-modal:eq(0)');
		hideModal($overlayShadow);
		hideModal($t);
	});

	// 我的中奖结果
	$('[data-modal="result"]').on('click', function(){
		showForbiddenDialog();
		return false;
		/*var urlName = 'datas/myrewards.php';
		rulesShow(urlName);*/
	});

	//弹窗规则
	var rulesShow = function(urlName){
		var $dialog = $('#J-rules-tips'),
			$content = $('#J-rules-tips').find('.info-content');

		$.get(urlName, function(data){
			$content.html(data);
			viewCenter($dialog);
			//显示弹窗
			showModal($dialog);
			showModal($overlayShadow);
		}, 'html').fail(function(data){
			alert('规则加载有误，请刷新页面。');
		});	
	};

	var viewCenter = function($dom){
		var winHeight = $(window).height(),
			height = $dom.outerHeight();	
		$dom.css('top', (winHeight - height) /2);
	};

	// 规则事件
	$('[data-modal="rules"]').on('click', function(){
		var index = $(this).attr('data-rule'),
			urlName = 'datas/' + index;
		rulesShow(urlName);
	});



	// var rotation = function(){
	// 	$('#rotary').rotate({
	// 		angle: 0, 
	// 		animateTo: 360,
	// 		duration: 10000,
	// 		callback: rotation,
	// 		easing: function (x,t,b,c,d){
	//         	return c*(t/d)+b;
	//     	}
	// 	});
	// }
	// rotation();

	// Inview
	// https://github.com/protonet/jquery.inview
	/*$('.screen').on('inview', function(event, isInView){
		var $this = $(this);
		
		console.log($this);
		if( isInView ){
			$this.addClass('inview');
			var $number = $this.find('.ui_animate_number');
			if( $number.length && !$number.hasClass('done') ){
				animateNumber($number);
				$number.addClass('done');
			}
		}else{
			// $this.removeClass('inview');
			$this.off('inview');
		}
	});*/

	navArrowStatus = function(){
		var topNum = $(window).scrollTop(),
			num = 100,
			$navDom = $('#float-nav');
		//step-1
		if(topNum > 0 && topNum < 916 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-1');
		}else if(topNum > 916 - num && topNum < 1746 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-2');
		}else if(topNum >= 1746 - num){
			$navDom.removeClass('step-1 step-2 step-3').addClass('step-3');
		}
	};

	$(window).scroll(function(event) {
		navArrowStatus();
	});	

	navArrowStatus();
});