<?php
$wanfa = $_GET['wanfa'];

$len = rand(2, 6);

// Blah.....

$html = 
	'<table class="table table-border">' .
		'<thead>' .
			'<tr>' .
	    		'<th>玩法群</th>' .
	    		'<th>玩法组</th>' .
	    		'<th>玩法/投注方式</th>' .
	    		'<th>奖金（元）</th>' .
	    		'<th>返点</th>' .
	    	'</tr>' .
		'</thead>' .
		'<tbody>';

for( $i=0; $i<$len; $i++ ){
	$html .= 
		'<tr>' .
    		'<td rowspan="4">五星' .$i. '</td>'.
    		'<td rowspan="2">直选</td>'.
    		'<td>复式</td>'.
    		'<td>170000.0</td>'.
    		'<td>2</td>'.
    	'</tr>'.
		'<tr>'.
    		'<td>单式</td>'.
    		'<td>170000.0</td>'.
    		'<td>2</td>'.
    	'</tr>'.
		'<tr>'.
    		'<td rowspan="2">组选</td>'.
    		'<td>组选120（杂牌）</td>'.
    		'<td>1400.0</td>'.
    		'<td>2</td>'.
    	'</tr>'.
		'<tr>'.
    		'<td>组选60（对子）</td>'.
    		'<td>2800.0</td>'.
    		'<td>2</td>'.
    	'</tr>';
}
$html .= '</tbody></table>';

$output = array(
	'status' => 'ok',
	'html'	 => $html
);

// 获取失败
/*$output = array(
	'status' => 'failure',
	'html'	 => '错误错误错误...'
);*/


$json = json_encode( $output );
echo $json;

?>
