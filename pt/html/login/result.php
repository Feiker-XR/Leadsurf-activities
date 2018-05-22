<?php

$username = $_POST['username'];
$password = $_POST['password'];
$type = $_POST['type'];

$result = array(
		//消息
		'msg' => '登陆成功',
		//返回状态
		'isSuccess' => 1,
		//状态码
		'typeId' => 0
	);
	
//正常登陆
if($type == 'normal'){
	if($password != '123456') {
		$result['msg'] = '用户名或密码不正确';
		$result['isSuccess'] = 0;
	};

	if(mb_strlen($password) < 4 || mb_strlen($password) > 16) {
		$result['msg'] = '密码长度不符合规范';
		$result['isSuccess'] = 0;
	};
};

//安全登陆第一步
if($type == 'safe-step-1'){
	/*if($username != 'cliff') {
		$result['msg'] = '用户名不存在';
		$result['isSuccess'] = 0;
	};*/

	$result['safeCode'] = '有些事不想说';
};

//安全登陆第一步
if($type == 'safe-step-2'){
	if($password != '123456') {
		$result['msg'] = '用户名或密码不正确';
		$result['isSuccess'] = 0;
	};

	if(mb_strlen($password) < 4 || mb_strlen($password) > 16) {
		$result['msg'] = '密码长度不符合规范';
		$result['isSuccess'] = 0;
	};
};


echo json_encode($result);
?>