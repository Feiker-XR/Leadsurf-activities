<!DOCTYPE html>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>凤凰十周，角逐千万奖</title>
<link rel="stylesheet" href="style/style.css"/>
</head>
<?php
	include('config.php');
	echo "<script>var qiangpiao='".$time['qiangpiao']."', baoming = '".$time['baoming']."', qidong = '".$time['qidong']."', gongbu = '".$time['gongbu']."'</script>";
?>
<body>
	<div class="bg-header"></div>
	<div class="header">
		<div class="header-inner">
			<div class="timeline"></div>
			<div class="countdown">
				<strong class="day">00</strong>
				<span class="day-text">天</span>
				<strong class="hour">00</strong>
				<strong class="minute">00</strong>
				<strong class="second">00</strong>
			</div>
		</div>
	</div>
	<div class="banner banner10" >
		<div class="banner-inner">
			<div class="advisory">
				<?php
				$num = rand(0, count($hao123) - 1);
				echo '<a target="_blank" href="'.$hao123[$num].'" style="display:block;width:86%;height:85px;margin:0px auto"></a>';
				echo '<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin='.$QQ['zixun'].'&site=qq&menu=yes" style="display:block;width:56px;height:40px;margin:6px 30px 0 0;float:right"></a>';
				?>
			</div>
		</div>
	</div>
	<div class="content">
		<div class="content-inner">
			<div class="advisory-box">
				<div class="info-list"></div>
				<div class="clearfix">
					<div class="weibo">
						<div class="hd"></div>
						<div class="bd">
							<iframe width="100%" height="314" class="share_self"  frameborder="0" scrolling="no" src="http://widget.weibo.com/weiboshow/index.php?language=&width=0&height=550&fansRow=2&ptype=1&speed=0&skin=10&isTitle=0&noborder=0&isWeibo=1&isFans=0&uid=3681378983&verifier=5cb21f6a&colors=d6f3f7,1a0312,bfb4d7,bfb4d7,1a0312&dpc=1"></iframe>
						</div>
					</div>
					<div class="qq">
						<div class="hd"></div>
						<dl class="bd">
							<?php
							$num = rand(0, count($hao123) - 1);
							echo '<dt><a style="display: block;height: 55px;width: 166px;" href="'.$hao123[$num].'"></a></dt>';
							?>
							<?php
								foreach ($QQ['kefu'] as $k => $val) {
									echo '<dd><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin='.$val.'&site=qq&menu=yes">QQ客服</a></dd>';
								}
								unset($val)
							?>
						</dl>
					</div>
				</div>
				<div class="seo-list">
					<div class="hd"><i class="arrow-down"></i>实时热点</div>
					<div class="bd" style="display:none">
						<ul class="clearfix">
							<?php
								foreach ($SEOList as $value) {
							?>
							<li>
								<?php
									foreach ($value as $val) {
										echo '<a target="_blank" href="'.$val['link'].'">'.$val['name'].'</a>';
									}
									unset($val)
								?>
							</li>
							<?php
								}
								unset($value)
							?>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer">Copy right &copy; 娱乐平台版权所有</div>
	<div class="pop" id="pop" style="display: none">
	<div class="hd"><a href="javascript:void(0);" id="close" class="close"></a>活动报名</div>
	<div class="bd" id="dialog-content">
	</div>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/tenth.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-42911224-1', 'fenghuanghuodong.com');
  ga('send', 'pageview');

</script>
</body>
</html>
