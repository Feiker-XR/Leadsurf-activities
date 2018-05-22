$(document).ready(function(){

		//游戏公共访问对象
	var Games = phoenix.Games;
		//游戏玩法切换
		phoenix.GameTypes.getInstance();
		//游戏实例
		phoenix.Games.SSC.getInstance();
		//统计实例
		phoenix.GameStatistics.getInstance();
		//号码篮实例
		phoenix.GameOrder.getInstance();
		//追号实例
		phoenix.GameTrace.getInstance();
		//提交
		phoenix.GameSubmit.getInstance();
		//消息类
		phoenix.Games.SSC.Message.getInstance();
		

		//服务器端输出的游戏配置
		var serverConfig = {
			//用户名称
			'username':'doudou',
			//是否暂停销售
			'isstop':0,
			//当前web期号，目前js中使用=webIssueCode
			'number':'201301021-215',
			//当前期号，david新增供后台使用
			'issueCode':130718054,
			//当前时间
			'nowtime':'2013/12/10 08:15:35',
			//当前期投注结束时间
			'nowstoptime':'2013/12/10 08:15:40',
			//上期期号
			'lastnumber':'2013021213',
			//上期开奖号码
			'lastballs':'1,2,3,4,5',
			//可追号的最大期数((重庆时时彩最大360期)
			'tracemaxtimes':360,
			//游戏期号列表
			'gamenumbers':[
							 {
									'number':'201301021215',
									'time':'2013/12/10 08:14:23'
								}, {
									'number':'201301021216',
									'time':'2013/12/11 08:14:23'
								}, {
									'number':'201301021217',
									'time':'2013/12/12 08:14:23'
								}, {
									'number':'201301021218',
									'time':'2013/12/13 08:14:23'
								}, {
									'number':'201301021219',
									'time':'2013/12/14 08:14:23'
								}, {
									'number':'201301021220',
									'time':'2013/12/11 08:14:23'
								}, {
									'number':'201301021221',
									'time':'2013/12/12 08:14:23'
								}, {
									'number':'201301021222',
									'time':'2013/12/13 08:14:23'
								}, {
									'number':'201301021223',
									'time':'2013/12/14 08:14:23'
								}, {
									'number':'201301021224',
									'time':'2013/12/11 08:14:23'
								}, {
									'number':'201301021225',
									'time':'2013/12/12 08:14:23'
								}, {
									'number':'201301021226',
									'time':'2013/12/13 08:14:23'
								}, {
									'number':'201301021227',
									'time':'2013/12/14 08:14:23'
								}, {
									'number':'201301021228',
									'time':'2013/12/15 08:14:23'
								}
						],
			'gamelimit':{
				               'wuxing.zhixuan.fushi' : {
									'maxmultiple':-1,
									'usergroupmoney':100								},							'wuxing.zhixuan.danshi' : {
									'maxmultiple':200,
									'usergroupmoney':2000								},							'wuxing.zuxuan.zuxuan120' : {
									'maxmultiple':300,
									'usergroupmoney':3000								},							'wuxing.zuxuan.zuxuan60' : {
									'maxmultiple':90,
									'usergroupmoney':3000								},							'wuxing.zuxuan.zuxuan30' : {
									'maxmultiple':20,
									'usergroupmoney':3000								}
						}
		};
		var aa={};
		var gamelimit={};
		$.ajax({
			url:'jsonResult/dynamicConfig' + '?gametype=' + Games.getCurrentGame().getName(),
			dataType:'JSON',
			async:false,
			success:function(data){
				if(Number(data['isSuccess']) == 1){
					 aa= data['data'];
					 var ss=JSON.stringify(data['data']['gamelimit']);
					     ss=ss.replace('[',"");
		                 ss=ss.replace(']',"");
		                 //alert(JsonUti.convertToString(ss));
		                 gamelimit=jQuery.parseJSON(ss);
					     delete aa.gamelimit;
					     aa.gamelimit=gamelimit;
				}

			}
		});
		
		//alert(JsonUti.convertToString(aa));
		
		//alert(JsonUti.convertToString(serverConfig));
		//设置配置
		Games.getCurrentGame().setDynamicConfig(aa);
		//当最新的配置信息和新的开奖号码出现后，进行界面更新
		Games.getCurrentGame().addEvent('changeDynamicConfig', function(e, cfg){
			var lastballs = cfg['lastballs'].split(',');
			//当前期号
			$('#J-lotter-info-number').text(cfg['number']);
			$('#J-lotter-info-currentIssue').text(cfg['issueCode']);
			//上期期号
			$('#J-lotter-info-lastnumber').text(cfg['lastnumber']);
			//上期开奖号码
			$('#J-lotter-info-balls').find('em').each(function(i){
				this.innerHTML = lastballs[i];
			});
			
			
			//重新启动/更新新一轮定时器
			topTimer.setStartTime(new Date(cfg['nowtime']));
			topTimer.setEndTime(new Date(cfg['nowstoptime']));
			topTimer.continueCount();
			
		});
		
		
		//顶部用户信息
		new phoenix.Hover({triggers:'#J-top-userinfo',panels:'#J-top-userinfo .menu-nav',hoverDelayOut:300});
			
		//顶部倒计时
		var topTimer = new phoenix.CountDown({
			//结束时间
			'endTime' : Games.getCurrentGame().getDynamicConfig()['nowstoptime'],
			//开始时间
			'startTime': Games.getCurrentGame().getDynamicConfig()['nowtime'],
			//是否需要循环计时
			'isLoop' : false,
			//需要渲染的DOM结构
			'showDom' : '.deadline-number',
			expands:{
				//覆盖showTime渲染方法
				_showTime:function(time){
					var me = this,
						dom = $(me.defConfig.showDom),
						m = me.checkNum(time.m) + '',
						s = me.checkNum(time.s) + '';
						//渲染时间输出
						dom.find('.min-left').text(m.substring(0,1));
						dom.find('.min-right').text(m.substring(1,2));
						dom.find('.sec-left').text(s.substring(0,1));
						dom.find('.sec-right').text(s.substring(1,2));
						//console.log(time);
				}
			}
		});
		topTimer.addEvent('afterTimeFinish', function(){
			//定时器结束，当前期结束
			//请求下一期时间
			//console.log('结束了');
			var Msg = Games.getCurrentGameMessage();
			Msg.show({
				'mask':true,
				'confirmIsShow':true,
				'confirmFun':function(){
					Games.getCurrentGame().getServerDynamicConfig(function(){
						Msg.hide();
					});
				},
				'cancelIsShow':true,
				'cancelFun':function(){
					this.hide();
				},
				'content':'当前期结束，是否刷新页面？要刷新页面请点击"确定"，不刷新页面请点击"取消"',
				'callback':function(){
					
				}
			});
			
		});
		
		
		//我的方案切换tab
		new phoenix.Tab({
					par : '.program-chase',
					triggers : '.program-chase-title > li',
					panels : '.program-chase-content > li',
					eventType : 'click',
					currPanelClass: 'current'
				});
		
		
		//默认加载五星直选复式
		Games.getCurrentGameTypes().addEvent('endShow', function() {
			this.changeMode('wuxing.zhixuan.fushi');
		});
	

		
		//玩法说明和示例
		$('.prompt').on('mouseenter', '.example-button', function(){
			$('.example-tip').css({
				top : $(this).position().top - 5,
				left : $(this).position().left + $(this).width() + 5
			}).show();			 	
		}).on('mouseleave', '.example-button', function(){
			$('.example-tip').hide();	
		});
		
		
		//走势图展开操作
		$('.chart-switch').bind('click', function(){
			var dom = $('#J-game-chart');
			if($('.chart-switch').text() == '展开走势图'){
				$('.chart-switch').text('收起走势图');
				Games.getCurrentGame().getCurrentGameMethod().getChart();
				dom.show();
			}else{
				$('.chart-switch').text('展开走势图');
				dom.hide();
			}
		});
		
		
		//将选球数据添加到号码篮
		$('#J-add-order').click(function(){
			Games.getCurrentGameOrder().add(Games.getCurrentGameStatistics().getResultData());
		});
		//机选一注
		$('#randomone').click(function(){
			Games.getCurrentGame().getCurrentGameMethod().randomLotterys(1);
		});
		//机选五注
		$('#randomfive').click(function(){
			Games.getCurrentGame().getCurrentGameMethod().randomLotterys(5);
		});
	
		//清空号码篮
		$('#restdata').click(function(){
			Games.getCurrentGameOrder().reSet().cancelSelectOrder();
			Games.getCurrentGame().getCurrentGameMethod().reSet();
		});
		
		//单式上传的删除、去重、清除功能
		$('body').on('click', '.remove-error', function(){
			Games.getCurrentGame().getCurrentGameMethod().removeError();
		}).on('click', '.remove-same', function(){	
			Games.getCurrentGame().getCurrentGameMethod().removeSame();
		}).on('click', '.remove-all', function(){	
			Games.getCurrentGame().getCurrentGameMethod().removeAll();
		});


		//投注按钮操作
		$('body').on('click', '#J-submit-order', function(){
			Games.getCurrentGameSubmit().submitData();				
		});
});

var JsonUti = {
        //定义换行符
        n: "\n",
        //定义制表符
        t: "\t",
        //转换String
        convertToString: function (obj) {
            return JsonUti.__writeObj(obj, 1);
        },
        //写对象
        __writeObj: function (obj    //对象
                , level             //层次（基数为1）
                , isInArray) {       //此对象是否在一个集合内
            //如果为空，直接输出null
            if (obj == null) {
                return "null";
            }
            //为普通类型，直接输出值
            if (obj.constructor == Number || obj.constructor == Date || obj.constructor == String || obj.constructor == Boolean) {
                var v = obj.toString();
                var tab = isInArray ? JsonUti.__repeatStr(JsonUti.t, level - 1) : "";
                if (obj.constructor == String || obj.constructor == Date) {
                    //时间格式化只是单纯输出字符串，而不是Date对象
                    return tab + ("\"" + v + "\"");
                }
                else if (obj.constructor == Boolean) {
                    return tab + v.toLowerCase();
                }
                else {
                    return tab + (v);
                }
            }

            //写Json对象，缓存字符串
            var currentObjStrings = [];
            //遍历属性
            for (var name in obj) {
                var temp = [];
                //格式化Tab
                var paddingTab = JsonUti.__repeatStr(JsonUti.t, level);
                temp.push(paddingTab);
                //写出属性名
                temp.push(name + " : ");

                var val = obj[name];
                if (val == null) {
                    temp.push("null");
                }
                else {
                    var c = val.constructor;

                    if (c == Array) { //如果为集合，循环内部对象
                        temp.push(JsonUti.n + paddingTab + "[" + JsonUti.n);
                        var levelUp = level + 2;    //层级+2

                        var tempArrValue = [];      //集合元素相关字符串缓存片段
                        for (var i = 0; i < val.length; i++) {
                            //递归写对象                         
                            tempArrValue.push(JsonUti.__writeObj(val[i], levelUp, true));
                        }

                        temp.push(tempArrValue.join("," + JsonUti.n));
                        temp.push(JsonUti.n + paddingTab + "]");
                    }
                    else if (c == Function) {
                        temp.push("[Function]");
                    }
                    else {
                        //递归写对象
                        temp.push(JsonUti.__writeObj(val, level + 1));
                    }
                }
                //加入当前对象“属性”字符串
                currentObjStrings.push(temp.join(""));
            }
            return (level > 1 && !isInArray ? JsonUti.n : "")                       //如果Json对象是内部，就要换行格式化
                + JsonUti.__repeatStr(JsonUti.t, level - 1) + "{" + JsonUti.n     //加层次Tab格式化
                + currentObjStrings.join("," + JsonUti.n)                       //串联所有属性值
                + JsonUti.n + JsonUti.__repeatStr(JsonUti.t, level - 1) + "}";   //封闭对象
        },
        __isArray: function (obj) {
            if (obj) {
                return obj.constructor == Array;
            }
            return false;
        },
        __repeatStr: function (str, times) {
            var newStr = [];
            if (times > 0) {
                for (var i = 0; i < times; i++) {
                    newStr.push(str);
                }
            }
            return newStr.join("");
        }
    };
