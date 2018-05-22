$(document).ready(function(){
	var oldVal = '',
		newVal = '',
		confirmVal = '',
		oldDom = $('#oldpassword'),
		newDom = $('#newpassword'),
		confirmDom = $('#confirmpassword'),
		formDom = $('#info-content'),
		submitButtonDom = $('#submit'),
		mask = phoenix.Mask.getInstance(),
		message = phoenix.Message.getInstance();

		oldDom.val('');
		newDom.val('');
		confirmDom.val('');

		oldDom.focus(function(){
			var tipsDom = $(this).next();
			if($.trim($(this).val())==''){
				tipsDom.html('请输入当前登录密码');
				tipsDom.show();
			}
		});
		newDom.focus(function(){
			var tipsDom = $(this).next();
			tipsDom.html('6-20位字符组成，区分大小写');
			tipsDom.show();
		});
		confirmDom.focus(function(){
			var tipsDom = $(this).next();
			if($.trim($(this).val)==''){
				tipsDom.html('请再次输入登录密码');
				tipsDom.show();
			}
		});

		oldDom.blur(function(){
			var tipsDom = $(this).next();
			if($(this).val() == ''){
				tipsDom.html('请输入当前登录密码');
				tipsDom.show();
			}else{
				tipsDom.html('');
				oldVal = $(this).val();
			}
		});
		newDom.blur(function(){
			var tipsDom = $(this).next(),
				content = $(this).val();
			if(content.length >= 6 && content.length <= 20){
				tipsDom.html('');
				newVal = content;
			}else{
				tipsDom.html('6-20位字符组成，区分大小写');
				tipsDom.show();
			}
		});
		confirmDom.blur(function(){
			var tipsDom = $(this).next(),
				password = newDom.val();

			if($.trim($(this).val()) == ''){
				tipsDom.html('请再次输入登录密码');
				tipsDom.show();
				return;
			}

			if($(this).val() == password){
				tipsDom.html('');
				confirmVal = password;
			}else{
				tipsDom.html('两次密码输入不一致');
				tipsDom.show();
			}
		});

		submitButtonDom.click(function(){
			var data = formDom.serialize(),
				successDom = $('#successTips'),
				errorDom = $('#errorTips');


			//密码
			if(oldVal == ''){
				oldDom.next().html('请输入当前登录密码');
				oldDom.show();
				oldDom.focus();
				return;
			}

			//新密码
			if(newVal == ''){
				newDom.next().html('6-20位字符组成，区分大小写');
				newDom.show();
				newDom.focus();
				return;
			}

			//确认新密码
			if(confirmVal == ''){
				confirmDom.next().html('请再次输入登录密码');
				confirmDom.show();
				confirmDom.focus();
				return;
			}

			$.ajax({
				url: baseUrl+'/aclAdmin/modifyPwd',
				dataType: 'json',
				type: 'POST',
				data: data,
				success:function(data){
					if(Number(data['status']) == 1){
						successDom.show();
						mask.show();
						setTimeout(function(){
							successDom.hide();
							mask.hide()
						},2000)
					}else{
						errorDom.show();
						mask.show();
						setTimeout(function(){
							errorDom.hide();
							mask.hide()
						},2000)
					}
				},
				complete: function(){

				}
			});
		});

})