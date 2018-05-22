
<?
//获取卡数量

$result = array(
	'isSuccess' => 1,
	//type 1 失效 0 有效
	'type' => 0,
	'msg' => '数据请求成功',
	'data' => array()
);


//一星卡
$result['data'][] = array(
	//拥有总数量
	'sum' => 14,
	//可刮卡数量
	'over' => 0
);


//二星卡
$result['data'][] = array(
	//拥有总数量
	'sum' => 210,
	//可刮卡数量
	'over' => 99
);


//三星卡
$result['data'][] = array(
	//拥有总数量
	'sum' => 8,
	//可刮卡数量
	'over' => 1
);


//四星卡
$result['data'][] = array(
	//拥有总数量
	'sum' => 0,
	//可刮卡数量
	'over' => 0
);


//五星卡
$result['data'][] = array(
	//拥有总数量
	'sum' => 3,
	//可刮卡数量
	'over' => 2
);


echo json_encode($result);



?>






