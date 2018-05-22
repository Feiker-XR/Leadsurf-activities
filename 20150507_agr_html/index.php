<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>凤凰招商平台</title>
<meta name="description" content="凤凰招商平台">
<meta name="keywords" content="凤凰 凤凰娱乐 凤凰彩票 招商平台">
<link href="css/style.css" rel="stylesheet">
<!--[if lt IE 9]>
<script src="js/html5.js"></script>
<script src="js/css3-mediaqueries.min.js"></script>
<![endif]-->
<script>
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?15b9c1eed16f6dd3c3da9b1538cba6e5";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
</script>
</head>
<body>
	<?php 
        include 'header.php';
    ?>
	<section class="banner">
		<div class="slider" id="slider">
			<ul class="slider-pic">
				<li>
					<img src="images/banner/banner1.jpg" alt="">
					<b class="animation text text1"></b>
					<a href="register.php" target="_blank" class="animation btn">立即加入</a>
				</li>
				<li>
					<img src="images/banner/banner2.jpg" alt="">
					<b class="animation text text2"></b>
					<a href="register.php" target="_blank" class="animation btn">立即加入</a>
				</li>
				<li>
					<img src="images/banner/banner3.jpg" alt="">
					<b class="animation text text3"></b>
					<a href="register.php" target="_blank" class="animation btn">立即加入</a>
				</li>
			</ul>
			<ul class="slider-num">
				<li>收益当天结算</li>
				<li>业界佣金革命</li>
				<li>盈亏定期清零</li>
			</ul>
		</div>
	</section>
	<section class="content">
		<a href="timeline.php" class="content-a"></a>
		<a href="landingpage.php" class="content-b"></a>
	</section>
	
	<?php 
        include 'footer.php';
    ?>
	<div class="float">
		<a href="javascript:void(0);" id="mail" class="mail">
			<b>获取优惠</b>
		</a>
		<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2747847670&site=qq&menu=yes" class="customer"><b>联系客服</b></a>
	</div>
	<div class="pop video-play"><a href="javascript:void(0);" class="close"></a><div id="J-video-play"></div>
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/zhaoshang.js"></script>
	<script>
	$(function(){
		function toViewCenter(el){
			var el = $(el),w = el.width(),h = el.height();
			el.css({marginLeft:-w/2, marginTop:-h/2});
		}
		var urlAdress = 'images/main_video.swf';
		var videoHtmlfull = '<object width="100%" height="400">' +
					'<param name="movie" value="transparent">' + 
					'<param name="flashvars" value="' + urlAdress + '">' + 
					'<param name="allowFullScreen" value="true">' + 
					'<param name="allowscriptaccess" value="always">' + 
					'<param name="wmode" value="transparent"></param>' + 
					'<embed width="100%" height="400" wmode="transparent" src="' + urlAdress + '" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" ></object>';

		//
		var videoW = $('.video-play'),
			video = $('#J-video-play'),
			mask = $('.mask');
			toViewCenter(videoW);
		openVideo = function(){
			mask.show();
			videoW.show();
			video.html(videoHtmlfull);
		}

		closeVideo = function(){
			mask.hide();
			videoW.hide();
			video.html('');
		}

		$('.video-play .close').click(function(){
			closeVideo();
		})



        function checkCookie(name) {
            var user = sessionStorage.getItem(name)
            if (!user) {
            	openVideo();
            	sessionStorage.setItem(name, true);
            }
        }
        if(sessionStorage){
        	checkCookie('videoplay');
        }


	})

	</script>
</body>
</html>