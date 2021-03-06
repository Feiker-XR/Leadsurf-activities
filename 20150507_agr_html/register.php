<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>凤凰招商平台</title>
<meta name="description" content="凤凰招商平台">
<meta name="keywords" content="凤凰 凤凰娱乐 凤凰彩票 招商平台">
<link href="css/style.css" rel="stylesheet">
<!--[if lt IE 9]>
<script src="js/html5.js"></script>
<script src="js/css3-mediaqueries.min.js"></script>
<![endif]-->
<script>
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "//hm.baidu.com/hm.js?15b9c1eed16f6dd3c3da9b1538cba6e5";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
</script>
</head>
<body>
	<?php 
        include 'header.php';
    ?>
	<section class="register">
		<div class="layout">
			<h3></h3>
			<h4>您只需要做第一步，其余的交给我们！</h4>
			<div class="step"></div>
			<h4>请认真填写该信息，信息越真实详细处理速度越快</h4>
			<form id="form" action="form_action.asp" method="post">
				<ul class="ui-form">
					<li>
						<label for="username" class="ui-label"><i>*</i>姓名</label>
						<input type="text" value="" name="username" class="ui-input" id="username" /> 
						<span class="ui-prompt">请填写您的姓名</span>
						<span class="ui-check"></span>
						<span class="ui-right"></span>
					</li>
					<li>
						<label for="phonenum" class="ui-label"><i>*</i>电话</label>
						<input type="text" value="" name="phonenum" class="ui-input" id="phonenum" /> 
						<span class="ui-prompt">请填写您正确的电话号码</span>
						<span class="ui-check"></span>
						<span class="ui-right"></span>
					</li>
					<li>
						<label for="mail" class="ui-label"><i>*</i>邮箱</label>
						<input type="text" value="" name="mail" class="ui-input" id="mail" /> 
						<span class="ui-prompt">请填写您正确的电子邮箱地址</span>
						<span class="ui-check"></span>
						<span class="ui-right"></span>
					</li>
					<li>
						<label for="qq" class="ui-label"><i>*</i> QQ</label>
						<input type="text" value="" name="qq" class="ui-input" id="qq" /> 
						<span class="ui-prompt">请填写您经常使用的QQ号码</span>
						<span class="ui-check"></span>
						<span class="ui-right"></span>
					</li>
					<li class="address">
						<label class="ui-label" for="province"><i>*</i>地址</label>
						<select name="province" class="ui-select" id="province"><option>请选择省份</option></select>
						<select name="city" class="ui-select" id="city"><option>请选择城市</option></select>                         
						<span class="ui-prompt">请选择您所在地信息</span>
						<span class="ui-check"></span>
						<span class="ui-right"></span>
					</li>
					<li>
						<label class="ui-label">现在主营</label>
						<label class="ui-radio"><input name="yewu" value="0" type="radio" />彩票</label>
						<label class="ui-radio"><input name="yewu" value="1" type="radio" />电子游艺</label>
						<label class="ui-radio"><input name="yewu" value="2" type="radio" />真人娱乐</label>
						<label class="ui-radio"><input name="yewu" value="3" type="radio" />体育</label>
					</li>
					<li>
						<label class="ui-label">主要推广渠道</label>
						<label class="ui-checkbox"><input name="" value="0" type="checkbox" />QQ群</label>
						<label class="ui-checkbox"><input name="" value="1" type="checkbox" />SEO</label>
						<label class="ui-checkbox"><input name="" value="2" type="checkbox" />搜索引擎</label>
						<label class="ui-checkbox"><input name="" value="3" type="checkbox" />地面推广</label>
						<label class="ui-checkbox"><input name="" value="4" type="checkbox" />其他</label>
					</li>
					<li>
						<label class="ui-label">现在日量</label>
						<label class="ui-radio"><input name="riliang" value="0" type="radio" />0</label>
						<label class="ui-radio"><input name="riliang" value="1" type="radio" />10万</label>
						<label class="ui-radio"><input name="riliang" value="2" type="radio" />30万</label>
						<label class="ui-radio"><input name="riliang" value="3" type="radio" />50万</label>
						<label class="ui-radio"><input name="riliang" value="4" type="radio" />50万以上</label>
					</li>
					<li class="website">
						<label class="ui-label">现有推广网站</label>
						<input type="text" value="" class="ui-input" />
						<input type="text" value="" class="ui-input" /> 
					</li>
					<li><a href="javascript:void(0);" class="ui-btn" id="J-Submit">提 交</a></li>
				</ul>
			</form>
		</div>
	</section>
	<?php 
        include 'footer.php';
    ?>
	
	<div class="float">
		<a href="#" class="mail">
			<b>获取优惠</b>
		</a>
		<a href="#" class="customer"><b>联系客服</b></a>
	</div>
	
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/zhaoshang.js"></script>
	<script>
	$(function(){
		/*省，市联动*/
		var aProvince = ['请选择省','北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆','台湾','香港','澳门'];
		var aCity = [
			['请选择市'],
			['请选择市','东城','西城','朝阳','丰台','石景山','海淀','门头沟','房山','通州','顺义','昌平','大兴','平谷','怀柔','密云','延庆'],
			['请选择市','和平','河东','河西','南开','河北','红桥','东丽','西青','津南','北辰','宁河','武清','静海','宝坻','蓟县','滨海新区'],
			['请选择市','石家庄','唐山','秦皇岛','邯郸','邢台','保定','张家口','承德','沧州','廊坊','衡水'],
			['请选择市','太原','大同','阳泉','长治','晋城','朔州','晋中','运城','忻州','临汾','吕梁'],
			['请选择市','呼和浩特','包头','乌海','赤峰','通辽','鄂尔多斯','呼伦贝尔','巴彦淖尔','乌兰察布','兴安','锡林郭勒','阿拉善'],
			['请选择市','沈阳','大连','鞍山','抚顺','本溪','丹东','锦州','营口','阜新','辽阳','盘锦','铁岭','朝阳','葫芦岛'],
			['请选择市','长春','吉林','四平','辽源','通化','白山','松原','白城','延边'],
			['请选择市','哈尔滨','齐齐哈尔','鸡西','鹤岗','双鸭山','大庆','伊春','佳木斯','七台河','牡丹江','黑河','绥化','大兴安岭'],
			['请选择市','黄浦','卢湾','徐汇','长宁','静安','普陀','闸北','虹口','杨浦','闵行','宝山','嘉定','浦东新','金山','松江','奉贤','青浦','崇明'],
			['请选择市','南京','无锡','徐州','常州','苏州','南通','连云港','淮安','盐城','扬州','镇江','泰州','宿迁'],
			['请选择市','杭州','宁波','温州','嘉兴','湖州','绍兴','金华','衢州','舟山','台州','丽水'],
			['请选择市','合肥','芜湖','蚌埠','淮南','马鞍山','淮北','铜陵','安庆','黄山','滁州','阜阳','宿州','六安','亳州','池州','宣城'],
			['请选择市','福州','厦门','莆田','三明','泉州','漳州','南平','龙岩','宁德'],
			['请选择市','南昌','景德镇','萍乡','九江','新余','鹰潭','赣州','吉安','宜春','抚州','上饶'],
			['请选择市','济南','青岛','淄博','枣庄','东营','烟台','潍坊','济宁','泰安','威海','日照','莱芜','临沂','德州','聊城','滨州','菏泽'],
			['请选择市','郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','信阳','周口','驻马店','济源'],
			['请选择市','武汉','黄石','十堰','宜昌','襄阳','鄂州','荆门','孝感','荆州','黄冈','咸宁','随州','恩施','仙桃','潜江','天门','神农架'],
			['请选择市','长沙','株洲','湘潭','衡阳','邵阳','岳阳','常德','张家界','益阳','郴州','永州','怀化','娄底','湘西'],
			['请选择市','广州','韶关','深圳','珠海','汕头','佛山','江门','湛江','茂名','肇庆','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'],
			['请选择市','南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','百色','贺州','河池','来宾','崇左'],
			['请选择市','海口','三亚','三沙','五指山','琼海','儋州','文昌','万宁','东方','定安','屯昌','澄迈','临高','白沙','昌江','乐东','陵水','保亭','琼中'],
			['请选择市','万州','涪陵','渝中','大渡口','江北','沙坪坝','九龙坡','南岸','北碚','万盛','双桥','渝北','巴南','长寿','綦江','潼南','铜梁','大足','荣昌','璧山','梁平','城口','丰都','垫江','武隆','忠县','开县','云阳','奉节','巫山','巫溪','黔江','石柱','秀山','酉阳','彭水','江津','合川','永川','南川','两江新区'],
			['请选择市','成都','自贡','攀枝花','泸州','德阳','绵阳','广元','遂宁','内江','乐山','南充','眉山','宜宾','广安','达州','雅安','巴中','资阳','阿坝','甘孜','凉山'],
			['请选择市','贵阳','六盘水','遵义','安顺','铜仁','黔西南','毕节','黔东南','黔南'],
			['请选择市','昆明','曲靖','玉溪','保山','昭通','丽江','普洱','临沧','楚雄','红河','文山','西双版纳','大理','德宏','怒江','迪庆'],
			['请选择市','拉萨','昌都','山南','日喀则','那曲','阿里','林芝'],
			['请选择市','西安','铜川','宝鸡','咸阳','渭南','延安','汉中','榆林','安康','商洛'],
			['请选择市','兰州市','嘉峪关','金昌','白银','天水','武威','张掖','平凉','酒泉','庆阳','定西','陇南','临夏','甘南'],
			['请选择市','西宁','海东','海北','黄南','海南','果洛','玉树','海西'],
			['请选择市','银川','石嘴山','吴忠','固原','中卫'],
			['请选择市','乌鲁木齐','克拉玛依','吐鲁番','哈密','昌吉','博尔塔拉','巴音郭楞','阿克苏','克孜勒苏','喀什','和田','伊犁','塔城','阿勒泰','石河子','阿拉尔','图木舒克','五家渠','北屯'],
			['请选择市','台北市','高雄市','基隆市','台中市','台南市','新竹市','嘉义市','台北县','宜兰县','桃园县','新竹县','苗栗县','台中县','彰化县','南投县','云林县','嘉义县','台南县','高雄县','屏东县','澎湖县','台东县','花莲县'],
			['请选择市','中西区','东区','九龙城区','观塘区','南区','深水埗区','黄大仙区','湾仔区','油尖旺区','离岛区','葵青区','北区','西贡区','沙田区','屯门区','大埔区','荃湾区','元朗区'],
			['请选择市','花地玛堂区','圣安多尼堂区','大堂区','望德堂区','风顺堂区','氹仔','路环']
		];

		//开户银行所在城市	
		var oProvince = $('#province')[0];
		var oCity = $('#city')[0];
		for(var i = 0;i < aProvince.length;i++){
			oProvince.options[i] = new Option(aProvince[i]);	
		}
		for(var i = 0;i < aCity[0].length;i++){	
			oCity.options[i] = new Option(aCity[0][i]);	
		}	
		oProvince.onchange = function(){
			oCity.length = 0;
			for(var i = 0;i < aCity[this.selectedIndex].length;i++){
				oCity.options[i] = new Option(aCity[this.selectedIndex][i]);
			}
		};
	});
	</script>
</body>
</html>