
$(function(){
	jQuery.easing.easeInQuart = function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    };
	function Page(){
		this.idx             = 0;
		this.mousewheelTimer = null;
		this.slides          = $('[data-slide]');
		this.ease 			 = 'easeInQuart';
		this.speed			 = 700;
		this.animateClass    = 'inview';
		this.activeClass	 = 'activeSlide';
		this.navs			 = $('#nav a');
		// this.available 		 = true;
		this.init();
	};
	Page.prototype = {
		init: function(){
			this.scroll(0);
			this.bindEvent();
		},
		scroll: function(idx){
			var me = this;
			
			if( idx < 0 ){
				idx = 0;
			}else if( idx >= me.slides.length ){
				idx = me.slides.length - 1;
			}
			
			me.idx = idx;
			var $slide = me.slides.eq(idx);
			if( $slide.hasClass(me.activeClass) ) return false;
			// console.log(me.idx, me.lastIdx, $slide);
			// me.slides.filter('.' + me.activeClass).find('.intro, .example').removeClass(me.activeClass);
			var top = $slide.offset().top,
				doch = $(document).height(),
				winh = $(window).height();
			if( winh + top > doch ){
				top = doch - winh;
			}
			// console.log(top, doch, winh);
			$('html, body').animate({
				scrollTop: $slide.offset().top
			}, me.speed, me.ease, function(){
				$slide.find('.intro, .example').addClass(me.animateClass).addClass(me.activeClass);
				// console.log(me.idx, me.lastIdx);
				me.navs.filter('.active').removeClass('active');
				me.navs.eq(idx).addClass('active');
			});
		},
		bindEvent: function(){
			var me = this;			
			$('body').on('mousewheel', function(event) {
				if ( me.mousewheelTimer ) {
			        clearTimeout(me.mousewheelTimer);
			    }
			    me.mousewheelTimer = setTimeout(function(){
			    	// console.log('event.deltaY： ' + event.deltaY);
			    	var idx = me.idx;
					if( event.deltaY < 0 ){
						idx++;
					}else{
						idx--;
					}
					me.scroll(idx);
					
			    }, 100);					
				return false;				
			});
		}
	};

	/*var page = new Page();
	
	$('#nav a').on('click', function(){
		if( $(this).hasClass('active') ) return false;
		var idx = $(this).index();
		// console.log(idx)
		page.scroll(idx);
		return false;
	});*/

	// Inview
	// https://github.com/protonet/jquery.inview
	$('.intro, .example').on('inview', function(event, isInView){
		var $this = $(this);
		if( isInView ){
			$this.addClass('inview');
		}else{
			// $this.removeClass('inview');
			$this.off('inview');
		}
	});

	var $dialogs = $('.dialog');
	var top1 = -600, top2 = 150;
	// init
	$dialogs.animate({
		top: top1,
		opacity: 0
	}, 0, function(){
		$(this).show(0);
	});

	$('#main .buttons a').on('click', function(){
		var idx = $(this).index();
		$dialogs.filter(':visible').stop().animate({
			top: top1,
			opacity: 0
		}).end().eq(idx).animate({
			top: top2,
			opacity: .98
		});
		return false;
	});

	$dialogs.each(function(){
		$(this).find('.dialog_title a').on('click', function(){
			if( $(this).hasClass('active') ) return false;
			var idx = $(this).index();
			$(this).addClass('active').siblings('.active').removeClass('active');
			var $panels = $(this).parent().siblings('.dialog_body').find('.panel');
			$panels.filter(':visible').hide(0).end()
					.eq(idx).show();
			return false;
		}).eq(0).trigger('click');
	});

	$dialogs.find('[data-action="close"]').on('click', function(){
		$(this).parents('.dialog').eq(0).stop().animate({
			top: top1,
			opacity: 0
		});
		return false;
	});

	
	// 飘窗广告
	/*var $click_me = $('<div id="click_me"> \
						<a href="http://www.fenghuang158.com/newuser/" target="_blank"> \
							<img src="images/clickme.gif" alt=""> \
						</a> \
						<span class="closeme">&times;</span> \
					</div>');
	$click_me.css('display', 'block').animate({
		opacity: 1
	}, 600).find('.closeme').on('click', function(){
		$('#click_me').fadeOut();
	}).end().appendTo('body');*/
});