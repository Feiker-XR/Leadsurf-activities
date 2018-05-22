<?php include_once('config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>来凤凰打老虎--首存赠送100%</title>
<meta name="description" content="来凤凰打老虎--首存赠送100%">
<meta name="keywords" content="凤凰 凤凰娱乐 凤凰彩票 用户注册 用户开户">
<link href="css/style.css" rel="stylesheet">

</head>
<body>
<div class="windowbg">
	<div class="main">
		<a href="http://www.fh885.com" class="logo"></a>
		<ul class="step">
			<li>
				<h3>注册</h3>
				<p>凤凰老虎机用户</p>
			</li>
			<li class="step_arrow"></li>
			<li>
				<h3>发送短信</h3>
				<p>发送注册用户名至<br>13068924769</p>
			</li>
			<li class="step_arrow"></li>
			<li>
				<h3>充值</h3>
				<p>在凤凰娱乐充值<br>并转账到老虎机</p>
			</li>
			<li class="step_arrow"></li>
			<li>
				<h3>游戏</h3>
				<p>在老虎机游戏<br>达到流水要求<br>等待派奖</p>
			</li>
		</ul>
		<div class="alink">
			<a class="btn btn_red" href="<?php echo $regLink; ?>">立即注册</a>
			<a class="btn btn_blue" href="http://www.fh885.com/fund">立即充值</a>
			<a class="btn btn_blue" href="http://pt.fh885.com/pt/index/ ">立即游戏</a>
		</div>
		<div class="rule">
			<a href="javascript:;" class="btn btn_blue" id="showgame">查询上线彩种</a>
			<h3 class="rule_title" data-text="活动规则">活动规则</h3>
			<ul class="rule_list">
				<li>活动期间内，注册成为凤凰娱乐老虎机新用户</li>
				<li>新用户注册成功后，短信发送<strong id="showname">凤凰娱乐用户名<span>?</span></strong>至“13068924769”号码报名</li>
				<li>首次充值并<span class="c_yellow">转账</span>至老虎机，流水倍数达到要求，即可享受“100%首存礼金”</li>
			</ul>
			<table class="s_table">
				<tr>
					<th>适用游戏</th>
					<th>适用游戏</th>
					<th>最高礼金</th>
					<th>投注额要求</th>
				</tr>
				<tr>
					<td>老虎机</td>
					<td>100%</td>
					<td>188</td>
					<td>（存款+礼金）*10倍</td>
				</tr>
				<tr>
					<td colspan="4" class="s_td"><span class="c_blue">活动以用户开通账号后首次转账至PT老虎机金额为参与活动金额。</span><br>
						例如：首存100并转账至老虎机100元，则礼金为100元，有效投注流水达（100+100）*10=2000即达到活动要求。<br>
						　　　若首存100并转账至老虎机50元，则礼金为50元，有效投注流水达（50+50）*10=1000即达活动要求。</td>
				</tr>

			</table>
			<div class="username" id="username">
				<img src="images/username.png">
			</div>
		</div>
		<div class="rule">
			<h3 class="rule_title" data-text="活动说明">活动说明</h3>
			<ul>
				<li>用户注册后需绑定唯一平台有效银行卡，在凤凰平台绑定过的相同银行卡无效。绑定银行卡需真实银行卡，否则无法提款，用户绑定虚假银行卡造成的后果自行承担。</li>
				<li>用户达到活动要求后两个工作日内，奖金将派送到用户旗舰版账户，且活动礼金必须在派发礼金后的五个自然日之内使用活动期间的绑定卡进行提现，否则视作放弃礼金领取。</li>
				<li>每一用户名、每一电话号码、每一银行卡只限参与一次。</li>
				<li>活动时间为北京时间 2015年9月2日 00:00:00 ~ 2015年9月11日 23:59:59。</li>
				<li>用户成功发送报名短信后一个工作日内将收到平台站内信通知，平台以成功收到报名短信为正式报名判断依据。</li>
				<li>活动奖金无需申请，用户达到活动要求后两个工作日内，派送奖金到用户凤凰平台旗舰版账户。</li>
				<li>若经本公司发现用户以不正当手法注册或进行投注，本公司保留权利取消该类注单以及注单产生奖励，并停用该会员帐号。</li>
				<li>凤凰娱乐平台保留最终解释权。</li>
			</ul>

		</div>
		<div class="footer">
			<p>©2003-2014 凤凰娱乐 All Rights Reserved </p>
		</div>
	</div>
</div>
<div class="mask"></div>
<div class="pop" id="gamelist">
	<div class="pop_top">
		<h3 class="rule_title" data-text="上线彩种游戏名称">上线彩种游戏名称</h3>
		<a href="javascript:;" class="btn btn_blue" id="close">关闭</a>
	</div>
	<table class="game_table">

		<tr>
		<td>虚拟赛马</td>
		<td>虚拟猴子爬绳比赛</td>
		<td>狂野精灵</td>
		<td>绿巨人</td>
		<td>三只小猪</td>
		<td>金刚狼</td>
		</tr>
		<tr class="tr_even">
		<td>基诺</td>
		<td>雷神</td>
		<td>钢铁侠2 50线</td>
		<td>疯客水果</td>
		<td>爱之船</td>
		<td>黄金游戏</td>
		</tr>
		<tr>
		<td>钢铁侠3</td>
		<td>超级蓝</td>
		<td>财富魔方</td>
		<td>高速之王</td>
		<td>甲虫宾果</td>
		<td>圣诞刮刮乐</td>
		</tr>
		<tr class="tr_even">
		<td>经典老虎机刮刮卡</td>
		<td>轮盘赌刮刮卡</td>
		<td>硬币投掷游戏</td>
		<td>甜蜜派对</td>
		<td>巴西桑巴舞</td>
		<td>冰球大战</td>
		</tr>
		<tr>
		<td>足球比分</td>
		<td>返水先生</td>
		<td>美国队长</td>
		<td>神奇四侠</td>
		<td>钢铁侠</td>
		<td>亚特兰蒂斯女王</td>
		</tr>
		<tr class="tr_even">
		<td>招财进宝</td>
		<td>热宝石</td>
		<td>超胆侠</td>
		<td>黑天使 20线</td>
		<td>金字塔女王</td>
		<td>复仇者联盟</td>
		</tr>
		<tr>
		<td>X战警</td>
		<td>刀锋战士</td>
		<td>迷你轮盘赌</td>
		<td>蜘蛛侠</td>
		<td>好运连赢</td>
		<td>海滨嘉年华</td>
		</tr>
		<tr class="tr_even">
		<td>石头、剪刀、纸游戏</td>
		<td>青春之泉</td>
		<td>三个朋友</td>
		<td>8球吃角子老虎</td>
		<td>中国厨房</td> 
		<td>粉红豹</td>
		</tr>
		<tr>
		<td>开心假期</td>
		<td>古怪猴子</td>
		<td>周游列国</td>
		<td>宾果</td>
		<td>德州扑克</td>
		<td>钢铁侠2</td>
		</tr>
		<tr class="tr_even">
		<td>疯狂之七</td>
		<td>魔幻吃角子老虎</td>
		<td>水果狂</td>
		<td>全景电影</td>
		<td>农贸市场</td>
		<td>真爱</td>
		</tr>
		<tr>
		<td>幸运熊</td>
		<td>海豚</td>
		<td>黑衣武士</td>
		<td>职业钻石谷</td>
		<td>足球宝贝</td>
		<td></td>
		</tr>
	</table>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script>
	$(function(){
		var timer = setInterval(function(){
			var target = $("#showname");
			target.attr('class','');
			setTimeout(function(){
				target.attr('class','color1')
			},150);
			setTimeout(function(){
				target.attr('class','color2')
			},300);

		},450)

		$("#showname").on('mouseover',function(){
			$("#username").show()
		}).on('mouseout',function(){
			$("#username").delay(500).fadeOut()
		});
		var nowTop = ($(window).height()- $(".pop").height())/2
		$(".pop").css({
			'top': $(document).scrollTop() + nowTop
		})
		$(window).on('scroll',function(){
			$(".pop").css({
				'top': $(document).scrollTop() + nowTop
			})
		});

		$("#showgame").on("click",function(){
			$('.mask').show();
			$('#gamelist').fadeIn();
		});

		$("#close").click(function(){
			$('.mask').hide();
			$('#gamelist').hide();
		})

	})
</script>
</body>

</html>