<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.7.2帮助后台 新建彩种帮助页</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	<link rel="stylesheet" href="../images/admin/admin-help.css" />
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	<script type="text/javascript" src="../js/phoenix.Tab.js"></script>
	
	
	<script type="text/javascript" src="../js/xheditor121/jquery/jquery-1.4.4.min.js"></script>
	<script type="text/javascript" src="../js/xheditor121/xheditor-1.2.1.min.js"></script>
	<script type="text/javascript" src="../js/xheditor121/xheditor_lang/zh-cn.js"></script>


	
</head>
<body>
	<?
	include('menu.html');
	?>
	
	<div class="col-content">
		<div class="col-side">
			
			<?
			include('sider.html');
			?>
			
		</div>
		<div class="col-main">
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">帮助</a> &gt;<a href="#">帮助管理</a> &gt; 新建彩种帮助页</div></div>
			
			
			<div class="col-content">
			
				<div class="col-main">
					<div class="main panel-help-addlottery">
					
					
					
							<form id="J-form" method="post" action="?">
					

										<ul class="ui-form">
											<li>
												<label class="ui-label">所属类目：</label>
												<select id="J-select-type" class="ui-select">
													<option value="">请选择</option>
													<option value="工商银行">充值帮助</option>
													<option value="建设银行">提现帮助</option>
												</select>
												<select id="J-select-type-2" class="ui-select">
													<option value="">请选择</option>
													<option value="工商银行">充值帮助</option>
													<option value="建设银行">提现帮助</option>
												</select>
												
												<span class="ui-check"><i></i></span>
												
											</li>
											<li>
												<label class="ui-label">标题：</label>
												<input id="J-title" type="text" value="" class="input w-6">
												<span class="ui-check"><i></i></span>
											</li>
											<li class="checkbox-list">
												<label class="ui-label">是否推荐：</label>
												<span class="radio-list">
													<input id="radio-recommend-1" name="recommend" type="radio" value="1" class="radio"><label for="radio-recommend-1" class="label">&nbsp;是</label>
													<input id="radio-recommend-0" name="recommend" type="radio" value="0" class="radio" checked="checked"><label for="radio-recommend-0" class="label">&nbsp;否</label>
												</span>
											</li>
											<li>
												<label class="ui-label">上传LOGO：</label>
												<input id="J-file" type="file" value="添加附件" class="file">
												<span class="ui-prompt">支持格式：JPG、GIF、PNG，大小2M内，尺寸：75*75</span>
												<span class="ui-check"><i></i></span>
											</li>
											<li>
												<label class="ui-label">预览：</label>
												<img src="http://www.baidu.com/img/bdlogo.gif" width="75" />
											</li>
											<li>
												<label class="ui-label">彩种链接：</label>
												<input id="J-url" type="text" value="" class="input w-6" />
												<span class="ui-check"><i></i></span>
											</li>
											<li>
												<label class="ui-label">广告词：</label>
												<input id="J-word-ad" type="text" value="" class="input w-6" />
												<span class="help-input-tip">&nbsp;&nbsp;限20字</span>
												<span class="ui-check"><i></i></span>
											</li>
											<li>
												<label class="ui-label">彩种简介：</label>
												<div class="textarea w-6">
													<textarea id="J-info"></textarea><span class="ui-check" style="padding-top:65px;margin-left:60px;"><i></i></span>
													<span class="help-input-tip" style="position:absolute;margin:-10px 0 0 310px">&nbsp;&nbsp;限150字</span>
												</div>
											</li>
											<li style="margin-bottom:0;">
												<label class="ui-label">内容：</label>
											</li>
											
											<li style="margin-top:0;">
												<label class="ui-label"></label>
												<div id="J-tab-lottery-type" class="tab-lottery-type">
													<ul class="tab-lottery-type-title">
														<li class="tab-lottery-type-title-current">玩法介绍</li>
														<li>投注方式</li>
														<li>奖项规则</li>
														<li>购买方式</li>
													</ul>
													<div class="tab-lottery-type-panel tab-lottery-type-panel-current">
														<textarea class="xheditor" rows="12" cols="80" style="width:100%;height:300px;">
															玩法介绍
														</textarea>
													</div>
													<div class="tab-lottery-type-panel">
														<textarea class="xheditor" rows="12" cols="80" style="width:100%;height:300px;">
															投注方式
														</textarea>
													</div>
													<div class="tab-lottery-type-panel">
														<textarea class="xheditor" rows="12" cols="80" style="width:100%;height:300px;">
															奖项规则
														</textarea>
													</div>
													
													<div class="tab-lottery-type-panel">
														<textarea class="xheditor" rows="12" cols="80" style="width:100%;height:300px;">
															购买方式
														</textarea>
													</div>
													

												</div>
												

												
												
											</li>
											<li>
												<label class="ui-label">序号：</label>
												<input id="J-order" style="text-align:center;" type="text" value="0" class="input w-1">
												<span class="ui-check"><i></i></span>
											</li>

											<li class="ui-btn">
												<a id="J-button-submit" href="#" class="btn btn-important">确 定<b class="btn-inner"></b></a>
												<a href="javascript:history.back(-1);">返 回<b class="btn-inner"></b></a>
											</li>
										</ul>
							</form>

										
										<div style="height:600px;"></div>
								
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
(function(){
	var tab = new phoenix.Tab({eventType:'click',par:'#J-tab-lottery-type',triggers:'.tab-lottery-type-title li',panels:'.tab-lottery-type-panel',currClass:'tab-lottery-type-title-current',currPanelClass:'tab-lottery-type-panel-current'});
})();



(function(){
	var form = $('#J-form'),button = $('#J-button-submit'),
		select1 = $('#J-select-type'),
		select2 = $('#J-select-type-2'),
		title = $('#J-title'),
		file = $('#J-file'),
		url = $('#J-url'),
		ad = $('#J-word-ad'),
		info = $('#J-info'),
		content = $('#J-content'),
		order = $('#J-order'),
		
		setMessage = function(dom, msg){
			dom.parent().find('.ui-check').html('<i></i>' + msg).show();
		},
		hideMessage = function(dom){
			dom.parent().find('.ui-check').hide();
		};
		
		
		file.change(function(){
			if($.trim(this.value) != ''){
				hideMessage(file);
			}
		});
		
		
	button.click(function(e){
		e.preventDefault();
		if(select1.val() == '' || select2.val() == ''){
			setMessage(select1, '请选择类目');
			return;
		}
		hideMessage(select1);
		
		if($.trim(title.val()).length < 1 || $.trim(title.val()).length > 50){
			setMessage(title, '标题长度应在1-50个字符');
			return;
		}
		hideMessage(title);
		
		
		if($.trim(file.val()) == ''){
			setMessage(file, '请上传彩种Logo图片');
			return;
		}
		hideMessage(file);
		
		
		if($.trim(url.val()).length < 1){
			setMessage(url, '彩种链接不能为空');
			return;
		}
		hideMessage(url);
		
		
		if($.trim(ad.val()).length < 1 || $.trim(ad.val()).length > 20){
			setMessage(ad, '广告语长度应为1-20个字符');
			return;
		}
		hideMessage(ad);
		
		
		if($.trim(info.val()).length < 1 || $.trim(info.val()).length > 150 ){
			setMessage(info, '彩种简介长度应在1-100个字符');
			return;
		}
		hideMessage(info);
		
		
		if(!(/^\d+$/g).test($.trim(order.val()))){
			setMessage(order, '排序只能为数字');
			return;
		}
		if(Number($.trim(order.val())) > 1000000){
			setMessage(order, '排序不能大于1000000');
			return;
		}
		hideMessage(order);
		
		
		form.submit();
		
		
	});
	
})();



</script>
	


</body>
</html>