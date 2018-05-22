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
	.thumbnail img {width:40px;height:auto}
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

<a href="javascript:void(0);" class="thumbnail"><img src="https://www.google.com.ph/images/srpr/logo11w.png" width="40" alt="" /></a>

<script>
(function($){
	var msg = {'isSuccess':1,'msg':'上传成功','data':{id:1,width:20,height:20,src:'https://www.google.com.ph/images/srpr/logo11w.png'}};
	try{
		parent.global_img(msg);
	}catch(e){
		
	}

})(jQuery);
</script>

<?php
}else{
?>
<a href="javascript:void(0);" class="thumbnail"><img src="" alt="" /></a>
	
<?php
}
?>

	
</body>
</html>