


(function($){
	var banner = $('#J-banner');
	
	//幻灯片
	banner.slide({ titCell:"#J-pic-slider-control" , mainCell:"#J-pic-slider" , effect:"topLoop", autoPlay:true, delayTime:500 , autoPage:true });
	banner.hover(function(){
		$(this).find(".prev, .next").fadeTo("show",0.5);
	},function(){
		$(this).find(".prev, .next").hide();
	});
	banner.find('.prev, .next').hover(function(){
		$(this).fadeTo("show",0.7);
	},function(){
		$(this).fadeTo("show",0.5);
	});
	
	
	//公告tab
	var triggers = $('#J-notice-trigger').find('li'),panels = $('#J-notice-panel').find('li');
	triggers.click(function(e){
		var index = triggers.index(this);
		triggers.removeClass('current');
		$(this).addClass('current');
		panels.hide();
		panels.eq(index).show();
	});
	
	
	//投票
	var toViewCenter = function(el){
		var el = $(el),bWidth = $('body').width(),bHeight = $('body').height(),wd = $(window),
			h = el.height();
		el.css({'top':wd.scrollTop() + wd.height()/2 - h/2 + 100});
	};
	var votePanel = $('#J-wd-vote');
	var wdShow = function(){
		toViewCenter(votePanel);
		votePanel.css('opacity', 0).show().animate({'top':parseInt(votePanel.css('top')) - 100, 'opacity': 1});
		showMask();
	};
	var wdHide = function(){
		votePanel.css('opacity', 1).animate({'top':parseInt(votePanel.css('top')) + 100, 'opacity': 0}, function(){
			votePanel.hide();
		});
		hideMask();
	};
	$('#J-vote-button').click(function(e){
		e.preventDefault();
		wdShow();
		initRate();
	});
	votePanel.find('.wd-close').click(function(e){
		e.preventDefault();
		wdHide();
	});
	
	
	
	var showMask = function(){
		$('#J-wd-mask').css({'opacity':.5, 'height':$(document).height()}).show();
	};
	var hideMask = function(){
		$('#J-wd-mask').hide();
	};
	//投票进度条
	//cfg {el:dom元素, rate:初始比例(0-100)}
	var rateArr = [];
	var initRate = function(){
		if(rateArr.length < 1){
			votePanel.find('.progress-inner').each(function(){
				rateArr.push(new Rate({el:this, rate:50, name: this.getAttribute('data-name')}));
			});
		}else{
			$.each(rateArr, function(){
				this.reSet();
				this.to(this.rate);
			});
		}
	};
	var Rate = function(cfg){
		this.init(cfg);
	};
		Rate.prototype.init = function(cfg){
			var me = this;
			me.timer = null;
			me.dom = $(cfg.el);
			me.name = cfg.name;
			me.rate = 0;
			me.to(cfg.rate);
			
			me.getParent().bind('click', me, me.setValue);
		};
		Rate.prototype.to = function(rate){
			var me = this,pw = me.getParent().width();
			me.rate = rate;
			me.dom.animate({'width': rate + '%'}, 600, function(){
				clearInterval(me.timer);
				me.getNumDom().text((rate/10).toFixed(1));
			});
			clearInterval(me.timer);
			me.timer = setInterval(function(){
				var num = parseInt(me.dom.css('width'))/pw * 10;
					num = num.toFixed(1);
				me.getNumDom().text(num);
			}, 100);
		};
		Rate.prototype.setValue = function(e){
			var me = e.data,w = e.offsetX,pw = pw = me.getParent().width();
			me.to(w / pw * 100);
		};
		Rate.prototype.reSet = function(){
			var me = this;
			me.dom.css('width', '0%');
		};
		Rate.prototype.getNumDom = function(){
			var me = this;
			return me.numDom || (me.numDom = me.dom.parent().parent().find('.number strong'));
		};
		Rate.prototype.getParent = function(){
			var me = this;
			return me.parent || (me.parent = me.dom.parent());
		};
		
		var rateAjaxLock = false;
		$('#J-rate-submit').click(function(e){
			e.preventDefault();
			var result = {};
			$.each(rateArr, function(){
				result[this.name] = (this.rate/10).toFixed(1);
			});
			if(rateAjaxLock){
				return;
			}
			$.ajax({
				url:'data.json',
				dataType:'json',
				method:'post',
				data:result,
				beforeSend:function(){
					rateAjaxLock = true;
					$('#J-rate-submit').text('加载中...').addClass('btn-cancel');
				},
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						var el = $('#J-wd-msg'),bWidth = $('body').width(),bHeight = $('body').height(),wd = $(window),
							h = el.height();
						el.css({'top':wd.scrollTop() + wd.height()/2 - h/2 + 100});
						el.css('opacity', 0).show().animate({'top':parseInt(el.css('top')) - 100, 'opacity': 1});
						wdHide();
						showMask();
						
						$('#J-vote-button').addClass('progress-btn-disable');
						
						votePanel.find('.pop-btn').hide();
					}else{
						alert(data['msg']);
					}
				},
				complete:function(){
					rateAjaxLock = false;
					$('#J-rate-submit').text('确定提交').removeClass('btn-cancel');
				}
			});
		});
		$('#J-wd-msg').find('.wd-close').click(function(e){
			e.preventDefault();
			var el = $('#J-wd-msg');
			el.css('opacity', 1).animate({'top':parseInt(el.css('top')) + 100, 'opacity': 0}, function(){
				el.hide();
			});
			hideMask();
		});
		
		
		
		
		//中奖名单滚动
		//banner.slide({ titCell:"#J-pic-slider-control" , mainCell:"#J-pic-slider" , effect:"topLoop", autoPlay:true, delayTime:500 , autoPage:true });
		jQuery("#J-winners-panel").slide({ mainCell:"#J-winners-list",effect:"topMarquee",interTime:30,autoPlay:true });	
		
		
		
		//视频
		var videoPanel = $('#J-wd-video');
		var showVideo = function(){
			toViewCenter(videoPanel);
			videoPanel.css('opacity', 0).show().animate({'top':parseInt(videoPanel.css('top')) - 100, 'opacity': 1});
			showMask();	
		};
		var hideVideo = function(){
			videoPanel.css('opacity', 1).animate({'top':parseInt(videoPanel.css('top')) + 100, 'opacity': 0}, function(){
				videoPanel.hide();
			});
			hideMask();	
		};
		$('#J-button-video').click(function(e){
			e.preventDefault();
			$('#J-video-content').html($('#J-tpl-video-code').html());
			showVideo();
		});
		videoPanel.find('.wd-close').click(function(e){
			e.preventDefault();
			$('#J-video-content').html('');
			hideVideo();
		});




















		
	
})(jQuery);