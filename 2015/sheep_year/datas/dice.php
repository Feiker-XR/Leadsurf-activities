<?php

// 为了效果，暂停3秒
// 记得去掉
sleep(0);

$output = array(
	'status' => 'ok',
	'diceAmount'  => /*rand(1,5)*/0, // 剩余押宝次数
	'diceContinus' => rand(4,10), // 当前连中次数
	'diceStatus' => 'win', // 开奖状态，是否中奖 中奖win 未中奖lose
	'date' => date('m-d h:i:s'), // 开奖日期
	'result' => array(2,3,5), // 开奖结果
	'type' => 'big', // 开奖大小
	'winMoney' => 10 // 中奖金额
);

// 错误
/*
$output = array(
	'status' => 'failure',
	'msg'  => '开奖失败'
);
*/
	
$json = json_encode( $output );
echo $json;

?>