<?php
// FOR TEST
function generateRandomString($length = 7) {
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$randomString = '';
	for ($i = 0; $i < $length; $i++) {
		if( $i == 3 ){
			$randomString .= '***';
		}
		$randomString .= $characters[rand(0, strlen($characters) - 1)];
	}
	return $randomString;
}

$list = array();
for ($i=0; $i < 15; $i++) { 
	$list[$i] = array(
		'username' => generateRandomString(),
		'desc'     => '抽中了'.rand(50, 500).'元'
	);
}

$output = array(
	'status' => 'ok',
	'list' => $list
);

// 错误
/*
$output = array(
	'status' => 'failure',
	'msg'  => '抽奖失败'
);
*/
	
$json = json_encode( $output );
echo $json;

?>