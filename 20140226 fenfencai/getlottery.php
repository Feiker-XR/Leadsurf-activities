
<?
//获取幸运号码开奖信息以及个人号码记录

$result = array(
	'isSuccess' => 1,
	'type' => 'finish',
	'msg' => '数据请求成功',
	'data' => array()
);



$result['data'][] = array(
		//是否为当前期
		'iscurrent' => 0,
		//开奖号
		'number' => '123456',
		//距离开奖时间(已开奖设为0)
		'time' => 0,
		//用户幸运号码
		'lotterys' => array('111111', '123456', '111111', '111111'),
		//日期
		'date' => '2014年03月11日',
		//具体时间
		'minsec' => '00点15分00秒'
);



$result['data'][] = array(
		//是否为当前期
		'iscurrent' => 0,
		//距离开奖时间(已开奖设为0)
		'time' => 0,
		//开奖号
		'number' => '568548',
		//用户幸运号码
		'lotterys' => array('222222', '222222', '222222', '222222'),
		//日期
		'date' => '2014年03月12日',
		//具体时间
		'minsec' => '00点16分00秒'
);



$result['data'][] = array(
		//是否为当前期
		'iscurrent' => 1,
		//距离开奖时间(已开奖设为0)
		'time' => 10,
		//开奖号
		'number' => '555555',
		//用户幸运号码
		'lotterys' => array('333333', '333333', '333333', '333333'),
		//日期
		'date' => '2014年03月13日',
		//具体时间
		'minsec' => '00点17分00秒'
);


$result['data'][] = array(
		//是否为当前期
		'iscurrent' => 0,
		//距离开奖时间(已开奖设为0)
		'time' => 300,
		//用户幸运号码
		'lotterys' => array('444444', '444444', '444444', '444444'),
		//日期
		'date' => '2014年03月14日',
		//具体时间
		'minsec' => '00点18分00秒'
);


$result['data'][] = array(
		//是否为当前期
		'iscurrent' => 0,
		//距离开奖时间(已开奖设为0)
		'time' => 400,
		//日期
		'date' => '2014年03月15日',
		//具体时间
		'minsec' => '00点19分00秒'
);


echo json_encode($result);



?>






