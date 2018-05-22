
<?
//获取红包

echo "<script>alert('会员登录超时，请重新登录平台');top.location='index.php?controller=default&action=login';</script>";
exit;

$result = array(
	'isSuccess' => 1,
	'type' => '',
	'msg' => '数据请求成功',
	'data' => array(
		'money' => 3588
	)
);




echo json_encode($result);



?>






