
<?
//获取某张卡的结果

$result = array(
	'isSuccess' => 1,
	'type' => '',
	'msg' => '数据请求成功',
	'data' => array(
		//0 未中奖 1 红包 2 幸运号码
		'result' => 2,
		//相关信息
		'info' => 33
	)
);



echo json_encode($result);



?>






