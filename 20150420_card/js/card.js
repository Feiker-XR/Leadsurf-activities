//JS 仅供效果展示，请自行修改
$(function() {
	var oCardBg = $('.card-bg .card');
	var oCardShow = $('.card-show');
	var oCardIn = $('.card-show .card');
	var nLeft = oCardBg.position().left;
	var oDrawOne = $('.draw-one');
	var oDrawAll = $('.draw-all');
	var nDrawNum = $('#drawNum');
	var nNum = parseInt(nDrawNum.text());
	var flag = true;
	var isFinished = true;
	//抽一次
	var fnOne = function() {
		if (nNum > 0 && isFinished) {

			nNum--;
			nDrawNum.text(nNum);
			isFinished = false;
			if(-[1,]){
				var audio = new Audio('images/card.wav');//路径
				audio.play();
			}
			
			oCardBg.animate({
				left: nLeft + 500,
				opacity: 0
			}, {
				duration: 600,
				queue: true
			}).animate({
				left: nLeft
			},0).animate({
				opacity: 1
			},1200,function () {
				if(-[1,]){
					audio.currentTime = 0;
					audio.pause();
				}
			}).queue(function(next) {
				var n = Math.floor(Math.random()*oCardIn.length+1);
				console.log(n);
				oCardShow.pop();
				$(oCardIn[n]).addClass('in').siblings().removeClass('in').hide(0);
				$(oCardIn[n]).show(0,function () {
					var timer = setTimeout(function(){
						isFinished = true;
					}, 800);
				});
				next();
			});
			
		} else {
			return false;
		}
	};
	//抽所有
	var fnAll = function() {
		if (nNum > 0 && isFinished) {
			nNum = 0;
			nDrawNum.text(nNum);
			isFinished = false;
			$('.pop-card-list').pop();
		} else {
			return false;
		}
	}
	
	oDrawOne.bind('click', fnOne);
	oDrawAll.bind('click', fnAll);
});

$(function(){
	//numberScorll
	function getdata(){
		var num = $("#cur_num").val();
		$.ajax({
			url: 'js/pt/pt_index.json',
			type: 'GET',
			dataType: "json",
			data:{'count':num},
			cache: false,
			timeout: 10000,
			error: function(){},
			success: function(data){
				rollNum(data.count,oJackpot);
			}
		});
	}
	
	//数字补位
	function pad(num, n) {
		var i = (num + "").length;
		while(i++ < n) num = "0" + num;
		return num;
	} 

	var n = parseInt(Math.random()*1000);
	var oJackpot = $('#jackpot');
	rollNum(n,oJackpot);
	function move(){
		//getdata();
		rollNum(n,oJackpot);
		n = n+parseInt(Math.random()*1000);
	}
	setInterval(move,3000);
	//金额滚动
	function rollNum(n,obj){
		n = pad(n,6);
		if(n >300000){
			n = 300000
		}
		var nL = String(n).length;
		var objNum = obj.find('em');
		var objHeight = obj.height();
		var oL = objNum.length/obj.length
		for(var i=0;i<nL;i++){
			if(oL<=i){
				obj.append("<em><span style='background-position:0 0'></span></em>");
			}
			var num = String(n).charAt(i);
			obj.each(function(){
				var objEm = $(this).find('em').eq(i);
				var objSpan = $(this).find('span').eq(i);
				var y = -parseInt(num)*60;
				objSpan.animate({
					backgroundPosition:'0 '+String(y)+'px'
				}, 800);
				
			});
		}
		$("#cur_num").val(n);
	}

	function inputTxt(obj,txt){
		obj.focus(function(){
			var txt_value = $(this).val();
			if(txt_value != ''){
				$(this).val('');
			}
		});
		obj.blur(function(){
			var txt_value = $(this).val();
			if(txt_value  == ''){
				$(this).val(txt);
			}
		});
	};
	var userName = $('#username');
	var passWord = $('#password');
	inputTxt(userName,'用户名');
	inputTxt(passWord,'密码');





	//第一次登陆弹出
	(function($){
		$.fn.pop = function(){
			var oMask = $('.mask');
			var oPop = $(this);
			var oPopClose = oPop.find('.close');
			var oPopBtnL = oPop.find('.pop-btn-login');
			var oPopBtnC = oPop.find('.pop-btn-confirm');
			oMask.show();
			oPop.css({
				'position':'fixed',
				'z-index':'1001',
				'left':'50%',
				'top':'50%',
				'margin-left':-oPop.outerWidth()/2+'px',
				'margin-top':-oPop.outerHeight()/2+'px'
			})
			oPop.removeClass('zoomOut').addClass('zoomIn animated').fadeIn(600);
			oPopClose.click(function(){
				oMask.hide();
				oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
			});
			oPopBtnL.click(function(){
				oMask.hide();
				oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
			});
			oPopBtnC.click(function(){
				oMask.hide();
				oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
			});
		}
	})(jQuery)
	//$('#pop-login').pop();

	$('.slots-btn').bind('click', function(){
		$('#pop-flipball').pop();
	});
});

$(function(){
	var timer = null;
	var oList = $(".lottery-text-list");
	var oListUl = $(".lottery-text-list ul");
	var oListLi = $(".lottery-text-list li");
	var nReplace = nTopHeight = oListLi.eq(0).outerHeight();
	oListUl.html(oListUl.html() + oListUl.html());
	clearInterval(timer);
	function roll(){
		if(nTopHeight > oListUl.outerHeight()/2){
			oListUl.css("top",0);
			nTopHeight = nReplace;
		}
		oListUl.animate({
			top:-nTopHeight
		},800);
		nTopHeight += nReplace;
	}
	var timer = setInterval(roll,3000);
	oListUl.mouseover(function(){
		clearInterval(timer);
	});
	oListUl.mouseout(function(){
		timer = setInterval(roll,3000);
	});
});

$(function(){
	$('.box-cards .btn').not('.disable').bind('click', function(){
		$('.pop-result').pop();
	});
});