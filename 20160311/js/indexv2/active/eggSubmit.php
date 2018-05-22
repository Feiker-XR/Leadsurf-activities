<?php
    header('Content-Type:application/json;charset=utf-8');
    $json = file_get_contents("php://input");
    $obj = json_decode($json,true);
	$model = $obj['eggType'];
	$result = array();



    switch ($model) {
        case "0":
            $result =  array(
                    'isSuccess' => 1,
                    'message' => '成功',
                    'data' => array(
                        'money' => '10'
                    )
                );
            break;
        case "1":
            $result =  array(
                    'isSuccess' => 1,
                    'message' => '成功',
                    'data' => array(
                        'money' => '100'
                    )
                );
            break;
        case "2":
            $result =  array(
                    'isSuccess' => 1,
                    'message' => '成功',
                    'data' => array(
                        'money' => '100'
                    )
                );
            break;
        default:
            $result =  array(
                    'isSuccess' => 0,
                    'message' => '失败，未选择类型'
                );
            break;
    };
	echo json_encode($result)

?>