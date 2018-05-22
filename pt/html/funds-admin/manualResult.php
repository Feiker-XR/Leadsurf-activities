<?php
if($_FILES ['file']){
	$rs = array(
		'isSuccess' => 1,
		'msg' => '上传成功',
		'data' => '<table class="table table-info text-center w-8">' .
						'<thead>' .
							'<tr>' .
								'<th>用户账户名</th>' .
								'<th>加币金额</th>' .
								'<th>备注</th>' .
							'</tr>' .
						'</thead>' .
						'<tbody>' .
							'<tr>' .
								'<td>cliff<input type="hidden" name="name" value="cliff"></td>' .
								'<td>123<input type="hidden" name="amount" value="123"></td>' .
								'<td>活动奖励<input type="hidden" name="desc" value="555"></td>' .
							'</tr>' .
							'<tr>' .
								'<td>cliff<input type="hidden" name="name" value="cliff"></td>' .
								'<td>456<input type="hidden" name="amount" value="123"></td>' .
								'<td>活动奖励<input type="hidden" name="desc" value="555"></td>' .
							'</tr>' .
						'</tbody>' .
					'</table>'
	);


	$rs = json_encode($rs);

	//这里是你要执行的业务逻辑，再次省略，你也可以打印出结果。
	echo '<script>(function(){var Games = window.parent.getFile,data='.$rs.'; Games(data)})()</script>';
} else {
	$rs = array(
		'isSuccess' => 1,
		'msg' => '上传成功',
		'data' => ''
	);

	echo json_encode($rs);
};


?>