/**
 * 十周年活动JS
 * Author by Cliff 
 */
(function(undefined) {

		//存储选定号码
	var selectedNum = [],

		//窗体高度
		windowTop = '', 
		
		//结果
		resultArea = '.banner-inner',

		//活动细则table切换
		box = {
			//权益按钮
			joinButton : '.tab-title li:first',
			//活动细则
			rules : '.tab-title li:last',
			//权益内容
			joinInfo : '.tab-content > li:first',
			//细则内容
			rulesInfo : '.tab-content > li:last'
		}

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
						+	'<div class="text">'
						+		'<p>幸运号码在活动周期内扮演重要角色，日抽奖、大奖车型选择均已此号码为评判条件，此号码一经选择无法修改，请慎重。具体评判规则请参看活动细则。<a href="javascript:;" class="raffle-explain">日抽奖说明</a><i class="triangle-down"></i></p>'
						+		'<p class="lottery-info">日抽奖：幸运号码与重庆时时彩每日第120期开奖号码后三位数字比对。大奖车型选择：幸运号码与赛事结束后一日的3D开奖结果比对。</p>'
						+	'</div>'
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
						+	'<div class="step step-1"></div>'
						+	'<div class="luck-number">168</div>'
						+	'<div class="text-info"><i class="ico-info"></i><span>手机与E-mail确保真实，方便在您中奖时平台能够及时与您取得联系。</span></div>'
						+		'<div class="ui-from">'
						+			'<ul>'
						+				'<li>'
						+					'<span class="ui-check tip_phone" style="display: none">请正确输入11位手机号码</span>'
						+					'<label for="info-phoneNum" class="ui-label">手机号:</label>'
						+					'<input type="text" value="" id="info-phoneNum" class="ui-input">'
						+				'</li>'
						+				'<li>'
						+					'<span class="ui-check tip_email" style="display: none">请正确输入Email信息</span>'
						+					'<label for="info-email" class="ui-label">E-mail:</label>'
						+					'<input type="text" value="" id="info-email" class="ui-input">'
						+				'</li>'
						+				'<li class="ui-other">'
						+					'<label class="label" id="checkInfo"><input type="checkbox" class="checkbox" checked="check">我已阅读</label>'
						+					'<a id="rules" href="javascript:void(0);">活动细则</a>'
						+				'</li>'
						+			'</ul>'
						+			'<div class="ui-info">用户信息的保密性是我们最基本的运营原则。所有用户信息皆会安全地存储于我们的系统内。</div>'
						+		'</div>'
						+	'<div class="pop-btn">'
						+		'<a id="goback" href="javascript:void(0)" type="submit" class="text-btn">上一步</a>'
						+		'<input id="compelete-info" type="submit" class="submit-btn" name="save" value="填好了">'
						+	'</div>',

				three : '<div class="pop-content">'
						+	'<div class="step step-2"></div>'
						+	'<div class="verification">'
						+		'<div class="text-info"><i class="ico-info"></i><span>请核实您的信息（幸运号、手机号、Email）</span></div>'
						+		'<div class="phone-info"><i class="ico-phone"></i><span>手机号：<strong class="show_phone">129388866</strong></span></div>'
						+		'<div class="mail-info"><i class="ico-mail"></i><span>E-mail：<strong class="show_email">tenyear@sina.com</strong></span></div>'
						+		'<div class="re-enter"></div>'
						+	'</div>'
						+	'<div class="luck-number-check">168</div>'
						+'</div>'
						+'<div class="pop-btn">'
						+	'<input id="affirm" type="submit" class="submit-btn" name="save" value="确认">'
						+'</div>',

				four : '<div class="pop-content">'
						+	'<div class="step step-3"></div>'
						+	'<div class="success">'
						+		'<div class="bg-success"></div>'
						+	'</div>'
						+'</div>'
						+'<div class="pop-btn">'
						+	'<input id="join-game" type="submit" class="submit-btn" name="save" value="参加竞猜小游戏">'
						+'</div>',

				five : '<div class="pop-content">'
						+	'<div class="step step-3"></div>'
						+	'<div class="error">'
						+		'<div class="bg-error"></div>'
						+	'</div>'
						+'</div>'
						+'<div class="pop-btn">'
						+	'<input type="submit" class="submit-btn btn-green" name="save" value="去充值">'
						+'</div>',

				six : '<div class="pop-content">'
						+	'<div class="countdown">'
						+		'<em><strong class="day"></strong>天<strong class="hour"></strong>时<strong class="minute"></strong>分<strong class="second"></strong>秒</em>'
						+	'</div>'
						+	'<div class="pic-game clearfix">'
						+		'<div class="pic">'
						+			'<div class="pic-title"></div>'
						+			'<img src="images/img1.png" alt="" />'
						+		'</div>'
						+		'<div class="list">'
						+			'<ul id="carbrand" class="clearfix">'
						+				'<li carname="Porsche">保时捷</li>'
						+				'<li carname="Lamborghini">兰博基尼</li>'
						+				'<li carname="Maserati">玛莎拉蒂</li>'
						+				'<li carname="AstonMartin">阿斯顿马丁</li>'
						+				'<li carname="Ferrari">法拉利</li>'
						+				'<li carname="Bentley">宾利</li>'
						+			'</ul>'
						+			'<div class="integration"></div>'
						+			'<input id="sub-game" type="submit" class="submit-btn btn-disable" name="save" value="确认">'
						+		'</div>'
						+	'</div >'
						+'</div>'
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
		
		/*
		 * 个人信息弹窗相关
		 */
		personInfo = {
			//上一步
			backward : '#goback',
			//活动细则按钮
			activityRules : '#rules',
			//活动细则容器
			rulesContainer : '#activityrules',
			//个人信息填写完成按钮
			compeleteButton : '#compelete-info',
			//输入不正确按钮
			errorInfoButton : '.re-enter',
			//信息相关
			info : {
				//手机号
				phoneNumDom : '#info-phoneNum',
				//email
				emailDom : '#info-email',
				//手机&&邮箱缓存
				phone : '',
				email : ''
			}
		},

		//进入小游戏
		joinGame = '#join-game',

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

		/*
		 * 信息展示
		 */
		infoShow = {
			//手机号
			phone : '.show_phone',
			//email
			email : '.show_email',
			//确认按钮
			enterButton : '#affirm'
		},

		/**
		 * 小游戏相关
		 */
		game = {
			//品牌列表
			brandContainer : '#carbrand',
			//选择按钮
			chooseButton : '#carbrand li',
			//记录缓存
			saveChange : '',
			//游戏确认按钮
			subButton : '#sub-game',
			//品牌名称
			carName : ''
		},

		/**
		 * 头部下拉计算
		 */
		animateHeader = function() {
			var header = $('.header'),
				top = $(window).scrollTop(),
				time;

			$(window).scroll(function() {
				if(time){
					clearTimeout(time);
					time = null;
				}

				time = setTimeout(function(){
					//下拉
					if($(window).scrollTop() > 0) {
						//如果是IE6 && 程序员要坚持优雅降级观念！
						if('undefined' == typeof(document.body.style.maxHeight)) {
							header.show();
						}else{
							if(header.css('top') == '-98px') {
								header.animate({
									'top': 0
								})
							}
						}
						
					//上滚
					}else {
						//如果是IE6 && 程序员要坚持优雅降级观念！
						if('undefined' == typeof(document.body.style.maxHeight)) {
							header.hide();
						}else{
							if(header.css('top') == '0px') {
								header.animate({
									'top': -98
								})
							}
						}
					}

					top = $(window).scrollTop();
					clearTimeout(time);
					time = null;
				},30)
			})
		},

		/**
		 * 活动已经开始时间
		 */
		startWeek = function(endtime) {
			var endtime = new Date(endtime),
				nowtime = new Date(),
				leftsecond = parseInt((nowtime.getTime() - endtime.getTime())/1000),
				__w = parseInt(leftsecond/3600/24/7) + 1;

				__w = __w == 0  ? '&nbsp;&nbsp;0' : checkNum(__w);

				$('.week').html(__w);
		},

		//数字检查
		checkNum = function(num) {
			if(num < 10){
				return '0' + num;
			}
			return num;
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
			//如果两次选择统一元素
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
				$(dialog.luckNum).text(selectedNum.toString().replace(/\,/g, ''));
			});
		},

		/**
		 * 计算当前所有元素的定位
		 */
		dialogPosition = function(){
			var winHeight = $(window).height(),
				diaNum = $(dialog.dialogCssName),
				diaHeight = diaNum.outerHeight();
			

			//计算当前弹窗高度
			if(winHeight > diaHeight) {
				//计算出当前的平均高度
				offsetTop = (winHeight - diaHeight) / 2;
				//垂直居中显示
				diaNum.css('top', offsetTop)
			}else {
				diaNum.css('top', 0);
			}	
		},

		/**
		 * 检查个人信息
		 */
		checkPersonInfo = function() {
			var info = personInfo.info,
				phoneNUM = $(info.phoneNumDom).val(),
				emailNUM = $(info.emailDom).val(),
				checkbox = $('.checkbox'),
				numCheck = /^0{0,1}(13[0-9]|15[7-9]|15[0-2]|18[0-9])[0-9]{8}$/,
				emailCheck =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			
			$('#checkInfo').bind('click', function() {
				if($(this).find('.checkbox').is(':checked')){
					$('#rules').html('活动细则')
				}
			})

			//检查手机号
			if(phoneNUM != '' && numCheck.test(phoneNUM) == false){
				$('.tip_phone').show();
				//缓存手机号码
				info.phone = phoneNUM;
				return;
			}else {
				$('.tip_phone').hide();
			}

			//检查email
			if(emailNUM != '' && emailCheck.test(emailNUM) == false){
				$('.tip_email').show();
				//缓存email信息
				info.email = emailNUM;
				return;
			}else {
				$('.tip_email').hide();
			}

			if(!checkbox.is(':checked')){
				$('#rules').html('活动细则&nbsp;&nbsp;请勾选')
				return;
			}



			//显示用户选择的号码
			openDialog('three', function() {
				$(dialog.luckNum).text(selectedNum.toString().replace(/\,/g, ''));
				$(infoShow.phone).text(phoneNUM);
				$(infoShow.email).text(emailNUM);
			});
		},

		/**
		 * 获取用户账户信息
		 * 检查是否续费 
		 */
		submitInfo = function() {
			
			$.getJSON('js/result.json', function(data) {
				
				if(data.code == 0) {
					//判断用户余额
					if(data.status == 0) {
						openDialog('four', function() {
							
							if(window.pageType == "already") {
								$('#join-game').val('报名完成').attr('data-over', true);
							}
						});

					}else {
						openDialog('five');
					}
				}else {
					alert(data.message)
				}
			})
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
		 * 游戏相关
		 */
		gameStart = function() {
			//参加竞猜小游戏
			dialog.dialogCssName.on('click', joinGame, function() {
				
				if($(this).attr('data-over')) {
					$('.banner').removeClass('banner3 banner4').addClass('banner7');
					closeDialog();
				}else {
					openDialog('six');
				}
			})

			//小游戏选择
			.on('click', game.chooseButton, function() {

				//清除选择记录
				$(game.chooseButton).removeClass('current');
				//选择标记
				$(this).addClass('current');
				//记录车辆品牌w
				game.saveChange = $(this).attr('carname');
				//记录车辆名称
				game.carname = $(this).text();
				//取消选定的class
				$(game.subButton).removeClass('btn-disable');
			})

			//游戏完成确认
			.on('click', game.subButton, function() {
					//结果dom集合
				var resultBox = $(resultArea),
					//选定之前结果集
					before = resultBox.find('.grab-votes'),
					//选定以后结果
					result = resultBox.find('.guess-results');

					if($(this).hasClass('btn-disable')){
						return;
					}

					//隐藏按钮 && 显示结果
					before.hide();
					result.find('em').text(game.carname);
					result.show();
					//关闭弹窗
					closeDialog();
			})
		},

		/**
		 * 填写信息
		 */
		inputInfo = function() {
			//用户点击上一步动作
		 	dialog.dialogCssName.on('click', personInfo.backward, function() {
				openDialog('one');
				//清空数字缓存
				selectedNum = [];
			})
			//展开活动细则
			.on('click', personInfo.activityRules, function() {
				var top = ($(window).height() - 700)/2,
					left = ($(window).width() - 938)/2;

				//打开活动细则窗口
				window.open('activity-rules.html','newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			})
			//个人信息填写完成
			.on('click', personInfo.compeleteButton, checkPersonInfo)
			//重新输入个人信息
			.on('click', personInfo.errorInfoButton, function() {
				openDialog('one');
				//清空数字缓存
				selectedNum = [];
			})
			//审核用户账户信息
			.on('click', infoShow.enterButton, submitInfo)
			//参加竞猜小游戏
			.on('click', joinGame, function() {
				openDialog('six');
			});
		},

		scrollFalse = function(e) { 
		    e.preventDefault();  
		},

		/**
		 * dialog control
		 */
		dialogControl = function() {
			//弹窗垂直居中
			dialogPosition();
			//抢票BUTTON
			$('body').on('click', '.grab-votes, .banner3 .apply-now, .banner4 .apply-now', function(){
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
			
			$('.mask').hide();

			if(/firefox/.test(navigator.userAgent.toLowerCase())){	

				window.document.removeEventListener('DOMMouseScroll', scrollFalse, false);  
			}else{  
			    window.document.onmousewheel = function(e){  
			        e = e || window.event;  

			        e.returnValue=true;  
			    };  
			}

			if($(window).scrollTop() == 0){return};

			if('undefined' == typeof(document.body.style.maxHeight)) {
				header.show();
			}else {
				header.animate({
					'top': 0
				})
			}
		},

		//
		infoChange = function() {
			//参赛按钮
			$(box.joinButton).bind('click', function() {
				$(box.rules).removeClass('current');
				$(this).addClass('current');
				$(box.joinInfo).show();
				$(box.rulesInfo).hide();
			})

			//活动细则
			$(box.rules).bind('click', function() {
				$(box.joinButton).removeClass('current');
				$(this).addClass('current');
				$(box.rulesInfo).show();
				$(box.joinInfo).hide();
			})
		},

		rulesDialog = function() {
			var content = $('.tab-content'),
				btn = content.find('.more'),
				top = ($(window).height() - 700)/2,
				left = ($(window).width() - 938)/2;

			btn.eq(0).bind('click', function() {
				//打开活动细则窗口
				window.open('activity-rules.html#signup', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			});
			btn.eq(1).bind('click', function() {
				//打开活动细则窗口
				window.open('activity-rules.html#lottery', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			});
			btn.eq(2).bind('click', function() {
				//打开活动细则窗口
				window.open('activity-rules.html#week', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			});
			btn.eq(3).bind('click', function() {
				//打开活动细则窗口
				window.open('activity-rules.html#weekrank', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			});
			btn.eq(4).bind('click', function() {
				//打开活动细则窗口
				window.open('activity-rules.html#allrank', 'newwindow','height=700,width=938,top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=yes,resizable=no,location=no,status=no')
			});
		},

		/**
		 * 选择当前的弹窗打开
		 * @param {num} [num] [用来打开当前的弹窗层]
		 */
		openDialog = function(num, callback) {
			var top = $(window).scrollTop(),
				header = $('.header');
			
			if(/firefox/.test(navigator.userAgent.toLowerCase())){	
				window.document.addEventListener('DOMMouseScroll',scrollFalse,false); 
			}else{  
			    window.document.onmousewheel = function(e){  
			        e = e || window.event;  
			        e.returnValue=false  
			    };  
			}


			//遮罩层显示
			$('.mask').css('top', top).show();
			
			//关闭当前的显示弹窗
			dialog.dialogCssName.hide();
			//显示要打开的弹窗
			dialog.content.html(dialog.dialogInfo[num]);

			var dialogTops = ($(window).height() - $('#pop').height()) / 2 + top;

			if('undefined' == typeof(document.body.style.maxHeight)) {
				$('#pop').css('top', dialogTops);
				header.hide();
			}else {
				//重新计算位置
				dialogPosition();
				header.animate({
					'top': -98
				})
			}

			//显示当前弹窗
			dialog.dialogCssName.show();
			//执行回调函数
			if(callback) {
				callback();
			}
		},
		//选择时间
		mathTime = function() {
			var qiangpiaoT = new Date(qiangpiao).getTime(),
				qidongT = new Date(qidong).getTime(),
				baomingT = new Date(baoming).getTime(),
				gongbuT = new Date(gongbu).getTime(),
				nowtime = new Date().getTime(),
				dom = $('.header-inner .timeline');

			switch(true){
				case nowtime < qiangpiaoT:
				return qiangpiao;
				break;
				case nowtime < qidongT && nowtime > qiangpiaoT:
				dom.removeClass().addClass('timeline2');
				return qidong;
				break;
				case nowtime <  baomingT && nowtime > qidongT:
				dom.removeClass().addClass('timeline3');
				return baoming;
				break;
				case nowtime < gongbuT && nowtime > baomingT:
				dom.removeClass().addClass('timeline4');
				return gongbu;
				break;
			}
		},

		/**
		 * 倒计时时间计算
		 * @param {[num]} [year] [年份]
		 */
		time = function(endtime) { 
			var endtime = new Date(endtime),
				nowtime = new Date(),
				leftsecond = parseInt((endtime.getTime() - nowtime.getTime())/1000),
				__d = parseInt(leftsecond/3600/24),
				__h = parseInt((leftsecond/3600)%24),
				__m = parseInt((leftsecond/60)%60),
				__s = parseInt(leftsecond%60),
				c = new Date(),
				q = ((c.getMilliseconds())%10),
				timeArea = $('.countdown');

			__d = __d == 0  ? '&nbsp;&nbsp;0' : checkNum(__d);
			
			timeArea.find('.day').html(__d);
			timeArea.find('.hour').text(checkNum(__h));
			timeArea.find('.minute').text(checkNum(__m));
			timeArea.find('.second').text(checkNum(__s));
		},

		//seo控制
		seoControl = function() {
			var seo = $('.seo-list'),
				button = seo.find('.hd i');

			button.bind('click', function() {
				if($(this).hasClass('arrow-up')){
					$(this).removeClass().addClass('arrow-down');
				}else{
					$(this).removeClass().addClass('arrow-up');
				}
				seo.find('div.bd').toggle();
			})
		};

		//计算正确时间
	var LASTTIME = mathTime();
	console.log(LASTTIME)
	//倒计时时间计算
	if($('.countdown').size() > 0) {
		window.setInterval(function(){
			time(LASTTIME);
		}, 1000);
	}

	//开始时间:周
	if($('.week').size() > 0) {
		startWeek(LASTTIME);
	}

	$('.mask').height($(window).height());
	/**
	 * 页面环节控制
	 */
	//头部动画控制
	animateHeader();
	//活动细则弹窗
	rulesDialog();
	//内容切换
	infoChange();
	//弹窗控制
	dialogControl();
	//选择幸运号码
	chooseNum();
	//个人信息相关
	inputInfo();
	//开始游戏
	gameStart();
	//
	seoControl();


})();