<?php
	$regLinks = array(
		'wn1118'             => 'http://www.fh885.com/register/?id=5602812&exp=1755504429302&pid=3871271&token=268c',
        'whach3'             => 'http://www.fh885.com/register/?link=201405072053253rq',
        'hhd789'             => 'http://t.cn/RLBsSBK',
        'hdhuang5203901'     => 'http://www.fh5186.com/register/?id=5602980&exp=1755940204083&pid=12946740&token=3725',
        'lscm000888'         => 'http://www.fh885.com/register/?id=4807289&exp=1755663306767&pid=9720901&token=bd16',
        'chr2001'            => 'http://www.fh885.com/register/?id=403474&exp=1734528991575&pid=3360171&token=9020',
        'jnh070'             => 'http://www.fh885.com/register/?id=4807232&exp=1755513715581&pid=2900111&token=33ee',
        'hhy555'             => 'http://www.ph158nb.com:666/register/?id=4807272&exp=1755590556595&pid=5296481&token=685c',
        'lele0088'           => 'http://www.fh885.com/register/?id=5602951&exp=1755861786711&pid=10382791&token=cca8',
        'jnh025'             => 'http://www.fh885.com/register/?id=204036&exp=1733743281948&pid=3411041&token=1b4a',
        'ccbbank'            => 'http://www.fh885.com/register/?id=4002747&exp=1742786558375&pid=3394211&token=4a39',
        'w2207778920'        => 'http://www.fh5186.com/register/?id=2802883&exp=1736938662119&pid=10947600&token=69aa',
        'tvb111'             => 'http://www.fh885.com/register/?id=5602816&exp=1755508508783&pid=12445150&token=275b',
        'book09'             => 'http://www.fh5186.com/register/?id=4806458&exp=1753591420212&pid=2163901&token=5598',
        'abcd11'             => 'http://www.fh885.com/register/?link=20141110211654m5l',
        'Vip2226'            => 'http://www.fh5186.com/register/?id=5205023&exp=1753456618949&pid=12537370&token=2f3b',
        'shen19861986'       => 'http://www.fh5186.com/register/?id=4806936&exp=1754834826431&pid=13037061&token=f4f8',
        'fa2211'        	 => 'http://www.ph158nb.com:666/register/?link=20141114172416m3c',
        'niu777'        	 => 'http://www.fh885.com/register/?id=4805255&exp=1751154980370&pid=12067361&token=94bb',
        'sajtos1996'         => 'http://www.fh885.com/register/?id=4805958&exp=1752498627294&pid=13247200&token=fe5f',
        'fafa880'        	 => 'http://www.fh885.com/register/?id=5602888&exp=1755698808825&pid=13356111&token=a751',
        '理想1咪70'        	 => 'http://t.cn/RL4SjBz',
        'ZST88688'        	 => 'http://www.fh5186.com/register/?id=5002717&exp=1746588535889&pid=12763861&token=f286',
        'qq1009264676'       => 'http://www.ph158nb.com:666/register/?id=5602820&exp=1755510464714&pid=12262070&token=6309',
        'woaiweiwei2013'     => 'http://www.fh885.com/register/?id=4805827&exp=1752292653900&pid=8704081&token=775f',
        'mm6626441'        	 => 'http://www.fh5186.com/register/?id=4806311&exp=1753237493709&pid=13406060&token=a7b9',
        'ljh999'        	 => 'http://www.fh885.com/register/?id=5602961&exp=1755871278078&pid=13081411&token=4b3b',
        'caili5'        	 => 'http://www.fh885.com/register/?id=4806514&exp=1753700169917&pid=13434670&token=a28f',
        'mm84280858'         => 'http://www.fh885.com/register/?id=3803749&exp=1740282826339&pid=12350850&token=eca9',
        'vip2003'        	 => 'http://www.fh885.com/register/?id=202696&exp=1732965198444&pid=4357951&token=646b',
        'casino123'        	 => 'http://www.ph158nb.com:666/register/?id=5602975&exp=1755931504042&pid=13739791&token=4763',
        'a1175150'        	 => 'http://www.fh885.com/register/?id=4807383&exp=1755863945555&pid=13756980&token=4942',
        'c531856097'         => 'http://www.fh5186.com/register/?id=4807416&exp=1755936529395&pid=12980230&token=8914',
        'daoxin'        	 => 'http://www.fh5186.com/register/?id=4807282&exp=1755623636495&pid=9138700&token=a6ae',
        'kk961122222'        => 'http://www.fh5186.com/register/?id=4203205&exp=1743252894179&pid=12314450&token=32da',
        '你好毒好毒'        	 => 'http://www.fh5186.com/register/?id=5602982&exp=1755944513646&pid=12664440&token=2cdf',
        'lv70000'        	 => 'http://www.ph158nb.com:666/register/?id=4804386&exp=1749777743113&pid=11143400&token=fe0c',
        'miaoyufeng'         => 'http://www.ph158nb.com:666/register/?id=5402876&exp=1754145492776&pid=12051101&token=3d4b'

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