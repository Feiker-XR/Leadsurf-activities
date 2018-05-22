<?php
	$data = $_POST['balls'];
	$ranResult = function(){
		$num = rand(0, 3);
		return $num;
	}

	echo $ranResult();
	//模拟出错结果
	if($ranResult() == 1){
		//请求成功
		$arrayName = array(
			'isSuccess' => 0, 
			'type' => 'error', 
			'msg' => '投注失败'
		);

		//输出JSON
		echo json_encode($arrayName);

		die();
	}

	$makeNum = function(){
		$arr = array();

		for ($i=0; $i < 5; $i++) { 
			$arr[i] = rand(0, 9);
		}

		//返回字符串格式开奖号码
		return implode(",", $arr);
	};

	$lotteryNum = $makeNum();

	//检验是否中奖
	$checkLottery = function(){
		$saveArr = array();
		$arr = array();
		//中奖注数
		$totalLotteryNum = 0;
		//中奖金额
		$totalLotteryMoney = 0;
		
		for ($data['balls'] = 0; i < count($data['balls']); $data['balls']++) { 
			$currentBall = $data['balls'][i];

			//判断是否中奖
			if(trim($currentBall['ball']) == trim($lotteryNum)){
				$arr[] = array(
						'code'=> $currentBall['ball'],
						'isWin'=> 1,
						'methodname'=> $currentBall['type'],
						'modes'=> $currentBall['moneyunit'] == 1 ? '元' : '角',
						'multiple'=> $currentBall['multiple'],
						'num'=> 1,
						'projectid'=> time(),
						'totalprice'=> $currentBall['onePrice'],
						'winMoney'=> 18000,
						'winNum'=> 1,
						'writetime'=> date("Y-m-d H:i:s");,
					);

				//中奖记录+1
				$totalLotteryNum++;
				//中奖金额
				$totalLotteryMoney += 18000;

			} else {
				$arr[] = array(
						'code'=> $currentBall['ball'],
						'isWin'=> 0,
						'methodname'=> $currentBall['type'],
						'modes'=> $currentBall['moneyunit'] == 1 ? '元' : '角',
						'multiple'=> $currentBall['multiple'],
						'num'=> 1,
						'projectid'=> time(),
						'totalprice'=> $currentBall['onePrice'],
						'winMoney'=> 0,
						'winNum'=> 0,
						'writetime'=> date("Y-m-d H:i:s");,
					);

			}
		}

		$saveArr['totalLotteryNum'] = $totalLotteryNum;
		$saveArr['totalLotteryMoney'] = $totalLotteryMoney;
		$saveArr['list'] = $arr;

		return $saveArr;
	};

	$lotteryInfo = $checkLottery();

	//请求成功
	$arrayName = array(
		'isSuccess' => 1, 
		'type' => 'success', 
		'msg' => '恭喜您投注成功',
		'data' 		=> array(
			'result' => $lotteryNum,
			'winMoney' => $lotteryInfo['totalLotteryMoney'],
			'winNum' => $lotteryInfo['totalLotteryNum'],
			'list' => $lotteryInfo['list']
		)
	);

	//输出JSON
	echo json_encode($arrayName);
?>