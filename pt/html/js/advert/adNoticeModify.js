$(document).ready(function(){
	
	var editor = $('#J-content').xheditor({upImgUrl:"upload.php",upImgExt:"jpg,jpeg,gif,png"});
	var type = $('#noticeType').val();
	
	
	var Wd = phoenix.Message.getInstance(),timeStart = $('#J-input-time-start'),timeEnd = $('#J-input-time-end'),form = $('#J-form');
	var oldtime;
	if(type == 1){
		$('#J-radio-type-1').click();
		form.find('.panel-field-urgent').hide();
		timeEnd.attr('disabled', true).val('不限时间').addClass('input-disable');
		$('#J-row-push-proxy').show();
	}else{
		$('#J-radio-type-2').click();
		oldtime = $('#endtimeHidden').val();
		oldtime = !!oldtime ? oldtime : '';
		form.find('.panel-field-urgent').show();
		timeEnd.attr('disabled', false).val(oldtime).removeClass('input-disable');
		$('#J-row-push-proxy').hide();
	}
	timeStart.focus(function(){
		var dt  = new phoenix.DatePicker({input:timeStart,isShowTime:true,});
		dt.addEvent('afterSetValue', function(){
			checkTime();
		});
		dt.show();
	});
	timeEnd.focus(function(){
		var dt  = new phoenix.DatePicker({input:timeEnd,isShowTime:true,});
		dt.addEvent('afterSetValue', function(){
			timeEnd.attr('data-old-time', dt.input.val());
			checkTime();
		});
		dt.show();
	});
	//是否为紧急公告
	var isUrgent = function(){
		return !!!$('#J-panel-radio').find('input[type="radio"]').get(0).checked;
	};
	
	//类型切换
	$('#J-panel-radio').find('input[type="radio"]').click(function(){
		var oldtime;
		if(this.value == '1'){
			form.find('.panel-field-urgent').hide();
			timeEnd.attr('disabled', true).val('不限时间').addClass('input-disable');
			$('#J-row-push-proxy').show();
		}else{
			oldtime = $('#endtimeHidden').val();
			oldtime = !!oldtime ? oldtime : '';
			form.find('.panel-field-urgent').show();
			timeEnd.attr('disabled', false).val(oldtime).removeClass('input-disable');
			$('#J-row-push-proxy').hide();
		}
	});
	
	
	
	
	//检测页面
	var checkPage = function(){
		var dom = $('#J-select-page'),domv = $.trim(dom.val()),isPass = false;
		if(!isUrgent()){
			dom.parent().find('.ui-check').hide();
			return isPass = true;
		}
		if(domv == ''){
			dom.parent().find('.ui-check').show();
			isPass = false;
		}else{
			dom.parent().find('.ui-check').hide();
			isPass = true;
		}
		return isPass;
	};
	$('#J-select-page').change(function(){
		checkPage();
	});
	
	
	//用户组
	var checkGroup = function(e){
		var par = $('.ui-form li'),ipts = par.find('input[type="checkbox"]'),num = 0,isPass = false,groupIpts = $('.J-panel-group').find('input[type="checkbox"]'),checkNum = 0,checkNotNum = 0;
		ipts.each(function(){
			if(this.checked){
				num += 1;
			}
		});
		if(num > 0){
			isPass = true;
		}else{
			isPass = false;
			par.find('.ui-check').show();
		}
		if(isPass){
			par.find('.ui-check').hide();
		}
		
		groupIpts.each(function(){
			if(this.checked){
				checkNum += 1;
			}else{
				checkNotNum += 1;
			}
		});
		
		if(e && e.target != ipts.get(0)){
			if(checkNum == groupIpts.size()){
				ipts.get(0).checked = true;
			}
			if(checkNum < groupIpts.size()){
				ipts.get(0).checked = false;
			}
		}
		
		return isPass;
	};
	$('.checkbox-list').click('input[type="checkbox"]', function(e){
		checkGroup(e);
	});
	$('.checkbox-list').find('input[type="checkbox"]').click(function(){
		if(this.checked){
			$('.J-panel-group').find('.ui-check').hide();
		}
		checkGroup();
	});
	
	//选择全部客户
	$('#J-checkbox-all').click(function(){
		var me = this,ipts = $('.J-panel-group').find('input[type="checkbox"]');
		if(this.checked){
			ipts.each(function(){
				if(me != this){
					this.checked = true;
				}
			});
		}else{
			ipts.each(function(){
				if(me != this){
					this.checked = false;
				}
			});
		}
		checkGroup();
	});
	
	
	
	
	//检测标题
	var checkTitle = function(){
		var dom = $('#J-input-title'),domv = $.trim(dom.val()),isPass = false;
		if(domv == ''){
			dom.parent().find('.ui-check').html('<i></i>公告标题不能为空').show();
			isPass = false;
		}else if(domv.length > 40){
			dom.parent().find('.ui-check').html('<i></i>公告标题长度不能超过40个字符').show();
			isPass = false;
		}else{
			dom.parent().find('.ui-check').hide();
			isPass = true;
		}
		return isPass;
	};
	$('#J-input-title').blur(function(){
		checkTitle();
	});
	
	//检测生效期
	var checkTime = function(){
		var dom = $('#J-input-time-start'),domv = $.trim(dom.val()),isPass = false,
			dom2 = $('#J-input-time-end'),dom2v = $.trim(dom2.val());
		if(isUrgent()){
			if(domv == '' || dom2v == ''){
				dom.parent().find('.ui-check').show();
				isPass = false;
			}else{
				dom.parent().find('.ui-check').hide();
				isPass = true;
			}
		}else{
			if(domv == ''){
				dom.parent().find('.ui-check').show();
				isPass = false;
			}else{
				dom.parent().find('.ui-check').hide();
				isPass = true;
			}
		}
		return isPass;
	};
	
	
	
	//检测内容
	var checkContent = function(){
		var dom = $('#J-content'),domv = $.trim(dom.val()),isPass = false;
		if(domv == ''){
			dom.parent().find('.ui-check').show();
			isPass = false;
		}else{
			dom.parent().find('.ui-check').hide();
			isPass = true;
		}
		return isPass;
	};
	
	
	
	$('#J-button-submit').click(function(){
		if(checkPage() && checkGroup() && checkTitle() && checkTime() && checkContent()){
			submitForm(1);
			//$('#J-form').submit();
		}
		
	});
	$('#J-button-save').click(function(){
		if(checkGroup() && checkTitle() && checkTime() && checkContent()){
			submitForm(2);
			//$('#J-form').attr('action', '?action=save').submit();
		}
	});
	
	
	var submitForm = function(createType){
		var typev,pagev,groupv,titlev,contentv,starttime,endtime,ispush;
		
		typev = isUrgent() ? '2' : '1';
		
		pagev = $('#J-select-page').val();
		
		groupv = [];
		$('.J-panel-group').find('input[type="checkbox"]').each(function(){
			if(this.checked){
				groupv.push(this.value);
			}
		});
		groupv = groupv.join(',');
		
		titlev = $.trim($('#J-input-title').val());
		
		contentv = $('#J-content').val();
		
		id = $('#noticeId').val();
		ispush = $('#J-checkbox-proxy').get(0).checked ? '1' : '';
		
		starttime = timeStart.val();
		endtime = timeEnd.val();
		if(endtime=='不限时间')
		{
			endtime = '';
		}

		
			$.ajax({
				type:"post",
				url:baseUrl+'/adAdmin/modifyNotice',
				data:{id:id,type:typev,showPages:pagev,groups:groupv,title:titlev,content:contentv,gmtEffectBeginStr:starttime,gmtEffectEndStr:endtime,isPush:ispush,createType:createType},
				dataType:'json',
				success:function(data){
					if(Number(data['status']) == 1){
						Wd.show({
							mask:true,
							title:'提示',
							confirmText:'确认',
							cancelText:'进入管理',
							content:'<div class="bd text-center"><div class="pop-title"><i class="ico-success"></i><h4 class="pop-text">修改成功</h4></div></div>',
							confirmIsShow:true,
							cancelIsShow:true,
							confirmFun:function(){
								Wd.hide();
								location.href = location.href;
							},
							cancelFun:function(){
								Wd.hide();
								location.href = baseUrl+'/adAdmin/goNoticeListPublish';
							},
							callback:function(){
							}
						});
					}else{
						alert(data['msg']);
					}
					
				}
			});
	};
	
})
	