
<?
//刮开某一张卡

$result = array(
	'isSuccess' => 1,
	'type' => '',
	'msg' => '数据请求成功',
	'data' => array(
		//刮卡结果类型(0 未中奖 1 红包礼金 2 幸运号码)
		'type' => 2,
		//相关信息
		'info' => '221454'
	)
);



echo json_encode($result);



?>






