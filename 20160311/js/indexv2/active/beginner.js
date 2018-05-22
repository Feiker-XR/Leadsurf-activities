/* beginner */

(function(host, $){
	var defConfig = {
			//参照物，将以该参照物的大小设置遮罩宽高
			target:'body',
			opacity:.5,
			'background-color':'#333',
			'z-index':600,
			effectShow:function(){
				this.dom.show();
			},
			effectHide:function(){
				this.dom.hide();
			}
		},
		doc = $(document),
		instance;
	function Mask(){
		this.init = function(){
			var me = this;
			me.dom = $('<div class="j-ui-mask" style="display:none;position:absolute;left:0;top:0;"></div>').appendTo('body').css({'opacity':defConfig['opacity'],'background-color':defConfig['background-color'],'z-index':defConfig['z-index']});
			me.effectShow = defConfig.effectShow;
			me.effectHide = defConfig.effectHide;
		};
		this.show = function(){
			var me = this,w = doc.width(),h = doc.height();
			me.dom.css({width:w,height:h});
			this.effectShow();
		};
		this.hide = function(){
			this.effectHide();
		};
		this.init();
	};
	host.Mask = function(){
		instance = instance || new Mask;
		return instance;
	};

})(window, jQuery);


;(function($) {
	function F(t, o) {
		this.opts = $.extend({
			getConfig: 'js/indexv2/active/config.php',
			//砸蛋提交，返回奖金值
			eggSumbitUrl: 'js/indexv2/active/eggSubmit.php',
			//答题提交，获取随机奖金值
			questionSumbitUrl: 'js/indexv2/active/questionSubmit.php',

			tpl_start:
			'<div class="beginner_start">' +
			'<div class="count_type">{{type}}</div>'+
			'<p class="account_p">' +
			'<span class="count_day">{{ten}}</span>' +
				'<span class="count_day">{{bits}}</span>' +
			'</p>' +
			'</div>',
			//body html模板
			tpl_body:
			'<div class="pop_beginner">' +
			'<div class="pop_close"></div>' +
			'<div class="pop_title">' +
			'<div class="pop_title_box title1 active"><span></span></div>' +
			'<div class="pop_title_box title2"><span></span></div>' +
			'<div class="pop_title_box title3"><span></span></div>' +
			'</div>' +
			'<div class="pop_content">' +
			'<div class="pop_content_box active">' +
			'</div>' +
			'<div class="pop_content_box">' +
			'</div>' +
			'<div class="pop_content_box">' +
			'</div>' +
			'</div>' +
			'</div>',
			// 绑卡任务
			tpl_mission:
			'<div class="mission_plan">' +
			'<div class=" {{isFinish1}}  mission_area">' +
			'<span class="icon_card card_bank"></span>' +
			'<dl>' +
			'<dt>绑定银行卡<a href="#">说明</a></dt>' +
			'<dd>{{tipsBank}}</dd>' +
			'</dl>' +
			'<a class="ui_btn" href="{{bindcardLink}}">立即绑定</a>' +
			'<span class="icon_over"></span>' +
			'</div>' +
			'<div class=" {{isFinish2}}  mission_area">' +
			'<span class="icon_card card_recharege"></span>' +
			'<dl>' +
			'<dt>首次充值<a href="#">说明</a></dt>' +
			'<dd>{{tipsCard}}</dd>' +
			'</dl>' +
			'<a class="ui_btn" href="{{rechargeLink}}">立即充值</a>' +
			'<span class="icon_over"></span>' +
			'</div>' +
			'<div class=" {{isFinish3}}  mission_area">' +
			'<span class="icon_card card_withdraw"></span>' +
			'<dl>' +
			'<dt>首次提现<a href="#">说明</a></dt>' +
			'<dd>{{tipsWithdraw}}</dd>' +
			'</dl>' +
			'<a class="ui_btn" href="{{withdrawLink}}">立即提现</a>' +
			'<span class="icon_over"></span>' +
			'</div>' +
			'</div>',
			// 标签二 内容
			tpl_dailyplan:
			'<div class="pop_content_bg dailyContent">' +
			'<ol class="achieved_list">' +
			'<li class="start_test">' +
			'<a href="javascript:;"></a>' +
			'<span>每日有奖答题</span>' +
			'</li>' +
			'</ol>' +
			'<div class="mission_date">' +
			'<div class="date_box">' +
			'<h3>累计投注领现金</h3>' +
			'<p>最低投注额为50元</p>' +
			'<ul class="date_list">' +
			'</ul>' +
			'<p class="p_continuity">您已连续投注<span>{{countDays}}</span>天</p>' +
			'</div>' +
			'<ol class="achieve_reward">' +
			'<li class="reward_1 {{levelfirst}}">累计投注{{countDay1}}天可获得{{countMoney1}}元</li>' +
			'<li class="reward_2 {{levelsecond}}">累计投注{{countDay2}}天可获得{{countMoney2}}元</li>' +
			'<li class="reward_3 {{levelthird}}">累计投注{{countDay3}}天可获得{{countMoney3}}元</li>' +
			'</ol>' +
			'</div>' +
			'<p class="achieved_tips">从开启活动21天内，每天达到投注标准可获得相应奖励，奖励将自动发放到您的账号；次日00:00重置奖励进度。</p>' +
			'</div>'+
			'<div class="egg_tips">'+
			'<p>请完成新手任务，绑定银行卡！</p>'+
			'<a href="javascript:;" class="ui_btn">确定</a>'+
			'</div>',
			tpl_questions:
			'<div class="pop_content_bg questionContent">' +
			'<div class="questions_box">' +
			'<div class="questions_top text-right">' +
			'<h3>快乐答题轻松获奖</h3>' +
			'<a href="javascript:;" class="ui_btn_small game_rule">规则说明</a>' +
			'<a href="javascript:;" class="ui_btn_small answer_back">返回</a>' +
				'<div class="rule_container">' +
				'每答对一道题，获得答题奖励，每天共三题。<br>' +
				'连续完成每日答题，还会获得额外抽奖机会。<br>' +
			'答题数越多，奖励越丰厚。还在等什么？赶快行动吧！<br>' +
			'砸蛋次数将在您达成连续答题天数后自动添加到您的账号。' +
			'</div>' +
			'</div>' +
			'<div class="questions_detail">' +
			'</div>' +
			'<div class="questions_requirement">' +
			'<span>您已经连续答题<span class="requirement_day">{{answersDays}}</span>天！</span>' +
			'<a class="ui_btn_small linkToEgg" href="javascript:;">砸蛋去</a>' +
			'</div>' +
			'<div class="questions_prize">' +
			'<span>连续答题奖励</span>' +
			'连续{{answersDay1}}天' +
			'<span class="{{prizeType1}}"></span>' +
			'<span>X{{answersMoney1}}</span>' +
			'连续{{answersDay2}}天' +
			'<span class="{{prizeType2}}"></span>' +
			'<span>X{{answersMoney2}}</span>' +
			'连续{{answersDay3}}天' +
			'<span class="{{prizeType3}}"></span>' +
			'<span>X{{answersMoney3}}</span>' +
			'</div>' +
			'</div>' +
			'</div>',
			tpl_nomission:
			'<div class="pop_content_bg no_mission_bg">' +
			'<div class="no_mission">' +
			'<p>完成绑卡任务，才能开启日常任务！</p>' +
			'</div>' +
			'<a href="{{bindcardLink}}" class="ui_btn">立即绑卡</a>' +
			'</div>',
			tpl_qfinish:
			'<div class="questions_finish">' +
			'<p><span></span>今天答题已完成<br>恭喜获得奖励{{qPrize}}元</p>' +
			'</div>',
			tpl_egg:
			'<div class="egg_stage">' +
			'<ol class="egg_list egg_coppor">' +
			'<li></li>' +
			'<li></li>' +
			'<li></li>' +
			'</ol>' +
			'<div class="hammer"></div>' +
			'<ul class="select_type">' +
			'<li class="type_1 active">铜蛋 x <span class="playtimes">{{coppor}}</span></li>' +
			'<li class="type_2">银蛋 X <span class="playtimes">{{silver}}</span></li>' +
			'<li class="type_3">金蛋 x <span class="playtimes">{{golden}}</span></li>' +
			'</ul>' +
			'<div class="egg_result">' +
			'<p>恭喜您获得<span></span>元礼金！</p>' +
			'<a href="#javascript:;" class="ui_btn result_confirm">确定</a>' +
			'</div>' +
			'<div class="egg_tips">' +
			'<p>大锤已坏，砸不开哦！</p>' +
			'<a href="javascript:;" class="ui_btn goto_daily">日常任务获得</a>' +
			'</div>' +
			'</div>',
			debugs: true // 是否支持debug [0/false, 1=>对象级输出, 2=>字符串级输出]
		}, o);
		this.$t = $(t);
		this.debugs = this.opts.debugs;
		this.serverConfig = null;
		this.mask = new Mask();
		this.init();
	}

	F.prototype = {
		init: function() {
			$.ajaxSetup({cache:false});
			var _this = this;
			this.$box = $(_this.opts.tpl_body);
			this.$t.append(this.$box);
			//dom结构初始化
			this.tabInit(this.$box);
			//加载配置
			$.get( _this.opts.getConfig).done(function(resp){
				var r = $.parseJSON(resp);
				if (Number(r['isSuccess']) == 1) {
					var startData = {
							'days': r.data.countdown.isbinded ? r.data.countdown.gameDays:r.data.countdown.bankDays,
							'tips': r.data.countdown.isbinded ? '距离毕业':'绑卡倒计时'
						},
						dailyDate = r.data['daily'];
					dailyDate['levelfirst'] = dailyDate['levelfirst']? 'achieved':'';
					dailyDate['levelsecond'] = dailyDate['levelsecond']? 'achieved':'';
					dailyDate['levelthird'] = dailyDate['levelthird']? 'achieved':'';
					_this.serverConfig = r;
					//入口初始化
					_this.startInit(startData);
					//任务初始化
					_this.missionInit(r.data['mission']);
					//日常初始化
					_this.dailyInit(dailyDate);
					//答题初始化
					_this.questionsInit(r.data['question']);
					//砸蛋初始化
					_this.eggInit(r.data['egg']);
				} else {
					alert(r['msg']);
				}
			}).fail(function(r){
				alert(r);
			});
		},
		startInit: function(data){
			var _this = this;
			var count = '';
			if(data.days){
				count = data.days;
				if(count.length<2){
					count = '0'+count;
				}
			}
			console.log(count)
			var renderData = {
				'type': data.tips,
				'ten': count.substring(0,1),
				'bits': count.substring(1,2)
			}
			var $start = $(_this.render(renderData,_this.opts.tpl_start));
			this.$t.append($start);

			var $close = this.$box.find('.pop_close');
			$start.on('click',function(){
				_this.show();
			});

			$close.on('click',function(){
				_this.hide();
			});

		},
		// tab容器初始化
		tabInit: function(obj){
			if(obj && !$(obj).find('.pop_title')) return;
			var $title = $(obj).find('.pop_title_box'),
				$content = $(obj).find('.pop_content_box');
			this.$content = $content;
			$title.on('click',function(){
				var num = $(this).index();
				$title.removeClass('active').eq(num).addClass('active');
				$content.removeClass('active').eq(num).addClass('active');
			});
		},
		// 新手任务界面 初始化
		missionInit: function(data){
			var _this = this,
				$content = this.$content || this.$box.find('.pop_content_box');
			data['isFinish1'] =  data['isFinish1']? 'mission_achieve': '';
			data['isFinish2'] =  data['isFinish2']? 'mission_achieve': '';
			data['isFinish3'] =  data['isFinish3']? 'mission_achieve': '';
			$content.eq(0).html('').append(_this.render(data,_this.opts.tpl_mission));
		},
		// 日常任务界面 初始化
		dailyInit: function(data){
			var _this = this,
				$content = this.$content || this.$box.find('.pop_content_box');
			//if(data['isbinded']){
				this.$dailyplan = $content.eq(1).html('').append(_this.render(data,_this.opts.tpl_dailyplan));
				this.$dailyplan.find('.date_list').html(_this.renderDateList(data['dateList']));
				this.$dailyplan.find('.achieved_list').append(_this.renderAchievedList(data['achievedList']));
			//}else{
			//	this.$noMission = $content.eq(1).html('').append(_this.render(_this.serverConfig.data['mission'],_this.opts.tpl_nomission));
			//}
		},
		// 答题界面 初始化
		questionsInit: function(data){
			var _this = this,
				$content = this.$content || this.$box.find('.pop_content_box');
			this.$question = $content.eq(1).append(_this.render(data,_this.opts.tpl_questions));
			if(data['isFinished']){
				this.dailyEvent(_this.$question);
				this.$question.find('.questions_detail').append(_this.render({'qPrize': data['getMoney']},_this.opts.tpl_qfinish));
			}else {
				var $obj = this.$question.find('.questions_detail').append(_this.renderQuestionList(data['answerList']));
				//事件初始化
				this.dailyEvent(_this.$question);
				this.questionsEvent(_this.$question);
			}
		},
		eggInit: function(data){
			var _this = this,
				$content = this.$content || this.$box.find('.pop_content_box');
			this.$egg = $content.eq(2).append(_this.render(data,_this.opts.tpl_egg));
			this._eggNum = {
				'0': data.coppor || 0,
				'1': data.silver || 0,
				'2': data.golden || 0
			}
			//事件初始化
			this.eggEvent(this.$egg);
		},
		//渲染参见任务 天数
		renderDateList: function(data){
			var classMap = {
					'0': 'mission_miss',
					'1': 'mission_complete',
					'2': ''
				},
				html = '';
			$.each(data,function(index,value){
				var num = Number(index) + 1;
				html += '<li class="'+ classMap[value]+'">'+ num +'</li>'
			});
			return html;
		},
		//渲染日常任务列表
		renderAchievedList: function(data){
			var typeMap = {
					'0': '铜',
					'1': '银',
					'2': '金'
				},
				html = '';
			$.each(data,function(index,value){
				var achieveMap = value['achieve'] ? 'achieve':'';
				html+= '<li class="'+achieveMap+'"><span class="achieve_standard">'+ value['standerd'] +'</span><span>';
				if(value['times']+'' != '0'){
					html+= '获得'+ value['times'] +'次砸'+ typeMap[value.type] +'蛋的机会<br>';
				}
				if(value['reward']+'' !='0'){
					html+= '获得'+ value['reward'] +'元红包';
				}
				html+= '</span><span class="icon_over"></span></li>';
			});
			return html;
		},
		//渲染题目列表
		renderQuestionList: function(data){
			var numMap = ['一','二','三','四','五','六','七','八','九','十'],
				selectMap = ['A，','B，','C，','D，'],
				html = '';
			$.each(data,function(index,value){
				var ddList = '';
				$.each(value['answer'],function(num,val){
					var className = Number(value['correct']== num) ? 'correct': '';
					ddList += '<dd class="'+ className +'">'+ selectMap[num] + val+'</dd>';
				});
				html += '<div class="questions_content"><span class="questions_number">问题'+ numMap[index] +'</span><dl class="questions_dl">'+
				'<dt>'+ value['title'] +'</dt>'+ ddList +'</dl></div>';
			});
			return html;
		},
		//答题界面 事件初始化
		dailyEvent: function(obj) {
			var _this = this,
				$obj = $(obj),
				$daily = $obj.find('.dailyContent'),
				$question = $obj.find('.questionContent'),
				$back = $obj.find('.answer_back'),
				$rule = $obj.find('.game_rule'),
				$ruleContent = $obj.find('.rule_container'),
				$daily = $obj.find('.dailyContent'),
				$question = $obj.find('.questionContent'),
				$start = $(obj).find('.start_test a'),
				$tips = $obj.find('.egg_tips'),
				$close = $tips.find('.ui_btn'),
				$title = this.$box.find('.pop_title_box'),
				$achievedlist = this.$box.find('.achieved_list');
			$back.on('click',function(){
				$question.hide();
				$daily.fadeIn();
			});
			$rule.hover(function(){
				$ruleContent.show();
			},function(){
				setTimeout(function(){
					$ruleContent.fadeOut();
				},300);
			});
			var isbinded = _this.serverConfig.data.daily.isbinded;


			if(isbinded){
				$start.on('click',function() {
					$daily.hide();
					$question.fadeIn();
				})
			}else{
				$achievedlist.on('click',function(){
					$tips.show();
				});

			}

			$close.on('click',function(){
				$tips.hide();
				$title.eq(0).trigger('click');

			})

		},
		//答题界面 事件初始化
		questionsEvent: function(obj) {
			var _this = this,
				nowQuestion = 0,
				$obj = $(obj),
				$questions = $obj.find('.questions_content'),
				$correct = $obj.find('.correct'),
				$wrong = $obj.find('dd').not(".correct"),
				$detail = $obj.find('.questions_detail'),
				$link = $obj.find('.linkToEgg'),
				$title = this.$box.find('.pop_title_box');

			$questions.eq(0).show();

			// 正确答案点击事件
			$correct.on('click',function(){
				nowQuestion++;
				if(nowQuestion >= $questions.length) {
					$.get( _this.opts.questionSumbitUrl).done(function(resp){
							var r = $.parseJSON(resp)
							if (Number(r['isSuccess']) == 1) {
								if(r.data.money){
									$questions.hide();
									$detail.append(_this.render({'qPrize': r.data.money},_this.opts.tpl_qfinish));
								};
							} else {
								alert(r['msg']);
							}
						}).fail(function(r){
						alert(r);
					});

				}else {
					$questions.hide();
					$questions.eq(nowQuestion).fadeIn();
				}
			});
			// 错误答案点击事件
			$wrong.on('click',function(){
				var $wrong = $('<div class="wrong_tips">错误</div>'),
					$this = $(this);
				$this.append($wrong);
				setTimeout(function(){
					$wrong.remove();
				},2000);
			});

			$link.on('click',function(){
				$title.eq(2).trigger('click');
			});
		},
		//砸蛋活动 事件初始化
		eggEvent: function(obj){
			var _this = this,
				$obj = $(obj),
				$eggList = $obj.find('.egg_list'),
				$eggLi = $eggList.find('li'),
				$hammer = $obj.find('.hammer'),
				$selectLi = $obj.find('.select_type li'),
				$resultMsg = $obj.find('.egg_result'),
				$confirm = $obj.find('.result_confirm'),
				$tips = $obj.find('.egg_tips'),
				$godaily = $tips.find('.goto_daily'),
				$title = this.$box.find('.pop_title_box'),
				typeMap = ['egg_coppor','egg_silver','egg_golden'],
				hWidth = $hammer.outerWidth(),
				hHeight = $hammer.outerHeight();

			//砸蛋模式（金银铜）
			if(!_this._eggType){
				_this._eggType = '0';
			}
			//清除样式
			$eggLi.removeClass('egg_broken');
			$selectLi.off('click').on('click',function(){
				var num = $(this).index();
				$eggList.removeClass('egg_coppor egg_silver egg_golden').addClass(typeMap[num]);
				$selectLi.removeClass('active').eq(num).addClass('active');
				_this._eggType = num + '';
			});

			$eggLi.off('mouseenter').on('mouseenter',function(e){
				$hammer.show();
			});
			$eggLi.off('mousemove').on('mousemove',function(e){
				var x = e.pageX,
					y = e.pageY,
					bTop = _this.$box.offset().top,
					bLeft = _this.$box.offset().left,
					resultX = x-bLeft+10,
					resultY = y-bTop-180,
					bWidth = $obj.outerWidth(),
					bHeight = $obj.outerHeight(),
					setL = resultX > (bWidth - hWidth) ? (bWidth - hWidth) : resultX ,
					setT = 	resultY > (bHeight - hHeight) ?(bHeight - hHeight):  resultY ;
				$hammer.css({left: setL ,top:setT});

			});

			$eggLi.off('mouseleave').on('mouseleave',function(e){
				$hammer.hide();
			});

			$confirm.off('click').on('click',function(){
				$resultMsg.hide();
				_this.eggEvent(_this.$egg);
			});
			$eggLi.off('click').on('click',function(){
				var $this = $(this);
				// 锤子动画
				$hammer.addClass('hammer_hit');
				setTimeout(function(){
					$hammer.removeClass('hammer_hit');
				},100);
				//检测是否还有抽奖次数
				if(Number(_this._eggNum[_this._eggType]) == 0){
					$tips.show();
					$godaily.off('click').on('click',function(){
						$tips.hide();
						$title.eq(1).trigger('click');
					});
					return;
				}


				var data = {
					'eggType':_this._eggType
				}
				$.ajax({
					url: _this.opts.eggSumbitUrl,
					data: JSON.stringify(data),
					dataType: 'json',
					method: 'POST',
					contentType: "application/json; charset=utf-8",
					cache: false,
					beforeSend: function(){

					},
					success: function(r){
						if (Number(r['isSuccess']) == 1) {
							setTimeout(function(){
								$this.addClass('egg_broken'); //蛋碎效果
								$hammer.hide();
								if(r.data.money){
									_this.showPrize($obj,r.data.money);
								};
							},400);
							// 抽奖次数减少
							_this._eggNum[_this._eggType] = Number(_this._eggNum[_this._eggType]) - 1;
							_this.resetPlayTimes($obj.find('.select_type .playtimes'),_this._eggNum);
							$eggLi.off('click mouseenter mousemove mouseleave');
						} else {
							alert(r['msg']);
						}
					},
					complete: function () {

					},
					error: function (xhr) {
						_this.eggEvent(_this.$egg);
						if(xhr.status == '404' || xhr.status == '0' || xhr.status == '401' ){
							alert('请重新登录');
						}else{
							alert('未知网络错误');
						}
					}
				});
			});
		},
		show: function(){
			this.$box.show();
			this.mask.show();
		},
		hide: function(){
			this.$box.hide();
			this.mask.hide();
		},
		//重置砸蛋次数
		resetPlayTimes: function(dom,obj){
			$.each(obj,function(index,value){
				$(dom).eq(index).html(value);
			})
		},
		showPrize: function(dom,prize){
			var $dom = $(dom).find('.egg_result');
			$dom.find('p span').html(prize);
			$dom.show();
		},
		render: function(data,tpl){
			var _this = this,
				opts = _this.opts,
				markup = tpl;
			for(p in data) {
				markup = _this.template(markup, p, data[p]);
			}
			return markup;
		},
		template: function(markup, key, value, reg){
			reg = reg || RegExp('{{' + key + '}}', 'g');
			return markup.replace(reg, value);
		},
		/**
		 * currency(num, n, x) *
		 * @param integer n: length of decimal
		 * @param integer x: length of sections
		 */
		currency: function(num, n, x){
			n = n || 2;
			x = x || 3;
			if( isNaN(num) || num <= 0 ){
				return '0.00';
			}else{
				var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
				return num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
			}
		},
		// debug
		debug: function() {
			this.debugs && window.console && console.log && console.log('[gameHistory] ' + Array.prototype.join.call(arguments, ' '));
		}
	}

	$.fn.beginner = function(o) {
		var instance;
		this.each(function() {
			instance = $.data(this, 'beginner');
			if (instance) {
			} else {
				instance = $.data(this, 'beginner', new F(this, o));
			}
		});
		return instance;
	}
})(jQuery);