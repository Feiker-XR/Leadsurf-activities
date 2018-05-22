<?php

$type = $_GET['type'];
$model = $_GET['model'];

$output = array(
	'status' => 'ok',
	'data'  => array(
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => 0,
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => '押中'
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '管理员扣除',
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => ''
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '',
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => '押中'
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '',
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => '押错'
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '',
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => '押中'
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '',
			'getTimes' => '',
			'timesUsed' => 1,
			'result' => '押错'
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '管理员添加',
			'getTimes' => 1,
			'timesUsed' => '',
			'result' => ''
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '1,000',
			'getTimes' => 2,
			'timesUsed' => '',
			'result' => ''
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '1,000',
			'getTimes' => 2,
			'timesUsed' => '',
			'result' => ''
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '2,000',
			'getTimes' => 4,
			'timesUsed' => '',
			'result' => ''
		),
		array(
			'date' => date('y-m-d h:i:s'),
			'depositAmount' => '1,000',
			'getTimes' => 2,
			'timesUsed' => '',
			'result' => ''
		)
	)
);

// 错误
/*
$output = array(
	'status' => 'failure',
	'msg'  => '开奖失败'
);
*/

if($type == 'rewards'){
	$output = array(
		'status' => 'ok',
		'data' => array(
			'status' => 1, //1为开启 0为关闭
			'length' => 3,
			'model' => $model,
			'rewards' => array(
				array(
					'time' => date('y-m-d h:i:s'),
					'number' => '3',
					'index' => '1'
				),
				array(
					'time' => date('y-m-d h:i:s'),
					'number' => '4',
					'index' => '2'
				),
				array(
					'time' => date('y-m-d h:i:s'),
					'number' => '5',
					'index' => '3'
				)
			)
		)
	);
}


	
$json = json_encode( $output );
echo $json;

?>