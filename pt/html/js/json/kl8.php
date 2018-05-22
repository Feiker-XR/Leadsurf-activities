
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
$typeNum = 80;
//初始化模拟第一期的遗漏值
for($i = 0; $i < $typeNum * 10; $i++){
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
	$len = 0;
	$n = 0;
	
	for ($i = 0; $i < $num; $i++) {
		$balls = getBalls(20);
		$data[] = makeData('20130603-', $i, $balls);
	}
	$len = count($data);
	
	
	
	
	//遗漏
	$times = array();
	for($i = 0; $i < 80; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			
			if($data[$i][2][$j][0] == 0){
				$times[$n] = 0;
			}else{
				$times[$n] += 1;
				$data[$i][2][$j][0] = $times[$n];
			}
			$n++;
		}
	}
	
	
	//遗漏条
	$times = array();
	for($i = 0; $i < 80; $i++){
		$times[] = 0;
	}
	for($i = $len - 1; $i >= 0; $i--){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			if(!$times[$n]){
				if($data[$i][2][$j][0] == 0){
					$times[$n] = true;
				}else{
					$data[$i][2][$j][3] = 1;
				}
			}
			$n++;
		}
	}
	
	
	//大小
	$times = 0;
	for($i = 0; $i < $len; $i++){
		$times = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				$times += $data[$i][2][$j][1];
			}
		}
		if($times > 810){
			$data[$i][3] = 1;
		}else{
			$data[$i][3] = 0;
		}
		
	}
	
	
	//单双
	$times = 0;
	for($i = 0; $i < $len; $i++){
		$times = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				$times += $data[$i][2][$j][1];
			}
		}
		if($times%2 == 1){
			$data[$i][4] = 1;
		}else{
			$data[$i][4] = 0;
		}
		
	}
	
	
	
	//上中下
	//0 下 1 中 2上
	$up = 0;
	$down = 0;
	for($i = 0; $i < $len; $i++){
		$up = 0;
		$down = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				if($data[$i][2][$j][1] < 41){
					$down += 1;
				}else{
					$up += 1;
				}
			}
		}
		if($up == $down){
			$data[$i][5] = 1;
		}else if($up > $down){
			$data[$i][5] = 2;
		}else{
			$data[$i][5] = 0;
		}
	}
	
	
	
	
	//奇偶和
	//0 和 1 奇 2 偶
	$odd = 0;
	$even = 0;
	for($i = 0; $i < $len; $i++){
		$up = 0;
		$down = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				if($data[$i][2][$j][1] % 2 == 1){
					$odd += 1;
				}else{
					$even += 1;
				}
			}
		}
		if($odd == $even){
			$data[$i][6] = 1;
		}else if($even > $odd){
			$data[$i][6] = 2;
		}else{
			$data[$i][6] = 0;
		}
	}
	
	
	
	//和值
	$times = 0;
	for($i = 0; $i < $len; $i++){
		$times = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				$times += $data[$i][2][$j][1];
			}
		}
		$data[$i][7] = $times;
	}
	
	
		
	return $data;
}


//模拟一组开奖号码
//$num 开奖球个数
function getBalls($num){
	$balls = array();
	//range 是将1到80列成一个数组
	$numbers = range(1,80);
	//shuffle 将数组顺序随即打乱
	shuffle($numbers);
	//array_slice 取该数组中的某一段
	$balls = array_slice($numbers, 0, 20);

	sort($balls);
	return $balls;
}



function makeData($number, $index, $balls){
	global $typeNum;
	$number = $index < 10 ? $number.'0'.$index : $number.$index;
	$result = array(
		//期号
		$number,
		//开奖号
		join('', $balls)
	);
	//添加号码详情数据
	$result[] = makeRowData($i, $balls);
	
	
	return $result;
}

//生成一组号码以及号码属性
function makeRowData($inum, $balls){
	global $temp;
	$result = array();
	for($i = 0; $i < 80; $i++){
		//array(遗漏次数, 当前开奖号数字, 号温, 遗漏条)
		//遗漏次数 
		//当前开奖号数字(当前位的号码数字)
		//号温 (冷号为1,温号为2,热号为3)
		//遗漏条 (开奖号码数字是否是最后一次出现该号码数字,是为1,否为0)
		//$arr = array(0, 3, 1, 0);
		$arr = array();
		
		//判断当前号码是否为开奖号
		if(in_array($i + 1, $balls)){
			$arr[] = 0;
		}else{
			$arr[] = 1;
		}
		$arr[] = $i + 1;
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
	$len = count($data);
	$times = array();
	$n = 0;
	for($i = 0; $i < 80; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				$times[$n] += 1;
			}
			$n++;
		}
		
	}
	return $times;
}



//平均遗漏值
function makeStatisticsOmission($data){
	$len = count($data);
	$times = array();
	$n = 0;
	for($i = 0; $i < 80; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			$times[$n] += $data[$i][2][$j][0];
			$n++;
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
	$n = 0;
	for($i = 0; $i < 80; $i++){
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			$times[$n] = $data[$i][2][$j][0] > $times[$n] ? $data[$i][2][$j][0] : $times[$n];
			$n++;
		}
		
	}
	return $times;
}



//最大连出值
function makeStatisticsMaxContinuous($data){
	$result = array();
	$len = count($data);
	$times = array();
	$n = 0;
	for($i = 0; $i < 80; $i++){
		$result[] = 0;
		$times[] = 0;
	}
	for($i = 0; $i < $len; $i++){
		$n = 0;
		for($j = 0; $j < 80; $j++){
			if($data[$i][2][$j][0] == 0){
				$temp[$n] += 1;
				$result[$n] =  $temp[$n] > $result[$n] ? $temp[$n] : $result[$n];
			}else{
				$temp[$n] = 0;
			}
			$n++;
		}
		
	}
	
	return $result;
}







































?>
