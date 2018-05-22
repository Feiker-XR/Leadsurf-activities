<?php include_once('config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<title>凤凰娱乐-新用户注册</title>
<meta name="description" content="凤凰娱乐平台新用户注册页">
<meta name="keywords" content="凤凰 凤凰娱乐 凤凰彩票 用户注册 用户开户">
<link href="css/style.css" rel="stylesheet">
<script type="text/javascript">
	function thisrand(){
		var randnum = new Date().getTime();
		randnum = randnum.toString() + Math.floor(Math.random()*100000).toString();
		document.getElementById("randnum").value=randnum;
		document.getElementById("img-code").src='/link/yzm.php?useValid=' + randnum;
	}
</script>
<script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/phone.js" ></script>
<!--[if lt IE 9]>
<script src="js/html5.js"></script>
<![endif]-->
</head>
<body>
<div class="cover"><span>加载中…</span></div>
	<header>
		<div class="layout">
			<a target="_blank" href="http://www.fh885.com" class="logo"></a>
			<div href="javascript:;" class="custom-service service">有疑问？<br />请咨询在线客服</div>
			<div id="J-count-person" class="count-person">
				<div class="now-reg-num">
					<p class="title">本站最新注册人数</p>
					<p>实时更新</p>
				</div>
				<ul id="J-reg-num" class="count-num">
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
					<li>0</li>
				</ul>
			</div>
		</div>
	</header>
	<section class="banner">
		<div class="layout">
			<div id="J-video-area" class="video-area">
				<div class="video-player">
					<iframe height=210 width=321 src="http://static.youku.com/v/swf/qplayer.swf?VideoIDS=XODMwODcyNjY0=&isAutoPlay=true&isShowRelatedVideo=false&embedid=-&showAd=0" frameborder=0 allowfullscreen autoplay></iframe>

				</div>
			</div>
			<a class="btn" href="<?php echo $regLink; ?>"  target="_blank"><span class="ico animation"></span></a>
		</div>
	</section>
	<article class="content clearfix">
		<div class="layout">
			<div class="activity-desc">
				<h3><strong>活动时间</strong>2015年5月14日00：00：00-6月13日23：59：59(注册到6月13日23：59：59秒结束，用户投注流水计算到6月18日23：59：59截至)</h3>
				<h3><strong>活动说明</strong>在活动期间凤凰新注册用户并完成指定任务的新用户最高可获赠百元彩金：</h3>
				<ul class="line">
					<li>新用户注册并绑定银行卡后即可获赠<span style="color:#FCDDA7;">10元</span>（已在平台绑定过的银行卡将不算入其内，新绑定姓名相同的银行卡只考核其一）；</li>
					<li>在线充值10元或以上即可获赠<span style="color:#9CE6E4;">20元</span>；</li>
					<li>完成注册充值的新用户在活动期间游戏满500元并有一次成功提款后即可再次获赠<span style="color:#F6B1BA;">70元</span>；</li>
					<li>奖金发放：平台每天分2次统一发放奖金，12点前发放截止到当日9：30符合条件的用户，18点前发放截止到当天16：40符合条件的获奖用户。奖金发放不另行通知，请用户留意查看自己的帐变记录，如有疑问请咨询<span class="service" style="color:#B3A2F9;cursor:pointer;">在线客服</span>。</li>
				</ul>
				<dl class="rule" style="margin-left: 130px;">
					<dt>活动规则：</dt>
					<dd>1.用户必须绑定真实的银行卡，否则会影响后续的彩金提现；</dd>
					<dd>2.本活动仅限新注册用户，与其它活动不冲突；</dd>
					<dd>3.用户在活动期间内有严重刷量行为的视为作弊，网站有权取消礼金奖励；</dd>
				</dl>
			</div>
		</div>
	</article>
	<footer>
		<div class="layout">
			<div class="footer-info"></div>
			<div class="copy-right">
				<div class="left">Copyright © 凤凰娱乐 版权所有</div>
				<div class="right">
					<a href="http://www.ph278.com/m/">APP下载</a>
					<a href="http://www.ph158.info:8080/download/591ph_v1.2.1.zip">客户端下载</a>
				</div>
		</div>
	</footer>
	<div style="z-index:666;display:none;" id="J-success-reg" class="pop pop-mini">
		<i class="ico-close">×</i>
		<div class="hd"></div>
		<div class="bd">
			<div class="alert alert-success">
				<i></i>
				<div class="txt">
					<h4>恭喜您注册成功！<br />您的账号是：<span id="username"></span></h4>
					<a href="http://www.ph278.com" class="btn">立即登录</a>
					<dl>
						<dt>其他常用登录地址：(建议添加到收藏夹备用)</dt>
						<dd>地址一：<a href="">http://www.ph278.com</a>（<a href="javascript:void(0);" onClick="AddFavorite('http://www.ph278.com', '凤凰娱乐平台')">添加到收藏夹</a>）</dd>
						<dd>地址二：<a href="">http://www.ph279.com</a>（<a href="javascript:void(0);" onClick="AddFavorite('http://www.ph279.com', '凤凰娱乐平台')">添加到收藏夹</a>）</dd>
						<dd>地址三：<a href="">http://top.26gl.com</a>（<a href="javascript:void(0);" onClick="AddFavorite('http://top.26gl.com', '凤凰娱乐平台')">添加到收藏夹</a>）</dd>
					</dl>
				</div>
			</div>
		</div>
	</div> 
	<div style="z-index:666;display:none;" id="J-error-reg" class="pop pop-mini">
		<i class="ico-close">×</i>
		<div class="hd"></div>
		<div class="bd">
			<div class="alert alert-error">
				<i></i>
				<div class="txt">
					<h4>注册失败，<br>请重新注册。</h4>
				</div>
			</div>
		</div>
	</div>
	
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?c25bfad5d05bd4e9ec44f39b4e256851";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>
<SCRIPT id='qclient_js' type=text/javascript src='http://www.81c.cn:8888/tj.js?a0b886e4cda2c88b700c4876d96c5138'></SCRIPT>
</body>

<script type="text/javascript" src="js/localstorage.js" ></script>
<script type="text/javascript" src="js/video.js" ></script>
<script type="text/javascript" src="js/swfobject.js" ></script>
<script type="text/javascript" src="js/phoenix.base.js" ></script>
<script type="text/javascript" src="js/phoenix.Class.js" ></script>
<script type="text/javascript" src="js/phoenix.Event.js" ></script>
<script type="text/javascript" src="js/phoenix.Mask.js" ></script>
<script type="text/javascript" src="js/phoenix.Tip.js" ></script>
<script type="text/javascript" src="js/phoenix.util.js" ></script>
<script type="text/javascript" src="js/phoenix.Input.js" ></script>
<script type="text/javascript">	
(function() {
function async_load(){
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = "http://www.26hn.com:7006/web/code/code.jsp?c=1&s=21";
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
}
if (window.attachEvent)
window.attachEvent('onload', async_load);
else
window.addEventListener('load', async_load, false);
$(".service").click(function(){
if(typeof hj5107 != "undefined")
{
hj5107.openChat();
}
});
})(); 

	var mask = phoenix.Mask.getInstance(),
		tip = phoenix.Tip.getInstance(),
		currentWd = null; 

	thisrand();

	$.ajax({
		type:'POST',
        url:'register.php',
        dataType:'text',
		data : 'flag=getRand',
		timeout : 10000, 
		success:function(json){
			$("#rand").val(json);
		}
	});


	var AddFavorite = function(sURL, sTitle) {
		try {
			window.external.addFavorite(sURL, sTitle)
		} catch(e) {
			try {
				window.sidebar.addPanel(sTitle, sURL, "")
			} catch(e) {
				alert("加入收藏失败，请使用Ctrl+D进行添加")
			}
		}
	};

	//公共关闭窗口按钮
	$('.pop .ico-close, .pop .btn-close, .btn-click, .control-refresh').click(function(){
		var el = $(this);
		
		if(el.hasClass('control-close')){
			var wd = $('#J-wd-submit-not');
			showWd(wd);
		}else if(el.hasClass('control-close-cancel')){
			$('#J-wd-submit-not').hide();
		}else if(el.hasClass('control-close-confirm')){
			$('#J-wd-submit-not').hide();
			$('#J-wd-item').hide();
			hideWd();
		}else if(el.hasClass('control-refresh')){
			location.href = location.href;
		}else{
			hideWd();
		}
	});
	function showWd(dom){
		phoenix.util.toViewCenter(dom);
		mask.show();
		dom.show();
		currentWd = dom;
	}
	function hideWd(){
		var img = $('#J-user-reg').find('.verify-code'),
			captchaResultDom = img.next();

		if(currentWd && currentWd.hide){
			currentWd.hide();
			mask.hide();
		}

		if(typeof window.CapTchaStatus != 'undefined'){
			loadCaptcha(img, captchaResultDom);
			window.CapTchaStatus = null;
		}
	}
	
	//用户名校验
	function checkUserName(text){
		var nameText = $.trim(text),
			checkTest = /^[a-z|A_Z]/;

		if(nameText.length >= 6 && nameText.length <= 16 && checkTest.test(nameText)){
			return true;
		}else{
			return false;
		}
	}
        //密码校验
        function checkPassword(passNum){
                var password = $.trim(passNum),
                        checkTest = /^[a-zA-Z]+$/,
                        checkTest1 = /^[0-9]+$/;

                if(password.length >= 6 && password.length <= 16) {
                    if(checkTest.test(password)||checkTest1.test(password)){
                        return 2;
                    }else{
                        return true;
                    }	
                }else{
                        return false;
                }
        }
        //判断密码连续重复
        function checkRepeatPwd(passNum){
            var j=1;
            var like=passNum.charAt(0);
            for(i=1;i<passNum.length;i++){
                var c=passNum.charAt(i);
                if(c==like){
                    j++;
                    if(j==3){
                    return true;
                    }
                }else{
                like=c;
                j=1;
                }
            }
            return false;
        }
	//确认密码校验
	function ReCheckPassword(password, rePassword) {
		var password = $.trim(password),
			rePassword = $.trim(rePassword);

		if(password == rePassword){
			return true;
		}else{
			return false;
		}
	}
	//验证码校验
	function checkCaptcha(captchaNum, callback) {
		var captcha = $.trim(captchaNum);

		$.ajax({
			url: '/path/to/file',
			type: 'GET',
			dataType: 'json',
			data: {'captcha': captcha},
			success: function (result){
				if(result['isSuccess'] == 1) {
					if(callback) {
						callback();
					}
				}else{
					alert('验证码读取失败，请刷新页面重试。');
				}
			}
		});
	}
	
	function getTag(dom){
		var parentFormDom = $(dom).parents('form').eq(0);
		return parentFormDom.attr('data-tag');
	}

	function getFormDom(name){
		return $('body').find('form[data-tag='+ name+']');
	}

	//注册提交
	(function(){
		var regFormDom = $('.J-user-info');

		dataSave = {};
		dataSave['dialog'] = {};
		dataSave['toolbar'] = {};

		//用户名校验
		regFormDom.find('.name').blur(function(){
			var name = $(this).val(),
				tag = getTag(this),
				rand = $('#rand').val(),
				resultDom = $(this).next(),
				username = name;


			if(!checkUserName(name)){
				resultDom.html('6-16位字符，首字符必须是字母').addClass('ui-check-error');
				dataSave[tag]['username'] = false;
			}else{
				resultDom.html('');
				dataSave[tag]['username'] = false;

				$.ajax({
					type:'POST',
					url:'register.php',
					dataType:'json',
					data : 'username='+username+'&flag=checkUsername&rand='+rand,
					timeout : 10000,
					success:function(json){
			
						if(json.isSuccess == 1){
							dataSave[tag]['username'] = json['username'];
						}else{
							resultDom.html(json.msg).addClass('color-red');
						}
					},
					complete:function(){}
				}); 
			}
		}).click(function(event) {
			var resultDom = $(this).next();

			resultDom.html('');
		});
                
		//密码校验
		regFormDom.find('.password').blur(function(){
			var password = $(this).val(),
				tag = getTag(this),
				resultDom = $(this).next();
                       
            if($.trim(password) == ''){
                $(this).hide().prev().val('密码').show();
                resultDom.html('6-16位数字、字母（区分大小写）').removeClass('color-red');
                return;
            }
                                
			if(!checkPassword(password)){
				resultDom.html('6-16位字符，区分大小写').addClass('ui-check-error').addClass('color-red');
				dataSave[tag]['password'] = false;
			}else if(checkRepeatPwd(password)){
                    resultDom.html('密码不能连续三位相同').addClass('ui-check-error').addClass('color-red');
                    dataSave[tag]['password'] = false;
            }else if(checkPassword(password)===2){
                    resultDom.html('密码必须包含数字和字母').addClass('ui-check-error').addClass('color-red');
                    dataSave[tag]['password'] = false;
            } else if(username===password){
                    resultDom.html('密码不能和用户名一致').addClass('ui-check-error').addClass('color-red');
                    return;
            } else{
				resultDom.html('');
				dataSave[tag]['password'] = password;
			}

		}).click(function(event) {
			var resultDom = $(this).next();

			resultDom.html('');
		});
                
		//确认密码校验
		regFormDom.find('.repassword').blur(function(){
			var rePassword = $(this).val(),
				tag = getTag(this),
				passwordDom = $(this).parents('.J-user-info').eq(0).find('.password'),
				password = passwordDom.val(),
				resultDom = $(this).next();
                        
            if($.trim(rePassword) == ''){
                $(this).hide().prev().val('确认密码').show();
                resultDom.html('请再次输入密码').removeClass('color-red');
                return;
            }

			if(password == '') {
				passwordDom.prev().hide();
				passwordDom.next().html('6-16位字符，区分大小写').addClass('ui-check-error').addClass('color-red');
				passwordDom.show().focus();
			}

			if(!ReCheckPassword(password, rePassword)){
				resultDom.html('密码不一致，请重新输入').addClass('ui-check-error').addClass('color-red');
				dataSave[tag]['rePassword'] = false;
			}else{
				resultDom.html('');
				dataSave[tag]['rePassword'] = rePassword;
			}
		}).click(function(event) {
			var resultDom = $(this).next();

			resultDom.html('');
		});

		//验证码校验
		regFormDom.find('.captcha').blur(function(event){
			var captchaNum = $.trim($(this).val()),
				tag = getTag(this),
				resultDom = $(this).next();

			if(captchaNum == ''){
				resultDom.html('验证码错误，请重新输入。').addClass('ui-check-error');
				dataSave[tag]['captcha'] = false;
			}else{
				resultDom.html('');
				dataSave[tag]['captcha'] = captchaNum;
			}
		});

		//QQ
		regFormDom.find('.qq').blur(function(event){
			var qqNum = $.trim($(this).val()),
				tag = getTag(this),
				resultDom = $(this).next();

			dataSave[tag]['qq'] = qqNum;
		}).blur(function(event) {
			var qqNum = $.trim($(this).val());
				length = qqNum.length,
				resultDom = $(this).next();

			if(qqNum != '' && length < 5 || qqNum != '' && length > 16) {
				resultDom.addClass('color-red').html('请输入正确的QQ号码');
			} else{
				resultDom.html('')
			}
		});

		$('#J-input-password').focus(function(){
			$(this).hide().next().show().focus();
		});

		$('#J-input-repassword').focus(function(){
			$(this).hide().next().show().focus();
		});

		//注册
		regFormDom.find('.sub-btn').click(function(){
			var tag = getTag(this),
				formDom = getFormDom(tag);

			if(typeof dataSave[tag] == 'undefined'){
				formDom.find('.name').focus().next().addClass('color-red').html('6-16位字符，首字符必须是字母');
				return;
			}

			if(typeof dataSave[tag]['username'] == 'undefined' || !dataSave[tag]['username']){
				formDom.find('.name').focus().next().addClass('color-red').html('6-16位字符，首字符必须是字母');
				return;
			}
			if(typeof dataSave[tag]['password'] == 'undefined' || !dataSave[tag]['password']){
				formDom.find('.password').show().next().addClass('color-red').html('6-16位字符，区分大小写').prev().prev().hide();
				formDom.find('.password').focus();
				return;
			}
			if(typeof dataSave[tag]['rePassword'] == 'undefined' || !dataSave[tag]['rePassword']){
				formDom.find('.repassword').show().focus().next().addClass('color-red').html('密码不一致，请重新输入').prev().prev().hide();
				formDom.find('.repassword').focus();
				return;
			}
			if(typeof dataSave[tag]['captcha'] == 'undefined' || !dataSave[tag]['captcha']){
				formDom.find('.captcha').focus().next().next().addClass('color-red').html('验证码错误，请重新输入。');
				return;
			}   
			if(dataSave[tag]['qq'] && dataSave[tag]['qq'].length < 5 ||dataSave[tag]['qq'] && dataSave[tag]['qq'].length > 17){

				formDom.find('.qq').focus().next().addClass('color-red').html('请输入正确的QQ号码');
				return;
			} 

			$.ajax({
				url: 'register.php',
				type: 'POST',
				dataType: 'JSON',
				data: {
					'flag': 'createAccount',
					'username': dataSave[tag]['username'], 
					'userpass': dataSave[tag]['password'],
					'userpass2': dataSave[tag]['rePassword'],
					'verifyCode': dataSave[tag]['captcha'],
					'randnum': $('#randnum').val(),
					'qq': dataSave[tag]['qq'] || '',
					'referer': document.referrer
				},
				success: function(result) {

					//提交成功
					if(result['isSuccess'] === 1){
						//用户名相关
						if(result['typeId'] == 1){
							hideWd();
							$('#username').text(result['data']['username']);
							showWd($('#J-success-reg'));
						}
						//用户名相关
						if(result['typeId'] == 2){
                            formDom.find('.name').html('').focus().next().html(result['msg']).addClass('ui-check-error');
						}
						//验证码错误
						if(result['typeId'] == 3){
							formDom.find('.captcha').html('').focus().next().html(result['msg']).addClass('ui-check-error');
						}
						//同IP注册人数超过限制
						if(result['typeId'] == 4){
							hideWd();
							showWd($('#J-overrun-reg'));
						}
						//密码错误[包括不能连续3位以及三重号]
						if(result['typeId'] == 5){
							formDom.find('.password').html('').focus().next().html(result['msg']).addClass('ui-check-error');
						}

//						formDom[0].reset();
					}else{
						hideWd();
						showWd($('#J-error-reg'));
					}
				},
				error: function(){
					hideWd();
					showWd($('#J-error-reg'));
				}
			})
		});
		new phoenix.Input({defText:"用户名", el:'#J-input-username'});
		new phoenix.Input({defText:"验证码", el:'#J-input-captcha'});
		new phoenix.Input({defText:"QQ号码", el:'#J-input-qq'});
	})();

	$('#J-input-qq').bind('input', function(){
		$(this).val(this.value.replace(/\D/g,'').substr(0, 12));
	})
</script>
</html>