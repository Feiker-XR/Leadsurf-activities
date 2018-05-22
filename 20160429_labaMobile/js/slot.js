$(function(){
	//服务端URL
	var configServer = "config.php";
	var lotteryServer = "lottery.php";
	var infoServer = "info.php";
	
	// function counter(time){
	// 	// var hour = time.getHours();
	// 	// var minute = time.getMinutes();
	// 	// var second = time.getSeconds();
	// 	// time.setSeconds(time.getSeconds()-1);
	// 	var hour = Math.floor(time%(24*60*60)/(60*60))
	//     var minute = Math.floor(time%(24*60*60)%(60*60)/60);
	//     var second = Math.floor(time%(24*60*60)%(60*60)%60);
	// 	$("#endTime").html(hour + ':' + minute + '<strong>'+ second +'</strong>');
 //   	}
   	
   	

   
	$.ajax({
		url:configServer,
		dataType:'json',
		success:function(res){
			if (Number(res['isSuccess']) == 1){
				if(res['isPrize']){
					var hisBonus = res['hisBonus'];
					$('.content1').hide();
					$('.content2').show();
					$('#hisBonus').html(hisBonus)
				}else{
					//倒计时  
					var time = res['endTime'];
					setInterval(function(){
						var hour = Math.floor(time%(24*60*60)/(60*60))
	         			var minute = Math.floor(time%(24*60*60)%(60*60)/60);
	       				var second = Math.floor(time%(24*60*60)%(60*60)%60);
		            	$("#endTime").html(hour + ':' + minute + '<strong>'+ second +'</strong>');
			            time--;
					}, 1000);
					var betAmount = res['betAmount'];
					var betRatio = res['betRatio'];
					
					
					var betNum = [[0,1500],[1500,10000],[10000,50000],[50000,100000]];
					var betDiff = 0;
					var index = 0;
					for (var i = 0; i < betNum.length; i++) {
						var cur = betNum[i];
						var min = cur[0];
						var max = cur[1];
						if(betAmount>= min && betAmount<max){
							betDiff = max - betAmount;
							var l = ((betAmount -min)/max + i)*25;
							break;
						}
					}
					if (betDiff > 0){
						$('#betDiff').html(betDiff)
					}else{
						$('.progress-bar-tips p').html(您今日投注已达到最高奖励等级)
					}

					$('.progress-bar-inner').width(l + '%');
					var left = $('.progress-bar-inner').width() - $('.progress-bar-tips').outerWidth()/2;
					$('.progress-bar-tips').css({'left':left});
					$('#betAmount').html(betAmount);
					$('#betRatio').html(betRatio);
				}
				var data = res['data'];
				var name = data[0];
				var win = data[1];
				for (var i = 0; i < data.length; i++) {
					var html = '<li>恭喜 ' + data[i].name + ' 获得 ' + data[i].win + '</li>';
					$("#notice ul").append(html);
				}
				//中奖公告滚动
			    var $this = $("#notice");
			    var scrollTimer;
			    $this.hover(function(){
			        clearInterval(scrollTimer);
			    }, function() {
			        scrollTimer = setInterval(function(){
			            scrollNews($this);
			        }, 2000);
			    }).trigger("mouseleave");

			    function scrollNews(obj){
			        var $self = obj.find("ul");
			        var lineHeight = $self.find("li:first").height();
			        $self.animate({
			            "marginTop": -lineHeight + "px"
			        }, 600, function(){
			            $self.css({
			                marginTop: 0
			            });
			            $self.find("li:nth-child(1)").appendTo($self);
			            $self.find("li:nth-child(1)").appendTo($self);
			        })
			    }
			}
		}
	});
	var fontSize = $('#html').css('fontSize');
	fontSize = fontSize.slice(0,fontSize.length-2);
	var offsetW = Number(fontSize) * .7;
	var offsetH = Number(fontSize) * .5;
	//拉霸
    $('#flipball').flipball({
        ballsize: 1, // 彩球个数
        initball: '0', // 初始化彩球数据
        loop: 3, // 彩球滚动循环次数（必须为整数）
        timeout: 3000, // 彩球滚动动画执行时间基数
        delay: 150, // 每个彩球动画执行延迟时间基数
        offset: [offsetW, offsetH], // 球的宽高
        handbar: '.handle-hand'
    });
    var isFinished = true;
    $('.handle-hand').bind('click', function(){
        if(isFinished){
            isFinished = false;
            $.ajax({
				url:lotteryServer,
				dataType:'json',
				success:function(res){
					if (Number(res['isSuccess']) == 1){
						//multiple值为1倍,1.5倍,2倍,10倍
						var bonus = res['bonus'];
						var multiple = res['multiple'];
						var multipleNum = [1,1.5,2,10];
						for (var i = 0; i < multipleNum.length; i++){
							var cur = multipleNum[i];
							if(cur == multiple)
							break;
						}
						$('#flipball').flipball().flip([i], true, function(){
							setTimeout(function(){
								$('.mask').show();
                				$('.pop').fadeIn();
                				$('#betBonus').html(bonus+'元');
                				$('#betMultiple').html(multiple);
								
							},300)
						})
						$('.pop .btn').bind('click', function(){
							$('.content1').hide();
							$('.content2').show();
							$('.pop').fadeOut();
							$('.mask').hide();
							$('#hisBonus').html(bonus);
						});
					}
				}
			});
        }
    });
    
    
});