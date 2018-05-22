<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>五星-时时彩-走势图</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/game/chart.css" />
	<script type="text/javascript" src="../js/game/util/jquery-1.9.1.js" ></script>
	<script type="text/javascript" src="../js/game/util/jquery.tmpl.js" ></script>
	<script type="text/javascript" src="../js/game/util/phoenix.base.js" ></script>
	<script type="text/javascript" src="../js/game/util/phoenix.Class.js" ></script>
	<script type="text/javascript" src="../js/game/util/phoenix.Event.js" ></script>
	<script type="text/javascript" src="../js/game/util/phoenix.util.js" ></script>
	<!--[if IE]><script type="text/javascript" src="../js/game/util/excanvas.js"></script><![endif]-->
	<!--<script type="text/javascript" src="../js/game/util/raphael-min.js" ></script>-->
	<script type="text/javascript" src="../js/game/util/phoenix.DatePicker.js" ></script>
	<script type="text/javascript" src="../js/game/phoenix.GameChart.js" ></script>
</head>
<body class="table-trend">
<!-- toolbar start -->
	<div class="bg-toolbar"></div>
	<div class="toolbar">
		<div class="g_33">
			<ul class="menu">
				<li class="user hover">
					<a href="#">您好，VIC<i class="tri"></i></a>
					<div class="menu-nav" style="display:none;">
						<i class="tri"></i>
						<a href="">游戏记录</a>
						<a href="">报表管理</a>
						<a href="">资金明细</a>
						<a href="">安全中心</a>
					</div>
				</li>
				<li class="msg">
					<a href="#" class="msg-title">12</a>
					<div class="msg-box" style="display:none;">
						<div class="msg-hd"><i class="tri"></i><a href="#" class="more">更多</a>我的未读消息<strong>（12）</strong></div>
						<div class="msg-bd">
							<a href="">这里是消息提示提示消息</a>
							<a href="">这里是消息提示提示消息</a>
							<a href="">这里是消息提示提示消息</a>
							<a href="">这里是消息提示提示消息这里是消息提示提示消息这里是消息提示提示消息这里是消息提示提示消息</a>
						</div>
					</div>
				</li>
				<li class="balance">余额：10000.00</li>
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
		<h3 class="select-title">彩种：重庆时时彩</h3>
		<ul class="select-list">
			<li class="current"><a href="ssc_wuxing.php">五星</a></li>
			<li><a href="ssc_zonghe.php">五星综合</a></li>
			<li><a href="ssc_sixing.php">四星</a></li>
			
			<li><a href="ssc_qiansan.php">前三</a></li>
			<li><a href="ssc_housan.php">后三</a></li>
			
			<li><a href="ssc_qianer.php">前二</a></li>
			<li><a href="ssc_houer.php">后二</a></li>
		</ul>
	</div>
	<div class="select-section-content clearfix" id="J-panel-control">
		<div class="title">五星走势图</div>
		<div class="function">
			<label class="label"><input data-action="guides" type="checkbox" class="checkbox" checked="checked">辅助线</label>
			<label class="label"><input data-action="lost" type="checkbox" class="checkbox" checked="checked">遗漏</label>
			<label class="label"><input data-action="lost-post" type="checkbox" class="checkbox">遗漏条</label>
			<label class="label"><input data-action="trend" type="checkbox" class="checkbox" checked="checked">走势</label>
			<label class="label"><input data-action="temperature" type="checkbox" class="checkbox">号温</label>
		</div>
		<div class="time" id="J-periods-data">
			<a data-action="periods-30" href="javascript:void(0);">近30期</a>
			<a data-action="periods-50" href="javascript:void(0);">近50期</a>
			<a data-action="day-1" href="javascript:void(0);">今日数据</a>
			<a data-action="day-2" href="javascript:void(0);">近2天</a>
			<a data-action="day-5" href="javascript:void(0);">近5天</a>
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
					<th rowspan="2" colspan="3" class="border-bottom border-right">期号</th>
					<th colspan="3" class="border-right">开奖号码</th>
					<th colspan="12" class="border-right">万位</th>
					<th colspan="12" class="border-right">千位</th>
					<th colspan="12" class="border-right">百位</th>
					<th colspan="12" class="border-right">十位</th>
					<th colspan="12" class="border-right">个位</th>
					<th colspan="12">号码分布</th>
				</tr>
				<tr class="title-number">
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><label class="label"><input type="checkbox" class="checkbox">全部</label></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header border-right"></th>
					<th class="ball-none border-bottom-header"></th>
					<th class="border-bottom-header"><i class="ball-noraml">0</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">1</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">2</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">3</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">4</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">5</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">6</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">7</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">8</i></th>
					<th class="border-bottom-header"><i class="ball-noraml">9</i></th>
					<th class="ball-none border-bottom-header"></th>
				</tr>
			</thead>
			<tbody id="J-chart-content" class="chart table-guides">
				<tr></tr>
			</tbody>
			
			
			<tbody id="J-select-content" class="tbody">
				<tr id="J-tr-select" class="select-area">
					<td colspan="3" class="border-right"><i data-action="addSelect" class="ico-add"></i>预选区</td>
					<td colspan="3" class="border-right">五星直选</td>
					<td class="ball-none"></td>
					<td><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right"></td>
					<td class="ball-none"></td>
					<td><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right"></td>
					<td class="ball-none"></td>
					<td><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right"></td>
					<td class="ball-none"></td>
					<td><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right"></td>
					<td class="ball-none"></td>
					<td><i data-action="selectBall" data-value="0" class="ball-noraml">0</i></td>
					<td><i data-action="selectBall" data-value="1" class="ball-noraml">1</i></td>
					<td><i data-action="selectBall" data-value="2" class="ball-noraml">2</i></td>
					<td><i data-action="selectBall" data-value="3" class="ball-noraml">3</i></td>
					<td><i data-action="selectBall" data-value="4" class="ball-noraml">4</i></td>
					<td><i data-action="selectBall" data-value="5" class="ball-noraml">5</i></td>
					<td><i data-action="selectBall" data-value="6" class="ball-noraml">6</i></td>
					<td><i data-action="selectBall" data-value="7" class="ball-noraml">7</i></td>
					<td><i data-action="selectBall" data-value="8" class="ball-noraml">8</i></td>
					<td><i data-action="selectBall" data-value="9" class="ball-noraml">9</i></td>
					<td class="ball-none border-right"></td>
					<td class="ball-none"></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td class="ball-none"></td>
				</tr>
				<tr>
					<td colspan="3" class="border-bottom"></td>
					<td colspan="3" class="border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td colspan="71" class="border-bottom">
						<form id="J-form-submit" method="get" action="http://test.com/html/game/ssc.php" target="_blank">
							<input type="hidden" name="gametype" value="wuxing.zhixuan.fushi" />
							<input id="J-input-submit-value" type="hidden" name="ball" value="" />
							<!-- <input id="J-button-submit" type="submit" value=" 添加到号码栏 " /> -->
							<a id="J-button-submit" href="#" class="btn btn-important">添加到号码栏<b class="btn-inner"></b></a>
						</form>
					</td>
				</tr>
			

				
			</tbody>
			
			
			<tbody id="J-ball-content" class="tbody">

			

			</tbody>
			
			<tbody class="tbody tbody-footer-header">
				<tr class="auxiliary-area title-number">
					<td rowspan="2" colspan="3" class="border-right border-bottom">期号</td>
					<td rowspan="2" colspan="3" class="border-right border-bottom" >开奖号码</td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-right border-bottom"></td>
					<td class="ball-none border-bottom"></td>
					<td class="border-bottom"><i class="ball-noraml">0</i></td>
					<td class="border-bottom"><i class="ball-noraml">1</i></td>
					<td class="border-bottom"><i class="ball-noraml">2</i></td>
					<td class="border-bottom"><i class="ball-noraml">3</i></td>
					<td class="border-bottom"><i class="ball-noraml">4</i></td>
					<td class="border-bottom"><i class="ball-noraml">5</i></td>
					<td class="border-bottom"><i class="ball-noraml">6</i></td>
					<td class="border-bottom"><i class="ball-noraml">7</i></td>
					<td class="border-bottom"><i class="ball-noraml">8</i></td>
					<td class="border-bottom"><i class="ball-noraml">9</i></td>
					<td class="ball-none border-bottom"></td>
				</tr>
				<tr class="auxiliary-area title-text">
					<td colspan="12" class="border-right border-bottom">万位</td>
					<td colspan="12" class="border-right border-bottom">千位</td>
					<td colspan="12" class="border-right border-bottom">百位</td>
					<td colspan="12" class="border-right border-bottom">十位</td>
					<td colspan="12" class="border-right border-bottom">个位</td>
					<td colspan="12" class="border-bottom">号码分布</td>
				</tr>
			
			</tbody>
			

		</table>
		
		<div style="height:100px;"></div>
	</div>
	<!-- End 五星 -->
<script>

var CHART;
(function($){
	CHART = new phoenix.GameCharts({getDataUrl: '../js/json/ssc_wuxing.php'});
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
					arrRow.push(arr.join(','));
					arr = [];
				}
			}
			if($.trim(arrRow.join('')) != ''){
				result.push(arrRow.join('-'));
			}
		});
		resultStr = result.join('_');
		$('#J-input-submit-value').val(resultStr);
			console.log(resultStr);	
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
<script type="text/javascript" src="../js/game/phoenix.GameChart.case.js"></script>

</body>
</html>