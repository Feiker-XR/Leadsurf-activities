<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
	<meta charset="UTF-8">
	<title>1.8帮助后台 新建彩种帮助页</title>
	<link rel="stylesheet" href="../images/common/base.css" />
	<link rel="stylesheet" href="../images/common/js-ui.css" />
	<link rel="stylesheet" href="../images/admin/admin.css" />
	<link rel="stylesheet" href="../images/admin/admin-help.css" />
	
	<script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="../js/phoenix.base.js"></script>
	<script type="text/javascript" src="../js/phoenix.Class.js"></script>
	<script type="text/javascript" src="../js/phoenix.Event.js"></script>
	<script type="text/javascript" src="../js/phoenix.util.js"></script>
	<script type="text/javascript" src="../js/phoenix.Mask.js"></script>
	<script type="text/javascript" src="../js/phoenix.MiniWindow.js"></script>


	
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
			<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">帮助</a> &gt; 类目列表</div></div>
			
			
			<div class="col-content">
			
				<div class="col-main">
					<div class="main">
					
					
						<div id="J-panel-sort" class="panel-sort">
							<div class="control">
								<a data-action="add" data-id="0"  href="javascript:void(0);" class="btn btn-important">添加一级类目<b class="btn-inner"></b></a>
							</div>
							
							
							<div class="item clearfix">
								<span class="item-name item-first-name">注册登陆</span>
								<span data-action="edit" data-id="1" data-sortname="注册登陆" class="item-rename">重命名</span>
								<span data-action="del" data-id="1" data-sortname="注册登陆" class="item-del">删除</span>
								<span data-action="up" data-id="1" class="item-up">向上</span>
								<span data-action="down" data-id="1" class="item-down">向下</span>
								<a data-action="add" data-id="1"  href="javascript:void(0);" class="btn btn-addchild">添加子类<b class="btn-inner"></b></a>
								<div class="item-child">
									<span class="item-name">如何注册</span>
									<span data-action="edit" data-id="11" data-sortname="如何注册" class="item-rename">重命名</span>
									<span data-action="del" data-id="11" data-sortname="如何注册" class="item-del">删除</span>
									<span data-action="up" data-id="11" class="item-up">向上</span>
									<span data-action="down" data-id="11" class="item-down">向下</span>
								</div>
								<div class="item-child">
									<span class="item-name">如何充值</span>
									<span data-action="edit" data-id="12" data-sortname="如何充值" class="item-rename">重命名</span>
									<span data-action="del" data-id="12" data-sortname="如何充值" class="item-del">删除</span>
									<span data-action="up" data-id="12" class="item-up">向上</span>
									<span data-action="down" data-id="12" class="item-down">向下</span>
								</div>
							</div>
							<div class="item clearfix">
								<span class="item-name item-first-name">充值提款</span>
								<span data-action="edit" data-id="2" data-sortname="充值提款" class="item-rename">重命名</span>
								<span data-action="del" data-id="2" data-sortname="充值提款" class="item-del">删除</span>
								<span data-action="up" data-id="2" class="item-up">向上</span>
								<span data-action="down" data-id="2" class="item-down">向下</span>
								<a data-action="add" data-id="2"  href="javascript:void(0);" class="btn btn-addchild">添加子类<b class="btn-inner"></b></a>
								<div class="item-child">
									<span class="item-name">招行充值</span>
									<span data-action="edit" data-id="21" data-sortname="招行充值" class="item-rename">重命名</span>
									<span data-action="del" data-id="21" data-sortname="招行充值" class="item-del">删除</span>
									<span data-action="up" data-id="21" class="item-up">向上</span>
									<span data-action="down" data-id="21" class="item-down">向下</span>
								</div>
								<div class="item-child">
									<span class="item-name">农行充值</span>
									<span data-action="edit" data-id="22" data-sortname="农行充值" class="item-rename">重命名</span>
									<span data-action="del" data-id="22" data-sortname="农行充值" class="item-del">删除</span>
									<span data-action="up" data-id="22" class="item-up">向上</span>
									<span data-action="down" data-id="22" class="item-down">向下</span>
								</div>
							</div>

							
							
							
							
							
						</div>
								
								
								
						
						
						
					</div>
				</div>
			</div>
		</div>
	</div>

<script>
(function(){
	//分类显示隐藏
	var panel = $('#J-panel-sort'),
		switchCls = 'item-name-open',
		selector = '.item-rename, .item-del, .item-up, .item-down',
		minWindow = new phoenix.MiniWindow({cls:'ui-alert-custom'}),
		mask = phoenix.Mask.getInstance();
	minWindow.dom.css({
		width:300
	});
	minWindow.addEvent('beforeShow', function(){
		mask.show();
	});
	minWindow.addEvent('afterShow', function(){
		setTimeout(function(){
			$('#J-input-sortname').focus();
		},500);
	});
	minWindow.addEvent('afterHide', function(){
		mask.hide();
		Sort.currentId = '';
		Sort.currentAction = '';
		Sort.currentName = '';
	});

	
	panel.find('.item-first-name').click(function(){
		var me = $(this);
		if(me.hasClass(switchCls)){
			me.removeClass(switchCls);
			me.siblings('.item-child').hide();
		}else{
			me.addClass(switchCls);
			me.siblings('.item-child').show();
		}
	});
	panel.find('.item, .item-child').hover(function(){
		var me = $(this);
		me.children(selector).css('visibility', 'visible');
	},function(){
		var me = $(this);
		me.children(selector).css('visibility', 'hidden');
	});
	
	
	//分类增改删
	var Sort = {
		currentId:'',
		currentAction:'',
		currentName:'',
		html_input:'<div><input id="J-input-sortname" type="text" value="<#=value#>" class="input" /></div>',
		html_control:'<div class="control"><a data-action="confirm" href="javascript:void(0);" class="btn">确定<b class="btn-inner"></b></a> <a data-action="cancel" href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a</div>',
		add:function(id){
			var me = this,strArr = [],titleText = '添加一级类目';
			titleText = id < 1 ? titleText : '添加二级类目';
			minWindow.setTitle(titleText);
			strArr.push(me.html_input.replace(/<#=value#>/, ''));
			strArr.push(me.html_control);
			minWindow.setContent(strArr.join(''));
			minWindow.show();
			
			me.currentId = id;
			me.currentAction = 'add';
			me.currentName = '';
		},
		del:function(id, sortname){
			var me = this,strArr = [];
			minWindow.setTitle('删除类目');
			strArr.push('<div style="line-height:200%;">请确认要删除“<span style="color:#F00;">'+ sortname +'</span>”类目，删除后此类目下的所有帮助内容将自动删除。</div>');
			strArr.push(me.html_control);
			minWindow.setContent(strArr.join(''));
			minWindow.show();
			
			me.currentId = id;
			me.currentAction = 'del';
			me.currentName = sortname;
		},
		edit:function(id, sortname){
			var me = this,strArr = [];
			minWindow.setTitle('修改名称');
			strArr.push(me.html_input.replace(/<#=value#>/, sortname));
			strArr.push(me.html_control);
			minWindow.setContent(strArr.join(''));
			minWindow.show();
			
			me.currentId = id;
			me.currentAction = 'edit';
			me.currentName = sortname;
		},
		up:function(id){
			alert('up:'+id);
		},
		down:function(id){
			alert('down:'+id);
		}
	};
	$(document).on('click', function(e){
		var el = e.target,action = el.getAttribute('data-action');
		switch(action){
			case 'add':
				Sort.add(Number(el.getAttribute('data-id')));
			break;
			case 'edit':
				Sort.edit(Number(el.getAttribute('data-id')), el.getAttribute('data-sortname'));
			break;
			case 'del':
				Sort.del(Number(el.getAttribute('data-id')), el.getAttribute('data-sortname'));
			break;
			case 'up':
				Sort.up(Number(el.getAttribute('data-id')));
			break;
			case 'down':
				Sort.down(Number(el.getAttribute('data-id')));
			break;
			case 'confirm':
				//to do
				var id = Sort.currentId,name = Sort.currentName,action = Sort.currentAction,v = $.trim($('#J-input-sortname').val());
				
				switch(action){
					case 'add':
						if(v != name){
							//目录名称校验
							if(Number(id) < 1 && (v.length < 1 || v.length > 8)){
								alert('一级目录长度应为1-8个字符');
								return;
							}else if(v.length < 1 || v.length > 15){
								alert('二级目录长度应为1-15个字符');
								return;
							}
							
							alert('ajax:\n' + 'action:' + action + '\nid:' + id + '\nname:' + v);
						}
					break;
					case 'edit':
						if(v != name){
							//目录名称校验
							if(Number(id) < 1 && (v.length < 1 || v.length > 8)){
								alert('一级目录长度应为1-8个字符');
								return;
							}else if(v.length < 1 || v.length > 15){
								alert('二级目录长度应为1-15个字符');
								return;
							}
							alert('action:' + action + '\nid:' + id + '\nname:' + v);
						}
					break;
					case 'del':
						alert('action:' + action + '\nid:' + id + '\nname:' + name);
					break;
					default:
					break;
				}
				minWindow.hide();
			break;
			case 'cancel':
				minWindow.hide();
			break;
			default:
			break;
		}
	});
	$(document).keydown(function(e){
		if(e.keyCode == 13 && Sort.action != ''){
			$('.ui-alert-custom').find('[data-action="confirm"]').click();
		}
	});

	
})();
</script>
	


</body>
</html>