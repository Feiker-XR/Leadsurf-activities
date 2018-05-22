<?php

	$output = array();


    $output =  array(
        'isSuccess' => 1,
        'message' => '成功',
        'data' => array(
            'money' => rand(3,100)
        )
    );


	echo json_encode($output);

?>