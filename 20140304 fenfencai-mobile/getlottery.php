
<?
//获取幸运号码开奖信息以及个人号码记录
$dateNum = $_GET['dateNum'];

$result = array(
	'isSuccess' => 1,
	'type' => '',
	'msg' => '数据请求成功',
	'data' => array()
);

//第三期当前期
if($dateNum < 3){
	$result['data'] = array(
			//是否为当前期
			'iscurrent' => 0,
			//距离开奖时间(已开奖设为0)
			'time' => 0,
			//用户幸运号码
			'lotterys' => '333333',
			//日期
			'date' => '2014年03月13日',
			//具体时间
			'minsec' => '00点17分00秒'
	);

}elseif($dateNum == 3){
	$result['data'] = array(
			//是否为当前期
			'iscurrent' => 1,
			//距离开奖时间(已开奖设为0)
			'time' => 200,
			//用户幸运号码
			'lotterys' => '',
			//日期
			'date' => '2014年03月13日',
			//具体时间
			'minsec' => '00点17分00秒'
	);
}elseif($dateNum > 3){

	$result['data'] = array(
			//是否为当前期
			'iscurrent' => 0,
			//距离开奖时间(已开奖设为0)
			'time' => 10000,
			//用户幸运号码
			'lotterys' => '',
			//日期
			'date' => '2014年03月13日',
			//具体时间
			'minsec' => '00点17分00秒'
	);
}

echo json_encode($result);



?>






