<?php 

	/*
	MODEL 请求类型 
	1.红包信息提取
	2.红包可提现额度
	3.红包金额提交
	 */
	$model = isset($_GET['model']) ? $_GET['model'] : 1;

	/*
	TYPE [返回信息注释 红包以下简称：包]
	1. 包1：可申领 包2：不能领取 包3：不能领取
	2.  
	5.任务进行中[倒计时] 
	6.任务完成 
	7.任务结束
	*/

	//当前默认信息类型
	$type = 1;

	//结果数组
	$result = array();

	/*
	[rewards step 当前红包状态]
	1.红包不能领取 
	2.红包可申领 
	5.任务进行中[倒计时] 
	6.任务完成 
	7.任务结束
	*/

	//红包信息
	if($model == 1){
		switch ($type) {
			case 1:
				$result =  array(
						'status' => 0,
						'message' => '红包信息更新成功',
						'data' => array(
							'rewards' => array(
								array(
									'step' => 2,
								),
								array(
									'step' => 1,
								),
								array(
									'step' => 1,
								)
							)
						),
					);
				break;

			case 2:
				$result =  array(
						'status' => 0,
						'message' => '红包信息更新成功',
						'data' => array(
							'rewards' => array(
								array(
									'step' => 6,
								),
								array(
									'step' => 1,
								),
								array(
									'step' => 1,
								),
							),
							//红包索引
							'index' => 1,
							//红包总数
							'total' => 3,
							//奖金
							'rewardsNum' => 1000
						),
					);
				break;

			case 3:
				$result =  array(
						'status' => 0,
						'message' => '红包信息更新成功',
						'data' => array(
							'rewards' => array(
								array(
									'step' => 7,
								),
								array(
									'step' => 5,
								),
								array(
									'step' => 1,
								),
							),
							//目标投注
							'expected' => 30000,
							//截止时间
							'deadline' => strtotime('2015-02-01')*1000,
							//当前时间
							'nowTime' => time()*1000,
							//奖金
							'rewardsNum' => 1000,
							//最后投注
							'lastBet' => 20000,
						),
					);
				break;
			default:
				# code...
				break;
		}
	//请求可提现信息
	}elseif ($model == 2) {
		
		$result =  array(
			'status' => 0,
			'message' => '可体现余额信息',
			'data' => array(
				'isVip' => true,
				'minNum' => 100,
				'maxNum' => 28888
			)
		);
	//提交红包数额
	}elseif ($model == 3) {

		$result =  array(
			'status' => 0,
			'message' => '提交余额成功',
			'data' => array(
				//目标投注
				'expected' => 30000,
				//截止时间
				'deadline' => strtotime('2015-02-01')*1000,
				//当前时间
				'nowTime' => time()*1000,
				//奖金
				'rewardsNum' => 1000,
				//最后投注
				'lastBet' => 20000,
			)
		);
	//红包作废
	}elseif ($model == 4) {
		$index = isset($_GET['index']) ? $_GET['index'] : 1;
		$result =  array(
			'status' => 0,
			'message' => '红包已经作废',
			'data' => array(
				//红包索引
				'index' => intval($index),
				//红包总数
				'total' => 3
			)
		);
	}elseif ($model == 5) {

		$result =  array(
			'status' => 0,
			'message' => '红包领取成功',
			'data' => array(
				//红包索引
				'index' => 1,
				//红包总数
				'total' => 3,
				//当前红包数额
				'rewardsNum' => 1000
			)
		);
	}elseif ($model == 6) {

		$result =  array(
			'status' => 1,
			'typeId' => 1,
			'message' => '活动已经结束'
		);
	}
	

	echo json_encode($result);
	
?>