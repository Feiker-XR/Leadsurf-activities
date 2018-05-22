

<?php

$result = array();
$data = array();

$data[] = array(
				'serial' => '2012061511',
				'username' => 'wahaha',
				'requesttime' => '2012.01.05 10:20:30',
				'bank' => '招商银行',
				'requestMoney' => '1,000.00',
				'message' => '转账附言',
				'receivetime' => '2013-02-02 10:20:30',
				'accountName' => '刘德华',
				'cardnumber' => '8833 3334 8765 3424',
				'receivemoney' => '1,000.00',
				'loadingmoney' => '20.00',
				'orderstatus' => '等待收款'
			);


$i = 0;
$len = rand(5,20);
$arr = array();
while($i < $len){
	$arr[] = $i++;
}
foreach($arr as $item){
	$data[] = $data[0];
}


$result['isSuccess'] = true;
$result['data'] = $data;


echo json_encode($result);


?>