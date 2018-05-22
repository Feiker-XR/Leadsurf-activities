<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>凤凰娱乐-红包天天送</title>
<meta name="keywords" content="凤凰娱乐, 凤凰平台, 凤凰软件, 凤凰摇钱树, 凤凰摇钱术, 凤凰彩票, 生钱有道" />
<meta name="description" content="" />
<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0">
<link rel="stylesheet" href="http://192.168.100.72/anvonew/html/images/common/base.css" />
<link rel="stylesheet" href="css/style.css" />
</head>
<body>

<div id="header" class="wrap">
	<img src="images/top.jpg" class="space-img" alt="">
	<h1 class="seo_txt">凤凰娱乐-红包天天送</h1>
	<h2 class="seo_txt">投注抽大奖，红包每天送</h2>
	<p class="seo_txt">PC端和手机端均可参与</p>
	<p class="seo_txt">活动时间&nbsp;&nbsp;2014.12.15 - 2015.01.11</p>
</div>	
	
<div id="sign-in" class="wrap">
	<?php
		$days = 31; // 当前月天数
		$thisday = 15; // 当前天，2014.10.15，不要前缀加0,2014.10.06，请使用6
		$prizes = array();
		for ($i=0; $i < $days; $i++) { 
			if( $i < $thisday ){
				$k = $i % 4;
				if( $k === 0 ){
					$status = 'expired'; // 已过期
					$txt = '已过期';
				}else if( $k === 1 ){
					$status = 'accepted'; // 已领取
					$txt = '已领取';
				}else if( $k === 2 ){
					$status = 'lottery'; // 投注领奖
					$txt = '立即投注';
				}else{
					$status = 'enabled'; // 当前可领取
					$txt = '点击领取';
				}
				$prizes[$i] = array(
					'day'    => $i+1,
					'money'  => 2,
					'text'   => $txt,
					'status' => $status
				);
			}else{
				$prizes[$i] = array(
					'day'    => $i+1,
					'money'  => 2,
					'text'   => '尚未开启',
					'status' => 'comming' // 尚未开启
				);
			}
		}
	?>
	<div class="cycle" data-thisday="<?=$thisday?>">
		<ul class="cycle-slideshow"
			data-cycle-slides="> li"
			data-cycle-swipe="true"
			data-cycle-fx="scrollHorz"
			data-cycle-prev=".cycle-button .prev"
			data-cycle-next=".cycle-button .next"
			data-cycle-timeout="4000"
			data-cycle-random="true"
			data-cycle-loader="wait"
			data-cycle-speed="800"
		>
			<?php foreach ($prizes as $key => $value) {	?>
			<li data-day="<?=$value['day']?>">
				<img src="images/prize_bg_<?=$value['status']?>.png" alt="">
				<div class="prize">
					<p class="date">2014年12月<?=$value['day']?>日</p>
					<p class="desc"><strong><?=$value['money']?></strong><span>元红包</span></p>
					<a class="button <?=$value['status']?>"
					<?php if( $value['status'] == 'lottery' ){?>
						href="" target="_blank"
					<?php } ?>
					><?=$value['text']?></a>
				</div>
			</li>
			<?php } ?>
		</ul>
		<div class="cycle-button">
			<span class="prev"><img src="images/prev.png" alt="prev"></span>
			<span class="next"><img src="images/next.png" alt="next"></span>
		</div>
	</div>
</div>

<div class="wrap rule" id="rule1">
	<img src="images/rule_1.png" class="space-img" alt="">
	<ol>
		<li>此活动限元模式投注，任意彩种均可参与（包含手机投注）</li>
		<li>每日投注开奖之后，即可获得领奖资格（双色球、3D彩等跨天开奖彩种，需在开奖之后才可获得投注当日的领奖资格）</li>
		<li>每日每个用户只能领取一次投注红包，领取成功后系统会自动充值至您的账户，红包金额不可提现。</li>
		<li>用户必须在活动结束前领完所有红包，过期后不可再领取。</li>
	</ol>
</div>

<div class="wrap">
	<img src="images/draw_bg.png" class="space-img" alt="">	
</div>

<div class="wrap lottery-poll">
	<img src="images/ltry_space.png" class="space-img" alt="">
	<div class="lotterys">
		<div class="ltry ltry1"><img src="images/prize/draw_lottery_01.jpg" alt=""></div>
		<div class="ltry ltry2"><img src="images/prize/draw_lottery_02.jpg" alt=""></div>
		<div class="ltry ltry3"><img src="images/prize/draw_lottery_03.jpg" alt=""></div>
		<div class="ltry ltry4"><img src="images/prize/draw_lottery_04.jpg" alt=""></div>
		<div class="ltry ltry5"><img src="images/prize/draw_lottery_05.jpg" alt=""></div>
		<div class="ltry ltry6"><img src="images/prize/draw_lottery_06.jpg" alt=""></div>
		<div class="ltry ltry7"><img src="images/prize/draw_lottery_07.jpg" alt=""></div>
		<div class="ltry ltry8"><img src="images/prize/draw_lottery_08.jpg" alt=""></div>
	</div>
	<a class="lottery-button"><span>点击抽奖</span></a>
</div>

<div class="wrap lottery-board">
	<img src="images/bet_1_bg.png" class="space-img" alt="">
	<div>
		<h3>您还有<strong>3</strong>次抽奖机会</h3>
		<p class="desc">投注每满7天，即可获得一次抽奖机会，<strong>100%有奖！</strong></p>
		<!-- <a href="" class="go-lottery" target="_blank"><span>立刻投注</span></a> -->
		<a class="check-result">查看中奖结果</a>
	</div>
</div>

<div class="wrap winner-list">
	<img src="images/bet_2_bg.png" class="space-img" alt="">
	<ul>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
		<li>
			<span class="name">Im***84</span>
			<span>抽中了100元</span>
		</li>
	</ul>
</div>

<div class="wrap rule" id="rule2">
	<img src="images/rule_2.png" class="space-img" alt="">
	<ol>
		<li>每投注满7天可以参加转盘抽奖。抽奖活动中，赠送全部为游戏币。</li>
		<li>获得的抽奖机会可以累计，但必须在活动结束前用完，活动结束后将清零。</li>
		<li>抽中充值50送50、充值100送100、充值300送300、充值1送999奖品的的用户，需要活动结束前一次性充值要求金额。</li>
		<li>充值金额当日到账，赠送金额将在活动结束后分2周赠送，赠送日期为1月15日、1月22日。</li>
		<li>抽中奖品中，抽中礼金金额将在12.22、12.29、1.5、1.12派发，取最临近日期派发。</li>
		<li>活动欢迎真实用户参与，禁止刷号等作弊行为，一旦发现不予派奖。</li>
		<li>凤凰游戏平台保留活动最终解释权。</li>
	</ol>
</div>

<div id="footer">
	<p class="copyright">© 2003 - 2014  All rights reserved. 凤凰游戏平台版权所有</p>
</div>


<div id="overlay_shadow">&nbsp;</div>

<div id="myprize_layer" class="overlay_layer">
	<div class="overlay_title">
		<h2>中奖结果统计</h2>
		<span data-action="close" class="overlay_close">&times;</span>
	</div>
	<div class="overlay_body">
		<div class="result-table">
			<table>
				<thead>
				<tr>
					<th>日期</th>
					<th>获得奖品</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				<tr>
					<td>2014-02-12 22:30:30</td>
					<td>100元（充50后送）</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="overlay_footer">
		<button data-action="close" class="overlay_button">确&nbsp;&nbsp;定</button>
	</div>
</div>

<div id="winner_layer" class="overlay_layer" style="display:block">
	<div class="overlay_title">
		<h2>恭喜您中奖</h2>
		<span data-action="close" class="overlay_close">&times;</span>
	</div>
	<div class="overlay_body">
		<div class="prizes">
			<img src="images/prize/prize_01.jpg" alt="prize1">
			<img src="images/prize/prize_02.jpg" alt="prize2">
			<img src="images/prize/prize_03.jpg" alt="prize3">
			<img src="images/prize/prize_04.jpg" alt="prize4">
			<img src="images/prize/prize_05.jpg" alt="prize5">
			<img src="images/prize/prize_06.jpg" alt="prize6">
			<img src="images/prize/prize_07.jpg" alt="prize7">
			<img src="images/prize/prize_08.jpg" alt="prize8">
		</div>
	</div>
	<div class="overlay_footer">
		<button data-action="close" class="overlay_button">确&nbsp;&nbsp;定</button>
	</div>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.cycle2.min.js"></script>
<script src="js/jquery.cycle2.swipe.min.js"></script>
<script src="js/index.js"></script>
</body>
</html>