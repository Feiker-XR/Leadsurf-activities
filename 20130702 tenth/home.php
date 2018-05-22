<!DOCTYPE html>
<html lang="en-US">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>十周年-提前抢票</title>
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
	<div class="banner">
		<div class="banner-inner">
			<div class="container_grad">
				<div class="grab-votes"></div>
			</div>
			<div class="guess-results" style="display:none">您猜测为：<em></em></div>
		</div>
	</div>
	<div class="content">
		<div class="content-inner">
			<div class="tab">
				<ul class="tab-title clearfix">
					<li class="current">参赛权益</li>
					<li>活动细则</li>
				</ul>
				<ul class="tab-content">
					<li class="pic"></li>
					<li class="activity-rule"  style="display:none">
						<dl>
							<dt><a href="javascript:;" class="more">更多细则</a>报名</dt>
							<dd class="clearfix">
								<div class="navigation_img"></div>
								<ul class="reason clearfix">
									<li class="join">用户需点击活动专题页上的“<span class="atention">参与活动</span>”按钮并支付相应报名费后即有资格参与所有活动；</li>
									<li class="luckNum">报名时需输入<span class="atention">三位数幸运号码</span>，幸运码可用于每日抽奖和总排名前三的用户选车</li>
									<li class="infomation">方便您获得活动奖励后我们与您取得联络及进行身份认证；</li>
								</ul>
							</dd>
							<dt class="clearfix"><a href="javascript:;" class="more">更多细则</a>抽奖</dt>
							<dd>
								<div class="content_area clearfix">
									<div class="explain clearfix">
										<h4>抽奖参与资格</h4>
										<p>已报名</p>
										<p>当天累计奖金大于等于38元</p>
									</div>
									<div class="content_img clearfix">
										<p class="lottery_logo">
											<span class="title">匹配号码</span>
											<strong>当天<span class="atention">重庆时时彩第120期</span>开奖号码</strong>
											报名时所填写的幸运号码十位及个位均匹配者获奖
										</p>
										<p class="integral">
											<span class="title">获得积分</span>
											中奖用户<span class="atention">可获20积分</span>
										</p>
									</div>
								</div>
							</dd>
							<dt><a href="javascript:;" class="more">更多细则</a>周加奖</dt>
							<dd>
								<div class="content_area clearfix weeks">
									<div class="explain clearfix">
										<h4>获得加奖参与资格</h4>
										<p>已报名</p>
										<p>以周为单位，当周日均奖金达到一定标准</p>
										<h6>奖励发放</h6>
										<div class="info">
											平台将在每个比赛周结束后两天内将加奖奖金以游戏币的形式打入获奖用户账户；
										</div>
									</div>
									<div class="content_img clearfix">
										<ul class="chart_area">
											<li class="one"><span class="">￥800,000及以上</span><em>￥88,000</em></li>
											<li class="two"><span class="">￥200,000～799,999.99</span><em>￥18,000</em></li>
											<li class="three"><span class="">￥18,888～199,999.99</span><em>￥1,568</em></li>
											<li class="four"><span class="">￥2,888～18,887.99</span><em>￥218</em></li>
											<li class="five"><span class="">￥688～2,887.99</span><em>￥48</em></li>
											<li class="six"><span class="">￥118～687.99</span><em>￥8</em></li>
										</ul>
									</div>
								</div>
							</dd>
							<dt><a href="javascript:;" class="more">更多细则</a>周排名</dt>
							<dd>
								<div class="content_area clearfix ranking">
									<div class="explain clearfix">
										<h4>获得周排名参与资格：</h4>
										<p>已报名</p>
										<p>周奖金排名</p>
										<p>以每个比赛周为节点按照平台所有用户当周所获奖金额进行周奖金排名；</p>
										<p>周排名前十用户可获得奖金与积分</p>
									</div>
									<div class="content_img clearfix">
										<table class="table">
											<tbody>
												<tr>
													<th></th>
													<th><div class="ico-title">所获积分</div></th>
													<th><div class="ico-title">所获奖金</div></th>
												</tr>
												<tr>
													<td><div class="ico-top10">第一名</div></td>
													<td><div class="ico-number">2,500</div></td>
													<td><div class="ico-number">8,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第二名</div></td>
													<td><div class="ico-number">1,800</div></td>
													<td><div class="ico-number">5,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第三名</div></td>
													<td><div class="ico-number">1,500</div></td>
													<td><div class="ico-number">5,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第四名</div></td>
													<td><div class="ico-number">1,200</div></td>
													<td><div class="ico-number">3,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第五名</div></td>
													<td><div class="ico-number">1,000</div></td>
													<td><div class="ico-number">3,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第六名</div></td>
													<td><div class="ico-number">900</div></td>
													<td><div class="ico-number">1,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第七名</div></td>
													<td><div class="ico-number">800</div></td>
													<td><div class="ico-number">1,888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第八名</div></td>
													<td><div class="ico-number">700</div></td>
													<td><div class="ico-number">888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第九名</div></td>
													<td><div class="ico-number">600</div></td>
													<td><div class="ico-number">888</div></td>
												</tr>
												<tr>
													<td><div class="ico-top10">第十名</div></td>
													<td><div class="ico-number">500</div></td>
													<td><div class="ico-number">888</div></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</dd>
							<dt><a href="javascript:;" class="more">更多细则</a>总排名</dt>
							<dd>
								<div class="content_area clearfix allranking">
									<div class="explain clearfix">
										<h4>获得总排名参与资格：</h4>
										<p>已报名</p>
										<p>通过日抽奖、周排名等活动获得过积分；</p>
										<div class="info">
											<p>按照用户参与活动以来所获得的积分进行由高至低的排序;</p>
											<p>总排名前十可获得豪车名表等奖品</p>
											<p>总排名未进前十可使用积分1:1兑换游戏币</p>
										</div>
									</div>
									<div class="content_img clearfix">
										<table class="bonus_list">
											<tbody>
												<tr>
													<th>总积分排名</th>
													<th class="line">奖品</th>
												</tr>
												<tr>
													<td>第一名</td>
													<td class="line">高级品牌车（价值100～400万）</td>
												</tr>
												<tr>
													<td>第二名</td>
													<td class="line">高级品牌车（价值70～200万）</td>
												</tr>
												<tr>
													<td>第三名</td>
													<td class="line">高级品牌车（价值50～150万）</td>
												</tr>
												<tr>
													<td>第四名</td>
													<td class="line">价值100,000的奖品</td>
												</tr>
												<tr>
													<td>第五名</td>
													<td class="line">价值100,000的奖品</td>
												</tr>
												<tr>
													<td>第六名</td>
													<td class="line">价值50,000的奖品</td>
												</tr>
												<tr>
													<td>第七名</td>
													<td class="line">价值50,000的奖品</td>
												</tr>
												<tr>
													<td>第八名</td>
													<td class="line">价值30,000的奖品</td>
												</tr>
												<tr>
													<td>第九名</td>
													<td class="line">价值30,000的奖品</td>
												</tr>
												<tr>
													<td>第十名</td>
													<td class="line">价值30,000的奖品</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="footer">Copy right &copy; 娱乐平台版权所有</div>
<div class="pop" id="pop" style="display: none">
	<div class="hd"><a href="javascript:void(0);" id="close" class="close"></a>活动报名</div>
	<div class="bd" id="dialog-content">
	</div>
</div>
<div class="mask"></div>
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/tenth.js"></script>
</body>
</html>
