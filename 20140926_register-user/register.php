<?php

$flag = $_POST['flag'];
$username = $_POST['username'];
$result = array();

switch ($flag) {
	case 'checkUsername':
		if($username == 'cliff123'){
			$result['isSuccess'] = 0;
			$result['msg'] = '该用户名已被注册，请重新输入！';
		} else {
			$result['isSuccess'] = 1;
			$result['msg'] = '恭喜注册成功！';
		}
		$result['username'] = $username;
		break;
	case 'createAccount':
		$result['isSuccess'] = 1;
		$result['typeId'] = 1;
		$result['msg'] = '恭喜您注册成功';
		$result['data'] = array(
				'username' => $username,
				'registerTime' => time()
			);	
		break;
	case 'getRand':
		echo "16e093";
		die();
		break;
	default:
		# code...
		break;
}

echo json_encode($result);

?>