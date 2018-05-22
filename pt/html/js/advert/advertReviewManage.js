function doOrderById(){
	var order = $('#orderById').val();
	if(order==''){
		$("#orderById").val(1);
	}else if(order == 1){
		$("#orderById").val(0);
	}else if(order == 0){
		$("#orderById").val(1);
	} 
	$('#orderBySpaces').val(-1);
	query(0);
}

function doOrderyBySpaces(){
	var order = $('#orderBySpaces').val();
	if(order==''){
		$("#orderBySpaces").val(1);
	}else if(order == 1){
		$("#orderBySpaces").val(0);
	}else if(order == 0){
		$("#orderBySpaces").val(1);
	} 
	$("#orderById").val(-1);
	query(0);
}
function query(pageNo){
	var groupv='';
	$('.checkbox-list').find('input[type="checkbox"]').each(function(){
		if(this.checked){
			groupv = groupv + $(this).val()+",";
		}
	});
	if(groupv==''){
		$("#J-form").attr('action',baseUrl+'/adAdmin/queryReviewAdPage?isAll=true');
	}else{
		$("#J-form").attr('action',baseUrl+'/adAdmin/queryReviewAdPage');
	}
	$("#pageForm").val(pageNo);
	$("#J-form").submit();
}
	

$('.ui-tab-title').find('ul li a').each(function(){
	$(this).bind("click", function(){
		var id = $(this).attr('id');
		$("#status").val(id);
		query(0);
	})
});

function doPre(){
	var currentPageNo = $("#pageNo").val();
	query(parseInt(currentPageNo)-1);
}

function doNext(){
	var currentPageNo = $("#pageNo").val();
	query(parseInt(currentPageNo)+1);
}

function doForward(index){
	var pageNo = 0;
    if(index == -1){
    	var reg = /^[0-9]+$/;
    	if(reg.test($("#forwardPage").val())){
    		pageNo=parseInt($("#forwardPage").val());}
    	else{
    		return;
    	}
    }else{ 
    	pageNo = index;
    } 
    query(pageNo);
}

function doCurrent(pageNo){
	query(pageNo);
}

$(document).ready(function(){
	var space_id = $("#space_id").val();
	if(space_id != '' && space_id != null){
		$("#spaceId option[value="+space_id+"]").attr("selected",true);
	}
	var table = $('#J-table');
	//弹窗
	var Wd = phoenix.Message.getInstance(),
		Tip = phoenix.Tip.getInstance();
	
	//全选
	$('#J-select-all').click(function(){
		var inputs = $('#J-table').find('input[type="checkbox"]');
		if(this.checked){
			inputs.each(function(){
				this.checked = true;
			});
		}else{
			inputs.each(function(){
				this.checked = false;
			});
		}
	});
	
	//缩略图
	table.on('mouseenter', '.row-img-small', function(){
		var dom = $(this),src = dom.attr('data-src-big'),w = dom.attr('data-width'),h = dom.attr('data-height');
		Tip.setText('<img width="400" src="'+ src +'" /><div style="text-align:center;font-size:12px;color:#333;line-height:180%;">尺寸：'+ w +' * '+ h +'</div>');
		Tip.show(dom.width()+5, Tip.dom.outerHeight()*-1-5, this);
	}).on('mouseleave', '.row-img-small', function(){
		Tip.hide();
	});

	
	//广告列表
	table.find('.row-show').each(function(){
		var dom = $(this),id = dom.attr('data-id'),hd;
		try{
			hd = new phoenix.Hover({par:dom,triggers:dom.find('.row-show-tigger'),panels:'.row-show-panel',currPanelClass:'row-show-panel-current',hoverDelayOut:300,hoverIsBindPanels:true});
			hd.addEvent('onSwitch', function(){
				$.ajax({
					url:baseUrl +'/adAdmin/getAdSpaceListByAd?id='+id,
					dataType:'json',
					cache:true,
					success:function(data){
						//data = {isSuccess:1,data:['高频（右侧下广告-200*100）', '黑龙江时时彩（右侧下广告-200*100）', '江西时时彩（右侧下广告-200*100）']};
						if(data.status == 1){
							var strArr = [];
							strArr.push('<div style="font-size:12px;color:#333;line-height:180%;">');
							$.each(data['data'], function(){
								strArr.push('<p>');
								strArr.push(this);
								strArr.push('</p>');
							});
							strArr.push('</div>');
							dom.find('.row-show-panel').html(strArr.join(''));
						}else{
							alert(data.message);
							return;
						}
					}
				});
			});
		}catch(e){
		}
	});
	
	
	//未通过
	table.find('.row-show-pass').each(function(){
		var dom = $(this),id = dom.attr('data-id'),hd ,value=dom.attr('data-value');
		try{
			hd = new phoenix.Hover({par:dom,triggers:dom.find('.row-show-tigger'),panels:'.row-show-panel',currPanelClass:'row-show-panel-current',hoverDelayOut:300,hoverIsBindPanels:true});
			hd.addEvent('onSwitch', function(){
				var strArr = [];
				strArr.push('<div>原因：</div>');
				strArr.push('<div>');
				strArr.push(value);
				strArr.push('</div>');
				dom.find('.row-show-panel').html(strArr.join(''));
				//hd.getPanel(0).css({left:hd.getPanel(0).outerWidth()*-1 + 10,top:hd.getPanel(0).outerHeight()/2*-1});
			});
		}catch(e){
		}
	});
	
	//批量通过
	$('#J-button-passall').click(function(){
		var inputs = $('#J-table').find('input[type="checkbox"]'),result = '';
		var i = 0;
		inputs.each(function(){
			if(this.checked){
				result=result+$(this).val()+',';
				i++;
			}
		});
		if(result == ''){
			return;
		}
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">您选择了 '+ i +' 条信息，请确认通过审核？</h4></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				$.ajax({
					url:baseUrl+'/adAdmin/reviewAdvert?ids='+result+'&status='+2,
					dataType:'json',
					type:'post',
					success:function(data){
						if(data.status == 1){
							Wd.hide();
							location.href = location.href;
						}else{
							alert(data.message);
							Wd.hide();
						}
					}
				});
			},
			cancelFun:function(){
				Wd.hide();
			}
		});
	});
	//批量不通过
	$('#J-button-cancelall').click(function(){
		var inputs = $('#J-table').find('input[type="checkbox"]'),result = '';
		var i = 0;
		inputs.each(function(){
			if(this.checked){
				result=result+$(this).val()+',';
				i++;
			}
		});
		if(result == ''){
			return;
		}
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">您选择了 '+ i +' 条信息，请确认不通过？</h4><div style="padding:10px;">请填写原因(必填):<span style="color:#999;font-size:12px;padding-left:10px;">限30个字</span></div><div><textarea id="J-cancelall-text" style="width:250px;" class="textarea"></textarea></div></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				var text = $.trim($('#J-cancelall-text').val());
				if(text == ''){
					alert('请填写不通过的原因');
					$('#J-cancelall-text').focus();
					return;
				}else if(text.length > 30){
					alert('不通过的原因描述文字不能超过30个字符');
					$('#J-cancelall-text').focus();
					return;
				}
				$.ajax({
					url:baseUrl+'/adAdmin/reviewAdvert?ids='+result+'&status='+3+'&memo='+text,
					dataType:'json',
					type:'post',
					success:function(data){
						if(data.status == 1){
							Wd.hide();
							location.href = location.href;
						}else{
							alert(data.message);
							Wd.hide();
						}
					}
				});
			},
			cancelFun:function(){
				Wd.hide();
			}
		});
	});
	
	//单行通过
	table.on('click', '.row-pass', function(){
		var dom = $(this),id = dom.attr('data-id');
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">您确认通过审核该条信息？</h4></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				$.ajax({
					url:baseUrl+'/adAdmin/reviewAdvert?ids='+id+'&status='+2,
					dataType:'json',
					method:'post',
					success:function(data){
						if(data.status == 1){
							Wd.hide();
							location.href = location.href;
						}else{
							alert(data.message);
							Wd.hide();
						}
					}
				});
			},
			cancelFun:function(){
				Wd.hide();
			}
		});
	});
	
	//单行不通过
	table.on('click', '.row-notpass', function(){
		var dom = $(this),id = dom.attr('data-id');
		Wd.show({
			mask:true,
			title:'温馨提示',
			content:'<div class="bd text-center"><div class="pop-title"><i class="ico-waring"></i><h4 class="pop-text">您确认不通过该条信息？</h4><div style="padding:10px;">请填写原因(必填):<span style="color:#999;font-size:12px;padding-left:10px;">限30个字</span></div><div><textarea id="J-cancelall-text" style="width:250px;" class="textarea"></textarea></div></div></div>',
			confirmIsShow:true,
			cancelIsShow:true,
			confirmFun:function(){
				var text = $.trim($('#J-cancelall-text').val());
				if(text == ''){
					alert('请填写不通过的原因');
					$('#J-cancelall-text').focus();
					return;
				}else if(text.length > 30){
					alert('不通过的原因描述文字不能超过30个字符');
					$('#J-cancelall-text').focus();
					return;
				}
				$.ajax({
					url:baseUrl+'/adAdmin/reviewAdvert?ids='+id+'&status='+3+'&memo='+text,
					dataType:'json',
					type:'post',
					success:function(data){
						if(data.status == 1){
							Wd.hide();
							location.href = location.href;
						}else{
							alert(data.message);
							Wd.hide();
						}
					}
				});
			},
			cancelFun:function(){
				Wd.hide();
			}
		});
	});
})