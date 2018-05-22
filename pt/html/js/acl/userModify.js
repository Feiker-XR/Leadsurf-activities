$(document).ready(function(){
			
		var pass = '',
			passConfirm = false,
			passCard = false,
			userId = $('#userId').val(),
			//密码框
			passWordDom = $('#passWord'),
			//密码提示
			passWordTips = '<span style="color:#ff0000">6-20位字符组成，区分大小写<span>'
			//密码卡
			confirmPassWordDom = $('#confirmPassWord'),
			//确认密码框
			passwordCardDom = $('#passwordCard'),
			//表单
			formDom = $('#info-content'),
			//修改按钮
			editButtonDom = $('#editButton'),
			//遮罩
			mask = phoenix.Mask.getInstance(),
			//弹窗
			message = phoenix.Message.getInstance();
			
			//检查密码
			var checkNum = function(num){
				if(num.length >= 6 && num.length <= 20){
					return true;
				}else{
					return false;
				}
			};
			//密码提示
			passWordDom.blur(function(){
				var tipsDom = $(this).next();

				if(!checkNum($(this).val())){
					tipsDom.html(passWordTips);
					return;
				}else{
					tipsDom.html('');
				}

				pass = $(this).val();
			});
			//确认密码检查
			confirmPassWordDom.blur(function(){
				var tipsDom = $(this).next();

				if(pass == ''){
					tipsDom.html('请先输入原密码');
				}else{
					if($(this).val() == pass){
						tipsDom.html('');
						passConfirm = true;
					}else{
						tipsDom.html('<span style="color:#ff0000">两次输入的密码不一致</span>');
					}
				}
			});
			//密码卡绑定
			passwordCardDom.blur(function(){
				var tipsDom = $(this).next();
				$.ajax({
					url: baseUrl + '/aclAdmin/checkBindPwd',
					dataType: 'json',
					type: 'POST',
					data: {bindPwd:passwordCardDom.val(),id:userId},
					success:function(data){
						if(Number(data['status']) == 1){
							tipsDom.html('密码卡可以使用');
							//校验密保卡
							//测试完成打开
							passCard = true;
						}else{
							tipsDom.html('密码卡被占用');
							passCard = false;
						}
					},
					complete: function(){

					}
				});

				//测试完成删除此处
				passCard = true;
			});
			//修改提交 
			editButtonDom.click(function(){
				var data = formDom.serialize(),
					successDom = $('#successTips'),
					errorDom = $('#errorTips');


				//密码
				if(pass == '' && confirmPassWordDom.val()!=''){
					passWordDom.next().html('<span style="color:#ff0000">请先填写密码！</span>')
					passWordDom.focus();
					return;
				}

				//确认密码
				if(!passConfirm && pass!=''){
					confirmPassWordDom.next().html('<span style="color:#ff0000">请确认密码！</span>')
					confirmPassWordDom.focus();				
					return;
				}

				//密码卡
				if(!passCard){
					passwordCardDom.next().html('<span style="color:#ff0000">请绑定密码卡！</span>')
					passwordCardDom.focus();
					return;
				}

				$.ajax({
					url: baseUrl + '/aclAdmin/modifyUser',
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
							errorTips.show();
							mask.show();
							setTimeout(function(){
								errorTips.hide();
								mask.hide()
							},2000)
						}
					}
				});
			})
	})