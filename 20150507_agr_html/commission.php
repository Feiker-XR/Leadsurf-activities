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
	<section class="commission">
		<div class="layout">
			<h3></h3>
			<h4>怎样获取佣金</h4>
			<p>作为我们尊贵的合作伙伴，您可以使用我们提供给您的资源来获取可观的佣金数额。</p>
			<h4>赚取佣金的方式</h4>
			<p>作为我们尊贵的合作伙伴，您可以免费使用我们的市场工具。您可以利用这些市场工具进行推广发展您的玩家。我们将会追踪您的点击率、下线会员量、注册量和在平台投注的玩家数额。您的佣金将完全取决于您玩家的游戏情况。</p>
			
			
		</div>
	</section>
	<section class="commission-map">
		<div class="layout">
			<h4>佣金分成计算对比图</h4>
			<div class="commission-date clearfix">
				<li class="model-other clearfix">
					<div class="title">其他</div>
					<div class="progress" id="width1"></div>
					<div class="value" id="value1">12,000 元</div>
				</li>
				<li class="model-rack clearfix">
					<div class="title">返水模式</div>
					<div class="progress" id="width2"></div>
					<div class="value" id="value2">14,000 元</div>
				</li>
				<li class="model-commission clearfix">
					<div class="title">佣金模式</div>
					<div class="progress" id="width3"><div class="progress-inner"></div></div>
					<div class="value" id="value3">34,000 元</div>
				</li>
			</div>
			<div class="commission-info">
				<span class="info"><strong>月销量</strong>左右拖动滑块查看相应佣金分成</span>
				<span class="number" ><strong id="amount"></strong>元</span>
			</div>
			<div class="slider-wrapper">
				<div class="star-number">0</div>
				<div class="middle-number"><b></b>300万<br />佣金模式激活</div>
				<div class="end-number">600万</div>
				<div id="slider-range-min"></div>
			</div>
			<div class="join">
				<a href="#" target="_blank"></a>
				<p>凤凰是亚洲最杰出的博彩公司之一并享有高信誉度的合作伙伴平台！</p>
			</div>
		</div>
	</section>
	<?php 
        include 'footer.php';
    ?>
	
	<div class="float">
		<a href="#" class="mail">
			<b>获取优惠</b>
		</a>
		<a href="#" class="customer"><b>联系客服</b></a>
	</div>
	
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/zhaoshang.js"></script>
	<script>
	$(function(){
		$( "#slider-range-min" ).slider({
			range: "min",
			value: 1000000,
			min: 0,
			max: 6000000,
			slide: function( event, ui ) {
				var v = ui.value,
					v1 = Math.round(v*0.007),
					v2 = Math.round(v*0.01),
					w1 = Math.round(v1/10000*80),
					w2 = Math.round(v2/10000*80),
					w3 = Math.round(v3/10000*80);
				if(v > 3000000){
					v3 = Math.round(v*0.012);
					$('.model-commission').addClass('current')
				}else{
					v3 = Math.round(v*0);
					$('.model-commission').removeClass('current')
				}
				$( "#amount" ).text(v);
				$('#value1').text(v1+'元');
				$('#value2').text(v2+'元');
				$('#value3').text(v3+'元');
				$('#width1').css('width',w1);
				$('#width2').css('width',w2);
				$('#width3').css('width',w3);
				
			}
		});

		var v = $('#slider-range-min').slider('value');
			v1 = Math.round(v*0.007),
			v2 = Math.round(v*0.01),
			v3 = Math.round(v*0),
			w1 = Math.round(v1/10000*80),
			w2 = Math.round(v2/10000*80),
			w3 = Math.round(v3/10000*80);
		$( "#amount" ).text(v);
		$('#value1').text(v1+'元');
		$('#value2').text(v2+'元');
		$('#value3').text(v3+'元');
		$('#width1').css('width',w1);
		$('#width2').css('width',w2);
		$('#width3').css('width',w3);
	});
	</script>
</body>
</html>