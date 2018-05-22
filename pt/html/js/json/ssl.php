
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
$typeNum = 3;
//标准列数(球个数 + 分布) * 10
$cellNum = 40;
//初始化模拟第一期的遗漏值
for($i = 0; $i < ($typeNum + 1) * 10; $i++){
	$temp[] = 0;
	$tempFlag[] = false;
}
//初始化模拟第一期的号码分布遗漏值
for($i = 0; $i < 10; $i++){
	$tempTimes[] = 0;
}



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
		for($j = 2; $j < ($typeNum + 2); $j++){
			for($n = 0; $n < 10; $n++){
				$m = $typeNum * $k * 2 + $n;
				//print($m);
				//print('<br />');
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
	
	
	//计算号码分布
	//计算重复次数
	for($i = 0; $i < $num; $i++){
		$tempTimes = array();
		for($k = 0; $k < 10; $k++){
			$tempTimes[] = 0;
		}
		for($j = 2; $j < ($typeNum + 2); $j++){
			for($n = 0; $n < 10; $n++){
				if($data[$i][$j][$n][0] == 0){
					$tempTimes[$n] += 1;
				}
				$data[$i][$typeNum + 2][$n][2] = $tempTimes[$n];
			}
		}
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
	
	
	//计算 豹子 组三	组六 的遗漏值
	$tempTimes = array();
	for($i = 0; $i < 3; $i++){
		$tempTimes[] = 0;
	}
	for($i = 0; $i < $num; $i++){
		for($j = 10; $j < 13; $j++){
			if($data[$i][$j][0] == 0){
				$tempTimes[$j - 10] = 0;
			}else{
				$tempTimes[$j - 10] += 1;
			}
			$data[$i][$j][0] = $tempTimes[$j - 10];
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
	//号码分布
	//array(0, 0, 0)
	//array(遗漏次数, 当前数字, 重复次数)
	$times = array();
	for($i = 0; $i < 10; $i++){
		$times[] = array(0, $i, 0);
	}
	$result[] = $times;
	
	
	//大小形态
	//array(1,0,1); 1代表大 0代表小
	$times = array();
	for($i = 0; $i < $len; $i++){
		$times[] = $balls[$i] < 5 ? 0 : 1;
	}
	$result[] = $times;
	
	//单双形态
	//array(1,0,1); 1单 0双
	$times = array();
	for($i = 0; $i < $len; $i++){
		$times[] = ($balls[$i] % 2 == 0) ? 0 : 1;
	}
	$result[] = $times;
	
	//质合形态
	//质数列表
	//array(1,0,1) 1质数 0 合数
	$pArray = array(1, 2, 3, 5, 7);
	$times = array();
	for($i = 0; $i < $len; $i++){
		$times[] = in_array($balls[$i] ,$pArray) ? 1 : 0;
	}
	$result[] = $times;
	
	//012形态
	$times = array();
	for($i = 0; $i < $len; $i++){
		$times[] = $balls[$i]%3;
	}
	$result[] = $times;
	
	//是否豹子
	//array(遗漏值)
	$times = array();
	$times[] = ($balls[0] == $balls[1] && $balls[1] == $balls[2]) ? 0 : 1;
	$result[] = $times;
	
	
	//是否组三
	//array(遗漏值)
	$times = array();
	$times[] = ($balls[0] == $balls[1] || $balls[1] == $balls[2] || $balls[0] == $balls[2]) ? 0 : 1;
	$result[] = $times;
	
	//是否组六
	//array(遗漏值)
	$times = array();
	$times[] = (($balls[0] != $balls[1]) && ($balls[1] != $balls[2]) && ($balls[0] != $balls[2])) ? 0 : 1;
	$result[] = $times;
	
	//跨度
	$times = 0;
	$times = $balls[$len - 1] - $balls[0];
	$result[] = $times;
	
	//和值
	$times = 0;
	for($i = 0; $i < $len; $i++){
		$times += $balls[$i];
	}
	$result[] = $times;
	
	//和值尾数
	$times = ''.$times;
	$times = str_split($times);
	$times = intval($times[count($times) - 1]);
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
		for($j = 2; $j < 6; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 2) * 10 + $k;
				if($data[$i][$j][$k][0] == 0){
					//号码分布区域计算出现次数不一样
					if($n > 40){
						$times[$n] += $data[$i][$j][$k][2];
					}else{
						$times[$n] += 1;	
					}
					
				}
			}
			
		}
	}
	
	//豹子 组三	组六
	for($j = 10; $j < 13; $j++){
		$times[$cellNum + $j - 10] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = $cellNum;
		for($j = 10; $j < 13; $j++){
			$n = $cellNum + $j - 10;
			if($data[$i][$j][0] == 0){
				$times[$n] += 1;
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
	for($i = 0; $i < $len; $i++){
		for($j = 2; $j < 6; $j++){
			for($k = 0; $k < 10; $k++){
				$times[($j - 2) * 10 + $k] += $data[$i][$j][$k][0];
			}
			
		}
	}
	
	//豹子 组三	组六
	for($j = 10; $j < 13; $j++){
		$times[$cellNum + $j - 10] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = $cellNum;
		for($j = 10; $j < 13; $j++){
			$n = $cellNum + $j - 10;
			$times[$n] += $data[$i][$j][0];
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
		for($j = 2; $j < 6; $j++){
			for($k = 0; $k < 10; $k++){
				$n = ($j - 2) * 10 + $k;
				$times[$n] = $data[$i][$j][$k][0] > $times[$n] ? $data[$i][$j][$k][0] : $times[$n];
			}
			
		}
	}
	
	
	//豹子 组三	组六
	for($j = 10; $j < 13; $j++){
		$times[$cellNum + $j - 10] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = $cellNum;
		for($j = 10; $j < 13; $j++){
			$n = $cellNum + $j - 10;
			$times[$n] = $data[$i][$j][0] > $times[$n] ? $data[$i][$j][0] : $times[$n];
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
		for($j = 2; $j < 6; $j++){
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
	
	
	//豹子 组三	组六
	for($j = 10; $j < 13; $j++){
		$result[$cellNum + $j - 10] = 0;
		$temp[$cellNum + $j - 10] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = $cellNum;
		for($j = 10; $j < 13; $j++){
			$n = $cellNum + $j - 10;
			if($data[$i][$j][0] == 0){
				$temp[$n] += 1;
				$result[$n] =  $temp[$n] > $result[$n] ? $temp[$n] : $result[$n];
			}else{
				$temp[$n] = 0;
			}
		}
	}
	
	
	return $result;
}







































?>
