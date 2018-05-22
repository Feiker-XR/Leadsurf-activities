<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>图片上传</title>
	<link rel="stylesheet" href="../images/common/base.css" />
    <link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	
	<style>
	html,body {height:auto;}
	.thumbnail {cursor:pointer;}
	</style>
	
    <script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	
</head>
<body>
<?php
if(isset($_FILES ['file'])){
?>

								<ul class="ui-form" id="J-list">
									<li class="thumbnail-list">
										<label class="ui-label">选择图片：</label>
										<span class="thumbnail" data-id="1">
											<div class="hd"><i class="close" data-id="1"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="100" name="bg-header.jpg" alt="" src="../images/admin/bg-header.jpg">
                                           
										</span>
										<span class="thumbnail" data-id="2">
											<div class="hd"><i class="close" data-id="2"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="100" name="bg-header2.jpg" alt="" src="../images/admin/bg-header.jpg">
										</span>
										<span class="thumbnail" data-id="3">
											<div class="hd"><i class="close" data-id="3"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="200" name="bg-header3.jpg" alt="" src="../images/admin/bg-header.jpg">
										</span>
										<span class="thumbnail" data-id="4">
											<div class="hd"><i class="close"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="150" name="bg-header4.jpg" alt="250" src="https://www.google.com.ph/images/srpr/logo11w.png">
										</span>
									</li>
									</ul>

<script>
(function($){
	var msg = {'isSuccess':1,'msg':'上传成功','data':[{'width':100,'height':200,'sort':1,'src':'https://www.google.com.ph/images/srpr/logo11w.png'},{'width':100,'height':200,'sort':2,'src':'https://www.google.com.ph/images/srpr/logo11w.png'},{'width':100,'height':200,'sort':3,'src':'https://www.google.com.ph/images/srpr/logo11w.png'}]};
	try{
		parent.global_img_placeholder(msg);
	}catch(e){
		
	}

})(jQuery);
</script>

<?php
}else{
?>
								<ul class="ui-form" id="J-list">
									<li class="thumbnail-list">
										<label class="ui-label">选择图片：</label>
										<span class="thumbnail" data-id="1">
											<div class="hd"><i class="close" data-id="1"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="100" name="bg-header.jpg" alt="" src="../images/admin/bg-header.jpg">
										</span>
										<span class="thumbnail" data-id="2">
											<div class="hd"><i class="close" data-id="2"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="100" name="bg-header1.jpg" alt="" src="../images/admin/bg-header.jpg">
										</span>
										<span class="thumbnail" data-id="3">
											<div class="hd"><i class="close" data-id="3"></i><a href="#" target="_blank">查看大图</a></div>
											<img width="100" height="200" name="bg-header2.jpg" alt="" src="../images/admin/bg-header.jpg">
										</span>
									</li>
									</ul>
	
<?php
}
?>

<script>
(function($){
	$('#J-list').on('click', '.close', function(e){
		var dom = $(this),id = dom.attr('data-id'),cls = 'thumbnail-current',msg;
		e.stopPropagation();
		$.ajax({
			url:'data.json?action=del&id=' + id,
			dataType:'json',
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					if(dom.parent().parent().hasClass(cls)){
						msg = {'isSuccess':1,'msg':'删除图片','data':{action:'del',id:id}};
						try{
							parent.global_img_placeholder(msg);
						}catch(e){
						}
					}
					dom.parent().parent().remove();
				}else{
					alert(data['msg']);
				}
			}
		});
	});
	$('#J-list').on('click', '.thumbnail', function(){
		var dom = $(this),id = dom.attr('data-id'),msg,cls = 'thumbnail-current';
		msg = {'isSuccess':1,'msg':'选择图片','data':{action:'select',id:id}};
		try{
			parent.global_img_placeholder(msg);
			dom.parent().find('.thumbnail').removeClass(cls);
			dom.addClass(cls);
		}catch(e){
			
		}
	});
	

})(jQuery);
</script>

</body>
</html>