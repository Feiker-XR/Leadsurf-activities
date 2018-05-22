/**
 * APP下载页面JS
 * @version $Id$
 */
(function($, WIN, undefined) {
	var link = [
		'http://126.am/yQPFh7',
		'http://126.am/tfuWV4',
		'http://126.am/ZSfxY6',
		'http://126.am/iz37e6',
		'http://126.am/dfO5f6'
	];

	var num = Math.floor(Math.random() * 5);

	//随机链接
	$('.link-reg').attr('href', link[num]);
})(jQuery, window)

