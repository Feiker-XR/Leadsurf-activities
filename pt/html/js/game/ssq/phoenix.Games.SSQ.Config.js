 (function(host, name, Event, undefined){
							var gameConfigData = {"gameType":"ssq","gameTypeCn":"双色球","defaultMethod":"biaozhuntouzhu.biaozhun.fushi","lotteryId":99401,"userLvl":2,"userId":825,"userName":"fiona18","backOutStartFee":20010000,"backOutRadio":400,"gameMethods":[{"title":"标准玩法","name":"biaozhuntouzhu","childs":[{"title":"复式","name":"biaozhun","parent":"biaozhuntouzhu","childs":[{"title":"复式","name":"fushi","parent":"biaozhun","mode":"biaozhuntouzhu"}]},{"title":"单式","name":"biaozhun","parent":"biaozhuntouzhu","childs":[{"title":"单式","name":"danshi","parent":"biaozhun","mode":"biaozhuntouzhu"}]},{"title":"胆拖","name":"biaozhun","parent":"biaozhuntouzhu","childs":[{"title":"胆拖","name":"dantuo","parent":"biaozhun","mode":"biaozhuntouzhu"}]}]}],"awardGroups":[],"dynamicConfigUrl":"/gameBet/ssq/dynamicConfig","uploadPath":"/gameBet/ssq/betFile","queryUserBalUrl":"/gameBet/queryUserBal","getUserOrdersUrl":"/gameBet/ssq/getUserOrders","getUserPlansUrl":"/gameBet/ssq/getUserPlans","getHandingChargeUrl":"/gameBet/ssq/handlingCharge?amount=","getBetAwardUrl":"/gameBet/ssq/getBetAward","getHotColdUrl":"/gameBet/ssq/frequency","trendChartUrl":"/gameBet/ssq/trendChart?type=","getLotteryLogoPath":"/static/images/game/logos/logo-ssq.png","queryGameUserAwardGroupByLotteryIdUrl":"/gameBet/ssq/queryGameUserAwardGroupByLotteryId","saveProxyBetGameAwardGroupUrl":"/gameBet/ssq/saveBetAward","sumbitUrl":"/gameBet/ssq/submit"};
							var defConfig = {
								//当前彩种名称
								gameType : gameConfigData['gameType'],
								gameTypeCn : gameConfigData['gameTypeCn'],
								lotteryId : gameConfigData['lotteryId'],
								awardGroups: gameConfigData['awardGroups'],
								userId: gameConfigData['userId'],
								userName: gameConfigData['userName'],
								userLvl: gameConfigData['userLvl'],
								backOutStartFee: gameConfigData['backOutStartFee'],
								backOutRadio: gameConfigData['backOutRadio']
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
								//获取动态配置接口地址
								getDynamicConfigUrl:function(){
									return gameConfigData['dynamicConfigUrl'];
								},
								//获取单式上传接口地址
								getUploadPath:function(){
									return gameConfigData['uploadPath'];
								},
								//获取用户余额
								getUserBalUrl:function(){
									return gameConfigData['queryUserBalUrl'];
								},
									//获取投注页面显示订单接口地址
								getUserOrdersUrl:function(){
									return gameConfigData['getUserOrdersUrl'];
								},
									//获取单式上传接口地址
								getUserPlansUrl:function(){
									return gameConfigData['getUserPlansUrl'];
								},
									//获取撤销手续费接口地址
								getHandingChargeUrl:function(){
									return gameConfigData['getHandingChargeUrl'];
								},
								//获取彩种logo地址
								getLotteryLogoPath:function(){
									return gameConfigData['getLotteryLogoPath'];
								},
									//获取玩法走势图接口地址
								trendChartUrl:function(){
									return gameConfigData['trendChartUrl'];
								},
						        //查询玩法描述和默认冷热球及用户投注方式奖金接口地址
								getBetAwardUrl:function(){
									return gameConfigData['getBetAwardUrl'];
								},
								//获取冷热遗漏接口地址
								getHotColdUrl:function(){
									return gameConfigData['getHotColdUrl'];
								},
								//查询奖金组
								getQueryGameUserAwardGroupByLotteryIdUrl:function(){
									return gameConfigData['queryGameUserAwardGroupByLotteryIdUrl'];
								},
								//保存代理投注奖金组
								getSaveProxyBetGameAwardGroupUrl:function(){
									return gameConfigData['saveProxyBetGameAwardGroupUrl'];
								},
									//获取投注提交接口地址
								submitUrl:function(){
									return gameConfigData['sumbitUrl'];
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
										tempArr1 = [],
										tempArr2 = [],
										result = [];
									//循环一级
									for(;i < len;i++){
										if(types[i]['name'] == nameArr[0]){
										    if(gameConfigData['gameType'].indexOf('115')<0){
												result.push(types[i]['title'].replace(/&nbsp;/g,''));
											}
											if(nameLen > 1 && types[i]['childs'].length > 0){
												tempArr1 = types[i]['childs'];
												len2 = tempArr1.length;
												//循环二级
												for(i2 = 0;i2 < len2;i2++){
													if(tempArr1[i2]['name'] == nameArr[1]){
													    if(gameConfigData['gameType'].indexOf('115')>0){
														result.push(tempArr1[i2]['title'].replace(/&nbsp;/g,''));
														}
														if(nameLen > 2 && tempArr1[i2]['childs'].length > 0){
															tempArr2 = tempArr1[i2]['childs'];
															len3 = tempArr2.length;
															//循环三级
															for(i3 = 0;i3 < len3;i3++){
																if(tempArr2[i3]['name'] == nameArr[2]){
																	if(tempArr2[i3]['headline']){
																		return tempArr2[i3]['headline'];
																	}
																	result.push(tempArr2[i3]['title'].replace(/&nbsp;/g,''));
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
							
							host.Games.SSQ[name] = Main;
							
						})(phoenix, "Config", phoenix.Event); 