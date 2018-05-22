<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>凤凰娱乐-红包天天送</title>
<meta name="keywords" content="凤凰娱乐, 凤凰平台, 凤凰软件, 凤凰摇钱树, 凤凰摇钱术, 凤凰彩票, 生钱有道" />
<meta name="description" content="" />
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
<div id="top">
	<div id="header" class="wrap">
		<h1 class="seo_txt">凤凰娱乐-红包天天送</h1>
		<h2 class="seo_txt">投注抽大奖，红包每天送</h2>
		<p class="tips">PC端和手机端均可参与</p>
		<p class="seo_txt">活动时间&nbsp;&nbsp;2014.12.15 - 2015.01.11</p>
		<p class="logo-wrap"></p>
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
					}else if( $k === 1 ){
						$status = 'accepted'; // 已领取
					}else if( $k === 2 ){
						$status = 'lottery'; // 投注领奖
					}else{
						$status = 'enabled'; // 当前可领取
					}
					$prizes[$i] = array(
						'day'    => $i+1,
						'money'  => 2,
						'status' => $status
					);
				}else{
					$prizes[$i] = array(
						'day'    => $i+1,
						'money'  => 2,
						'status' => 'comming' // 尚未开启
					);
				}
			}
			$reg_url = 'http://www.ph278.com/';
			$login_url = 'http://www.ph278.com/';
		?>
		<div class="cycle" data-thisday="<?=$thisday?>">
			<div class="cycle-box">
				<ul data-cycle-box>
					<?php foreach ($prizes as $key => $value) {	?>
					<li data-day="<?=$value['day']?>">
						<div class="prize normal-prize">
							<p class="date">2014年12月<?=$value['day']?>日</p>
							<p class="desc"><strong><?=$value['money']?></strong><span>元红包</span></p>
						<?php if( $value['status'] == 'accepted' ){ ?>
							<a href="<?php echo $reg_url; ?>" target="_blank" class="button accepted">已领取</a>
						<?php }else if( $value['status'] == 'expired' ){ ?>
							<a href="<?php echo $reg_url; ?>" target="_blank" class="button expired">已过期</a>
						<?php }else if( $value['status'] == 'lottery' ){ ?>
							<a href="<?php echo $reg_url; ?>" target="_blank" class="button lottery">投注领奖</a>
						<?php }else if( $value['status'] == 'enabled' ){ ?>
							<a href="<?php echo $reg_url; ?>" target="_blank" class="button enabled">点击领取</a>
						<?php }else{ ?>
							<a href="<?php echo $reg_url; ?>" target="_blank" class="button comming">未开启</a>
						<?php } ?> 
						</div>
					</li>
					<?php } ?>
				</ul>
			</div>
			<div class="cycle-button" data-cycle-button>
				<span class="prev">prev</span>
				<span class="next">next</span>
			</div>
		</div>
		
		<ol class="rule">
			<li>此活动限元模式投注，任意彩种均可参与（包含手机投注）</li>
			<li>每日投注开奖之后，即可获得领奖资格（双色球、3D彩等跨天开奖彩种，需在开奖之后才可获得投注当日的领奖资格）</li>
			<li>每日每个用户只能领取一次投注红包，领取成功后系统会自动充值至您的账户，红包金额不可提现。</li>
			<li>用户必须在活动结束前领完所有红包，过期后不可再领取。</li>
		</ol>
	</div>

</div>

<div id="content">
	<div class="wrap">
		<div class="lottery-poll">
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
			<a href="<?php echo $reg_url; ?>" target="_blank" class="lottery-button">点击抽奖</a>
		</div>
		<div class="lottery-board">
			<h3>您还有<strong><?php echo rand(0,3); ?></strong>次抽奖机会</h3>
			<p class="desc">投注每满7天，即可获得一次抽奖机会，<strong>100%有奖！</strong></p>
			<a href="<?php echo $reg_url; ?>" target="_blank" class="go-lottery">立刻投注</a>
			<a class="check-result">查看中奖结果</a>
		</div>
		<div class="winner-list">			
			<ul>
			<?php
			function generateRandomString($length = 7) {
				$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
				$randomString = '';
				for ($i = 0; $i < $length; $i++) {
					if( $i == 3 ){
						$randomString .= '***';
					}
					$randomString .= $characters[rand(0, strlen($characters) - 1)];
				}
				return $randomString;
			}
			for ($i=0; $i < 15; $i++) {
				$username = generateRandomString();
				$money = rand(50, 500);
			?>
				<li>
					<span class="name"><?php echo $username ?></span>
					<span>抽中了<?php echo $money; ?>元</span>
				</li>
			<?php } ?>
			</ul>
		</div>
		<ol class="rule">
			<li>每投注满7天可以参加转盘抽奖。抽奖活动中，赠送全部为游戏币。</li>
			<li>获得的抽奖机会可以累计，但必须在活动结束前用完，活动结束后将清零。</li>
			<li>抽中充值50送50、充值100送100、充值300送300、充值1送999奖品的的用户，需要活动结束前一次性充值要求金额。</li>
			<li>充值金额当日到账，赠送金额将在活动结束后分2周赠送，赠送日期为1月15日、1月22日。</li>
			<li>抽中奖品中，抽中礼金金额将在12.22、12.29、1.5、1.12派发，取最临近日期派发。</li>
			<li>活动欢迎真实用户参与，禁止刷号等作弊行为，一旦发现不予派奖。</li>
			<li>凤凰游戏平台保留活动最终解释权。</li>
		</ol>
	</div>
</div>

<div class="float-box">
	<a href="<?php echo $reg_url; ?>" target="_blank">立即注册</a>
	<a href="<?php echo $login_url; ?>" target="_blank">点击登录</a>
</div>

<div id="footer">
	<p class="copyright">© 2003 - 2014  All rights reserved. 凤凰游戏平台版权所有 &nbsp;&nbsp;&nbsp;&nbsp;<a href="">下载手机客户端</a></p>
</div>
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/index.js"></script>
</body>
</html>