
<?
//一次性刮开所有卡

$result = array(
	'isSuccess' => 1,
	'type' => '',
	'msg' => '数据请求成功',
	'data' => array(
		//一共刮开多少张卡
		'totalNum' => 22,
		//共获得多少红包
		'redNum' => 3,
		//获得多少个幸运号码
		'numberNum' =>  6
	)
);





echo json_encode($result);



?>






