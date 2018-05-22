<?php
$data = array();

$data[] = array('id' => 1, 'pid' => 0, 'text' => '权限（菜单）', 'value' => '1', 'isChecked' => 1);
	$data[] = array('id' => 2, 'pid' => 1, 'text' => '权限中心（label）', 'value' => '2', 'type' => 2, 'isChecked' => 1);
	$data[] = array('id' => 3, 'pid' => 1, 'text' => '合同审核', 'value' => '3', 'isChecked' => 1);
		$data[] = array('id' => 4, 'pid' => 3, 'text' => '合同审核A', 'value' => '4', 'isChecked' => 1);


$data[] = array('id' => 5, 'pid' => 0, 'text' => '资金（菜单）', 'value' => '5', 'isChecked' => 1);
	$data[] = array('id' => 6, 'pid' => 5, 'text' => '充值相关（label）', 'value' => '6', 'type' => 2, 'isChecked' => 1);
		$data[] = array('id' => 7, 'pid' => 6, 'text' => '异常充值处理（菜单）', 'value' => '7', 'isChecked' => 1);
			$data[] = array('id' => 8, 'pid' => 7, 'text' => '修改', 'value' => '8', 'isChecked' => 1);
			$data[] = array('id' => 9, 'pid' => 7, 'text' => '删除', 'value' => '9', 'isChecked' => 0);
		$data[] = array('id' => 18, 'pid' => 6, 'text' => '资金处理', 'value' => '18', 'isChecked' => 0);
$data[] = array('id' => 10, 'pid' => 0, 'text' => '员工管理', 'value' => '10', 'isChecked' => 0);
$data[] = array('id' => 11, 'pid' => 0, 'text' => '车辆管理', 'value' => '11', 'isChecked' => 0);
	$data[] = array('id' => 12, 'pid' => 11, 'text' => '面包车管理', 'value' => '12', 'isChecked' => 0);
		$data[] = array('id' => 17, 'pid' => 12, 'text' => '三轮面包车', 'value' => '17', 'isChecked' => 0);
	$data[] = array('id' => 13, 'pid' => 11, 'text' => '停车位管理', 'value' => '13', 'isChecked' => 0);
	$data[] = array('id' => 14, 'pid' => 11, 'text' => '公交排期', 'value' => '14', 'isChecked' => 0);
		$data[] = array('id' => 15, 'pid' => 14, 'text' => '254路', 'value' => '15', 'isChecked' => 0);
		$data[] = array('id' => 16, 'pid' => 14, 'text' => '57路', 'value' => '16', 'isChecked' => 0);



$result = array(
	'isSuccess' => 1,
	'type' => 'success',
	'msg' => '读取成功',
	'data' => $data
);

echo json_encode($result);

?>