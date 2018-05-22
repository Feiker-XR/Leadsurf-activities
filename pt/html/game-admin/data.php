<?

$type = $_GET['type'];

$result = array(
	'isSuccess' => 1,
	'type' => 'success',
	'msg' => '添加成功',
	'data' => array()
);

if($type == 'unlock'){
	$result = array(
		'isSuccess' => 1,
		'type' => 'success',
		'msg' => '修改成功'
	);		
}

echo json_encode($result);

?>