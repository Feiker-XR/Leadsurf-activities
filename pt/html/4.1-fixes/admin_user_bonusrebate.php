
<!-- //////////////头部公共页面////////////// -->
<!DOCTYPE HTML>
<html lang="UTF-8" class="html-content">
<head>
	<meta charset="UTF-8" http-equiv="X-UA-Compatible" content="IE=edge">
	<title>奖金返点</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="http://static.rfonlineedu.com:888/static/images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	<link rel="stylesheet" href="http://static.rfonlineedu.com:888/static/css/pagination.css" />
	
</head>
<body>
	<div class="menu">
		<div class="menu-logo"></div>
		<ul class="menu-list">
			<li><a href="/admin/index/" >首页</a></li>
			<!--  -->
			<li><a href="/globeAdmin/goRegLoginConfig/">全局管理</a></li>
			<!--  -->
			<!--  -->
			<li><a href="/admin/user/">用户中心</a></li>
			<!--  -->
			<!--  -->
			<li><a href="/gameoa/lotteryList">游戏中心</a></li>
			<!--  -->
			<li><a href="/gameRisk/toSeriesConfigRisk/">审核中心</a></li>
			<!--  -->
			<li><a href="/admin/Rechargemange/">资金中心</a></li>
			<!--  -->
			<!--  -->
			<li><a href="/adAdmin/">营销中心</a></li>
			<!--  -->
			<!-- <li><a href="">数据中心</a></li> -->
			<!--  -->
			<li><a href="/helpAdmin/goHelpManager/">内容中心</a></li>
			<!--  -->
			<!--  -->
			<li><a href="/aclAdmin/goUserManager/">权限中心</a></li>
			<!--  -->
			<!--  -->
			<li><a href="/noticeAdmin/goSysMsgManager/">通知中心</a></li>
			<!--  -->
		</ul>
		<div class="menu-quit"><a href="/admin/login/logout">退出</a><i class="ico-user"></i>你好，
		cancus
		</div>
	</div>
	<input type="hidden" id="token"  value=""><!-- /////////////头部公共页面/////////////// -->
	<div class="col-content">
		<!-- //////////////头部公共页面////////////// -->
			<div class="col-side">
	<dl class="nav">
	<!--  -->
		<dt>客户管理</dt>
	<!--  -->
	<!--  -->
		<dd><a href="/admin/user/list?search=0">客户列表</a></dd>
	<!--  -->
	<!--  -->
		<dd><a href="/admin/proxy/index?search=0">总代管理</a></dd>
	<!--  -->
	<!--  -->
		<dt>客户异常</dt>
	<!--  -->
	<!--  -->
		<dd><a href="/admin/user/freezeuserlist?search=0">冻结用户管理</a></dd>
	<!--  -->
		<!-- <dd><a href="#">异常用户名单</a></dd> -->
	<!--  -->
		<dd><a href="/admin/user/accomplaints?search=1">账号申诉管理</a></dd>
	<!--  -->
	<p class="copy">&copy; 2001-2012 591PH.<br />All right reserved.</p>
</div>		<!-- /////////////头部公共页面/////////////// -->
		<div class="col-main">
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="/admin/user/">用户中心</a> &gt; 
						 <a href="/admin/user/list?search=0"><span id="menu2">客户列表</span></a> 
						&gt; <span id="menu3">admin</span>
			</div></div>
			<div class="col-content">
				<div class="col-main">
					<div class="main">
					<div class="ui-tab">
						<div class="ui-tab-title clearfix">
							<ul>
								<!--  -->
								<li ><a href="/admin/user/userdetail?id=31&typepage=1">基本资料</a></li>
							<!--  -->
								<!--  -->
								<li><a href="/admin/user/bankcard?id=31&account=admin&typepage=1">查看银行卡</a></li>
							<!--  -->
								<li class="current">奖金返点</li>
								<li><a href="/admin/user/getphonesecurity?id=31&account=admin&typepage=1">手机令牌</a></li>
							</ul>
						</div>
						<div >
							<input type="hidden" name="typepage" value="1" />
							<div class="rebate-list">
								<div id="div-context" class="lottery-switcher">
                                	<div class="lottery-tabs">
                                		<a href="javascript:void(0);">时时彩</a>
                                		<a href="javascript:void(0);">11选5</a>
                                		<a href="javascript:void(0);">快乐彩</a>
                                		<a href="javascript:void(0);">低频</a>
                                	</div>

                                	<!-- 时时彩 -->
                                	<div class="lottery-switch">
                                	<?php
                                		$lottery_shishicai = array("重庆时时彩", "江西时时彩", "黑龙江时时彩", "新疆时时彩", "上海时时彩", "乐利时时彩", "天津时时彩", "吉利分分彩", "顺利秒秒彩");
                                		foreach ($lottery_shishicai as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td rowspan="2">奖金组1800：</td>
														<td>
															<span class="label-like">直选返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">不定位返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
											<dd>
												<table class="table">
													<tr>
														<td rowspan="2">奖金组1700：</td>
														<td>
															<span class="label-like">直选返点</span>
															<input type="input" class="input w-2" value="1-9.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">不定位返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
											<dd>
												<table class="table">
													<tr>
														<td rowspan="2">奖金组1500：</td>
														<td>
															<span class="label-like">直选返点</span>
															<input type="input" class="input w-2" value="1-19.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">不定位返点</span>
															<input type="input" class="input w-2" value="1-12.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	</div>

                                	<!-- 11选5 -->
                                	<div class="lottery-switch">
                                	<?php
                                		$lottery_11xuan5 = array("山东11选5", "江西11选5", "广东11选5", "重庆11选5", "乐利11选5");
                                		foreach ($lottery_11xuan5 as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd>
												<table class="table">
													<tr>
														<td>奖金组1782：</td>
														<td>
															<span class="label-like">所有玩法返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td>奖金组1620：</td>
														<td>
															<span class="label-like">所有玩法返点</span>
															<input type="input" class="input w-2" value="1-12.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	</div>

                                	<!-- 快乐彩 -->
                                	<div class="lottery-switch">
                                	<?php
                                		$lottery_jinuo = array("北京快乐8");
                                		foreach ($lottery_jinuo as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td rowspan="2">混合奖金组：</td>
														<td>
															<span class="label-like">任选型返点</span>
															<input type="input" class="input w-2" value="1-14.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">趣味型返点</span>
															<input type="input" class="input w-2" value="1-9.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	</div>

                                	<!-- 低频 -->
                                	<div class="lottery-switch">
                                	<?php
                                		$lottery_3d = array("3D", "排列3/5");
                                		foreach ($lottery_3d as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd>
												<table class="table">
													<tr>
														<td rowspan="2">奖金组1700：</td>
														<td>
															<span class="label-like">直选返点</span>
															<input type="input" class="input w-2" value="1-9.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">不定位返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td rowspan="2">奖金组1500：</td>
														<td>
															<span class="label-like">直选返点</span>
															<input type="input" class="input w-2" value="1-19.9" readonly/>
														</td>
													</tr>
													<tr>
														<td>
															<span class="label-like">不定位返点</span>
															<input type="input" class="input w-2" value="1-12.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	<?php
                                		$lottery_jiangchi = array("双色球");
                                		foreach ($lottery_jiangchi as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td>双色球奖金：</td>
														<td>
															<span class="label-like">所有玩法返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	</div>

                                	<!-- 奖池系 -->
                                	<div class="lottery-switch">
                                	<?php
                                		$lottery_jiangchi = array("双色球");
                                		foreach ($lottery_jiangchi as $key => $value) { ?>
                                		<dl class="item">
											<dt><?php echo $value;?></dt>
											<dd class="bet-selected">
												<table class="table">
													<tr>
														<td>双色球奖金：</td>
														<td>
															<span class="label-like">所有玩法返点</span>
															<input type="input" class="input w-2" value="1-4.9" readonly/>
														</td>
													</tr>
												</table>
											</dd>
										</dl>
                                	<?php	} ?>
                                	</div>
								</div>

								<!-- 有Javascript需要引用 在Line 328 -->

							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	﻿<script type="text/javascript">global_path_url="http://static.rfonlineedu.com:888/static";</script>
<script src="http://static.rfonlineedu.com:888/static/js/jquery-1.9.1.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/jquery-ui-1.10.2.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/jquery.tmpl.min.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.base.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js//phoenix.Class.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.Event.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.util.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.Mask.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.DatePicker.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.SuperSearchGroup.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.SuperSearch.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.pagination.js" type="text/javascript"></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.Tab.js" type="text/javascript" ></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.MiniWindow.js" type="text/javascript" ></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.Message.js" type="text/javascript" ></script>
<script src="http://static.rfonlineedu.com:888/static/js/phoenix.Common.js" type="text/javascript" ></script>

<script>
// 彩系切换，新增
new phoenix.Tab({
	par : '.lottery-switcher',
	triggers : '.lottery-tabs > a',
	panels : '.lottery-switch',
	eventType : 'click',
	currPanelClass: 'lottery-switch-current'
});
</script>

	
	<script > 
	(function($){	
		//一级菜单选中样式加载
		var type = $('input[name="typepage"]').val();
		if(type!=3){
			type = type -1;
		}
		$('.menu-list li').removeAttr("class");			
		$('.menu-list li:eq(2)').attr("class","current");
		$('.col-side .nav dd:eq('+type+')').attr("class","current");
		
		
	})(jQuery);
	</script>
	
</body>
</html>