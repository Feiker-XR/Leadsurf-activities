<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>北京快乐8-开奖号码走势图</title>
	<link rel="stylesheet" href="../../images/common/base.css" />
	<link rel="stylesheet" href="../../images/common/js-ui.css" />
	<link rel="stylesheet" href="../../images/game/chart.css" />
	<script type="text/javascript" src="../../js/game/util/jquery-1.9.1.js" ></script>
	<script type="text/javascript" src="../../js/game/util/jquery.tmpl.js" ></script>
	<script type="text/javascript" src="../../js/game/util/phoenix.base.js" ></script>
	<script type="text/javascript" src="../../js/game/util/phoenix.Class.js" ></script>
	<script type="text/javascript" src="../../js/game/util/phoenix.Event.js" ></script>
	<script type="text/javascript" src="../../js/game/util/phoenix.util.js" ></script>
	<!--[if IE]><script type="text/javascript" src="../../js/game/util/excanvas.js"></script><![endif]-->
	<!--<script type="text/javascript" src="../js/game/util/raphael-min.js" ></script>-->
	<script type="text/javascript" src="../../js/game/util/phoenix.DatePicker.js" ></script>
	<script type="text/javascript" src="../../js/game/phoenix.GameChart.js" ></script>
</head>
<body class="table-trend">
<!-- toolbar start -->
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
				<li class="username">您好，VIC</li>
				<li class="user hover" id="J-top-userinfo">
					<a href="#" class="dropdown-menu-btn">我的账户<i class="tri"></i></a>
					<div class="menu-nav">
						<i class="tri"></i>
						<a href="">游戏记录</a>
						<a href="">报表管理</a>
						<a href="">资金明细</a>
						<a href="">安全中心</a>
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
	<div class="header" style=""></div>
	<div class="select-section clearfix">
		<div class="select-function">
			<a href="#" id="J-button-showcontrol">展开功能区</a><i class="arrow-down"></i>
			<a target="_blank" id="report-download" class="select-download" href="http://www.ph158.com/reportDownload/gametype=cqssc?dataType=periods?dataNum=30">报表下载</a>
		</div>
		<h3 class="select-title">彩种：北京快乐8</h3>
		<ul class="select-list">
			<li><a href="kl8_ball.php">开奖号码走势图</a></li>
			<li class="current"><a href="kl8.php">综合走势图</a></li>
		</ul>
	</div>
	<div class="select-section-content clearfix" id="J-panel-control">
		<div class="title">综合走势图</div>
		<div class="function">
			<label class="label"><input data-action="guides" type="checkbox" class="checkbox" checked="checked">辅助线</label>
			<!-- <label class="label"><input data-action="lost" type="checkbox" class="checkbox" checked="checked">遗漏</label>
			<label class="label"><input data-action="lost-post" type="checkbox" class="checkbox">遗漏条</label> -->
		</div>
		<div class="time" id="J-periods-data">
			<a data-action="periods-30" href="javascript:void(0);">近30期</a>
			<a data-action="periods-50" href="javascript:void(0);">近50期</a>
			<a data-action="day-1" href="javascript:void(0);">今日数据</a>
		</div>
		<div class="search">
			<input type="text" value="" id="J-date-star" class="input w-3"> - <input id="J-date-end" type="text" value="" class="input w-3">
			<a id="J-time-periods" class="btn" href="javascript:void(0);">查 看<b class="btn-inner"></b></a>
		</div>
	</div>
	<!-- Star 五星 -->
	<div class="chart-section" id="J-chart-area">
		<table class="chart-table" id="J-chart-table">
			<thead class="thead">
				<tr class="title-text">
					<th colspan="3" rowspan="2" class="border-bottom border-right">期数</th>
					<th colspan="20" rowspan="2" class="border-right border-bottom">开奖号码</th>
					<th colspan="4" class="border-right border-bottom">辅助参数</th>
					<th colspan="3" class="border-right border-bottom">上下盘</th>
					<th colspan="3" class="border-right border-bottom">奇偶盘</th>
					<th colspan="5" class="border-right border-bottom">和值大小单双</th>
				</tr>
				<tr class="title-text">
					<th class="border-bottom border-right">跨度</th>
					<th class="border-bottom border-right">最大值</th>
					<th class="border-bottom border-right">最小值</th>
					<th class="border-bottom border-right">和值尾数</th>
					<th class="border-bottom border-right">上</th>
					<th class="border-bottom border-right">中</th>
					<th class="border-bottom border-right">下</th>
					<th class="border-bottom border-right">奇</th>
					<th class="border-bottom border-right">和</th>
					<th class="border-bottom border-right">偶</th>
					<th class="border-bottom border-right">和值</th>
					<th class="border-bottom border-right">大奇</th>
					<th class="border-bottom border-right">大偶</th>
					<th class="border-bottom border-right">小奇</th>
					<th class="border-bottom border-right">小偶</th>
				</tr>
			</thead>
			<tfoot class="tfoot">
				<tr class="title-text">
					<th colspan="3" rowspan="2" class="border-bottom border-right">期数</th>
					<th colspan="20" rowspan="2" class="border-right border-bottom">开奖号码</th>
					<th class="border-bottom border-right">跨度</th>
					<th class="border-bottom border-right">最大值</th>
					<th class="border-bottom border-right">最小值</th>
					<th class="border-bottom border-right">和值尾数</th>
					<th class="border-bottom border-right">上</th>
					<th class="border-bottom border-right">中</th>
					<th class="border-bottom border-right">下</th>
					<th class="border-bottom border-right">奇</th>
					<th class="border-bottom border-right">和</th>
					<th class="border-bottom border-right">偶</th>
					<th class="border-bottom border-right">和值</th>
					<th class="border-bottom border-right">大奇</th>
					<th class="border-bottom border-right">大偶</th>
					<th class="border-bottom border-right">小奇</th>
					<th class="border-bottom border-right">小偶</th>
				</tr>
				<tr class="title-text">
					<th colspan="4" class="border-right border-bottom">辅助参数</th>
					<th colspan="3" class="border-right border-bottom">上下盘</th>
					<th colspan="3" class="border-right border-bottom">奇偶盘</th>
					<th colspan="5" class="border-right border-bottom">和值大小单双</th>
				</tr>
			</tfoot>
			<tbody id="J-chart-content" class="chart table-guides tbody">
			</tbody>
			
			
			<!-- <tbody id="J-select-content" class="tbody">
				<tr id="J-tr-select" class="select-area">
					<td colspan="3" class="border-right border-bottom"><i data-action="addSelect" class="ico-add"></i>预选区</td>
					<td colspan="3" class="border-right border-bottom">3D</td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td class="border-bottom"><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="border-right border-bottom" style="background:#FFF;"></td>
					<td class="ball-none border-bottom" style="background:#FFF;"></td>
				</tr>
				<tr>
					<td colspan="3" class="border-bottom"></td>
					<td colspan="3" class="border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td colspan="47" class="border-bottom border-right">
						<form id="J-form-submit" method="get" action="?" target="_blank">
						<input id="J-input-submit-value" type="hidden" name="ball" value="" />
						<a id="J-button-submit" href="#" class="btn btn-important">添加到号码栏<b class="btn-inner"></b></a>
						</form>					</td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-right border-bottom"></td>
					<td class="border-bottom"></td>
				</tr>
			</tbody> -->
			
			
			<tbody id="J-ball-content" class="tbody">
			</tbody>
		</table>
		
		<div style="height:100px;"></div>
	</div>
	<!-- End 五星 -->
<script>

var CHART;
(function($){

	CHART = new phoenix.GameCharts({currentGameType:'cqssc', getDataUrl: '../../js/json/kl8.json', currentGameMethod: 'Qiansan', expands:{
		cqsscQiansanRender:function(data, currentNum){
			var td,
				current,
				me = this,
				styleName = currentNum % me.getSeparateNum() == 0 ? ' border-bottom' : '',
				htmlTextArr = new Array(),
				allowCount = me.getRenderLength(),
				parentDom = document.createElement('tr');
			
			td = document.createElement('td');
			td.className = "ball-none " + styleName;
			parentDom.appendChild(td);

			//期号
			td = document.createElement('td');
			td.className = "issue-numbers " + styleName;
			td.innerHTML = data["number"];
			parentDom.appendChild(td);

			td = document.createElement('td');
			td.className = "ball-none border-right" + styleName;
			parentDom.appendChild(td);

			// 开奖号码
			for( var i=0, d=data["winNumbers"].split(','), l=d.length, _h=''; i<l; i++ ){
				td = document.createElement('td');				
				var n = parseInt(d[i]);
				if( n%2 === 0 ){
					styleName = 'bg-blue';
				}else{
					styleName = 'bg-red';
				}
				td.className = "border-right " + styleName;
				td.innerHTML = d[i];			
				parentDom.appendChild(td);			
			}
						
			// 辅助参数
			for( var i=0, d=data['parameter'], l=d.length; i<l; i++ ){
				td = document.createElement('td');
				td.className = "bg-green border-right ";
				td.innerHTML = d[i];
				parentDom.appendChild(td);
			}			
			// 上下盘
			parentDom.appendChild(
				me.lotteryStatus(data["upDown"], 'bg-yellow', ['上','中','下'])
			);			
			// 奇偶盘
			parentDom.appendChild(
				me.lotteryStatus(data["oddEven"], 'bg-red', ['奇','和','偶'])
			);
			// 和值
			td = document.createElement('td');
			td.className = "bg-blue border-right " + styleName;
			td.innerHTML = data["count"];
			parentDom.appendChild(td);
			// 大小奇偶
			parentDom.appendChild(
				me.lotteryStatus(data["ballFeature"], 'bg-green', ['大奇','大偶','小奇','小偶'])
			);			

			//返回完整的单行TR结构
			return parentDom;
		},
		lotteryStatus: function(data, styleName, textArray){
			var d0 = data[0],
				htmlData = document.createDocumentFragment();
			if( Object.prototype.toString.call(d0) === '[object Array]' ){
				for( var i=0, d=d0, l=d.length; i<l; i++ ){
					var v = d[i], s = '';
					if( v === 0 ){
						v = data[1] || '请设置data[1]值';
						s = styleName || '';
					}
					td = document.createElement('td');
					td.className = "border-right " + s;
					td.innerHTML = v;
					htmlData.appendChild(td);
				}
			}else{
				for( var i=0, d=data, l=d.length; i<l; i++ ){
					var v = d[i], s = '';
					if( v === 0 ){
						v = textArray[i] || '请设置textArray值';
						s = styleName || '';
					}
					td = document.createElement('td');
					td.className = "border-right " + s;
					td.innerHTML = v;
					htmlData.appendChild(td);
				}
			}
			return htmlData;
		},
		singleLotteryBall: function(ballsData, styleName, blueBall) {
			var td1, td2, td3,
				me = this,
				htmlData = document.createDocumentFragment(),
				borderStyleText = styleName,
				lostBallstyle = '',
				ballStyleText = '';
			//左边界
			td1 = document.createElement('td');
			td1.className = 'ball-none' + borderStyleText;
			htmlData.appendChild(td1);

			for (var i = 0, current; i < ballsData.length; i++) {
				current = ballsData[i];
				lostBallstyle = 'l-' + current[3];
				ballStyleText = 'c-' + current[0] + '-' + current[2];

				td2 = document.createElement('td');
				if( blueBall ){
					td2.className = borderStyleText + ' ' + lostBallstyle + ' blue-ball-cell';
				}else{
					td2.className = borderStyleText + ' ' + lostBallstyle + ' red-ball-cell';
				}
				td2.innerHTML = '<i data-info="' + current.join(',') + '" class="ball-noraml ' + ballStyleText + '">' + (current[0] == 0 ? current[1] : current[0]) + '</i>'
				htmlData.appendChild(td2);
			};

			td3 = document.createElement('td');
			td3.className = 'ball-none border-right' + borderStyleText;
			htmlData.appendChild(td3);

			return htmlData;
		},
		cqsscQiansanRenderStatistics: function(data){
			var me = this,
				index = 0,
				i = 0,
				len = 0,
				j = 0,
				len2 = 0,
				n = 0,
				tdstr = '<td class="ball-none border-right"></td><td class="ball-none"></td>',
				frame1 = [],
				frame2 = [],
				frame3 = [],
				frame4 = [];

			frame1.push('<tr class="auxiliary-area"><td class="ball-none"></td><td class="border-bottom border-top">出现总次数</td><td class="ball-none border-right border-bottom"></td>' +
						'<td colspan="20" class="border-bottom border-right"></td>' +
						'<td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom border-right"></td>');
			frame2.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">平均遗漏值</td><td class="ball-none border-right border-bottom"></td>' +
						'<td colspan="20" class="border-bottom border-right"></td>' +
						'<td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom border-right"></td>');
			frame3.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大遗漏值</td><td class="ball-none border-right border-bottom"></td>' +
						'<td colspan="20" class="border-bottom border-right"></td>' +
						'<td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom border-right"></td>');
			frame4.push('<tr class="auxiliary-area"><td class="ball-none border-bottom"></td><td class="border-bottom">最大连出值</td><td class="ball-none border-right border-bottom"></td>' +
						'<td colspan="20" class="border-bottom border-right"></td>' +
						'<td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom"></td><td class="border-bottom border-right"></td>');
			
			for(i = 0, len = 6; i < len; i++){
				var tdstr = '';

				frame1.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[0][0][i] +'</i></td>' + tdstr);
				frame2.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[1][0][i] +'</i></td>' + tdstr);
				frame3.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[2][0][i] +'</i></td>' + tdstr);
				frame4.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[3][0][i] +'</i></td>' + tdstr);
			}

			frame1.push('<td class="border-bottom border-right"></td>');
			frame2.push('<td class="border-bottom border-right"></td>');
			frame3.push('<td class="border-bottom border-right"></td>');
			frame4.push('<td class="border-bottom border-right"></td>');

			for(i = 0, len = 4; i < len; i++){
				var tdstr = '';

				frame1.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[0][1][i] +'</i></td>' + tdstr);
				frame2.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[1][1][i] +'</i></td>' + tdstr);
				frame3.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[2][1][i] +'</i></td>' + tdstr);
				frame4.push('<td class="border-bottom border-right"><i class="ball-noraml">'+ data[3][1][i] +'</i></td>' + tdstr);
			}			

			frame1.push('</tr>');
			frame2.push('</tr>');
			frame3.push('</tr>');
			frame4.push('</tr>');
			$(me.getBallContainer()).append($(frame1.join(''))).append($(frame2.join(''))).append($(frame3.join(''))).append($(frame4.join('')));
		},
		cqsscQiansanTrendCanvas:function(dom, data){
			/*var positionCount = 0,
				me = this,
				currentBallLeft = 0,
				currentBallTop = 0,
				chartTrendPosition = me.getChartTrendPosition();


			//遍历分段渲染数据
			for (var i = 0, current; i < data.length; i++) {
				current = data[i];

				for (var k = 0; k < current.length; k++) {
					//选球区域
					if (k > 1 && k < 5) {
						for (var j = 0; j < current[k].length; j++) {
						
							if(j == 0)	{
								var currentDom = dom.getElementsByTagName('i')[positionCount].parentNode,
									unitSize = me.getUnitSize(currentDom),
									top = unitSize.topNum,
									left = unitSize.leftNum,
									width = unitSize.widthNum,
									height = unitSize.heightNum;
							}

							//当前位置球
							positionCount ++;

							//当前号码
							if (current[k][j][0] == 0) {
								//第一排渲染
								if (typeof chartTrendPosition[k] == 'undefined') {

									//当前球的坐标
									currentBallLeft = left + (j + 1) * width - width / 2;
									currentBallTop = top + height / 2;

									chartTrendPosition[k] = {};
									chartTrendPosition[k]['top'] = currentBallTop;
									chartTrendPosition[k]['left'] = currentBallLeft;
								} else {

									//当前球的坐标
									currentBallLeft = left + (j + 1) * width - width / 2;
									currentBallTop = chartTrendPosition[k]['top'] + height;

									//绘制画布
									//绘制走势图线
									me.draw.setOption({
										parentContainer: $('#J-chart-area')[0]
									});
									me.draw.line(chartTrendPosition[k]['top'], chartTrendPosition[k]['left'], currentBallTop, currentBallLeft);

									chartTrendPosition[k]['top'] = currentBallTop;
									chartTrendPosition[k]['left'] = currentBallLeft;
								}
							}
						};
					}
				};

				positionCount = 0;
			};*/
		}
	}});
	
	
	
	
	CHART.addEvent('afterRenderChartHtml', function(){
		var me = this,tds = $(me.getContainer()).find('tr:last').children();
		tds.addClass('border-bottom');
	});
	CHART.show();
	
	
	//提交选球数据
	$('#J-form-submit').submit(function(e){
		var trs = $('#J-select-content').find('.select-area'),its,result = [],arrRow = [],arr = [],resultStr = '',
			cls = 'ball-orange',
			i = 0,
			len = 0;
		trs.each(function(k){
			arrRow = [];
			its = $(this).find('.ball-noraml');
			for(i = 0,len = its.length; i < len; i++){
				//arr[i] = its[i].className.indexOf(cls) != -1 ? 1 : 0;
				if(its[i].className.indexOf(cls) != -1){
					arr.push(i%10);
				}
				if((i+1) % 10 == 0){
					arrRow.push(arr.join(''));
					arr = [];
				}
			}
			if($.trim(arrRow.join('')) != ''){
				result.push(arrRow.join('-'));
			}
		});
		resultStr = result.join('_');
		$('#J-input-submit-value').val(resultStr);
				
		if(resultStr == ''){
			return false;
		}
	});
	$('#J-button-submit').click(function(e){
		e.preventDefault();
		$('#J-form-submit').submit();
	});

})(jQuery);

</script>
<script type="text/javascript" src="../../js/game/phoenix.GameChart.case.js"></script>

</body>
</html>