<?php include_once('config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>凤凰娱乐 - 羊年活动</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<meta name="author" content="Design:Vic, Layout:Jay"/>
<link rel="stylesheet" href="css/style.css" />
<link rel="stylesheet" media="screen" href="css/animation.css" />
<link rel="stylesheet" media="screen" href="css/hongbao.css" />
</head>
<body>

<div id="float-nav" class="float-nav">
	<span class="arrow"></span>
	<a href="#game1" class="nav1">
		<span class="nav-title">你的红包你做主</span>
		<ul id="J-red-paket" class="red-paket">
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</a>
	<a href="#game2" class="nav2">
		<span class="nav-title">喜气羊羊大小通吃</span>
		<p>可抽<span data-amount="dice">5</span>次</p>
	</a>
	<a href="#game3" class="nav3">
		<span class="nav-title">三羊开泰转运盘</span>
		<p>可抽<span data-amount="rotary">5</span>次</p>
	</a>
	<div class="qr"></div>
</div>
<div id="game1" class="screen" data-anchor="game1">
	<a href="http://www.ph158.net/" target="_blank" id="logo">凤凰娱乐</a>
	<div id="J-reward-panel" class="game1-box1 screen-wrap">
		<h2 class="seo_txt">羊年玩大的！你的红包你做主~</h2>
		<div class="lantern lantern1"></div>
		<div class="lantern lantern2"></div>
		<div class="riband"></div>
		<div class="reg-login">
			<a href="<?php echo $regLink; ?>" class="reg">立即注册</a>
			<a href="<?php echo $loginLink; ?>" class="login">立即登录</a>
		</div>

		<div class="redpacket rp-step-2" id="redpacket1" style="bottom:-57px;">
			<div class="rp-cover1"></div>
			<div class="rp-cover2"></div>
			<div class="rp-content" style="opacity: 1;">
				<div class="rp-c-top">
					<div class="rp-button" data-action="forbidden">申领红包</div>
				</div>
				<div class="rp-c-rule">
					<p>20天内完成红包金额的30倍的有效投注即可申领</p>
				</div>
			</div>
		</div>

		<div class="redpacket rp-step-1" id="redpacket2" style="bottom:-57px;">
			<div class="rp-cover1"></div>
			<div class="rp-cover2"></div>
			<div class="rp-content">
				<div class="rp-c-top">
					<p>领取前一个红包后即可打开哦！</p>
				</div>
			</div>
		</div>
		
		<div class="redpacket rp-step-1" id="redpacket3" style="bottom:-57px;">
			<div class="rp-cover1"></div>
			<div class="rp-cover2"></div>
			<div class="rp-content">
				<div class="rp-c-top">
					<p>领取前一个红包后即可打开哦！</p>
				</div>
			</div>
		</div>

	</div>
	<div class="game1-box2">
		<div class="screen-wrap">
			<div class="event-date">
				<p>活动时间：2015年2月5日 00:00:00 至 2015年3月15日 23:59:59</p>
				<a href="javascript:void(0);" data-modal="rules" data-rule="rule1.html">活动规则</a>
			</div>
			<div class="event-info">
				<p自己填写红包金额，20天内，投注金额达到填写金额30倍时，立即获得报名金额等值红包申领资格！一个不够？给你三个！就这么任性！</p>
			</div>
			<div class="event-note">
				<span class="event-stamp">红包金额</span>
				<p>红包金额最低100元，普通用户最高为28,888元，VIP用户最高为38,888元；VIP身份判定以提交红包金额时是VIP为准。</p>
				<p>用户最多可申领三个红包，需要成功申领前次红包或前次红包失效后，可立即进入下一个红包报名。</p>
			</div>
		</div>
	</div>
</div>

<div id="game2" class="screen">
	<div class="screen-wrap">
		<div class="slogan"></div>
		<div class="hands"></div>
		<div class="event-info">
			<h3>活动时间：2015年2月5日 00:00:00 至 2015年3月15日 23:59:59</h3>
			<p>单笔充值每达到500元，即可获得一次骰子押大小机会，押中得5元,押不中得1元，多满多押连中8次即得额外惊喜<a class="scan-rule" href="javascript:void(0);" data-modal="rules"  data-rule="rule2.html">活动规则</a></p>
		</div>
		<div class="dice-status">
			<div class="dice-status-1">
				<p>您还可以押宝</p>
				<p class="status-times"><span data-amount="dice">205</span>次</p>
				<p class="status-button">
					<a data-action="forbidden" target="_blank" href="#" class="status-button-link inline_block">立即充值</a>
				</p>
			</div>
			<div class="dice-status-2">
				<p>当前连中次数</p>
				<p class="status-times"><span id="dice-win-continus">5</span>次</p>
				<p class="status-extra">(连中8次还有额外奖励)</p>
			</div>
		</div>
		<div class="dice-history">
			<table id="dice-history">
				<thead>
					<tr>
						<th class="col-white">我的记录</th>
						<th>押宝结果</th>
						<th>押宝内容</th>
						<th>奖金</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="col-white">02-02 22:22</td>
						<td>
							<div class="dice-result-icon">
								<span class="dice-4">4</span>
								<span class="dice-1">1</span>
								<span class="dice-2">2</span>
							</div>
						</td>
						<td>大</td>
						<td>￥2</td>
					</tr>
					<tr>
						<td class="col-white">02-02 22:22</td>
						<td>
							<div class="dice-result-icon">
								<span class="dice-4">4</span>
								<span class="dice-1">1</span>
								<span class="dice-2">2</span>
							</div>
						</td>
						<td>大</td>
						<td>￥2</td>
					</tr>
					<tr>
						<td class="col-white">02-02 22:22</td>
						<td>
							<div class="dice-result-icon">
								<span class="dice-4">4</span>
								<span class="dice-1">1</span>
								<span class="dice-2">2</span>
							</div>
						</td>
						<td>大</td>
						<td>￥2</td>
					</tr>
					<tr>
						<td class="col-white">02-02 22:22</td>
						<td>
							<div class="dice-result-icon">
								<span class="dice-4">4</span>
								<span class="dice-1">1</span>
								<span class="dice-2">2</span>
							</div>
						</td>
						<td>大</td>
						<td>￥2</td>
					</tr>
					<tr>
						<td class="col-white">02-02 22:22</td>
						<td>
							<div class="dice-result-icon">
								<span class="dice-4">4</span>
								<span class="dice-1">1</span>
								<span class="dice-2">2</span>
							</div>
						</td>
						<td>大</td>
						<td>￥2</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="dice-desktop">
			<a href="javascript:void(0);" class="dice-button dice-button-big">
				<span>押大</span>
			</a>
			<a href="javascript:void(0);" class="dice-button dice-button-small">
				<span>押小</span>
			</a>
			<div class="dice-desktop-info">
				<h3>抽奖次数说明</h3>
				<p>在活动时间范围内的单笔充值，金额除以500的整数值即为抽奖次数，单笔不满500部分不累计；</p>
			</div>
		</div>
		<div class="dice-bell" id="dice-table">
			<div id="dice-ball1" class="dice-ball dice-num-1"></div>
			<div id="dice-ball2" class="dice-ball dice-num-3"></div>
			<div id="dice-ball3" class="dice-ball dice-num-5"></div>
		</div>
	</div>
</div>

<div id="game3" class="screen">
	<div class="screen-wrap">
		<div class="rotary-vip"></div>
		<div class="rotary-slogan"></div>
		<div class="event-info">
			<h3>活动时间：2015年2月19日00:00:00 至 2015年2月25日 23:59:59</h3>
			<p>活动期间，单笔充值每达到20,000元，即获得1次抽奖机会，百分百有奖 ,VIP身份判定以充值时达到要求时是VIP为准。 本活动仅限VIP参加。<a style="color:#ece3b2;" target="_blank" href="http://www2.joy188.com:888/vip/">如何加入VIP</a><a class="scan-rule" href="javascript:void(0);" data-modal="rules" data-rule="rule2.html">活动规则</a></p>
		</div>
		<div class="rotary-status">
			<p>您还可以抽奖</p>
			<p class="status-times">
				<span data-amount="rotary">5</span>次
			</p>
			<div class="status-button">
				<a data-action="forbidden" href="" class="status-button-link inline_block">立即充值</a>
			</div>
			<div class="status-links">
				<a data-action="forbidden" href="javascript:void(0);" data-modal="result">我的中奖结果</a>
			</div>
			<!-- <div class="not-vip-status">
				<p>本活动仅限VIP会员参加，成为VIP会员可享受更多特权，<a href="" target="_blank">查看更多VIP特权</a></p>
			</div> -->
		</div>
		<div class="rotary-history">
			<h3>中奖名单</h3>
			<div id="rh-cycle" class="rh-cycle cycle-slideshow"
				data-cycle-slides="> div"
			    data-cycle-fx=carousel
			    data-cycle-timeout=2000
			    data-cycle-carousel-visible=5
			    data-cycle-carousel-vertical=true
			    data-cycle-easing="linear"
			>
			<?php foreach ($awardLists as $key => $value) { ?>
				<div class="rh-list">
			    	<span class="rh-name"><?php echo $value['username']; ?></span>
			    	<span class="rh-desc"><?php echo $value['desc']; ?></span>
			    	<span class="rh-date"><?php echo $value['time']; ?></span>
			    </div>
			<?php } ?>
			</div>
		</div>
		
		<div class="rotary-table">
			<div class="rotary-pointer"></div>
			<div class="rotary-rotary">
				<img id="rotary" src="images/s3_turnplate.png">
			</div>
		</div>
	
		<div class="rotary-desktop">
			<a href="javascript:void(0);" class="rotary-button">抽奖</a>
			<h3>抽奖次数说明: </h3>
			<p>在活动时间范围内的单笔充值，金额除以20,000的,整数值即为抽奖次数单笔不满10,000部分不累计;</p>
		</div>

		<div class="rotary-gril"></div>
	</div>
</div>

<div class="all-game-info screen">
	<div class="screen-wrap">
		<h3>活动说明：</h3>
		<ul>
			<li>本活动新、旧平台的充值和投注均会统计。活动奖金发放在新平台的账号上。</li>
			<li>活动时间均指自然日当日00:00:00~23:59:59</li>
			<li>活动期间禁止任何作弊行为，一经发现平台将取消参与活动资格，严重者将被冻结账号处理。</li>
			<li>本平台保留活动最终解释权。</li>
		</ul>
		<div class="logo2">
			<a href="http://www.ph158.net/" target="_blank">凤凰娱乐</a>
		</div>
	</div>
</div>

<div id="footer" class="screen outsite">
	<div class="screen_wrap">
		<p class="copyright">©2003-2014 凤凰娱乐 All Rights Reserved</p>		
	</div>	
</div>

<div id="rule-modal" class="pop-modal">
	<div class="modal-head">
		<h2>你的红包你做主</h2>
		<span class="modal-close" data-modal="close">&times;</span>
	</div>
	<div class="modal-body">
		<ul class="rule-detail">
			<li>用户从填写报名金额后（一旦填写不可修改），开始累计投注额，20天内但不超过活动结束时间，有效投注金额达到30倍后即可获得红包申领资格；（有效投注指已开奖投注）</li>
			<li>活动参与时间是从2015年2月2日00:00:00开始，2015年3月12日3月12日23:59:59结束；</li>
			<li>全部彩种均可参与。PC端和移动端有效投注均记录在内。</li>
			<li>用户报名金额最低100元，最高为当前可提现额度，普通用户上限28888元，VIP用户上限38888元；如何提升可提现额度</li>
			<li>用户最多可申领三个红包，需要获得上次红包申领资格，并在页面点击申领或前次红包失效后，才能再次参与；</li>
			<li>用户点击放弃红包，该红包领取资格作废，可申领下一个红包，重新统计投注金额。</li>
			<li>VIP身份判定以填写红包金额时是否为VIP为准；</li>
			<li>红包申领的最后期限是2015年3月13日23:59:59前，在此时间之前未成功申领的用户视为自动放弃红包。红包再申领后三个工作日内派发至用户账户。</li>
		</ul>
	</div>
</div>

<div id="dice-modal" class="pop-modal dice-win">
	<span class="modal-close" data-modal="close">&times;</span>
	<ul class="dm-result">
		<li></li>
		<li></li>
		<li></li>
	</ul>
	<div class="modal-body">
		<p class="dm-title">连胜8次,赌神非你莫属！</p>
		<p class="dm-desc">获得赌神奖励￥200奖金</p>
	</div>
</div>

<div id="rotary-modal" class="pop-modal">
	<span class="modal-close" data-modal="close">&times;</span>
	<div class="modal-body">
		<p class="dm-desc">50元</p>
	</div>
</div>
<div id="J-messages-giveup" class="msg-giveup">
	<p>
		请确认是否要放弃红包，
		<span>放弃后该红包领取资格作废</span>
		，可申领下一个红包。
	</p>
	<a href="javascript:;" class="cancel">取消</a>
	<a href="javascript:;" class="enter">确认</a>
	<a href="javascript:;" class="close"></a> 
</div>
<div id="J-messages-ensure" class="msg-giveup msg-ensure">
	<p>
		红包金额一经确认不可更改，在20天内完成红包金额的30倍的有效投注即可申领，请确认是否提交？
	</p>
	<a href="javascript:;" class="cancel">取消</a>
	<a href="javascript:;" class="enter">确认</a>
	<a href="javascript:;" class="close"></a> 
</div>
<div id="J-messages-timeout" class="pop-modal ac-timeout">
	<span class="modal-close" data-modal="close">&times;</span>
	<p>
		<span class="face"></span> <span class="desc">活动已经结束</span>
	</p>
</div>
<div id="J-messages-forbidden" class="pop-modal">
	<span class="modal-close" data-modal="close">&times;</span>
	<div class="button-wrap">
		<p>需要登录平台才能参与游戏~，如果您没有凤凰账号，请先注册</p>
		<a href="<?php echo $regLink ?>" class="button button-primary" target="_blank">账号注册</a>
		<a href="<?php echo $loginLink ?>" class="button" target="_blank">立即登录</a>
	</div>
</div>
<div id="J-rules-tips" class="rules-tips pop-modal">
	<a href="javascript:;" class="close" data-modal="close"></a>
	<div class="info-content"></div>
</div>
<div id="overlay-shadow"></div>

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/jquery.cycle2.min.js"></script>
<script src="js/jquery.cycle2.carousel.min.js"></script>
<script src="js/jquery.inview.min.js"></script>
<script src="js/jQueryRotate.2.2.js"></script>
<script src="js/index.js"></script>
<!-- <script src="js/hongbao.js"></script> -->
<script src="js/game2.js"></script>
<script src="js/game3.js"></script>
</body>
</html>