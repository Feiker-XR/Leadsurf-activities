<?php
/*
 *   10元， 20元， 100元， 200元， 500元， 10,000元
 *   90%     6%     2%      1%      0.6%    0.4%
 */

$prizeDesc = array('10元', 	'20元', '100元', '200元', '500元', '10,000元');

// 每项中奖的权重
function getLuckyIdx( $distribution = array(900,60,20,10,6,4) ){
	$total = array_sum($distribution);
	$rand = rand(0, $total);
	$cur = 0;
	foreach ($distribution as $key => $value) {
		$cur += $value;
		if( $cur >= $rand ){
			return $key;
		}
	}
}


// Blah......

// 为了效果，暂停3秒
// 记得去掉
sleep(3);

$luckyidx = getLuckyIdx();

$output = array(
	'status' => 'ok',
	'luckyidx'  => $luckyidx,
	'date' => rand(20,50) . '分钟前',
	'desc' => $prizeDesc[$luckyidx],
	'times' => rand(0,5),
	'username' => 'DFASD**'.rand(909,1000)
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