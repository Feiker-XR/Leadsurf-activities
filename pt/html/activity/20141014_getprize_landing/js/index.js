;(function($){
    function F(t, o){
        this.opts = $.extend({
        	visible: 3,
        	initDay: 1,
        	after: function(){},
        	debugs: false // 是否支持debug [0/false, 1=>对象级输出, 2=>字符串级输出]
        }, o);  
        this.slides = [];
        this.$t = $(t);
        this.debugs = this.opts.debugs;
        // this.isIE6 = $.browser.msie && parseFloat($.browser.version) < 7;
        this.init();
    }

    F.prototype = {
        init: function(){
        	var me = this, opts = me.opts;
        	me.$box = me.$t.find('[data-cycle-box]');
        	// if( !me.$box.length ){
        	// 	return alert('Please config the cycle box element!');
        	// }
        	me.$slides = me.$box.children();
        	me.slideLen = me.$slides.length;
        	me.step = me.$slides.eq(0).outerWidth();
        	me.$box.css('width', me.step * me.slideLen);

        	me.$button = me.$t.find('[data-cycle-button]');
        	me.$prev = me.$button.find('.prev');
        	me.$next = me.$button.find('.next');
        	me.idx = -1;

        	me.initDay = me.$t.data('thisday') || opts.initDay;
        	
        	// 视觉下中间元素左右两边的元素个数
        	// 视觉显示3个元素，则左右两边各1个元素
        	me.flagNum = Math.floor(opts.visible / 2);

        	me.slide(me.initDay - 1);

        	me.bindEvent();

        },
        slide: function(idx){
        	var me = this;
        	me.onhandled = true;
        	// idx此处为索引值：即从0开始计数
        	if( idx >= me.flagNum && idx <= me.slideLen - me.flagNum - 1 ){
        		me.$box.animate({
	        		marginLeft: -me.step * (idx-1)
	        	}, 1000);
        	}else if( idx < 0 ){
        		idx = 0;
        	}else if( idx >= me.slideLen ){
				idx = me.slideLen - 1;
			}
	        	
        	me.idx = idx;
    		me.$slides.eq(idx).addClass('active').find('.prize').removeClass('normal-prize')
    			.end()
    			.siblings('.active').removeClass('active').find('.prize').addClass('normal-prize');
    		me.checkStatus();

    		setTimeout(function(){
    			me.onhandled = false;
    		}, 1000);
        },
        checkStatus: function(){
        	var me = this, idx = me.idx;
        	if( idx < 1 ){
        		me.$prev.addClass('disabled');
        	}else{
        		me.$prev.removeClass('disabled');
        	}

        	if( idx >= me.slideLen - me.flagNum ){
        		me.$next.addClass('disabled');
        	}else{
        		me.$next.removeClass('disabled');
        	}
        },
        bindEvent: function(){
        	var me = this;
        	me.$button.children().on('click', function(){
        		if( $(this).hasClass('disabled') || me.onhandled ) return false;
        		var idx = me.idx;
        		if( $(this).hasClass('prev') ){
        			idx -= 1;
        		}else{
        			idx += 1;
        		}
        		me.slide(idx);
        	});
        	// me.$slides.on('click', function(){
        	// 	if( $(this).hasClass('active') || me.onhandled ) return false;
        	// 	var idx = $(this).index();
        	// 	me.slide( idx );
        	// }).eq(me.initDay - 1).trigger('click');
        },
        // debug
        debug: function(){      
            this.debugs && window.console && console.log && console.log( '[slide] ' + Array.prototype.join.call(arguments, ' ') );
        }
    };

    $.fn.slide = function(o) {    
        var instance;
        this.each(function() {              
            instance = $.data( this, 'slide' );
            // instance = $(this).data( 'slide' );
            if ( instance ) {
                // instance.init();         
            } else {
                instance = $.data( this, 'slide', new F(this, o) );          
            }
        });
        return instance;
    };
})(jQuery);

;(function($){
    function F(t, o){
        this.opts = $.extend({
            showNum: 6,
            wrapClass: 'list-wrap',
            ajaxurl: 'prizeList.php',
            ajaxTimeout: 60 * 1000, // 60s
            debugs: false // 是否支持debug [0/false, 1=>对象级输出, 2=>字符串级输出]
        }, o);  
        this.slides = [];
        this.$t = $(t);
        this.debugs = this.opts.debugs;
        // this.isIE6 = $.browser.msie && parseFloat($.browser.version) < 7;
        this.init();
    }

    F.prototype = {
        init: function(){
            var me = this, opts = me.opts;
            me.$children = me.$t.children();
            me.len = me.$children.length;
            me.step = me.$children.eq(0).outerHeight();
            var wrapStyle = ' style="height: ' + opts.showNum * me.step + 'px;position: relative;overflow:hidden;"';
            me.$t.wrap('<div class="' + opts.wrapClass + '"' + wrapStyle +'></div>');
            me.$t.height(me.len * me.step);
            me.animate();
            me.bindEvent();
        },
        bindEvent: function(){
            var me = this;
            me.play();
            me.$t.on({
                mouseover: function(){
                    me.stop();
                },
                mouseout : function(){
                    me.play();
                }
            });
            if( me.opts.ajaxurl && me.opts.ajaxTimeout ){
                setInterval(function(){
                    me.updateList();
                }, me.opts.ajaxTimeout);
            }            
        },
        play: function(){
            var me = this;
            me.timer = setInterval(function(){
                me.animate();   
            }, 2000);
        },
        stop: function(){
            var me = this;
            clearInterval(me.timer);
            me.timer = null;
        },
        animate: function(){
            var me = this;
            // console.log(me.$t)
            me.$t.animate({
                marginTop: -me.step
            }, 600, function(){
                $(this).css('margin-top', 0);
                me.$t.children().eq(0).appendTo(me.$t);
            });
        },
        updateList: function(){
            var me = this;
            $.get(me.opts.ajaxurl, function(resp){
                var resp = $.parseJSON(resp);
                if( resp.status == 'ok' ){
                    var lists = resp.list,
                        html = '';
                    $.each(lists, function(i, list){
                        html += '<li><span class="name">' + list.username + '</span><span>' + list.desc + '</span></li>'
                    });
                    me.$t.html(html);
                    me.reset();
                }
            });
        },
        reset: function(){
            var me = this;
            me.$children = me.$t.children();
            me.len = me.$children.length;
            me.$t.css({
                marginTop: 0,
                height: me.len * me.step
            });
        },
        // debug
        debug: function(){      
            this.debugs && window.console && console.log && console.log( '[record] ' + Array.prototype.join.call(arguments, ' ') );
        }
    }

    $.fn.record = function(o) {    
        var instance;
        this.each(function() {              
            instance = $.data( this, 'record' );
            // instance = $(this).data( 'record' );
            if ( instance ) {
                // instance.init();         
            } else {
                instance = $.data( this, 'record', new F(this, o) );          
            }
        });
        return instance;
    }
})(jQuery);

$(function(){
	
    $('.cycle').slide();

    var record = $('.winner-list ul').record({
        ajaxTimeout: 0
    });
});