

(function(host, name, Event, undefined){
	var defConfig = {
		//当前彩种名称
		gameType : 'ssl',
		gameTypeCn : '时时乐'
	},
		instance;
		
		//五星
	var sanxing,
		//前三
		erxing,
		//后二
		yixing;

	//后三玩法配置
	(function(){
		/**
		title 标题
		name 英文名称
		isColse 是否关闭
		**/
			  
		//具体玩法类型===========================================
		//直选
			//复式 
		var fushi = {title:'复式',name:'fushi', parent:'zhixuan', mode:'sanxing'},
			//单式
			danshi = {title:'单式',name:'danshi', parent:'zhixuan', mode:'sanxing'},
			//和值
			hezhi = {title: '和值', name: 'hezhi', parent:'zhixuan', mode:'sanxing', headline:['后二','直选和值']},
			//跨度
			kuadu = {title: '跨度', name: 'kuadu', parent:'zhixuan', mode:'sanxing', headline:['后二','直选跨度']},
		//组选
			//组三
			zusan = {title: '组三', name:'zusan', parent:'zuxuan', mode:'sanxing'},
			//组六
			zuliu = {title: '组六', name:'zuliu', parent:'zuxuan', mode:'sanxing'},
			//组三单式
			zusandanshi = {title: '组三单式',name:'zusandanshi', parent:'zuxuan', mode:'sanxing'},
			//组六单式
			zuliudanshi = {title:'组六单式',name:'zuliudanshi', parent:'zuxuan', mode:'sanxing'},
			//混合组选
			hunse = {title:'混合组选',name:'hunhezuxuan', parent:'zuxuan', mode:'sanxing'},
			//组选和值
			zuxuanhezhi = {title:'组选和值',name:'zuxuanhezhi', parent:'zuxuan', mode:'sanxing'},
			//组选包胆
			zuxuanbaodan = {title:'组选包胆',name:'zuxuanbaodan', parent:'zuxuan', mode:'sanxing'},
		//不定位
			//一码不定位
			yimabudingwei = {title:'一码不定位',name:'yimabudingwei', parent:'budingwei', mode:'sanxing'},
			//二码不定位
			ermabudingwei = {title:'二码不定位',name:'ermabudingwei', parent:'budingwei', mode:'sanxing'};
		
		
		//玩法组===========================================
		//直选
		var zhixuan = {title:'直&nbsp;&nbsp;&nbsp;选',name:'zhixuan', parent:'sanxing',childs:[fushi, danshi, hezhi, kuadu]},
			zuxuan = {title:'组&nbsp;&nbsp;&nbsp;选',name:'zuxuan', parent:'sanxing',childs:[zusan, zuliu, zusandanshi, zuliudanshi, hunse, zuxuanhezhi, zuxuanbaodan]},
			budingwei = {title:'不定位',name:'budingwei', parent:'sanxing',childs:[yimabudingwei, ermabudingwei]};
		
		
		//玩法分类
		//五星
		sanxing = {title:'三星',name:'sanxing',childs:[zhixuan, zuxuan, budingwei]};
	})();

	//后二玩法配置
	(function(){
		/**
		title 标题
		name 英文名称
		isColse 是否关闭
		**/
			  
		//具体玩法类型===========================================
		//直选
			//复式 
		var fushi = {title:'复式',name:'fushi', parent:'zhixuan', mode:'erxing'},
			//单式
			danshi = {title:'单式',name:'danshi', parent:'zhixuan', mode:'erxing'},
			//和值
			hezhi = {title: '和值', name: 'hezhi', parent:'zhixuan', mode:'erxing', headline:['后二','直选和值']},
			//跨度
			kuadu = {title: '跨度', name: 'kuadu', parent:'zhixuan', mode:'erxing', headline:['后二','直选跨度']},
		//组选
			//组三
			fushizu = {title: '复式', name:'fushi', parent:'zuxuan', mode:'erxing', headline:['后二','组选']},
			//组六
			danshizu = {title: '单式', name:'danshi', parent:'zuxuan', mode:'erxing', headline:['后二','组选单式']},
			//组三单式
			hezhizu = {title: '和值',name:'hezhi', parent:'zuxuan', mode:'erxing', headline:['后二','组选和值']},
			//组六单式
			baodanzu = {title:'包胆',name:'baodan', parent:'zuxuan', mode:'erxing', headline:['后二','组选包胆']};
		
		//玩法组===========================================
		//直选
		var zhixuan = {title:'直&nbsp;&nbsp;&nbsp;选', name:'zhixuan', parent:'erxing', childs:[fushi, danshi, hezhi, kuadu]},
			zuxuan = {title:'组&nbsp;&nbsp;&nbsp;选', name:'zuxuan', parent:'erxing', childs:[fushizu, danshizu, hezhizu, baodanzu]};
		
		//玩法分类
		//后二
		erxing = {title: '二星',name: 'erxing', childs:[zhixuan, zuxuan]};
	})();

	//一星玩法配置
	(function(){
		/**
		title 标题
		name 英文名称
		isColse 是否关闭
		**/
			  
		//具体玩法类型===========================================
		//不定位
		var fushi = {title:'复式', name:'fushi', parent:'dingweidan', mode:'yixing'};

		//玩法组===========================================
		//直选
		var dingweidan = {title:'定位胆', name:'dingweidan', parent:'yixing', childs:[fushi]};
		//玩法分类
		//一星
		yixing = {title:'一星', name:'yixing', childs: [dingweidan]};
	})();

	var pros = {
		init:function(){
			var me = this;
			me.types = [sanxing, erxing, yixing];
		},
		//获取玩法类型
		getTypes:function(isFilterClose){
			return this.types;
		},
		getGameTypeCn:function(){
			return this.defConfig.gameTypeCn;
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
	
	host.Games.SSL[name] = Main;
	
})(phoenix, "Config", phoenix.Event);









