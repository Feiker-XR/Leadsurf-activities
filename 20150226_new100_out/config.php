<?php
	$regLinks = array(
		'apt'        => 'http://www.fh885.com/register/?id=3002766&exp=1737705933624&pid=10521181&token=868c',
		'blc'        => 'http://www.fh885.com/register/?id=3002767&exp=1737705948180&pid=10521181&token=e5f3',
		'sscdhw'     => 'http://www.fh885.com/register/?id=2604172&exp=1737705950848&pid=10521181&token=181e',
		'hhc'        => 'http://www.fh885.com/register/?id=3002768&exp=1737705952952&pid=10521181&token=c337',
		'newfcp'     => 'http://www.fh885.com/register/?id=2803074&exp=1737170847812&pid=10521181&token=985c',
		'mjw'        => 'http://www.fh885.com/register/?id=2604174&exp=1737705957155&pid=10521181&token=20b3',
		'520cpw'     => 'http://www.fh885.com/register/?id=3002769&exp=1737705958950&pid=10521181&token=142d',
		'twzmw'      => 'http://www.fh885.com/register/?id=3002770&exp=1737705961035&pid=10521181&token=3e53',
		'3dzj'       => 'http://www.fh885.com/register/?id=3002771&exp=1737705963132&pid=10521181&token=5526',
		'kjhw'       => 'http://www.fh885.com/register/?id=2604175&exp=1737705965275&pid=10521181&token=9c97',
		'sjhw'       => 'http://www.fh885.com/register/?id=3002772&exp=1737705967473&pid=10521181&token=3e37',
		'twzmw2'     => 'http://www.fh885.com/register/?id=3002773&exp=1737705970200&pid=10521181&token=8437',
		'cssw'       => 'http://www.fh885.com/register/?id=3002774&exp=1737705973053&pid=10521181&token=7fba',
		'cpdh'       => 'http://www.fh885.com/register/?id=3002775&exp=1737705975285&pid=10521181&token=21ef',
		'kjhw2'      => 'http://www.fh885.com/register/?id=2604176&exp=1737705977440&pid=10521181&token=0262',
		'shbf'       => 'http://www.fh885.com/register/?id=2604177&exp=1737705979621&pid=10521181&token=6691',
		'jclt'       => 'http://www.fh885.com/register/?id=3002776&exp=1737705982488&pid=10521181&token=9348',
		'sis'        => 'http://www.fh885.com/register/?id=3002777&exp=1737705984625&pid=10521181&token=ab0b',
		'dyhs'       => 'http://www.fh885.com/register/?id=2604178&exp=1737705986754&pid=10521181&token=9bba',
		'renrenpeng' => 'http://www.fh885.com/register/?id=2604179&exp=1737705989236&pid=10521181&token=672b',
		'nnsp'       => 'http://www.fh885.com/register/?id=3002778&exp=1737705991431&pid=10521181&token=a254',
		'znpd'       => 'http://www.fh885.com/register/?id=3002779&exp=1737705993480&pid=10521181&token=fb84',
		'sjlt'       => 'http://www.fh885.com/register/?id=3002780&exp=1737705995798&pid=10521181&token=c727',
		'sscw'       => 'http://www.fh885.com/register/?id=3002933&exp=1737870765503&pid=10521181&token=92d3',
		'sscpcw'     => 'http://www.fh885.com/register/?id=3002934&exp=1737870768049&pid=10521181&token=f6c8',
		'cpyjw'      => 'http://www.fh885.com/register/?id=3002935&exp=1737870770747&pid=10521181&token=4621',
		'qqcpw'      => 'http://www.fh885.com/register/?id=3002936&exp=1737870773329&pid=10521181&token=e8ea',
		'cpdhw'      => 'http://www.fh885.com/register/?id=3002937&exp=1737870775231&pid=10521181&token=99d5',
		'tlw'        => 'http://www.fh885.com/register/?id=2402586&exp=1735870301193&pid=10521181&token=3d07',
		'8684gjw'    => 'http://www.fh885.com/register/?id=2604346&exp=1737945798508&pid=10521181&token=b817',
		'fyw'        => 'http://www.fh885.com/register/?id=3003001&exp=1737945920079&pid=10521181&token=c715',
		'dhw'        => 'http://www.fh885.com/register/?id=2604347&exp=1737945921945&pid=10521181&token=f404',
		'gaoduan'    => 'http://www.fh885.com/register/?id=2604345&exp=1737944342328&pid=12157511&token=ef5c',
		'youmi'      => 'http://www.fh885.com/register/?id=3002949&exp=1737879046672&pid=12153751&token=19b1',

		'default'    => 'http://www.fh885.com/register/?id=3002777&exp=1737705984625&pid=10521181&token=ab0b'
	);

	$type = $_GET['m'];

	// 注册链接
	if( $regLinks[$type] ){
		$regLink = $regLinks[$type];
	}else{
		$regLink = $regLinks['default'];
	}

	// 登陆链接
	$loginLink = 'http://www.fh885.com/';
?>