//JS

$(function(){
	//herder scorll
	(function($){
		$.fn.scroll = function(o){
	        var settings = {
	            speed: 500,
	            delay: 3000
	        };
	        var o = $.extend(settings, o);
			var timer = null;
			var $this = $(this);
			var $ul = $this.find('ul');
			var $li = $this.find('li');
			var nReplace = nTopHeight = $li.eq(0).outerHeight();
			$ul.html($ul.html() + $ul.html());
			clearInterval(timer);
			function roll(){
				if(nTopHeight > $ul.outerHeight()/2){
					$ul.css("top",0);
					nTopHeight = nReplace;
				}
				$ul.animate({
					top:-nTopHeight
				},o.speed);
				nTopHeight += nReplace;
			}
			var timer = setInterval(roll,o.delay);
			$ul.mouseover(function(){
				clearInterval(timer);
			});
			$ul.mouseout(function(){
				timer = setInterval(roll,o.delay);
			});
		}
	})(jQuery);
	$('.lottery-list-info').scroll();
	//banner slider
	(function($){
	    $.fn.sliderShow = function(o){
	        var settings = {
	            speed: 500,
	            delay: 6000,
	            index: 0,
	            even:'mouseover',
	            next:'.next',
	            prev:'.prev',
	            sliderPic:'.slider-pic',
	            picItems:'.slider-pic li',
	            numItems:'.slider-num li'
	        };
	        var o = $.extend({},settings,o);
	        var $this = $(this);
	        var sliderPic = $this.find(o.sliderPic);
	        var numItems = $this.find(o.numItems);
	        var picItems = $this.find(o.picItems);
	        var next = $this.find(o.next);
	        var prev = $this.find(o.prev);
	        var length = numItems.length;
	        var index = o.index;
	        var even = o.even;
	        sliderPic.width(length*100 + '%');
	        picItems.width(100/length + '%');
	        numItems.eq(index).addClass('current');
	        picItems.eq(index).addClass('current');
	        var move = function(){
	            numItems.eq(index).addClass('current').siblings().removeClass();
	            picItems.eq(index).addClass('current').siblings().removeClass();
	            sliderPic.width(length*100 + '%');
                var nowLeft = -index*100 + '%';
                sliderPic.stop().animate({left:nowLeft},o.speed);
	        }
	        var autoRun = function(){
	            index++;
	            if(index == length){
	                index = 0;
	            }
	            move();
	        };
	        
	        numItems.bind(even,function(){
	            index = $(this).index();
	            move();
	        });
	       	
	       	next.click(function(){
	            index++;
	            if(index == length){
	                index = 0;
	            }
	            move();
	        });
	        prev.click(function(){
	            index--;
	            if(index == -1){
	                index = length-1;
	            }
	            move();
	        });
	        var timer = setInterval(autoRun,o.delay);
	        $this.hover(function(){
	            clearInterval(timer);
	        },function(){
	            timer = setInterval(autoRun,o.delay);
	        });
	    }
	})(jQuery);
	
	$('#slider').sliderShow({even:'click'});
	$('#gameSlider').sliderShow({even:'click'});
	$('#lotterySlider').sliderShow({even:'click'});
	// index
	(function(){
		var $a = $('.content-a'),$b = $('.content-b');
		$a.hover(function(){
			$a.addClass('current').css('z-index',1)
			$b.removeClass('current');
		},function(){
			$a.removeClass('current')
		});
		$b.hover(function(){
			$b.addClass('current');
			$a.removeClass('current').css('z-index',0);
		},function(){
			$b.removeClass('current')
		});
	})();

	(function(){
		var checkObj = {
			username:0,
			phonenum:0,
			mail:0,
			qq:0,
			city:0
		}
		//用户名
		function checkUsername(){
			var username = $.trim($('#username').val());
			if(!username){
				//请输入用户名
				return 0;
			}
			else if(/[u4e00-u9fa5]/.test( username ) ){
				//请输入中文
				return -1;
			}
			return 1;
		}
		var username = $('#username');
		username.bind('focus', function(){
			var ret = checkUsername();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			prompt.show();
			check.hide();
			right.hide();
		});
		//当文本框失去焦点时
		username.bind('blur', function(){
			var ret = checkUsername();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			if(ret>0){
				prompt.hide();
				check.hide();
				right.css({display:'inline-block'});
				checkObj.username = 1;
			}else{
				right.hide();
				prompt.hide();
				check.css({display:'inline-block'});
				checkObj.username = 0;
				if(ret == 0){
					check.html("请输入用户名");
				}else if(ret == -1){
					check.html("请输入中文");
				}
			}
			return false;
		});
		//电话号码
		function checkPhonenum(){
			var phonenum = $.trim($('#phonenum').val());
			if(!phonenum){
				//长度有误，请填写11位数字
				return 0;
			}
			else if(! /^0?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test( phonenum ) ){
				//请输入正确的11位手机号码
				return -1;
			}
			return 1;
		}

		var phonenum = $('#phonenum');
		phonenum.bind('focus', function(){
			var ret = checkPhonenum();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			prompt.show();
			check.hide();
			right.hide();
		});
		//当文本框失去焦点时
		phonenum.bind('blur', function(){
			var ret = checkPhonenum();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			if(ret > 0){
				prompt.hide();
				check.hide();
				right.css({display:'inline-block'});
				checkObj.phonenum = 1;
			}
			else{
				right.hide();
				prompt.hide();
				check.css({display:'inline-block'});
				checkObj.phonenum = 0;
				if(ret == 0){
					check.html("请输入手机号码");
				}else if(ret == -1){
					check.html("请输入正确的11位手机号码");
				}
			}
			return false;
		});
		//邮箱
		function checkMail(){
			var mail = $.trim($('#mail').val());
			if(!mail){
				return 0;
			}
			else if(! /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test( mail ) ){
				return -1;
			}
			return 1;
		}
		var mail = $('#mail');
		mail.bind('focus', function(){
			var ret = checkMail();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			prompt.show();
			check.hide();
			right.hide();
		});
		//当文本框失去焦点时
		mail.bind('blur', function(){
			var ret = checkMail();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			if(ret > 0){
				prompt.hide();
				check.hide();
				right.css({display:'inline-block'});
				checkObj.mail = 1;
			}
			else{
				right.hide();
				prompt.hide();
				check.css({display:'inline-block'});
				checkObj.mail = 0;
				if(ret == 0){
					check.html("请输入邮箱");
				}else if(ret == -1){
					check.html("请输入正确的邮箱地址");
				}
			}
			return false;
		});
		//邮箱
		function checkQQ(){
			var qq = $.trim($('#qq').val());
			if(!qq){
				return 0;
			}
			else if(!/^[1-9]\d{4,10}$/ .test(qq)){
				return -1;
			}
			return 1;
		}
		var qq = $('#qq');
		qq.bind('focus', function(){
			var ret = checkQQ();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			prompt.show();
			check.hide();
			right.hide();
		});
		//当文本框失去焦点时
		qq.bind('blur', function(){
			var ret = checkQQ();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			if(ret > 0){
				prompt.hide();
				check.hide();
				right.css({display:'inline-block'});
				checkObj.qq = 1;
			}
			else{
				right.hide();
				prompt.hide();
				check.css({display:'inline-block'});
				checkObj.qq = 0;
				if(ret == 0){
					check.html("请输入QQ");
				}else if(ret == -1){
					check.html("请输入正确的QQ号码");
				}
			}
			return false;
		});
		//城市
		function checkCity(){
			var city = $('#city').val();
			if(city == '请选择市'&&'请选择区'){
				return 0;
			}
			return 1;
		}
		var city = $('#city');
		//当文本框失去焦点时
		city.bind('change', function(){
			var ret = checkCity();
			var prompt = $(this).parent().find('.ui-prompt');
			var check = $(this).parent().find('.ui-check');
			var right = $(this).parent().find('.ui-right');
			if(ret > 0){
				prompt.hide();
				check.hide();
				right.css({display:'inline-block'});
				checkObj.city = 1;
			}
			else{
				right.hide();
				prompt.hide();
				check.css({display:'inline-block'});
				checkObj.city = 0;
				if(ret == 0){
					check.html("请选择地址");
				}
			}
			return false;
		});
		function formReset(){
			$('#form').find(':input').not(':button, :submit, :reset').val('').removeAttr('checked').removeAttr('selected');
		}

		var btnSubmit = $('#J-Submit');

		btnSubmit.bind('click',function(){
			username.blur();
			phonenum.blur();
			mail.blur();
			qq.blur();
			city.change();
			var istrue = true;

			for (var i in checkObj) {
				if (!checkObj[i]) {
					istrue = false;				
				}
			};
			var data = $('#form').serialize();
			if(btnSubmit.attr("disabled")){
				return false;
			}
			if(istrue){
				$.ajax({
					type:"post",
					url:'register.json',
					dataType:'json',
					data:data,
					success:function(result){
						if(result['isSuccess'] == 1) {
							//$('#form').submit();
							alert(result['msg']);
							//btnSubmit.attr("disabled", true);

							formReset();
							window.location.reload()
						} else {
							alert("请填写完整资料！");
							return false;
						}
					},
					error:function(result) {
						alert("请填写完整资料！");
						return false;
					}
				});
			}
		});
	})();
	//QA
	(function(){
		var oQaTabT = $('.qa-tab-title a');
		var oQaList = $('.qa-list');
		var oQaListLi = $('.qa-list li');
		var oQ = $('.qa-list .q');
		var oA = $('.qa-list .a');
		oQaTabT.each(function(index){
			$(this).click(function(){
				$(this).addClass('current').siblings().removeClass('current');
				oQaList.eq(index).addClass('qa-list-current').siblings().removeClass('qa-list-current');
			})
		});
		oQ.each(function(index){
			$(this).click(function(){
				if(oA.eq(index).is(":hidden")){
					oQ.removeClass('q-current').eq(index).addClass('q-current');
					oA.hide().eq(index).fadeIn(900);
				}else{
					oQ.eq(index).removeClass('q-current');
					oA.eq(index).hide();
				}
			});
			
		});
	})();
	
	//mail
	(function($){
		function toViewCenter(el){
			var el = $(el),w = el.width(),h = el.height();
			el.css({marginLeft:-w/2, marginTop:-h/2});
		}
		function formReset(){
			$('#form2').find(':input').not(':button, :submit, :reset').val('').removeAttr('checked').removeAttr('selected');
		}
		var icoMail = $('#mail2');
		var mask = $('<div class="mask"></div>').appendTo('body');
		var popMail = $('<div class="pop pop-mail"><a href="javascript:void(0);" class="close"></a><div class="title">输入邮箱获得最新招商活动信息</div><form id="form2" action="form_action.asp" method="post"><ul class="ui-form"><li><input type="text" id="mail2" class="ui-input" name="mail" value=""></li><li><a id="submit" class="ui-btn" href="javascript:void(0);">确 认</a></li></ul></form><p>现在注册即可享受限量额外千分之二返现优惠</p></div>').appendTo('body');
		var close = $('.pop .close');
		var btnSubmit = $('#submit');
		

		toViewCenter(popMail);
		icoMail.click(function(){
			mask.show();
			popMail.show();
		});
		close.click(function(){
			mask.hide();
			popMail.hide();
		});
		btnSubmit.click(function(){	
			var mail = $.trim($('#mail2').val());
			if(!mail){
				return alert("请输入邮箱！");
			}
			else if(! /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ .test( mail ) ){
				return alert("请输入正确的邮箱地址！");
			}
		
			$.ajax({
				type:"post",
				url:'reg.php',
				data:{email:mail},
				success:function(result){
					if(result['isSuccess'] == 1){
						//$('#form').submit();
						alert(result['msg']);
						btnSubmit.attr("disabled", true);
						formReset();
						mask.hide();
						popMail.hide();
					} else {
						alert("数据错误");
						return false;
					}
				},
				error:function(result) {
					alert("请求失败");
					return false;
				}
			});		
		});
	})(jQuery);

});
