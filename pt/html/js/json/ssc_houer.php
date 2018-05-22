
<?php


$result = array(
	'isSuccess' => 1,
	'data' => array()
);


//遗漏数临时变量
$temp = array();
//号码分布遗漏临时变量
$tempTimes = array();
//标记是否已经找到遗漏临界号码
$tempFlag = array();
//开奖球个数
$typeNum = 2;
//标准列数(球个数 + 分布) * 10
$cellNum = 41;
//遗漏值临时变量
for($i = 0; $i < $cellNum; $i++){
	$temp[] = 0;
	$tempFlag[] = false;
}
for($i = 0; $i < $cellNum; $i++){
	$tempTimes[] = 0;
}



$data = makeMultipleData(20);




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




$result['statistics'] = $statistics;
$result['data'] = $data;
echo json_encode($result);





//生成多条行数据
function makeMultipleData($num){
	global $typeNum;
	global $tempFlag;
	global $tempTimes;
	$data = array();
	
	for ($i = 0; $i < $num; $i++) {
		$balls = getBalls($typeNum);
		$data[] = makeData('20130603-', $i, $balls);
	}
	
	$m = 0;
	//寻找遗漏条临界并标记属性
	for($i = $num - 1; $i >= 0; $i--){
		$k = 0;
		for($j = 2; $j < 4; $j++){
			for($n = 0; $n < 10; $n++){
				$m = $typeNum * $k * 2 + $n;
				if(!($tempFlag[$m])){
					if($data[$i][$j][$n][0] == 0){
						$tempFlag[$m] = true;
						continue;
					}
					$data[$i][$j][$n][3] = 1;
				}
			}
			$k++;
		}
	}
	

	
	$num = count($data);
	
	
	
	//对子的遗漏
	$tempTimes = 0;
	for($i = 0; $i < $num; $i++){
		if($data[$i][4] == 0){
			$tempTimes = 0;
		}else{
			$tempTimes += 1;
		}
		$data[$i][4] = $tempTimes;
	}
	
	
	
	//计算号码分布遗漏次数
	$tempTimes = array();
	for($i = 0; $i < 10; $i++){
		$tempTimes[] = 0;
	}
	for($i = 0; $i < $num; $i++){
		for($n = 0; $n < 10; $n++){
			if($data[$i][5][$n][2] == 0){
				$tempTimes[$n] += 1;
			}else{
				$tempTimes[$n] = 0;
			}
			$data[$i][5][$n][0] = $tempTimes[$n];
		}
	}
	
	
	//跨度走势的遗漏
	$tempTimes = array();
	for($i = 0; $i < 10; $i++){
		$tempTimes[] = 0;
	}
	for($i = 0; $i < $num; $i++){
		for($n = 0; $n < 10; $n++){
			if($data[$i][6][$n][0] == 0){
				$tempTimes[$n] = 0;
			}else{
				$tempTimes[$n] += 1;
			}
			$data[$i][6][$n][0] = $tempTimes[$n];
		}
	}

	
	
	
	return $data;
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



function makeData($number, $index, $balls){
	global $typeNum;
	$len = count($balls);
	$number = $index < 10 ? $number.'0'.$index : $number.$index;
	$result = array(
		//期号
		$number,
		//开奖号
		join('', $balls)
	);
	//添加号码详情数据
	//5次循环分别代表 万千百十个
	for($i = 0; $i < $typeNum; $i++){
		$result[] = makeRowData($i, $balls);
	}
	
	//对子
	//(遗漏值)
	$times = $balls[0] == $balls[1] ? 0 : 1;
	$result[] = $times;
	
	
	
	//号码分布
	//array(0, 0, 0)
	//array(遗漏次数, 当前数字, 重复次数)
	$times = array();
	for($i = 0; $i < 10; $i++){
		$num = 0;
		for($j = 0; $j < $len; $j++){
			if($balls[$j] == $i){
				$num += 1;
			}
		}
		$times[] = array(in_array($i, $balls) ? 0 : 1, $i, $num);
	}
	$result[] = $times;
	
	
	//跨度走势
	//array(遗漏值, 当前球内容, 重复次数)
	$times = array();
	$kd = abs($balls[1] - $balls[0]);
	for($i = 0; $i < 10; $i++){
		$times[] = array(($i == $kd) ? 0 : 1, $i);
	}
	$result[] = $times;
	
	
	//和值
	$times = 0;
	for($i = 0; $i < $len; $i++){
		$times += $balls[$i];
	}
	$result[] = $times;
	
	
	return $result;
}

//生成一组号码以及号码属性
function makeRowData($inum, $balls){
	global $temp;
	$result = array();
	for($i = 0; $i < 10; $i++){
		//array(遗漏次数, 当前开奖号数字, 号温, 遗漏条)
		//遗漏次数 
		//当前开奖号数字(当前位的号码数字)
		//号温 (冷号为1,温号为2,热号为3)
		//遗漏条 (开奖号码数字是否是最后一次出现该号码数字,是为1,否为0)
		//$arr = array(0, 3, 1, 0);
		$arr = array();
		
		//当前号码为开奖号码数字
		if($balls[$inum] == $i){
			$temp[$inum * 10 + $i] = 0;
			$arr[] = 0;
		}else{
			$temp[$inum * 10 + $i] += 1;
			$arr[] = $temp[$inum * 10 + $i];
		}
		$arr[] = $i;
		$arr[] = rand(1, 3);
		$arr[] = 0;
		
		$result[] = $arr;
	}
	return $result;
}





//========================================================
//出现总次数
//
function makeStatisticsTimes($data){
	global $cellNum;
	$len = count($data);
	$times = array();
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	$n = 0;
	for($i = 0; $i < $len; $i++){
		for($j = 2; $j < 4; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 2) * 10 + $k;
				if($data[$i][$j][$k][0] == 0){
					$times[$n] += 1;
				}
			}
			
		}
	}
	
	
	
	//对子
	$num = 0;
	for($i = 0; $i < $len; $i++){
		if($data[$i][4] == 0){
			$num += 1;
		}
	}
	$times[20] = $num;
	
	
	
	//号码分布和跨度
	for($j = 21; $j < 41; $j++){
		$times[$j] = 0;
	}
	for($i = 0; $i < $len; $i++){
		for($j = 5; $j < 7; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 5) * 10 + 21 + $k;
				//print_r($times[$n]);
				//print_r('-');
				if($data[$i][$j][$k][0] == 0){
					//号码分布获取出现次数
					if($j == 5){
						$times[$n] += $data[$i][$j][$k][2];
					}else{
						$times[$n] += 1;
					}
					
				}

			}
		}
	}
	
	
	
	return $times;
}



//平均遗漏值
function makeStatisticsOmission($data){
	global $cellNum;
	$len = count($data);
	
	$times = array();
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	$n = 0;
	for($i = 0; $i < $len; $i++){
		for($j = 2; $j < 4; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 2) * 10 + $k;
				$times[$n] += $data[$i][$j][$k][0];
			}
			
		}
	}
	
	//对子
	$num = 0;
	for($i = 0; $i < $len; $i++){
		$num += $data[$i][4];
	}
	$times[20] = $num;



	//号码分布和跨度
	for($j = 21; $j < 41; $j++){
		$times[$j] = 0;
	}
	for($i = 0; $i < $len; $i++){
		for($j = 5; $j < 7; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 5) * 10 + 21 + $k;
				$times[$n] += $data[$i][$j][$k][0];
			}
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
	global $cellNum;
	$len = count($data);
	
	$times = array();
	for($i = 0; $i < $cellNum; $i++){
		$times[] = 0;
	}
	$n = 0;
	for($i = 0; $i < $len; $i++){
		for($j = 2; $j < 4; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 2) * 10 + $k;
				$times[$n] = $data[$i][$j][$k][0] > $times[$n] ? $data[$i][$j][$k][0] : $times[$n];
			}
			
		}
	}
	
	//对子
	$num = 0;
	for($i = 0; $i < $len; $i++){
		$num = $data[$i][4] > $num ? $data[$i][4] : $num;
	}
	$times[20] = $num;



	//号码分布和跨度
	for($j = 21; $j < 41; $j++){
		$times[$j] = 0;
	}
	for($i = 0; $i < $len; $i++){
		for($j = 5; $j < 7; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 5) * 10 + 21 + $k;
				$times[$n] = $data[$i][$j][$k][0] > $times[$n] ? $data[$i][$j][$k][0] : $times[$n];
			}
		}
	}
	
	
	return $times;
}



//最大连出值
function makeStatisticsMaxContinuous($data){
	global $cellNum;
	$result = array();
	$len = count($data);
	$temp = array();
	$len2 = 0;
	for($i = 0; $i < $cellNum; $i++){
		$result[] = 0;
		$temp[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 2; $j < 4; $j++){
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
	
	
	//对子
	for($j = 20; $j < 21; $j++){
		$result[20] = 0;
		$temp[20] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 20;
		if($data[$i][4] == 0){
			$temp[$n] += 1;
			$result[$n] =  $temp[$n] > $result[$n] ? $temp[$n] : $result[$n];
		}else{
			$temp[$n] = 0;
		}
	}
	
	
	//号码分布和跨度
	for($i = 0; $i < $len; $i++){
		$n = 21;
		for($j = 5; $j < 7; $j++){
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







































?>
