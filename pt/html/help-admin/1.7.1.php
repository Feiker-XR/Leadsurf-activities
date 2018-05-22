<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.7.1帮助后台 添加普通帮助</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	<link rel="stylesheet" href="../images/admin/admin-help.css" />
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	
	
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
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">帮助</a> &gt;<a href="#">帮助管理</a> &gt; 新建帮助</div></div>
			
			
			<div class="col-content">
			
				<div class="col-main">
					<div class="main panel-help-addcontent">
					
					
					
					
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
												<label class="ui-label">简介：</label>
												<div class="textarea w-6">
													<textarea id="J-info"></textarea><span class="ui-check" style="padding-top:65px;margin:0 0 0 60px;"><i></i></span>
													<span class="help-input-tip" style="position:absolute;margin:-10px 0 0 315px;">限100字</span>
												</div>
											</li>
											<li style="margin-bottom:0;">
												<label class="ui-label">内容：</label>
											</li>
											<li style="margin-top:0;">
												<label class="ui-label"></label>
												<div style="display:inline-block;">
													<textarea id="J-content" class="xheditor" rows="12" cols="80" style="width:100%;height:300px;">
												&lt;p&gt;当前实例调用的HTML代码为：&lt;/p&gt;&lt;p&gt;&amp;lt;textarea id=&quot;elm1&quot; name=&quot;elm1&quot; &lt;span style=&quot;color:#ff0000;&quot;&gt;class=&quot;xheditor&quot;&lt;/span&gt; rows=&quot;12&quot; cols=&quot;80&quot; style=&quot;width: 80%&quot;&amp;gt;&lt;/p&gt;
													</textarea>
													<span class="ui-check"><i></i></span>
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
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
(function(){
	var form = $('#J-form'),button = $('#J-button-submit'),
		select1 = $('#J-select-type'),
		select2 = $('#J-select-type-2'),
		title = $('#J-title'),
		info = $('#J-info'),
		content = $('#J-content'),
		order = $('#J-order'),
		
		setMessage = function(dom, msg){
			dom.parent().find('.ui-check').html('<i></i>' + msg).show();
		},
		hideMessage = function(dom){
			dom.parent().find('.ui-check').hide();
		};
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
		
		if($.trim(info.val()).length < 1 || $.trim(info.val()).length > 100 ){
			setMessage(info, '简介长度应在1-100个字符');
			return;
		}
		hideMessage(info);
		
		if($.trim(content.val()).length < 1){
			setMessage(content, '简介长度应在1-100个字符');
			return;
		}
		hideMessage(content);
		
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