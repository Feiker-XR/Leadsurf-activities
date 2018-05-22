<?php
//模拟各种提交结果状态
//1网络连接异常 
//2登录超时
//3请求成功
//4服务器错误
//5余额不足
//6暂停销售 
//7倍数超限
//8无效字符
//9投注过期提示
//10提交失败
//11使用非法投注工具
//12封锁变价
$num = 3;

switch ($num) {
	case 1:
		//网络连接异常
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'netAbnormal',
			'msg' 		=> '您的网络连接异常，请重试',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '您的网络连接异常，请重试'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 2:
		//登录超时
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'loginTimeout',
			'msg' 		=> '登录超时，请重新登录平台！',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '登录超时，请重新登录平台！'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 3:
		$data = array();
		$data['balls'] = $_POST['balls'];
		function ranResult(){
			$num = rand(0, 1);
			return $num;
		};

		//模拟出错结果
		if(ranResult() == 1){
			//请求成功
			$arrayName = array(
				'isSuccess' => 0, 
				'type' => 'error', 
				'msg' => '投注失败'
			);

			//输出JSON
			echo json_encode($arrayName);

			die();
		};

		//随即开奖号码
		function makeNum(){
			$arr = array();

			for ($i=0; $i < 5; $i++) { 
				$arr[] = rand(0, 9);
			}

			//返回字符串格式开奖号码
			return implode(",", $arr);
		};

		//固定开奖号码
		function makeFixedNum(){

			//返回字符串格式开奖号码
			return '8,8,8,8,8';
		};

		// $lotteryNum = makeNum();
		$lotteryNum = makeFixedNum();

		//检验是否中奖
		function checkLottery($data, $lotteryNum){
			$saveArr = array();
			$arr = array();
			//金额
			$totalprice = 0;
			//中奖注数
			$totalLotteryNum = 0;
			//中奖金额
			$totalLotteryMoney = 0;
			
			for ($i = 0; $i < count($data['balls']); $i++) { 
				$currentBall = $data['balls'][$i];
				//默认投注类型
				$currentBall['type'] = '[五星_复式]';

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
							'winMoney'=> 18000 * $currentBall['multiple'],
							'winNum'=> 1,
							'writetime'=> date("Y-m-d H:i:s"),
						);

					//中奖记录+1
					$totalLotteryNum++;
					//中奖金额
					$totalLotteryMoney += 18000 * $currentBall['multiple'];

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
							'writetime'=> date("Y-m-d H:i:s"),
						);

				}

				$totalprice += $currentBall['onePrice'];
			}

			$saveArr['totalprice'] = $totalprice;
			$saveArr['totalLotteryNum'] = $totalLotteryNum;
			$saveArr['totalLotteryMoney'] = $totalLotteryMoney;
			$saveArr['list'] = $arr;


			return $saveArr;
		};

		$lotteryInfo = checkLottery($data, $lotteryNum);

		//请求成功
		$arrayName = array(
			'isSuccess' => 1, 
			'type' => 'success', 
			'msg' => '恭喜您投注成功',
			'data' 		=> array(
				'projectid' => 'Lottery'+ time(),
				'writetime' => time(),
				'result' => $lotteryNum,
				'totalprice' => $lotteryInfo['totalprice'],
				'winMoney' => $lotteryInfo['totalLotteryMoney'],
				'winNum' => $lotteryInfo['totalLotteryNum'],
				'list' => $lotteryInfo['list']
			)
		);

		//输出JSON
		echo json_encode($arrayName);
	break;
	case 4:
		//服务器错误
		$arrayName = array(
			'isSuccess' => 0, 
			'type' => 'serverError', 
			'msg' => '服务器错误请稍后再试!',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '服务器错误请稍后再试!'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 5:
		//余额不足
		$arrayName = array(
			'isSuccess' => 0, 
			'type' => 'Insufficientbalance', 
			'msg' => '余额不足，请充值!',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '余额不足，请充值!'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 6:
		//暂停销售
		$arrayName = array(
			'isSuccess' => 0, 
			'type' 		=> 'pauseBet', 
			'msg'  		=> '您的投注内容中“后三组选和值”已暂停销售，是否完成剩余内容投注？',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '您的投注内容中“后三组选和值”已暂停销售，是否完成剩余内容投注？',
					'balls' => array(
						array(
							'id'	=> 1,
							'ball'	=> '0,3,2,5,6',
							'type' 	=> 'wuxing.zhixuan.fushi'
						),
						array(
							'id'	=> 2,
							'ball'	=> '0,3,2,5,6',
							'type' 	=> 'wuxing.zhixuan.fushi'
						)
					)
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 7:
		//倍数超限
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'multipleOver', 
			'msg' 		=> '您的投注内容超出倍数限制，请调整！',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '您的投注内容超出倍数限制，请调整！',
					'balls' => array(
						array(
							'id'	=>	1,
							'ball'	=> '0,3,2,5,6',
							'type' 	=> 'wuxing.zhixuan.fushi'
						),
						array(
							'id'	=>	2,
							'ball'	=> '0,3,2,5,6',
							'type' 	=> 'wuxing.zhixuan.fushi'
						)
					)
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 8:
		//无效字符
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'invalidtext', 
			'msg' 		=> '您的投注内容有部分无效字符，请重新选择提交，谢谢！',
			'data' 		=> array(
				'tplData' => array(
					'msg'  	=> '您的投注内容有部分无效字符，请重新选择提交，谢谢！'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 9:
		//投注过期提示
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'betExpired', 
			'msg' 		=> '您好，20121128-023期 已截止销售，当前期为20121128-024期 ，请留意！',
			'data'		=> array(
				'tplData' => array(
					'msg'  	=> '您好，20121128-023期 已截止销售，当前期为20121128-024期 ，请留意！',
					'bitDate' => array(
						//过期日期
						'expiredDate'	=> '20121128-023',
						//当前日期
						'current' 		=> '20121128-024'
					)
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 10:
		//方案提交失败
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'subFailed',
			'msg' 		=> '方案提交失败，请检查网络并重新提交！',
			'data'		=> array(
				'tplData' => array(
					'msg'  	=> '方案提交失败，请检查网络并重新提交！'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 11:
		//使用非法投注工具
		$arrayName = array(
			'isSuccess' => 0, 
			'type'		=> 'illegalTools',
			'msg' 		=> '请不要使用非平台提供的投注工具进行投注！',
			'data'		=> array(
				'tplData' => array(
					'msg'  	=> '请不要使用非平台提供的投注工具进行投注！'
				)
			)
		);
		echo json_encode($arrayName);
	break;
	case 12:
		//封锁变价
		$arrayName = array(
			'isSuccess' => 0, 
			'type' => 'blockade', 
			'msg' => '封锁变价',
			'data' 		=> array(
				//封锁或变价信息
				'blockadeInfo' =>  array(
					//1 仅存在封锁
					//2 仅存在变价
					//3 存在封锁和变价
					'type' => 3,
					//调整后的总价
					'amountAdjust' => 36.00,
					//付款账号
					'username' => 'wahaha'
				),
				'tplData' => array(
					//游戏期号
					'currentGameNumber' => '201412128888',
					'msg'  	=> '您的方案中存在受限注单'
				),
				'orderData' => array(
					'amount' => 40.00,
					'balls' => array(
						array('id' => 1, 'ball' => '0,0,8,1,0|0,0,8,1,0|0,0,8,1,0|0,0,8,1,0|0,0,8,1,0', 'type' => 'wuxing.zhixuan.fushi', 'moneyunit' => 1, 'multiple' => 1, 'num' => 1, 'onePrice' => 2),
						array('id' => 2, 'ball' => '0,0,8,2,1', 'type' => 'wuxing.zhixuan.fushi', 'moneyunit' => 1, 'multiple' => 1, 'num' => 1, 'onePrice' => 2),
						array('id' => 3, 'ball' => '2,5,8,3,2', 'type' => 'wuxing.zhixuan.fushi', 'moneyunit' => 1, 'multiple' => 1, 'num' => 1, 'onePrice' => 2),
						array('id' => 4, 'ball' => '6,3,8,2,3', 'type' => 'wuxing.zhixuan.fushi', 'moneyunit' => 1, 'multiple' => 1, 'num' => 1, 'onePrice' => 2),
						array('id' => 5, 'ball' => '0,0,8,1,0|0,0,8,1,0|0,0,8,1,0|0,0,8,1,0|0,0,8,1,0', 'type' => 'wuxing.zhixuan.fushi', 'moneyunit' => 1, 'multiple' => 1, 'num' => 1, 'onePrice' => 2, 'lockPoint' => array(
							'beishu' => 1000,
							'beforeBlockadeList' => array(array('blockadeDetail' => '1,2,3', 'beishu' => 300, 'realBeishu' => 200), array('blockadeDetail' => '4,3,5', 'beishu' => 200, 'realBeishu' => 100)),
							'pointsList' => array(array('point' => 110, 'mult' => 200, 'retValue' => 6), array('point' => 160, 'mult' => 100, 'retValue' => 6))
						))
					),
					'gameType' => 'cqssc',
					'isTrace' => 0,
					'orders' => array(
						array('number' => '20140109-073', 'issueCode' => '201401090073', 'multiple' => 1)
					),
					'traceStopValue' => -1,
					'traceWinStop' => 0
				)
			)
		);
		echo json_encode($arrayName);
	break;
};
?>