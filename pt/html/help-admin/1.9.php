<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.9帮助后台 配置</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	<link rel="stylesheet" href="../images/admin/admin-help.css" />
	
	<style>
	.pop .btn.confirm{
			background: url("../images/common/ui-btn.png") repeat scroll 0 -240px transparent;
			border: 0 none;
			border-radius: 0 0 0 0;
			color: #FFFFFF;
			height: 34px;
			line-height: 34px
	}
	.pop .btn.confirm .btn-inner{
			background: url("../images/common/ui-btn.png") repeat scroll right -240px transparent;
			height: 34px;
			width: 15px;
	}
	</style>
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	<script type="text/javascript" src="../js/phoenix.Tip.js"></script>
	<script type="text/javascript" src="../js/phoenix.Mask.js"></script>
	<script type="text/javascript" src="../js/phoenix.MiniWindow.js"></script>
	<script type="text/javascript" src="../js/phoenix.Message.js"></script>


	
</head>
<body>
	<?
	include('menu.html');
	?>
	
	<div class="col-content">
		<div class="col-side">
			
			<?
			include('sider.html');
			?>
			
		</div>
		<div class="col-main">
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">帮助</a> &gt; 帮助配置</div></div>
			
			
			<div class="col-content">
			
				<div class="col-main">
					<div class="main">
					

					
						
						<div id="J-panel-help-setting" class="panel-help-setting">
						
							<!-- start -->
							<h3 class="ui-title">热门关键字</h3>
							<div class="info">
								注意：每个关键词最多填写４个文字，序号数字越大越靠前。
							</div>
							<table class="table table-info">
									<thead>
										<tr>
									<th>关键字</th>
									<th>序号</th>
									<th>预览</th>
										</tr>
									</thead>
									<tbody>
								<tr>
									<td><input data-type="keyword" data-id="1" class="input w-3" type="text" value="充值中奖" /><span class="ui-check"><i></i></span></td>
									<td><input class="input w-1" type="text" value="3" disabled="disabled" /></td>
									<td><a href="#">预览</a></td>
								</tr>
								<tr>
									<td><input data-type="keyword" data-id="2" class="input w-3" type="text" value="提现到帐" /><span class="ui-check"><i></i></span></td>
									<td><input class="input w-1" type="text" value="2" disabled="disabled" /></td>
									<td><a href="#">预览</a></td>
								</tr>
								<tr>
									<td><input data-type="keyword" data-id="3" class="input w-3" type="text" value="帐户安全" /><span class="ui-check"><i></i></span></td>
									<td><input class="input w-1" type="text" value="1" disabled="disabled" /></td>
									<td><a href="#">预览</a></td>
								</tr>
									</tbody>
							</table>
							<!-- end -->
							
							
							<!-- start -->
							<h3 class="ui-title">彩种知识目录</h3>
							<div class="info">
								<a id="J-button-knowledge-add" href="#" class="btn btn-important">添加目录<b class="btn-inner"></b></a>  &nbsp;&nbsp;注意：排序数字越大越靠前，删除目录后会相应的删除绑定在此目录下的所有文章内容。
							</div>
							<table id="J-table-knowledge" class="table table-info">
								<thead>
									<tr>
									<th>名称(限6个字)</th>
									<th>序号</th>
									<th>操作</th>
									</tr>
								</thead>
								<tbody>
								<tr>
									<td><input data-type="knowledge" data-id="1" class="input w-3" type="text" value="玩法介绍" /><span class="ui-check"><i></i></span></td>
									<td><input data-type="knowledgeSort" data-id="1" class="input w-1 input-num" type="text" value="3"/><span class="ui-check"><i></i></span></td>
									<td><a class="row-del" data-id="1" href="#">删除</a></td>
								</tr>
								<tr>
									<td><input data-type="knowledge" data-id="2" class="input w-3" type="text" value="投注方式" /><span class="ui-check"><i></i></span></td>
									<td><input data-type="knowledgeSort" data-id="2" class="input w-1 input-num" type="text" value="2"/><span class="ui-check"><i></i></span></td>
									<td><a class="row-del" data-id="2" href="#">删除</a></td>
								</tr>
								<tr>
									<td><input data-type="knowledge" data-id="3" class="input w-3" type="text" value="奖项规则" /><span class="ui-check"><i></i></span></td>
									<td><input data-type="knowledgeSort" data-id="3" class="input w-1 input-num" type="text" value="1"/><span class="ui-check"><i></i></span></td>
									<td><a class="row-del" data-id="3" href="#">删除</a></td>
								</tr>
								<tr>
									<td><input data-type="knowledge" data-id="4" class="input w-3" type="text" value="购买方式" /><span class="ui-check"><i></i></span></td>
									<td><input data-type="knowledgeSort" data-id="4" class="input w-1 input-num" type="text" value="1"/><span class="ui-check"><i></i></span></td>
									<td><a class="row-del" data-id="4" href="#">删除</a></td>
								</tr>
								</tbody>
							</table>
							<script id="J-knowledge-tpl" type="text/html-tmpl"> 
								<tr>
									<td><input data-type="knowledge" data-id="" class="input w-3" type="text" value="" /><span class="ui-check"><i></i></span></td>
									<td><input data-type="knowledgeSort" data-id="" class="input w-1 input-num" type="text" value="0"/><span class="ui-check"><i></i></span></td>
									<td><a class="row-del" href="#">删除</a></td>
								</tr>
							</script>
							
							<!-- end -->
							
							
							
							<!-- start -->
							<h3 class="ui-title">热门彩种排序</h3>
							<div class="info">
								注意：排序数字越大越靠前。
							</div>
							<table class="table table-info">
								<thead>
									<tr>
									<th>彩种名称</th>
									<th>序号</th>
									<th><span style="visibility:hidden">操作</span></th>
									</tr>
								</thead>
								<tbody>
								<tr>
									<td><input class="input w-3" type="text" value="重庆时时彩" disabled="disabled" /></td>
									<td><input data-type="lotterySort" data-id="1" class="input w-1" type="text" value="4"/><span class="ui-check"><i></i></span></td>
									<td>&nbsp;&nbsp;</td>
								</tr>
								<tr>
									<td><input class="input w-3" type="text" value="江西时时彩" disabled="disabled" /></td>
									<td><input data-type="lotterySort" data-id="2" class="input w-1" type="text" value="3"/><span class="ui-check"><i></i></span></td>
									<td>&nbsp;&nbsp;</td>
								</tr>
								<tr>
									<td><input class="input w-3" type="text" value="黑龙江时时彩" disabled="disabled" /></td>
									<td><input data-type="lotterySort" data-id="3" class="input w-1" type="text" value="2"/><span class="ui-check"><i></i></span></td>
									<td>&nbsp;&nbsp;</td>
								</tr>
								<tr>
									<td><input class="input w-3" type="text" value="北京时时彩" disabled="disabled" /></td>
									<td><input data-type="lotterySort" data-id="4" class="input w-1" type="text" value="1"/><span class="ui-check"><i></i></span></td>
									<td>&nbsp;&nbsp;</td>
								</tr>
								</tbody>
							</table>
							<!-- end -->
							
								
								
								
						</div>
						
						
						
						
						<div style="height:500px"></div>
						
						

						
						
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
(function(){
	var pros,UpdateInput,defConfig,checkHelp,addButton = $('#J-button-knowledge-add'),
		Wd = phoenix.Message.getInstance();
	defConfig = {
		//ajax请求地址
		url:'ajax.php?',
		dataType:'json'
	};
	pros = {
		init:function(cfg){
			var me = this;
			me.dom = $(cfg.dom);
			me.type = me.dom.attr('data-type');
			me.dom.focus(function(e){
				var v = $.trim(this.value);
				if(v != ''){
					me.value = v;
				}
				
			});
			me.dom.blur(function(){
				var v = $.trim(this.value);
				if(v == me.value){
					return;
				}
				me.send();
			});
		},
		send:function(){
			var me = this,param = me.getParam(),action = '';
			if(!me.check(param)){
				return;
			}
			if(!param['id'] || $.trim(param['id']) == ''){
				action = 'add';
			}else{
				action = 'edit';
			}
			
			
			//console.log(param);
			//return;
			
			$.ajax({
				url:me.defConfig.url + 'action=' + action,
				dataType:me.defConfig.dataType,
				method:'post',
				//如果id为空，则为添加新彩种知识目录
				//该处有个逻辑问题，当先设置排序时，能不能增加，应视为无效请求
				data:me.getParam(),
				success:(function(){return function(data){
					//测试数据
					data['data'] = {'id':10};
					
					var tr = me.dom.parent().parent();
					me.success(data);
					if(action == 'add'){
						
						tr.find('.row-del').attr('data-id', data['data']['id']);
						tr.find('.input-num').attr('data-id', data['data']['id']);
						tr.find('input[data-type="knowledge"]').attr('data-id', data['data']['id']);
					}
					
				}})(),
				error:(function(){return function(xhr, type){
					me.error(xhr, type);
				}})()
			});
		},
		setMessage:function(msg){
			var me = this;
			me.dom.parent().find('.ui-check').html('<i></i>' + msg).show();
		},
		hdieMessage:function(){
			var me = this;
			me.dom.parent().find('.ui-check').hide();
		},
		check:function(param){
			var me = this;
			return checkHelp[this.type].call(me, param)
		},
		getParam:function(){
			var me = this;
			return {value:$.trim(me.dom.val()),id:me.dom.attr('data-id'),type:me.dom.attr('data-type')};
		},
		success:function(data){
			var me = this;
			if(Number(data['isSuccess']) == 1){
				me.hdieMessage();
			}else{
				me.setMessage(data['msg']);
			}
			
		},
		error:function(xhr, type){
			alert(type);
		}
		
	};
	UpdateInput = phoenix.Class(pros, phoenix.Event);
	UpdateInput.defConfig = defConfig;
	
	//数据检测校验
	checkHelp = {
		'keyword':function(param){
			var me = this,v = param.value;
			if(v.length < 1 || v.length > 4){
				me.setMessage('关键字必须是1-4位字符');
				me.dom.focus();
				return false;
			}
			return true;
		},
		'knowledge':function(param){
			var me = this,v = param.value;
			if(v.length < 1 || v.length > 6){
				me.setMessage('彩种知识目录必须是1-6位字符');
				me.dom.focus();
				return false;
			}
			return true;
		},
		'knowledgeSort':function(param){
			var me = this,v = param.value;
			if(!(/^\d+$/g).test(v)){
				me.setMessage('排序必须是数字');
				me.dom.focus();
				return false;
			}
			if(Number(v) > 1000000){
				me.setMessage('排序数字不能大于1000000');
				me.dom.focus();
				return false;
			}
			return true;
		},
		'lotterySort':function(param){
			var me = this,v = param.value;
			if(!(/^\d+$/g).test(v)){
				me.setMessage('排序必须是数字');
				me.dom.focus();
				return false;
			}
			if(Number(v) > 1000000){
				me.setMessage('排序数字不能大于1000000');
				me.dom.focus();
				return false;
			}
			return true;
		}
	};
	
	$('#J-panel-help-setting').find('input[data-id]').each(function(){
		new UpdateInput({dom:this});
	});
	
	addButton.click(function(e){
		e.preventDefault();
		var tbody = $('#J-table-knowledge').find('tbody'),inputText,inputSort,tr;
		tbody.prepend($('#J-knowledge-tpl').html());
		setTimeout(function(){
			tr = tbody.find('tr').eq(0);
			inputText = tr.find('input').eq(0);
			inputSort = tr.find('input').eq(1);
			new UpdateInput({dom:inputText});
			new UpdateInput({dom:inputSort});
		},300);
		
	});
	
	$(document).on('keyup', '.input-num', function(e){
		var v = this.value;
		v = v.replace(/[^\d]/g, '');
		this.value = Number(v);
	});
	
	$(document).on('click', '.row-del', function(e){
		var me = $(this),id = me.attr('data-id');
		e.preventDefault();
		if(!id || id == ''){
			me.parent().parent().remove();
			return;
		}
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">你确定要删除该行数据吗？</h4></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				$.ajax({
					url:'data.php?action=del&id=' + id,
					dataType:'json',
					success:function(data){
						//测试数据
						data = {isSuccess:1,type:'success',data:{}};
								
						if(Number(data['isSuccess']) == 1){
							me.parent().parent().remove();
						}else{
							alert(data['msg']);
						}
						Wd.hide();
						
						location.href = location.href;
					}
				});
			},
			cancelFun:function(){
				Wd.hide();
			}
		});
	});
	
	
})();
</script>
	


</body>
</html>