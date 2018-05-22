<?

$result = array(
	'isSuccess' => 1,
	'type' => 'success',
	'msg' => '添加成功',
	'data' => array(
		'stopTime' => date("h:i:s", time() + 10),
		'currentTime' => date("Y-m-d h:i:s", time()),
		'periods' => time() 
		)
);

echo json_encode($result);

?>