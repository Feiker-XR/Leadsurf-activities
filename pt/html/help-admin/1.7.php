<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.7帮助后台管理首页</title>
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
	.btn.cancel {margin:0;}
	.pop-text {width:250px;}
	.w-9 {550px!important}
	.row-detail { text-decoration:underline}
	</style>
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	<script type="text/javascript" src="../js/phoenix.Mask.js"></script>
	<script type="text/javascript" src="../js/phoenix.Tip.js"></script>
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
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">帮助中心</a> &gt; 帮助管理</div></div>
			
			
			<div class="col-content">
			
				<div class="col-main">
					<div class="main">
					
						<div class="panel-help-search">
						<form action="?">
							标题：<input type="text" class="input w-3"  />&nbsp;&nbsp;
							所属类目：
							<select class="ui-select">
								<option>全部</option>
								<option>投注帮助</option>
							</select>
							<select class="ui-select">
								<option>全部</option>
								<option>投注帮助</option>
							</select>
							&nbsp;&nbsp;
							是否推荐：
							<select class="ui-select">
								<option>全部</option>
								<option>是</option>
								<option>否</option>
							</select>
							&nbsp;
							<a href="javascript:void(0);" class="btn">搜 索<b class="btn-inner"></b></a>
						</form>
						</div>
					
					
					
								<table class="table table-info" id="J-data-table">
									<thead>
										<tr>
											<th>选择</th>
											<th>编号</th>
											<th>标题</th>
											<th>所属类目</th>
											<th>是否推荐</th>
											<th class="table-toggle"><a href="#">浏览人数</a><i class="ico-up"></i><i class="ico-down"></i></th>
											<th class="table-toggle"><a href="#">投票已解决</a><i class="ico-up"></i></th>
											<th class="table-toggle"><a href="#">投票未解决</a><i class="ico-up"></i></th>
											<th class="table-toggle"><a href="#">序号</a><i class="ico-up"></i></th>
											<th>操作</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td><input type="checkbox" class="checked-row" value="1" /></td>
											<td>1</td>
											<td>如何绑定银行卡？</td>
											<td>充值提现-如何充值</td>
											<td>是</td>
											<td>253</td>
											<td>23</td>
											<td><a data-id="1" class="row-detail" href="#">11</a></td>
											<td>0</td>
											<td>
												<a href="#">查看</a>&nbsp;&nbsp;
												<a href="#">修改</a>&nbsp;&nbsp;
												<a data-id="1" href="#" class="row-del">删除</a>
											</td>
										</tr>
										
										<tr>
											<td><input type="checkbox" class="checked-row" value="2" /></td>
											<td>2</td>
											<td>如何绑定银行卡？</td>
											<td>充值提现-如何充值</td>
											<td>是</td>
											<td>253</td>
											<td>23</td>
											<td>0</td>
											<td>0</td>
											<td>
												<a href="#">查看</a>&nbsp;&nbsp;
												<a href="#">修改</a>&nbsp;&nbsp;
												<a data-id="2" href="#" class="row-del">删除</a>
											</td>
										</tr>
										<tr>
											<td><input type="checkbox" class="checked-row" value="3" /></td>
											<td>1</td>
											<td>如何绑定银行卡？</td>
											<td>充值提现-如何充值</td>
											<td>是</td>
											<td>253</td>
											<td>23</td>
											<td><a data-id="3" class="row-detail" href="#">11</a></td>
											<td>0</td>
											<td>
												<a href="#">查看</a>&nbsp;&nbsp;
												<a href="#">修改</a>&nbsp;&nbsp;
												<a data-id="3" href="#" class="row-del">删除</a>
											</td>
										</tr>
									</tbody>
								</table>
								
								
						<div class="page-wrapper">
							<span class="page-text">
								<label class="label-checked-all" for="J-checked-row-all"><input id="J-checked-row-all" type="checkbox" class="checked-row-all" />&nbsp;&nbsp;全选/取消</label>
								<span>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" id="J-checked-delete">删除</a>&nbsp;&nbsp;&nbsp;&nbsp;</span>
								<span class="lower">共102条记录</span>
							</span>
							<div class="page page-right">
								<a href="#" class="prev">上一步</a>
								<a href="#">1</a>
								<a href="#">2</a>
								<a href="#" class="current">3</a>
								<a href="#">4</a>
								<a href="#">5</a>
								<a href="#">6</a>
								<a href="#">7</a>
								<a href="#">8</a>
								<a href="#">9</a>
								<a href="#">...</a>
								<a href="#" class="next">下一步</a>
								<span class="page-few">到第 <input type="text" value="" class="input"> /100页</span>
								<input type="button" value="确 认" class="page-btn">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
(function(){
	var table = $('#J-data-table'),
		checkboxs = table.find('.checked-row'),
		del = $('#J-checked-delete'),
		Wd = phoenix.Message.getInstance();
	
	table.on('click', '.row-del', function(e){
		var id = $(this).attr('data-id');
		e.preventDefault();
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">你确定要删除该行数据吗？</h4></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				$.ajax({
					url:'data.php?action=delete&id=' + id,
					dataType:'json',
					success:function(data){
						//测试数据
						data = {isSuccess:1,type:'success',data:{}};
								
						if(Number(data['isSuccess']) == 1){
							location.href = location.href;
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
	
	
	
	
	$('#J-checked-row-all').click(function(){
		if(this.checked){
			checkboxs.each(function(){
				this.checked = true;
			});
		}else{
			checkboxs.each(function(){
				this.checked = false;
			});
		}
	});
	
	
	del.click(function(e){
		e.preventDefault();
		var ids = [];
		checkboxs.each(function(){
			if(this.checked){
				ids.push(this.value);
			}
		});
		if(ids.length < 1){
			return;
		}
		
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">你确定要删除选中的数据吗？</h4></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				$.ajax({
					url:'data.php?action=delete&ids=' + ids.join(','),
					dataType:'json',
					success:function(data){
						if(Number(data['isSuccess']) == 1){
							location.href = location.href;
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
	
	
	
	
		
	table.on('click', '.row-detail', function(e){
			e.preventDefault();
			var id = $(this).attr('data-id');
			$.ajax({
				url:'data.php?id=' + id,
				dataType:'json',
				success:function(data){
					
					data['data'] = '太简单，用不上（10）<br />字太多，不想看（5）<br />太复杂，看不懂（0）<br />其它（2）：<br />１、这个帮助内容好像太菜了，都看不明白，麻烦写好点。<br />２、我看完还是不太明白这些内容。';
					
					if(Number(data['isSuccess']) == 1){
						Wd.show({
							mask:true,
							title:'原因',
							content:'<div style="height:160px;overflow-y:scroll">'+ data['data'] +'</div>',
							cancelIsShow:true,
							cancelText:'关闭',
							cancelFun:function(){
								Wd.hide();
							}
						});
					}else{
						alert(data['msg']);
					}
				}
			});
			
	});
		
	
	
})();
</script>
	


</body>
</html>