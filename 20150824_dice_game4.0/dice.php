<?php

$prize_arr = array(
	'3' => array('id'=>3,'prize'=>rand(1,10)*0.1,'v'=>5),
	'4' => array('id'=>4,'prize'=>rand(1,10)*1,'v'=>5),
	'5' => array('id'=>5,'prize'=>rand(1,10)*0.1,'v'=>5),
	'6' => array('id'=>6,'prize'=>rand(1,5)*0.2,'v'=>5),
	'7' => array('id'=>7,'prize'=>rand(1,10)*0.1,'v'=>5),
	'8' => array('id'=>8,'prize'=>rand(1,10)*0.1,'v'=>5),
	'9' => array('id'=>9,'prize'=>rand(1,10)*1,'v'=>5),
	'10' => array('id'=>10,'prize'=>rand(1,10)*1,'v'=>5),
	'11' => array('id'=>11,'prize'=>rand(1,10)*0.1,'v'=>5),
	'12' => array('id'=>12,'prize'=>rand(1,10)*0.1,'v'=>5),
	'13' => array('id'=>13,'prize'=>rand(1,5)*0.2,'v'=>5),
	'14' => array('id'=>14,'prize'=>rand(1,10)*0.1,'v'=>5),
	'15' => array('id'=>15,'prize'=>rand(1,10)*1,'v'=>5),
	'16' => array('id'=>16,'prize'=>rand(1,10)*0.1,'v'=>5),
	'17' => array('id'=>17,'prize'=>rand(1,5)*0.2,'v'=>10),
	'18' => array('id'=>18,'prize'=>rand(1,10)*0.1,'v'=>10),
);

foreach ($prize_arr as $key => $val) {
	$arr[$val['id']] = $val['v'];
}

$sum = getRand($arr); //根据概率获取奖项id

//分配色子点数
$arrs = array(
	'3' => array(array(1,1,1)),
	'4' => array(array(1,1,2)),
	'5' => array(array(1,1,3),array(1,2,2)),
	'6' => array(array(1,1,4),array(1,2,3),array(2,2,2)),
	'7' => array(array(1,1,5),array(1,2,4),array(1,3,3),array(2,2,3)),
	'8' => array(array(1,1,6),array(1,2,5),array(1,3,4),array(2,2,4),array(2,3,3)),
	'9' => array(array(1,2,6),array(1,3,5),array(1,4,4),array(2,2,5),array(2,3,4),array(3,3,3)),
	'10' => array(array(1,3,6),array(1,4,5),array(2,2,6),array(2,3,5),array(2,4,4),array(3,3,4)),
	'11' => array(array(1,4,6),array(1,5,5),array(2,3,6),array(2,4,5),array(3,3,5),array(3,4,4)),
	'12' => array(array(1,5,6),array(2,4,6),array(2,5,5),array(3,3,6),array(3,4,5)),
	'13' => array(array(1,6,6),array(2,5,6),array(3,4,6),array(3,5,5),array(4,4,5)),
	'14' => array(array(2,6,6),array(3,5,6),array(4,4,6),array(4,5,5)),
	'15' => array(array(3,6,6),array(4,5,6),array(5,5,5)),
	'16' => array(array(4,6,6),array(5,5,6)),
	'17' => array(array(5,6,6)),
	'18' => array(array(6,6,6)),
);

$arr_rs = $arrs[$sum];
$i = array_rand($arr_rs);//随机取数组
$arr_a = $arr_rs[$i];
shuffle($arr_a);//打乱顺序
//print_r($arr_a);
$res['status'] = 0; 
$res['isSuccess'] = 1; 
$res['prize'] = $prize_arr[$sum]['prize']; //中奖项
$res['points'] = $arr_a;
$res['historyPrize'] = 0.4;
$res['historyPoints'] = 7;
echo json_encode($res);



//计算概率
function getRand($proArr) {
	$result = '';

	//概率数组的总概率精度
	$proSum = array_sum($proArr);

	//概率数组循环
	foreach ($proArr as $key => $proCur) {
		$randNum = mt_rand(1, $proSum);
		if ($randNum <= $proCur) {
			$result = $key;
			break;
		} else {
			$proSum -= $proCur;
		}
	}
	unset ($proArr);

	return $result;
}
?>