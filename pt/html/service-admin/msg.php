<?php


$arr = array(
	//msgid 消息id
	//username 用户名
	//time 时间
	//type 1:发送消息  2:回复消息
	array('msgid' => 1, 'username' => '张学友', 'time' => '2013-02-02 12:10:14', 'type' => 1, 'content' => '你好吗？'),
	array('msgid' => 2, 'username' => '刘德华', 'time' => '2013-02-02 12:10:16', 'type' => 2, 'content' => '很好，好得不得了~~'),
	array('msgid' => 3, 'username' => '刘德华', 'time' => '2013-02-02 12:10:17', 'type' => 2, 'content' => '今天打德州吗？'),
	array('msgid' => 4, 'username' => '张学友', 'time' => '2013-02-02 12:10:14', 'type' => 1, 'content' => '嗯(自动回复)'),
	array('msgid' => 5, 'username' => '刘德华', 'time' => '2013-02-02 12:10:18', 'type' => 2, 'content' => '。。。'),
	array('msgid' => 6, 'username' => '张学友', 'time' => '2013-02-02 12:10:22', 'type' => 1, 'content' => '来了来了'),
	array('msgid' => 7, 'username' => '刘德华', 'time' => '2013-02-02 12:10:55', 'type' => 2, 'content' => '搞毛啊！！'),
	array('msgid' => 1, 'username' => '张学友', 'time' => '2013-02-02 12:10:14', 'type' => 1, 'content' => '你好吗？'),
	array('msgid' => 2, 'username' => '刘德华', 'time' => '2013-02-02 12:10:16', 'type' => 2, 'content' => '很好，好得不得了~~'),
	array('msgid' => 3, 'username' => '刘德华', 'time' => '2013-02-02 12:10:17', 'type' => 2, 'content' => '今天打德州吗？'),
	array('msgid' => 4, 'username' => '张学友', 'time' => '2013-02-02 12:10:14', 'type' => 1, 'content' => '嗯(自动回复)'),
	array('msgid' => 5, 'username' => '刘德华', 'time' => '2013-02-02 12:10:18', 'type' => 2, 'content' => '。。。')
	
	
);





$result = array(
	'isSuccess' => 1,
	'type' => 'success',
	'msg' => '添加成功',
	'data' => array('list' => $arr)
);

echo json_encode($result);

?>