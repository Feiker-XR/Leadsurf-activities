/**
 * 十周年活动JS
 * Author by Cliff 
 */
;(function(undefined) {

		//存储选定号码
	var selectedNum = [],
		
		//结果
		resultArea = '.banner-inner',

		/*
		 * 弹窗相关
		 */
		dialog = {
			//弹窗统一样式名称
			dialogCssName : $('.pop'),
			//关闭按钮样式
			closeButton : '.close',
			//弹窗内容层
			content : $('#dialog-content'),
			//需要显示幸运数字的容器
			luckNum : '.luck-number, .luck-number-check',
			//弹窗内容
			dialogInfo : {
				one : '<div class="pop-content">'
						+	'<div class="step step-1"></div>'
						+	'<h3 class="title"></h3>'
						+	'<ul id="selectnum" class="betting">'
						+		'<li>'
						+			'<strong>百位</strong>'
						+			'<a href="" hidefocus="true">0</a>'
						+			'<a href="" hidefocus="true">1</a>'
						+			'<a href="" hidefocus="true">2</a>'
						+			'<a href="" hidefocus="true">3</a>'
						+			'<a href="" hidefocus="true">4</a>'
						+			'<a href="" hidefocus="true">5</a>'
						+			'<a href="" hidefocus="true">6</a>'
						+			'<a href="" hidefocus="true">7</a>'
						+			'<a href="" hidefocus="true">8</a>'
						+			'<a href="" hidefocus="true">9</a>'
						+		'</li>'
						+		'<li>'
						+			'<strong>十位</strong>'
						+			'<a href="" hidefocus="true">0</a>'
						+			'<a href="" hidefocus="true">1</a>'
						+			'<a href="" hidefocus="true">2</a>'
						+			'<a href="" hidefocus="true">3</a>'
						+			'<a href="" hidefocus="true">4</a>'
						+			'<a href="" hidefocus="true">5</a>'
						+			'<a href="" hidefocus="true">6</a>'
						+			'<a href="" hidefocus="true">7</a>'
						+			'<a href="" hidefocus="true">8</a>'
						+			'<a href="" hidefocus="true">9</a>'
						+		'</li>'
						+		'<li>'
						+			'<strong>个位</strong>'
						+			'<a href="" hidefocus="true">0</a>'
						+			'<a href="" hidefocus="true">1</a>'
						+			'<a href="" hidefocus="true">2</a>'
						+			'<a href="" hidefocus="true">3</a>'
						+			'<a href="" hidefocus="true">4</a>'
						+			'<a href="" hidefocus="true">5</a>'
						+			'<a href="" hidefocus="true">6</a>'
						+			'<a href="" hidefocus="true">7</a>'
						+			'<a href="" hidefocus="true">8</a>'
						+			'<a href="" hidefocus="true">9</a>'
						+		'</li>'
						+	'</ul>'
						+'</div>'
						+'<div class="pop-btn">'
						+	'<input id="sub" type="submit" class="submit-btn" name="save" value="选好了">'
						+	'<span class="ui-check tip_selectnum" style="display: none">请选择三位号码</span>'
						+'</div>',

				two : 	'<div class="pop-content">'
						+	'<div class="pop-content">'
						+		'<div class="luck-number">555</div>'
						+	'</div>'
						+	'<div class="pop-btn">'
						+		'<a class="text-btn" type="submit" href="javascript:void(0)" id="goback">上一步</a>'
						+		'<input value="确定" name="save" class="submit-btn" id="finish" type="submit">'
						+	'</div>'
						+	'</div>'
			}
		},

		/*
		 * 号码选择弹窗
		 */
		selectArea = {
			//选择数字容器
			selectContainer : '#selectnum',
			//选中标记名称
			selectedName : 'current',
			//提交按钮名称
			subButton : '#sub',
			//单个数字容器
			numContainer : '#selectnum a',
			//抽奖说明按钮
			raffleButton : '.raffle-explain'
		},

		/**
		 * 弹窗关闭
		 */
		closeDialog = function() {
			var diaWindow = $(this).parents('.pop')[0];

			//隐藏弹窗
			$(diaWindow).hide();
			//清空数字缓存
			selectedNum = [];
		},

		/**
		 * 选择数字环节
		 */
		chooseNum = function () {
			//绑定用户点击数字事件
			dialog.dialogCssName.on('click', selectArea.numContainer, saveChange)
			//用户提交事件
			.on('click', selectArea.subButton, doSubmit)
			//点击抽奖
			.on('click', selectArea.raffleButton, function() {
				$('.lottery-info').toggle();
			})
		},

		/**
		 * 数字单一逻辑
		 */
		keepSole = function(eDom) {
			var currentDom = selectArea.selectedName,
				selectContainer = $(selectArea.selectContainer);

			//当前数字的父级容器
			parentDom = eDom.parent();
			//清除选中标记
			parentDom.find('.' + currentDom).removeClass();
			//如果两次选择同一元素
			if(eDom.text() != selectedNum[selectContainer.find('li').index(parentDom)]){
				//添加选中标记
				eDom.addClass(currentDom);
				//缓存选中结果
				selectedNum[selectContainer.find('li').index(parentDom)] = eDom.text();
			}else {
				selectedNum[selectContainer.find('li').index(parentDom)] = undefined;
			}
		},

		/**
		 * 保存用户点击选择数字
		 */
		saveChange = function(e) {
			//阻止默认事件
			e.preventDefault();
			//保持单行数字单一
			keepSole($(this));
		},

		/**
		 * 保存用户点击选择数字
		 * @param {string} [msg] [用来进行用户提示的文字信息]
		 */
		messageTip = function(msg) {
			
			$('.tip_selectnum').show();
		},

		/**
		 * 校验当前的用户选择结果 
		 */
		doSubmit = function() {

			if(selectedNum.length < 3) {
				messageTip();
				return;
			} 

			for(var i=0; i<selectedNum.length; i++) {
				
				if(selectedNum[i] == undefined) {
					messageTip();
					return;
				}
			}

			//显示用户选择的号码
			openDialog('two', function() {
				$('.luck-number').text(selectedNum.toString().replace(/\,/g, ''));
			});
		},

		/**
		 * 填写信息
		 */
		inputInfo = function() {
			//用户点击上一步动作
		 	dialog.dialogCssName.on('click', '#goback', function() {
				openDialog('one');
				//清空数字缓存
				selectedNum = [];
			})
			//完成选号
			.on('click', '#finish', function() {
				$('.btn-signup').hide();
				$('.btn-complete').text(selectedNum.toString().replace(/\,/g, '')).show();
				closeDialog();
			});
		},

		scrollFalse = function(e) { 
		    e.preventDefault();  
		},

		/**
		 * dialog control
		 */
		dialogControl = function() {
			//抢票BUTTON
			$('body').on('click', '.btn-signup', function(){
				openDialog('one');
			});
			//关闭弹窗事件 
			dialog.dialogCssName.on('click', dialog.closeButton, closeDialog)
		},

		/**
		 * 选择关闭当前的弹窗
		 */
		closeDialog = function() {
			var header = $('.header');

			//关闭当前的显示弹窗
			dialog.dialogCssName.hide();
			selectedNum = [];
			
			//$('.mask').hide();

			if(/firefox/.test(navigator.userAgent.toLowerCase())){	

				window.document.removeEventListener('DOMMouseScroll', scrollFalse, false);  
			}else{  
			    window.document.onmousewheel = function(e){  
			        e = e || window.event;  

			        e.returnValue=true;  
			    };  
			}
		},

		/**
		 * 选择当前的弹窗打开
		 * @param {num} [num] [用来打开当前的弹窗层]
		 */
		openDialog = function(num, callback) {
			var top = $(window).scrollTop();
			
			if(/firefox/.test(navigator.userAgent.toLowerCase())){	
				window.document.addEventListener('DOMMouseScroll',scrollFalse,false); 
			}else{  
			    window.document.onmousewheel = function(e){  
			        e = e || window.event;  
			        e.returnValue=false  
			    };  
			}


			//遮罩层显示
			//$('.mask').css('top', top).show();
			
			//关闭当前的显示弹窗
			dialog.dialogCssName.hide();
			//显示要打开的弹窗
			dialog.content.html(dialog.dialogInfo[num]);

			var dialogTops = ($(window).height() - $('#pop').height()) / 2 + top;

			//显示当前弹窗
			dialog.dialogCssName.css('top', dialogTops).show();
			//执行回调函数
			if(callback) {
				callback();
			}
		};

	//弹窗控制
	dialogControl();
	//选择幸运号码
	chooseNum();
	//完成报名
	inputInfo();
})();