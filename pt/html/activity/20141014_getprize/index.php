<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>凤凰娱乐-红包天天送</title>
<meta name="keywords" content="凤凰娱乐, 凤凰平台, 凤凰软件, 凤凰摇钱树, 凤凰摇钱术, 凤凰彩票, 生钱有道" />
<meta name="description" content="" />
<link rel="stylesheet" href="http://192.168.100.72/anvonew/html/images/common/base.css" />
<link rel="stylesheet" href="css/style.css" />
</head>
<body>
<div class="bg-toolbar"></div>
<div class="toolbar">
	<div class="g_33">		
		<div id="J-top-game-menu" class="game-menu">
			<span class="game-menu-text dropdown-menu-btn">凤凰游戏</span>
			<div class="game-menu-panel">
				<span class="triangle game-menu-triangle"><span></span></span>
				<div class="game-menu-inner">
					<div class="game-menu-box">
						<div class="game-menu-title">时时彩</div>
						<div class="game-menu-list">
							<a class="hot-game" href="">重庆时时彩<i></i></a>
							<a href="">江西时时彩</a>
							<a href="">黑龙江时时彩</a>
							<a href="">新疆时时彩</a>
							<a href="">上海时时彩</a>
							<a href="">乐利时时彩</a>
							<a href="">天津时时彩</a>
							<a href="">吉利分分彩</a>
							<a class="new-game" href="">顺利秒秒彩<i></i></a>
						</div>
					</div>
					<div class="game-menu-box">
						<div class="game-menu-title">11选5</div>
						<div class="game-menu-list">
							<a href="">山东11选5</a>
							<a href="">江西11选5</a>
							<a href="">广东11选5</a>
							<a href="">重庆11选5</a>
							<a href="">乐利11选5</a>
						</div>
					</div>
					<div class="game-menu-box">
						<div class="game-menu-title">快乐彩</div>
						<div class="game-menu-list">
							<a href="">北京快乐8</a>
						</div>
					</div>
					<div class="game-menu-box">
						<div class="game-menu-title">低频</div>
						<div class="game-menu-list">
							<a href="">3D</a>
							<a href="">排列3/5</a>
							<a href="">双色球</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<a href="/" class="back-top-home">返回首页</a>
	
		<ul class="menu">
			<li class="username">您好，小霸王</li>
			<li class="user hover" id="J-top-userinfo">
				<a href="#" class="dropdown-menu-btn">我的账户<i class="tri"></i></a>
				<div class="menu-nav">
					<i class="tri"></i>
					<a href="">投注记录</a>
					<a href="">账户明细</a>
					<a href="">安全中心</a>
					<a href="">代理中心</a>
					<a href="">报表查询</a>
				</div>
			</li>
			<li class="msg" id="J-top-user-message">
				<a href="#" class="msg-title">123</a>
				<div class="msg-box">
					<div class="msg-hd"><i class="tri"></i><a href="#" class="more">更多</a>我的未读消息<span>(123)</span></div>
					<div class="msg-bd">
						<a href="">这里是消息提示提示消息</a>
						<a href="">这里是消息提示提示消息</a>
						<a href="">这里是消息提示提示消息</a>
						<a href="">后台控制消息字数18字以内后台控制消</a>
					</div>
				</div>
			</li>
			<li class="balance">
				<span id="hiddBall" style="display:none">余额：<span id="spanBall">41,688,762.65</span></span>
				<span id="hiddenBall">余额已隐藏 <a href="#" id="showAllBall">显示</a></span>
			</li>
			<li class="recharge"><a href="#">充值</a></li>
			<li class="withdrawals"><a href="#">提现</a></li>
			<li class="quit"><a href="#">退出</a></li>
		</ul>
	</div>
</div>
<!-- toolbar end -->

<div id="top">
	<div id="header" class="wrap">
		<h1 class="seo_txt">凤凰娱乐-红包天天送</h1>
		<h2 class="seo_txt">投注抽大奖，红包每天送</h2>
		<p class="tips">PC端和手机端均可参与</p>
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
							<a class="button accepted">已领取</a>
						<?php }else if( $value['status'] == 'expired' ){ ?>
							<a href="" target="_blank" class="button expired">已过期</a>
						<?php }else if( $value['status'] == 'lottery' ){ ?>
							<a href="" target="_blank" class="button lottery">投注领奖</a>
						<?php }else if( $value['status'] == 'enabled' ){ ?>
							<a href="" target="_blank" class="button enabled">点击领取</a>
						<?php }else{ ?>
							<a class="button comming">未开启</a>
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
			<a class="lottery-button">点击抽奖</a>
		</div>
		<div class="lottery-board">
			<h3>您还有<strong>3</strong>次抽奖机会</h3>
			<p class="desc">投注每满7天，即可获得一次抽奖机会，<strong>100%有奖！</strong></p>
			<a href="" class="go-lottery" target="_blank">立刻投注</a>
			<a class="check-result">查看中奖结果</a>
		</div>
		<div class="winner-list">
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

<div id="footer">
	<p class="copyright">© 2003 - 2014  All rights reserved. 凤凰游戏平台版权所有 &nbsp;&nbsp;&nbsp;&nbsp;<a href="">下载手机客户端</a></p>
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
<script src="js/index.js"></script>
</body>
</html>