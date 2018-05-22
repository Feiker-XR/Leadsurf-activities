
<?php


//直选复式
$data = array();
//{title:'标题',name:'名称', parent:'父类', childs:[子类], mode:'顶级父类'}


//节点和玩法的区别:
//节点一定有childs, 玩法没有
//玩法一定有顶级父类, 节点没有
//特殊玩法名称则带有 headline 属性，用于号码蓝的选球注单标题显示




//五星
//以下为节点
$data[] = array('title' => '五星', 'name' => 'wuxing');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'wuxing');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'wuxing');
$data[] = array('title' => '不定位', 'name' => 'budingwei', 'parent' => 'wuxing');
$data[] = array('title' => '趣&nbsp;&nbsp;&nbsp;味', 'name' => 'quwei', 'parent' => 'wuxing');
//以下为玩法
$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'wuxing');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'wuxing');

$data[] = array('title' => '组120', 'name' => 'zuxuan120', 'parent' => 'zuxuan', 'mode' => 'wuxing');
$data[] = array('title' => '组60', 'name' => 'zuxuan60', 'parent' => 'zuxuan', 'mode' => 'wuxing');
$data[] = array('title' => '组30', 'name' => 'zuxuan30', 'parent' => 'zuxuan', 'mode' => 'wuxing');
$data[] = array('title' => '组20', 'name' => 'zuxuan20', 'parent' => 'zuxuan', 'mode' => 'wuxing');
$data[] = array('title' => '组10', 'name' => 'zuxuan10', 'parent' => 'zuxuan', 'mode' => 'wuxing');
$data[] = array('title' => '组5', 'name' => 'zuxuan5', 'parent' => 'zuxuan', 'mode' => 'wuxing');

$data[] = array('title' => '一码不定位', 'name' => 'yimabudingwei', 'parent' => 'budingwei', 'mode' => 'wuxing');
$data[] = array('title' => '二码不定位', 'name' => 'ermabudingwei', 'parent' => 'budingwei', 'mode' => 'wuxing');
$data[] = array('title' => '三码不定位', 'name' => 'sanmabudingwei', 'parent' => 'budingwei', 'mode' => 'wuxing');

$data[] = array('title' => '一帆风顺', 'name' => 'yifanfengshun', 'parent' => 'quwei', 'mode' => 'wuxing');
$data[] = array('title' => '好事成双', 'name' => 'haoshichengshuang', 'parent' => 'quwei', 'mode' => 'wuxing');
$data[] = array('title' => '三星报喜', 'name' => 'sanxingbaoxi', 'parent' => 'quwei', 'mode' => 'wuxing');
$data[] = array('title' => '四季发财', 'name' => 'sijifacai', 'parent' => 'quwei', 'mode' => 'wuxing');





//四星
$data[] = array('title' => '四星', 'name' => 'sixing');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'sixing');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'sixing');
$data[] = array('title' => '不定位', 'name' => 'budingwei', 'parent' => 'sixing');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'sixing');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'sixing');

$data[] = array('title' => '组24', 'name' => 'zuxuan24', 'parent' => 'zuxuan', 'mode' => 'sixing');
$data[] = array('title' => '组12', 'name' => 'zuxuan12', 'parent' => 'zuxuan', 'mode' => 'sixing');
$data[] = array('title' => '组6', 'name' => 'zuxuan6', 'parent' => 'zuxuan', 'mode' => 'sixing');
$data[] = array('title' => '组4', 'name' => 'zuxuan4', 'parent' => 'zuxuan', 'mode' => 'sixing');

$data[] = array('title' => '一码不定位', 'name' => 'yimabudingwei', 'parent' => 'budingwei', 'mode' => 'sixing');
$data[] = array('title' => '二码不定位', 'name' => 'ermabudingwei', 'parent' => 'budingwei', 'mode' => 'sixing');

//后三
$data[] = array('title' => '后三', 'name' => 'housan');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'housan');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'housan');
$data[] = array('title' => '不定位', 'name' => 'budingwei', 'parent' => 'housan');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'housan');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'housan');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zhixuan', 'mode' => 'housan');
$data[] = array('title' => '跨度', 'name' => 'kuadu', 'parent' => 'zhixuan', 'mode' => 'housan');

$data[] = array('title' => '组选包胆', 'name' => 'zuxuanbaodan', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '组选和值', 'name' => 'zuxuanhezhi', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '混合组选', 'name' => 'hunhezuxuan', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '组6单式', 'name' => 'zuliudanshi', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '组3单式', 'name' => 'zusandanshi', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '组6', 'name' => 'zuliu', 'parent' => 'zuxuan', 'mode' => 'housan');
$data[] = array('title' => '组3', 'name' => 'zusan', 'parent' => 'zuxuan', 'mode' => 'housan');

$data[] = array('title' => '一码不定位', 'name' => 'yimabudingwei', 'parent' => 'budingwei', 'mode' => 'housan');
$data[] = array('title' => '二码不定位', 'name' => 'ermabudingwei', 'parent' => 'budingwei', 'mode' => 'housan');

//前三
$data[] = array('title' => '前三', 'name' => 'qiansan');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'qiansan');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'qiansan');
$data[] = array('title' => '不定位', 'name' => 'budingwei', 'parent' => 'qiansan');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'qiansan');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'qiansan');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zhixuan', 'mode' => 'qiansan');
$data[] = array('title' => '跨度', 'name' => 'kuadu', 'parent' => 'zhixuan', 'mode' => 'qiansan');

$data[] = array('title' => '组选包胆', 'name' => 'zuxuanbaodan', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '组选和值', 'name' => 'zuxuanhezhi', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '混合组选', 'name' => 'hunhezuxuan', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '组6单式', 'name' => 'zuliudanshi', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '组3单式', 'name' => 'zusandanshi', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '组6', 'name' => 'zuliu', 'parent' => 'zuxuan', 'mode' => 'qiansan');
$data[] = array('title' => '组3', 'name' => 'zusan', 'parent' => 'zuxuan', 'mode' => 'qiansan');

$data[] = array('title' => '一码不定位', 'name' => 'yimabudingwei', 'parent' => 'budingwei', 'mode' => 'qiansan');
$data[] = array('title' => '二码不定位', 'name' => 'ermabudingwei', 'parent' => 'budingwei', 'mode' => 'qiansan');

//后二
$data[] = array('title' => '后二', 'name' => 'houer');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'houer');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'houer');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'houer');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'houer');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zhixuan', 'mode' => 'houer');
$data[] = array('title' => '跨度', 'name' => 'kuadu', 'parent' => 'zhixuan', 'mode' => 'houer');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zuxuan', 'mode' => 'houer');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zuxuan', 'mode' => 'houer');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zuxuan', 'mode' => 'houer');
$data[] = array('title' => '包胆', 'name' => 'baodan', 'parent' => 'zuxuan', 'mode' => 'houer');

//后二
$data[] = array('title' => '前二', 'name' => 'qianer');
$data[] = array('title' => '直&nbsp;&nbsp;&nbsp;选', 'name' => 'zhixuan', 'parent' => 'qianer');
$data[] = array('title' => '组&nbsp;&nbsp;&nbsp;选', 'name' => 'zuxuan', 'parent' => 'qianer');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zhixuan', 'mode' => 'qianer');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zhixuan', 'mode' => 'qianer');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zhixuan', 'mode' => 'qianer');
$data[] = array('title' => '跨度', 'name' => 'kuadu', 'parent' => 'zhixuan', 'mode' => 'qianer');

$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'zuxuan', 'mode' => 'qianer');
$data[] = array('title' => '单式', 'name' => 'danshi', 'parent' => 'zuxuan', 'mode' => 'qianer');
$data[] = array('title' => '和值', 'name' => 'hezhi', 'parent' => 'zuxuan', 'mode' => 'qianer');
$data[] = array('title' => '包胆', 'name' => 'baodan', 'parent' => 'zuxuan', 'mode' => 'qianer');

$data[] = array('title' => '一星', 'name' => 'yixing');
$data[] = array('title' => '定位胆', 'name' => 'dingweidan', 'parent' => 'yixing');
$data[] = array('title' => '复式', 'name' => 'fushi', 'parent' => 'dingweidan', 'mode' => 'yixing');





//根据name查找其子类
//$data 数据列表
//$result 树型结果
//由于parent 属性并不唯一，只能手动循环两层
function findChilds($data){
	$i = 0;
	$len = count($data);
	$top = findTopNode($data);
	$j = 0;
	$tLen = count($top);
	$k = 0;
	$sLen;
	
	for($j = 0; $j < $tLen; $j++){
		//第一层节点
		for($i = 0; $i < $len; $i++){
			if($top[$j]['name'] == $data[$i]['parent'] && empty($data[$i]['mode'])){
				if(empty($top[$j]['childs'])){
					$top[$j]['childs'] = array();
				}
				$top[$j]['childs'][] = $data[$i];
			}
		}
		//第二层节点
		$sLen = count($top[$j]['childs']);
		if($sLen > 0){
			for($k = 0; $k < $sLen; $k++){
				for($i = 0; $i < $len; $i++){
					if($top[$j]['childs'][$k]['name'] == $data[$i]['parent'] && $data[$i]['mode'] && $data[$i]['mode'] == $top[$j]['childs'][$k]['parent']){
						if(empty($top[$j]['childs'][$k]['childs'])){
							$top[$j]['childs'][$k]['childs'] = array();
						}
						$top[$j]['childs'][$k]['childs'][] = $data[$i];
					}
				}
			}
		}
	}
	
	return $top;
}
//获得顶级节点
function findTopNode($data){
	$len = count($data);
	$result = array();
	$i = 0;
	for(;$i < $len;$i++){
		if(empty($data[$i]['parent'])){
			$result[] = $data[$i];
		}
	}
	return $result;
}

//最终输出结果
$result = array(
	//游戏英文名称缩写
	'gameType' => 'ssc',
	//中文名称
	'gameTypeCn' => '时时彩',
	//默认启用的玩法
	'defaultMethod' => 'housan.zhixuan.fushi',
	//所有玩法列表
	'gameMethods' => findChilds($data),
	//游戏后台配置获取地址(倍数限制,期号等)
	'dynamicConfigUrl' => 'simulatedata/dynamicConfig.php',
	//单式上传地址
	'uploadPath' => './simulatedata/insertPreMoney.php'
	
);

$json = json_encode($result);

?>



(function(host, name, Event, undefined){
	var gameConfigData = <?=$json?>;
	var defConfig = {
		//当前彩种名称
		gameType : gameConfigData['gameType'],
		gameTypeCn : gameConfigData['gameTypeCn']
	},
	instance;
	

	var pros = {
		init:function(){
			var me = this;
			me.types = gameConfigData['gameMethods'];
		},
		//获取玩法类型
		getTypes:function(isFilterClose){
			return this.types;
		},
		getGameTypeCn:function(){
			return this.defConfig.gameTypeCn;
		},
		getDefaultMethod:function(){
			return gameConfigData['defaultMethod'];
		},
		getDynamicConfigUrl:function(){
			return gameConfigData['dynamicConfigUrl'];
		},
		getUploadPath:function(){
			return gameConfigData['uploadPath'];
		},
		//name  wuxing.zhixuan.fushi
		getTitleByName:function(name){
			var me = this,
				nameArr = name.split('.'),
				nameLen = nameArr.length,
				types = me.types,
				i = 0,
				len = types.length,
				i2,
				len2,
				i3,
				len3,
				tempArr = [],
				result = [];
			//循环一级
			for(;i < len;i++){
				if(types[i]['name'] == nameArr[0]){
					result.push(types[i]['title'].replace(/&nbsp;/g,''));
					if(nameLen > 1 && types[i]['childs'].length > 0){
						tempArr = types[i]['childs'];
						len2 = tempArr.length;
						//循环二级
						for(i2 = 0;i2 < len2;i2++){
							//console.log(tempArr[i2]['name']);
							if(tempArr[i2]['name'] == nameArr[1]){
								//result.push(tempArr[i2]['title'].replace(/&nbsp;/g,''));
								if(nameLen > 2 && tempArr[i2]['childs'].length > 0){
									tempArr = tempArr[i2]['childs'];
									len3 = tempArr.length;
									//循环三级
									for(i3 = 0;i3 < len3;i3++){
										if(tempArr[i3]['name'] == nameArr[2]){
											if(tempArr[i3]['headline']){
												return tempArr[i3]['headline'];
											}
											result.push(tempArr[i3]['title'].replace(/&nbsp;/g,''));
											return result;
										}
									}
								}else{
									return result;
								}
							}
						}
					}else{
						return result;
					}
				}
			}
			return '';
		}
		
	};
	
	var Main = host.Class(pros, Event);
	Main.defConfig = defConfig;
	Main.getInstance = function(cfg){
		return instance || (instance = new Main(cfg));
	};
	
	host.Games.SSC[name] = Main;
	
})(phoenix, "Config", phoenix.Event);










