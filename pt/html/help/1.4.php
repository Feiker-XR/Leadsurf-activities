<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.1帮助中心 文章详情</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/help/help.css" />
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	<script type="text/javascript" src="../js/phoenix.Mask.js"></script>
	<script type="text/javascript" src="../js/phoenix.MiniWindow.js"></script>


	
</head>
<body>

<?
include('../header.html');
?>



<div class="g_33">
	
	<div class="help-main help-main-half clearfix">
		
		<div class="help-menu">
			<?
				include('help-menu.html');
			?>
			
		</div>
		
		<div class="help-container help-article-container">
			
			<div class="help-article-title">
				建行充值流程
			</div>
			
			<div class="help-article-text">
				点击前台【充值】按钮，选择“中国建设银行”，选择一张在平台绑定的建行卡，输入所要充值金额，获取建行收款人手机号和收款人姓名；
				 <br />
				登陆 http://www.ccb.com/cn/jump/personal_loginbank.html 建行网站
			</div>
			
			
			
			
			
			
			<div class="help-feedback">
				<div class="help-feedback-title">以上内容是否解决了您的问题？</div>
				<div>
					<a href="#" id="J-feedback-button-yes" class="btn btn-important">是，已解决<b class="btn-inner"></b></a>
					&nbsp;&nbsp;
					<a href="#" id="J-feedback-button-no" class="btn btn-primary">否，未解决<b class="btn-inner"></b></a>
				</div>
				
				
				<div id="J-help-feedback-panel" class="help-feedback-panel" style="display:none">
					<div>
						请选择原因： 
						<label for="J-reason-1"><input id="J-reason-1" name="reason" type="radio" /> 太简单，用不上</label>
						<label for="J-reason-2"><input id="J-reason-2" name="reason" type="radio" /> 字太多，不想看</label>
						<label for="J-reason-3"><input id="J-reason-3" name="reason" type="radio" /> 太复杂，看不懂</label>
						<label for="J-reason-4"><input id="J-reason-4" name="reason" type="radio" /> 其他</label>
					</div>
					<div id="J-help-feedback-text" class="textarea w-8" style="display:none;">
						<textarea></textarea>
						<span class="help-feedback-tip">限100字</span>
					</div>
					<div class="help-feedback-subcont">
						<a href="#" class="btn btn-important">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交<b class="btn-inner"></b></a>
						<a id="J-help-feedback-cancel" href="#" class="btn">取 消<b class="btn-inner"></b></a>
					</div>
				</div>
				
			</div>
			
			
			
			
			
	  </div>
	</div>
	

</div>

<!-- <a href="javascript:void(0);" class="help-backtop">回顶部<i></i></a> -->


<?
include('../footer.html');
?>

<script>
(function(){
	var button = $('#J-feedback-button-no'),
		panel = $('#J-help-feedback-panel'),
		text = $('#J-help-feedback-text'),
		cancel = $('#J-help-feedback-cancel'),
		ID = 'J-reason-4';
	button.click(function(e){
		e.preventDefault();
		panel.show();
	});
	panel.find('input').click(function(){
		if(this.id == ID && !!this.checked){
			text.show();
		}else{
			text.hide();
		}
	});
	cancel.click(function(e){
		e.preventDefault();
		panel.find('input').attr('checked', false);
		text.hide();
		panel.hide();
	});
	
})();
</script>


</body>
</html>