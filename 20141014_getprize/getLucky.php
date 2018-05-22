<?php
/*
 * 充50得50， 充1得999， 充100得100， 充300得300， 5元礼金， 10元礼金， 20元礼金， 50元礼金
 *   10%        1%        10%         10%        39%      10%       10%      10%
 */

$prizeDesc = array(
	'50元（充50元后送）',
	'999元（充1元后送）',
	'100元（充100元后送）',
	'300元（充300元后送）',
	'5元礼金',
	'10元礼金',
	'20元礼金',
	'50元礼金'
);

// 每项中奖的权重
function getLuckyIdx( $distribution = array(100,10,100,100,390,100,100,100) ){
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
sleep(2);

$luckyidx = getLuckyIdx();

$output = array(
	'status' => 'ok',
	'luckyidx'  => $luckyidx,
	'date' => date('Y-m-d h:i:s'),
	'desc' => $prizeDesc[$luckyidx]
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