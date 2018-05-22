$(document).ready(function(){
	    if($.cookie("userid") == null)
		{
		   $.ajax({
				url:'data.json',
				data:"userid=admin",
				dataType:'json',
				success:function(data){
					//data = {isSuccess:0,loginData:'2013-11-27'};
					if(Number(data['isSuccess']) == 1){
						  $.cookie('userName', data['loginData'], { expires: 30 });
					}else{
						
					}
				},
				
			});
		}
	
	    
		var button = $('#J-feedback-button-no'),
			panel = $('#J-help-feedback-panel'),
			text = $('#J-help-feedback-text'),
			cancel = $('#J-help-feedback-cancel'),
			ID = 'J-reason-4',
			submit = $("#submit");
		button.click(function(e){
			e.preventDefault();
			$("#J-help-message-panel").hide();
			$("#J-help-feedback-message").hide();
			$("#J-help-feedback-message").html("");
			panel.show();
		});
		panel.find('input').click(function(){
			if(this.id == ID && !!this.checked){
				text.show();
			}else{
				text.hide();
			}
		});
		cancel.click(function(e){
			e.preventDefault();
			panel.find('input').attr('checked', false);
			text.hide();
			panel.hide();
		});
		$("[name='reason']").click(function(){
			$("#J-help-feedback-message").hide();
			$("#J-help-feedback-message").html("");
		});
		
		$('#J-feedback-button-yes').click(function(){
			var url = baseUrl + "/help/addFeedBack";
			var helpId = $("#helpId").val();
			jQuery.ajax({
				type: "get",
				url: url,
				data : "helpId="+helpId+"&isSolved=1&num="+Math.random(),
				success: function(data,textStatus){
					$("#J-help-message-panel").show();
					$("#J-help-message").html("您的反馈信息已经成功提交，谢谢您的反馈");
					setTimeout(function(){window.location.reload();},3000);
					/*window.location.reload();*/
				},
				error: function(xhr,status,errMsg){
				alert("操作失败!");
				}
				});
		});
		
		$('#submit').click(function(){
			var reasonId = $("input[name='reason']:checked").val();
			if(reasonId==undefined || reasonId=="" || reasonId==null)
			{
			    alert("请选择原因");
				return false;
			}
			var reason = '';
			var isSolved = 0;
			if(reasonId == 3)
			{
				reason = $("#reasonText").val();
			}
			var url = baseUrl +"/help/addFeedBack";
			var helpId = $("#helpId").val();
			jQuery.ajax({
				type: "post",
				url: url,
				data : "helpId="+helpId+"&isSolved=0&"+"reasonId="+reasonId+"&reason=" + reason+"&num="+Math.random(),
				success: function(data,textStatus){
					$("#J-help-feedback-message").show();
					$("#J-help-feedback-message").html("您的反馈信息已经成功提交，谢谢您的反馈");
					setTimeout(function(){window.location.reload();},3000);
					/*window.location.reload();*/
				},
				error: function(xhr,status,errMsg){
				alert("操作失败!");
				}
				});			
		});
});
	
