function uploadResponse(str){
	$('#J-textarea-username').val(str);
}

$(document).ready(function(){
	$('.menu-list li:eq(9)').attr("class","current");
	var editor = $('#J-content').xheditor({upImgUrl:baseUrl+"/xheditorAdmin/uploadTemplateImg",upImgExt:"jpg,jpeg,gif,png",html5Upload:false});
	var textareaUsername = new phoenix.Input({el:'#J-textarea-username',defText:'多个用户名用；分开'});
	var InputTitle = new phoenix.Input({el:'#J-input-title',defText:'主题长度不得超过40字符'});
	var formKeys = ['user', 'title', 'content', 'time'];
	var formHas = {user:false,title:false,content:false,time:true};
	function WidthCheck(str){  
			var w = 0;  
			var tempCount = 0; 
			for (var i=0; i<str.length; i++) {  
			   var c = str.charCodeAt(i);  
			   //单字节加1  
			   if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {  
			    w++;  
			  
			   }else {     
			    w+=2;
			   }  
			 }
			return w;
	}  
	var checkUser = function(){
		//检测是否有填写用户名
		var types = $('#J-radio-list').find('input[type="radio"]'),typesValue = '1',ipts,checkNum = 0,isPass = false;
		types.each(function(){
			var v = this.value;
			if(this.checked){
				typesValue = v;
				return false;
			}
		});
		if(typesValue == '1'){
			ipts = $('.J-panel-gourp').find('input[type="checkbox"]');
			ipts.each(function(){
				if(this.checked){
					checkNum += 1;
				}
			});
			if(checkNum < 1){
				$('.J-panel-gourp').find('.ui-check').show();
				isPass = false;
			}else{
				$('.J-panel-gourp').find('.ui-check').hide();
				isPass = true;
			}
		}else{
			var usernames = $('#J-textarea-username'),userValue = $.trim(usernames.val()).replace(textareaUsername.defConfig.defText, '');
			if(userValue == ''){
				usernames.parent().find('.ui-check').show();
				isPass = false;
			}else{
				usernames.parent().find('.ui-check').hide();
				isPass = true;
			}
		}
		formHas['user'] = isPass;
		checkForm();
	};
	$('.J-panel-gourp').find('input[type="checkbox"]').click(function(){
		if(this.checked){
			$('.J-panel-gourp').find('.ui-check').hide();
		}
		checkUser();
	});
	$('#J-textarea-username').blur(function(){
		checkUser();
	});
	
	
	
	var checkTitle = function(){
		//检测标题
		var title = $('#J-input-title'),titleValue = $.trim(title.val()).replace(InputTitle.defConfig.defText, ''),titleValue2 = titleValue.replace(/[^\x00-\xff]/g, 'xx');
		if(titleValue == ''){
			title.parent().find('.ui-check').html('<i></i>主题不能为空').show();
			isPass = false;
		}else{
			if(titleValue2.length > 40){
				title.parent().find('.ui-check').html('<i></i>主题长度不得超过40字符').show();
				isPass = false;
			}else{
				title.parent().find('.ui-check').hide();
				isPass = true;
			}
		}
		formHas['title'] = isPass;
		checkForm();
	};
	$('#J-input-title').blur(function(){
		checkTitle();
	});
	
	editor.settings.blur=function(){
		checkContent();
		checkForm();
	};
	
	var checkContent = function(){
		var v = $.trim($('#J-content').val());
		if(v == ''){
			formHas['content'] = false;
		}else{
			formHas['content'] = true;
		}
		var v2 =$.trim($("#J-input-title").val());
		if(v2 == '')
		{
	   	    formHas['title'] = false;
		}else{
			formHas['title'] = true;
		}
	};
	
	
	var checkTime = function(){
		var isPass = false;
		if($('#J-select-date').val() == '1' && $.trim($('#J-daatepicker').val()) == ''){
			$('#J-daatepicker').parent().find('.ui-check').show();
			isPass = false;
		}else{
			$('#J-daatepicker').parent().find('.ui-check').hide();
			isPass = true;
		}
		
		formHas['time'] = isPass;
		checkForm();
	};
	

	
	var checkForm = function(){
		var i = 0,len = formKeys.length;
		checkContent();
		for(;i < len;i++){
			if(!formHas[formKeys[i]]){
				$('#J-button-submit').removeClass('btn-important').addClass('btn-disabled');
				return false;
			}
		}
		$('#J-button-submit').removeClass('btn-disabled').addClass('btn-important');
		return true;
	};
	
	$('#J-radio-list input[type="radio"]').bind('click', function(){
		var v = $.trim(this.value);
		if(v == '1'){
			$('.J-panel-gourp').show();
			$('#J-panel-username').hide();
		}else{
			$('.J-panel-gourp').hide();
			$('#J-panel-username').show();
		}
		checkUser();
	});

	
	$("#J-upload-file").change(function(){
		var ss = $("#J-upload-file").val().split(".");
		if(ss.length>1)
			{
				var end = ss[ss.length-1];
				if(end!='csv'&&end!='txt'&&end!='CSV'&&end!='TXT')
					{
					alert("文件只支持csv或txt格式");
					return;
					}
			}
		ajaxFileUpload();
	});
	

	$('#J-input-time').keyup(function(){
		var v = this.value;
		if(v.length>0){
			if(v.substr(0,1) =='0'){
				v=v.substr(1,v.length);
			}
			this.value = v.replace(/[^\d^\.]/g, '');
		}
	});
	$('#J-input-time').keydown(function(){
		var v = this.value;
		if(v.length>0){
			if(v.substr(0,1) =='0'){
				v=v.substr(1,v.length);
			}
			this.value = v.replace(/[^\d^\.]/g, '');
		}
	});
	
	$('#J-select-date').change(function(){
		var v = this.value;
		if(v == '1'){
			$('#J-daatepicker').show().focus();
		}else{
			$('#J-daatepicker').hide();
		}
		checkTime();
	});
	
	$('#J-daatepicker').focus(function(){
		var dt = new phoenix.DatePicker({input:this,isShowTime:true});
			dt.show();
			dt.addEvent('afterSetValue', function(){
				$('#J-daatepicker').parent().find('.ui-check').hide();
				checkTime();
			});
	});
	
	
	//表单预览
	$('#J-button-view').click(function(){
		var wd = window.open('');
		wd.document.write(editor.getSource());
	});
	//表单提交
	$('#J-button-submit').click(function(){
		if($(this).hasClass('btn-disabled')){
			return;
		}
		if(WidthCheck($.trim($("#J-content").val())) >2000)
		{
			//alert("内容不能超过1000字符");
			$("#J-content").parent().find('.ui-check').show()
			return;
		}
		if(checkForm()){
		var str = getFormData('#J-form');
		jQuery.ajax({
			type: "post",
			url: baseUrl+'/noticeAdmin/createMsg',
			data : str,
			dataType :"json",
			success: function(data){
				//处理成功
				if(data.status == '1'){
					fnDiv('DivSuccessful');
					setTimeout(function(){ $('#DivSuccessful').css("display","none");
					window.location.href=baseUrl+"/noticeAdmin/goSysMsgManager";
					},3000);
					
				}
				//处理失败
				else{
					fnDiv('DivFailed');
					setTimeout(function(){ $('#DivFailed').css("display","none");},3000); 
				}
			},
			error: function(xhr,status,errMsg){
				alert(errMsg);
			}
			});
		}
	});
	editor.settings.focus=function(){
		$("#J-content").parent().find('.ui-check').hide();
	};
	
	//选择全部客户
	$('#J-checkbox-all').click(function(){
		var me = this,ipts = $('.J-panel-gourp').find('input[type="checkbox"]');
		if(this.checked){
			ipts.each(function(){
				if(me != this){
					this.disabled = true;
					this.checked = true;
				}
			});
		}else{
			ipts.each(function(){
				if(me != this){
					this.disabled = false;
					this.checked = false;
				}
			});
		}
		checkUser();
	});
	
	
});

function getFormData(element){
	var select = $(element).find('select');
    var input = $(element).find('input');
    var inputs = $.merge(select,input);
    var data = {};
    var str="";
    $.each(inputs,function(){
        if($(this).attr('type') != undefined){
        if(!$(this).attr('disabled')){
          switch($(this).attr('type')){
            case 'checkbox':
            	if($(this).attr('checked')){
            		if(data[$(this).attr('name')]==undefined){
            			str+=$(this).attr('name')+'='+  $(this).val()+'&';
                	}else{
                		str+=$(this).attr('name')+'='+  $(this).val()+'&';
                	}
            	}
              break;
            case 'radio':
            	if($(this).attr('checked')){
            		str+=$(this).attr('name')+'='+  $(this).val()+'&';
            	}
               break;
            case 'select':
            	if($(this).attr('selected')){
            		str+=$(this).attr('name')+'='+  $(this).val()+'&';
            	}
               break;
            default:
            	str+=$(this).attr('name')+'='+  $(this).val()+'&';
              break;
          }
        }
    }})
    str+='receives='+ $("#J-textarea-username").val()+'&';
    str+='content='+ $("#J-content").val()+'&';
    return str;
}
function fnDiv(obj){ 
    var Idivdok = document.getElementById(obj); 
    Idivdok.style.display="block"; 
    Idivdok.style.left=(document.documentElement.clientWidth-Idivdok.clientWidth)/2+document.documentElement.scrollLeft+"px"; 
    Idivdok.style.top=(document.documentElement.clientHeight-Idivdok.clientHeight)/2+document.documentElement.scrollTop-40+"px";
}
