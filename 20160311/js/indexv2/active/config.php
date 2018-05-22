<?php
/*
    isFinish1 绑定银行卡是否完成
    isFinish2 首冲是否完成,
    isFinish3 首提是否完成

    {
        'tipsBank' : '首页点击“我的账户”选择银行卡管理，绑定银行卡并锁定后即可获赠18元',
        'tipsCard' : '充值2元就送钱，最高送50000元！',
        'tipsWithdraw':  '完成注册充值的新用户在活动期间游戏满100元并有一次成功提款后即可再次获赠18元',
        'isFinish1': true,
        'isFinish2': false,
        'isFinish3': false
    }


    isbinded 是否开启日常任务
    countDays  已经连续投注日期
    countDay1  countMoney1  连续投注xx日 获得xx奖励
    countDay2  countMoney2  连续投注xx日 获得xx奖励
    countDay3  countMoney3  连续投注xx日 获得xx奖励
    'levelfirst'  连续答题3天 是否达成
    'levelsecond' 连续答题7天 是否达成
    'levelthird'  连续答题9天 是否达成
    dateList 投注日历， 1: 已投注 0: 未参加 2: 将来日期
    achievedList  日常任务   standerd:达标额度 times:奖励抽奖次数 type:抽奖类型（0：铜 1：银 2：金）achieve:是否完成


    {
        'isbinded': true,
        'countDays': '3',
        'countDay1': '3',
        'countDay2': '5',
        'countDay3': '7',
        'countMoney1': '20',
        'countMoney2': '40',
        'countMoney3': '120',
        'dateList': [1,0,1,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        'achievedList': [
            {'standerd':'2000','times':'1','reward':'300','type':'0',achieve: true},
            {'standerd':'3000','times':'1','reward':'300','type':'1',achieve: false},
            {'standerd':'4000','times':'1','reward':'300','type':'2',achieve: false},
            {'standerd':'5000','times':'1','reward':'300','type':'0',achieve: false},
            {'standerd':'6000','times':'1','reward':'300','type':'1',achieve: false}
        ]
    }

    isFinished   今日是否完成答题
    getMoney     今日答题获得奖励金额
    answersDays   连续答题天数
    answersDay1    answersMoney1
    answersDay2    answersMoney2
    answersDay3    answersMoney3


    answerList   今日答题列表     title：题目  anser: 答案  correct: 正确答案所在位置

    {
        'isFinished': true,
        'getMoney': '3',
        'answersDays': '3',
        'answersDay1': '3',
        'answersDay2': '5',
        'answersDay3': '7',
        'answersMoney1': '20',
        'answersMoney2': '40',
        'answersMoney3': '120',
        'answerList':[
        {
            'title': '这是第一道题，非常难，请选择你认为正确的答案',
            'answer': [
                '这看起来像答案',
                '这就是答案',
                '这不是答案'
            ],
            'correct': 0
        },
        {
            'title': '1903年夏，俄国社会民主工党第二次代表大会召开，会议上因建党模式问题发生争论而分裂成“布尔什维克”和“孟什维克”。激烈的党内斗争，尤其是与普列汉诺夫的分手使列宁非',
            'answer': [
                '他们在一个名叫秋吉维泽的休养所住了六个星期',
                '他们在一个名叫秋吉维泽的休养所住了5个星期',
                '他们在一个名叫秋吉维泽的休养所住了4个星期'
            ],
            'correct': 2
        }
        ]
    }

    coppor 铜可以答题次数
    silver  银 答题次数
    golden  金 答题次数
    {
        'coppor': 0,
        'silver': 1,
        'golden': 2
    }

*/


	$output = array();


    $output =  array(
        'isSuccess' => 1,
        'message' => '成功',
        'data' => array(
            'countdown' => array(
                'isbinded' => false,
                'bankDays' => '3',
                'gameDays' => '13'
            ),
            'mission' => array(
                'tipsBank' => '首页点击“我的账户”选择银行卡管理，绑定银行卡并锁定后即可获赠18元',
                'tipsCard' => '充值2元就送钱，最高送50000元！',
                'tipsWithdraw' =>  '完成注册充值的新用户在活动期间游戏满100元并有一次成功提款后即可再次获赠18元',
                'isFinish1' => false,
                'isFinish2' => false,
                'isFinish3' => false,
                'bindcardLink' => 'link1',
                'rechargeLink' => 'link2',
                'withdrawLink' => 'link3'
            ),
            'daily' => array(
                'isbinded'  => true,
                'countDays' => '3',
                'countDay1' => '3',
                'countDay2' => '5',
                'countDay3' => '7',
                'countMoney1' => '20',
                'countMoney2' =>  '40',
                'countMoney3' => '120',
                'levelfirst' => true,
                'levelsecond' => true,
                'levelthird' => false,
                'dateList' => array(1,0,1,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2),
                'achievedList' => array(
                    array('standerd'=>'2000','times'=>'1','reward'=>'300','type'=>'0','achieve'=>true),
                    array('standerd'=>'3000','times'=>'0','reward'=>'300','type'=>'1','achieve'=>false),
                    array('standerd'=>'4000','times'=>'0','reward'=>'300','type'=>'2','achieve'=>false),
                    array('standerd'=>'5000','times'=>'0','reward'=>'0','type'=>'0','achieve'=>false),
                    array('standerd'=>'6000','times'=>'1','reward'=>'300','type'=>'1','achieve'=>false)
                )
            ),
            'question' => array(
                'isFinished'=> true,
                'getMoney'=> '3',
                'answersDays'=> '3',
                'answersDay1'=> '3',
                'answersDay2'=> '5',
                'answersDay3'=> '7',
                'answersMoney1'=> '20',
                'answersMoney2'=> '40',
                'answersMoney3'=> '120',
                'prizeType1' => 'prize_2',
                'prizeType2' => 'prize_2',
                'prizeType3' => 'prize_3',
                'answerList'=>array(
                    array(
                    'title'=> '这是第一道题，非常难，请选择你认为正确的答案',
                    'answer'=> array(
                        '这看起来像答案',
                        '这就是答案',
                        '这不是答案'
                    ),
                    'correct'=> 0
                    ),
                    array(
                    'title'=> '1903年夏，俄国社会民主工党第二次代表大会召开，会议上因建党模式问题发生争论而分裂成“布尔什维克”和“孟什维克”。激烈的党内斗争，尤其是与普列汉诺夫的分手使列宁非',
                    'answer'=> array(
                        '他们在一个名叫秋吉维泽的休养所住了六个星期',
                        '他们在一个名叫秋吉维泽的休养所住了5个星期',
                        '他们在一个名叫秋吉维泽的休养所住了4个星期'
                    ),
                    'correct'=> 2
                    )
                )
            ),
            'egg' => array(
                'coppor'=> 0,
                'silver'=> 1,
                'golden'=> 2
            )    
        )
    );

	echo json_encode($output);

?>