/**
* 圆形进度加载条
* authorBy: WangXin
**/
(function(){
	//require('CSSURL/loading.css');
	window.loading= function(setting, callback) {
		//默认配置
		this.setting= {
			//loading的DOM容器
			name: '#loading',
			//回调函数
			callback: null,
			//记录当前状态
			loaded: {
				'domD' : false,
				'domC' : false,
				'domB' : false,
				'domA' : false
			}
		}
		//初始化插件
		this.init(setting);
	}
	loading.prototype= {
	
		/*
		*初始化
		*/
		init: function(setting) {
			//修改初始参数
			$.extend(this.setting, setting)
		},
		/*
		*整理LOADING事件的DOM结构
		*/
		_buildDom: function() {
			var dom = $('<div class="loading_area">' +
						'<div class="cent_area">' +
						'<div class="mask"></div>' +
						'<div class="loading_num"></div>' +
						'<div class="bg_area">' +
						'<div class="lefttop bg"></div>' +
						'<div class="righttop bg"></div>' +
						'<div class="leftbottom bg"></div>' +
						'<div class="rightbottom bg"></div>' +
						'</div>'+
						'</div>'+
						'</div>'),
				loadDom = $(this.setting.name),
				width = loadDom.width(),
				height = loadDom.height();

			dom.css({'width':width, 'height':height});
			//插入模型到制定DOM
			loadDom.append(dom);
		},
		/*
		*检查需要应用loading动画的DOM容器
		*/
		_checkDom: function() {
			var name = $(this.setting.name) || '',
				eDom = $(this.setting.name),
				mode = name.css('position');
			
			if(mode == 'relative' || mode == 'absolute' || mode == 'fixed'){
				return;
			}
			eDom.css('position', 'relative');
		},
		/*
		*加载进度过程效果
		*@param num[num] 需要进行load的数值
		*/
		toLoadNum: function(num, callback) {
			var num = num ? parseInt(num) : 0,
				ANIMATENUM = 4,
				eDom = $(this.setting.name),
				domA = eDom.find('.lefttop'),
				domB = eDom.find('.leftbottom'),
				domC = eDom.find('.rightbottom'),
				domD = eDom.find('.righttop'),
				loaded = this.setting.loaded,
				currentNum;

				
			callback && callback();

			if(num > 0 && num <= 25) {
				// currentNum = num * ANIMATENUM - 42;
				// domD.css('background-position', '-9px ' + currentNum + 'px');
				// if(num == 25){
				// 	loaded['domD'] = true;
				// }

				currentNum = -(num) * 3.8 - 36;
				domB.css('background-position', '-70px ' + currentNum + 'px');
				if(num == 25){
					loaded['domB'] = true;
				}
			}
			if(num > 25 && num <= 50) {

				if(!loaded['domB']){
					this.toLoadNum(25)
				}
				currentNum = (num - 25) * 3.5 - 20;
				domA.css('background-position', currentNum + 'px' + ' -60px');
				if(num == 50){
					loaded['domA'] = true;
				}
			}
			if(num > 50 && num <= 75) {
				currentNum = (num - 50) * ANIMATENUM - 30;
				domD.css('background-position', '15px ' + currentNum + 'px');
				
				if(num == 75){
					loaded['domD'] = true;
				}
			}
			if(num > 75 && num < 100) {

				if(!loaded['domD']){
					this.toLoadNum(75)
				}
				currentNum = -(num - 75) * 3.5 - 50;
				domC.css('background-position', currentNum + 'px' + ' 12px');
				if(num == 70){
					loaded['domC'] = true;
				}
			}

			//this.showLoadNum(num);
			
			if(num >= 100){
				//销毁dom
				//this._loadEnd();
			}
		},
		/**
		*显示数字进度
		*@param num[num] 需要进行load的数值
		*/
		showLoadNum: function(num) {
			var dom = $(this.setting.name).find('.loading_num');
			dom.text(num + '%');
		},
		/*
		*加载完毕销毁DOM
		*@param num[num] 需要进行load的数值
		*/
		_loadEnd: function() {
			var eDom = $(this.setting.name).find('.loading_area');
			//销毁load的DOM对象
			eDom.remove();
		}
	}
})();