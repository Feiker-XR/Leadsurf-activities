
<?php


$result = array(
	'isSuccess' => 1,
	'data' => array()
);

//遗漏值中间临时变量
$temp = array();
for($i = 0; $i < 10; $i++){
	$temp[] = 0;
}
//跨度值遗漏数
$tempSpan = array();
for($i = 0; $i < 9; $i++){
	$temp[] = 0;
}
//大小比遗漏数
$tempBigSmall = array();
for($i = 0; $i < 6; $i++){
	$tempBigSmall[] = 0;
}
//单双比遗漏数
$tempEvenOdd = array();
for($i = 0; $i < 6; $i++){
	$tempEvenOdd[] = 0;
}
//质合比
$tempPrimes = array();
for($i = 0; $i < 6; $i++){
	$tempPrimes[] = 0;
}



//array(期号string, 开奖号码string, 号码分布array array, 号码跨度array array, 大小比array, 单双比array, 质合比array, 和值number);
$data = makeMultipleData(10);



//统计数据
$statistics = array();
//出现总次数
$statistics[] = makeStatisticsTimes($data);
//平均遗漏值
$statistics[] = makeStatisticsOmission($data);
//最大遗漏值
$statistics[] = makeStatisticsMaxOmission($data);
//最大连出值
$statistics[] = makeStatisticsMaxContinuous($data);


//生成遗漏条标记
$data = makeOmissionFlag($data);



$result['statistics'] = $statistics;
$result['data'] = $data;
echo json_encode($result);



//生成一行数据
//$num 生成行数
function makeMultipleData($num){

	$result = array();
	$balls = array();
	for($i = 0; $i < $num; $i++){
		$row = array();
		//期号
		$row[] = '20130603-'.($i < 10 ? '0'.$i : $i);
		//开奖号
		$balls = getBalls(5);
		$row[] = join('', $balls);
		//号码分布
		$row[] = makeDistributed($balls);
		//号码跨度
		$row[] = makeSpan($balls);
		//大小比
		$row[] = makeBigSmall($balls);
		//单双比
		$row[] = makeOddEven($balls);
		//质合比
		$row[] = makePrimes($balls);
		//和值
		$row[] = makeSum($balls);
		
		$result[] = $row;
	}
	return $result;
}


//模拟一组开奖号码
//$num 开奖球个数
function getBalls($num){
	$balls = array();
	for($i = 0; $i < $num; $i++){
		$balls[] = rand(0, 9);
	}
	sort($balls);
	return $balls;
}


//生成一组号码分布
//实际上是生成遗漏值
//$balls 开奖号码
function makeDistributed($balls){
	global $temp;
	$result = array();
	$len = count($balls);
	$tp = array();
	
	for($i = 0; $i < 10; $i++){
		//array(遗漏次数, 当前数字, 重复次数, 遗漏条标记)
		$tp[$i] = array(0, 0, 0);
		//如果当前位开奖号码，则遗漏为0
		if(in_array($i, $balls)){
			$tp[$i][0] = 0;
			//重复次数
			for($j = 0; $j < $len; $j++){
				if($balls[$j] == $i){
					$tp[$i][2] += 1;
				}
			}
		}else{
			$tp[$i][0] = 1;
		}
		//当前数字
		$tp[$i][1] = $i;
	}
	//递增遗漏值
	for($i = 0; $i < 10; $i++){
		if($tp[$i][0] != 0){
			$temp[$i] += 1;
		}else{
			$temp[$i] = 0;
		}
		$tp[$i][0] = $temp[$i];
		$result[$i] = $tp[$i];
	}
	return $result;
}


//生成跨度
//array(遗漏数, 跨度值, 遗漏条标记)
function makeSpan($balls){
	global $tempSpan;
	$result = array();
	$len = 9;
	//跨度值
	$num = $balls[count($balls) - 1] - $balls[0];
	for($i = 0; $i < $len; $i++){
		$result[$i] = array(0, 0);
		if($i == ($num - 1)){
			$result[$i][1] = $num;
			$result[$i][0] = 0;
			$tempSpan[$i] = 0;
		}else{
			$tempSpan[$i] += 1;
			$result[$i][0] = $tempSpan[$i];
		}
	}
	for($i = 0; $i < $len; $i++){
		$result[$i][0] = $tempSpan[$i];
	}
	return $result;
}


//生成大小比
//array(遗漏值, 小, 大, 遗漏条标记)
function makeBigSmall($balls){
	global $tempBigSmall;
	$len = count($balls);
	$result = array();
	$big = 0;
	$small = 0;
	for($i = 0; $i < $len; $i++){
		if($balls[$i] < 5){
			$small += 1;
		}else{
			$big += 1;
		}
	}
	for($i = 0; $i < 6; $i++){
		$result[] = array($small == $i ? 0 : 1, $small, 5 - $small);
	}
	for($i = 0; $i < 6; $i++){
		if($result[$i][0] == 0){
			$tempBigSmall[$i] = 0;
		}else{
			$tempBigSmall[$i] += 1;
			$result[$i][0] = $tempBigSmall[$i];
		}
	}
	return $result;
}


//生成单双比
//array(遗漏数, 单, 双, 遗漏条标记)
function makeOddEven($balls){
	global $tempEvenOdd;
	$len = count($balls);
	$result = array();
	$odd = 0;
	$even = 0;
	for($i = 0; $i < $len; $i++){
		if($balls[$i]%2 == 0){
			$even += 1;
		}else{
			$odd += 1;
		}
	}
	for($i = 0; $i < 6; $i++){
		$result[] = array($even == $i ? 0 : 1, $odd, 5 - $odd);
	}
	for($i = 0; $i < 6; $i++){
		if($result[$i][0] == 0){
			$tempEvenOdd[$i] = 0;
		}else{
			$tempEvenOdd[$i] += 1;
			$result[$i][0] = $tempEvenOdd[$i];
		}
	}
	return $result;
}



//生成质合比
//array(遗漏数, 质数, 合数, 遗漏条标记)
function makePrimes($balls){
	global $tempPrimes;
	$len = count($balls);
	$result = array();
	//质数列表
	$pArray = array(1, 2, 3, 5, 7);
	$primes = 0;
	$composite = 0;
	for($i = 0; $i < $len; $i++){
		if(in_array($balls[$i], $pArray)){
			$primes += 1;
		}else{
			$composite += 1;
		}
	}
	for($i = 0; $i < 6; $i++){
		$result[] = array($primes == $i ? 0 : 1, $composite, 5 - $composite);
	}
	for($i = 0; $i < 6; $i++){
		if($result[$i][0] == 0){
			$tempPrimes[$i] = 0;
		}else{
			$tempPrimes[$i] += 1;
			$result[$i][0] = $tempPrimes[$i];
		}
	}
	return $result;
}


//生成和值
function makeSum($balls){
	$len = count($balls);
	$result = 0;
	for($i = 0; $i < $len; $i++){
		$result += $balls[$i];
	}
	return $result;
}



//出现总次数
//
function makeStatisticsTimes($data){
	$len = count($data);
	$times = array();
	$cellNum = 37;
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		//号码分布统计
		for($j = 0; $j < 10; $j++){
			$times[$j] += $data[$i][2][$j][2];
		}
		//号码跨度
		for($k = 0; $k < 9; $k++){
			$times[$k + $j] += ($data[$i][3][$k][0] == 0 ? 1 : 0);
		}
		//大小比
		for($l = 0; $l < 6; $l++){
			$times[$l + $j + $k] += ($data[$i][4][$l][0] == 0 ? 1 : 0);
		}
		//单双比
		for($m = 0; $m < 6; $m++){
			$times[$m + $j + $k + $l] += ($data[$i][5][$m][0] == 0 ? 1 : 0);
		}
		//质合比
		for($n = 0; $n < 6; $n++){
			$times[$n + $j + $k + $l + $m] += ($data[$i][6][$n][0] == 0 ? 1 : 0);
		}
	}
	return $times;
}



//平均遗漏值
function makeStatisticsOmission($data){
	$len = count($data);
	$times = array();
	$cellNum = 37;
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		//号码分布统计
		for($j = 0; $j < 10; $j++){
			$times[$j] += $data[$i][2][$j][0];
		}
		//号码跨度
		for($k = 0; $k < 9; $k++){
			$times[$k + $j] += ($data[$i][3][$k][0] == 0 ? 1 : 0);
		}
		//大小比
		for($l = 0; $l < 6; $l++){
			$times[$l + $j + $k] += ($data[$i][4][$l][0] == 0 ? 1 : 0);
		}
		//单双比
		for($m = 0; $m < 6; $m++){
			$times[$m + $j + $k + $l] += ($data[$i][5][$m][0] == 0 ? 1 : 0);
		}
		//质合比
		for($n = 0; $n < 6; $n++){
			$times[$n + $j + $k + $l + $m] += ($data[$i][6][$n][0] == 0 ? 1 : 0);
		}
	}
	$len2 = count($times);
	for($i = 0; $i < $len2; $i++){
		$times[$i] = round($times[$i]/$len);
	}
	return $times;
}


//最大遗漏值
function makeStatisticsMaxOmission($data){
	$len = count($data);
	$times = array();
	$cellNum = 37;
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		//号码分布统计
		for($j = 0; $j < 10; $j++){
			$times[$j] = $data[$i][2][$j][0] > $times[$j] ? $data[$i][2][$j][0] : $times[$j];
		}
		//号码跨度
		for($k = 0; $k < 9; $k++){
			$times[$k + $j] = $data[$i][3][$k][0] > $times[$k + $j] ? $data[$i][3][$k][0] : $times[$k + $j];
		}
		//大小比
		for($l = 0; $l < 6; $l++){
			$times[$l + $j + $k] = $data[$i][4][$l][0] > $times[$l + $j + $k] ? $data[$i][4][$l][0] : $times[$l + $j + $k];
		}
		//单双比
		for($m = 0; $m < 6; $m++){
			$times[$m + $j + $k + $l] = $data[$i][5][$m][0] > $times[$m + $j + $k + $l] ? $data[$i][5][$m][0] : $times[$m + $j + $k + $l];
		}
		//质合比
		for($n = 0; $n < 6; $n++){
			$times[$n + $j + $k + $l + $m] = $data[$i][6][$n][0] > $times[$n + $j + $k + $l + $m] ? $data[$i][6][$n][0] : $times[$n + $j + $k + $l + $m];
		}
	}
	return $times;
}



//最大连出值
function makeStatisticsMaxContinuous($data){
	$result = array();
	$len = count($data);
	$temp = array();
	$len2 = 0;
	for($i = 0; $i < 37; $i++){
		$result[] = 0;
		$temp[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 2; $j < 7; $j++){
			$len2 = count($data[$i][$j]);
			for($k = 0; $k < $len2; $k++){
				if($data[$i][$j][$k][0] == 0){
					$temp[$n] += 1;
					$result[$n] =  $temp[$n] > $result[$n] ? $temp[$n] : $result[$n];
				}else{
					$temp[$n] = 0;
				}
				$n += 1;
			}
		}
	}
	return $result;
}



//生成遗漏条标记
function makeOmissionFlag($data){
	$len = count($data);
	$temp = array();
	$len2 = 0;
	for($i = 0; $i < 37; $i++){
		$temp[] = 0;
	}
	for($i = $len - 1; $i >= 0; $i--){
		$n = 0;
		for($j = 2; $j < 7; $j++){
			$len2 = count($data[$i][$j]);
			for($k = 0; $k < $len2; $k++){
				if($temp[$n] == 1){
					$data[$i][$j][$k][] = 0;
				}else{
					if($data[$i][$j][$k][0] == 0){
						$temp[$n] = 1;
						$data[$i][$j][$k][] = 0;
					}else{
						$data[$i][$j][$k][] = 1;
					}
				}
				$n++;
			}
		}
	}
	return $data;
}
























?>
