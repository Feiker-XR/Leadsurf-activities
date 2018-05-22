/*var supports = (function() {
    var div = document.createElement('div'),
        vendors = 'Khtml Ms O Moz Webkit'.split(' '),
        len = vendors.length;
 
    return function(prop) {
		if ( prop in div.style ) return true;

		prop = prop.replace(/^[a-z]/, function(val) {
			return val.toUpperCase();
		});

		while(len--) {
			if ( vendors[len] + prop in div.style ) {
			// browser supports box-shadow. Do what you need.
			// Or use a bang (!) to test if the browser doesn't.
				return true;
			} 
		}
		return false;
    }
})();*/
/*if ( supports('textStroke') ) {
	document.documentElement.className += ' textStroke';
	alert('This browser supports the text-stroke property');
} else {
	alert('This browser DOES NOT support the text-stroke property');
}*/

$(function(){
	// Inview
	// https://github.com/protonet/jquery.inview
	$('.intro').on('inview', function(event, isInView){
		var $this = $(this);
		if( isInView ){
			$this.addClass('intro_inview');
		}else{
			// $this.removeClass('intro_inview');
			$this.off('inview');
		}
	});

	var $timer = $('#timer'),
		$limiter = $('#limiter');

	// 限时倒计时
	// new Date(year, month-1, day, hour, minute, second, millisecond);
	var init_date  = new Date(2014, 4, 8, 7), // 月份-1：4表示5月
		day_step   = 5 * 24 * 60 * 60 * 1000, // 5天
		_d = 24 * 60 * 60 * 1000,
		_h = 60 * 60 * 1000,
		_m = 60 * 1000;
	// console.log(init_date)
	function day_limit(){
		var now = new Date();
		var ret = day_step - ( Date.parse(now) - Date.parse(init_date) ) % day_step;
		/*var _day    = Math.floor( ret / _d ),
			_hour   = Math.floor( ( ret % _d ) / _h ),
			_minute = Math.floor( ( (ret % _d) % _h ) / _m );
		$timer.text( _day + '天' + _hour + '时' + _minute + '分' );*/
		$timer.text( Math.floor( ret / _m ) + '分钟' );
	}
	day_limit();
	setInterval(day_limit, 1000 * 60);

	// 限量倒计时
	var count_date   = new Date(2014, 4, 8, 7), // 月份-1：4表示5月
		count_amount = 10000;
	function amount_limit(){
		var now = new Date();
		var ret = Date.parse(now) - Date.parse(init_date);
		var count_remain = count_amount - Math.round( (ret / ( 1000 * 5 )) % count_amount );
		$limiter.text( count_remain );
	}
	amount_limit();
	setInterval(amount_limit, 5000);

	// 订阅
	// ERROR
	// 1，邮箱不对 提示：请输入正确的邮箱地址
	// 2，邮箱正确 提示：订阅成功，请查收邮件
	// 3，邮箱重复 提示：您输入的邮箱已订阅
	var feedback = [
		'请输入正确的邮箱地址',
		'订阅成功',
		'您输入的邮箱已订阅'
	];
	var $feedback = $('.subscribe .feedback').fadeOut();
	$('.subscribe button').on('click', function(e){
		e.preventDefault();
		var email = $.trim( $('#id_email').val() );
		if( check_email(email) ){
			$.post('subscribe.php', {'email': email, 'flag': 'subscription'}, function(response){
				var resp = $.parseJSON(response);
				subscribe_message(resp.status);
			});
			// for test
			// subscribe_message(Math.round(Math.random() * 2));
		}else{
			$('#id_email').focus();
			subscribe_message(0);
		}
	});
	function check_email(email){
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	}
	function subscribe_message(code){
		code = parseInt(code);
		if( code == 1 ){
			$feedback.text(feedback[code]).addClass('feedback_ok').fadeIn();
		}else if( feedback[code] ){
			$feedback.text(feedback[code]).removeClass('feedback_ok').fadeIn();
		}
	}

	// 飘窗广告
	var $click_me = $('<div id="click_me"> \
						<a href="http://www.fenghuang158.com/newuser/" target="_blank"> \
							<img src="images/clickme.gif" alt=""> \
						</a> \
						<span class="closeme">&times;</span> \
					</div>');
	$click_me.css('display', 'block').animate({
		opacity: 1
	}, 600).find('.closeme').on('click', function(){
		$('#click_me').fadeOut();
	}).end().appendTo('body');
});