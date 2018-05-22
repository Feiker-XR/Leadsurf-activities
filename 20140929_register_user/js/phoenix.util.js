

(function(host, name, $, undefined){
	
	var Main = function(){};
		Main.win = $(window);
		Main.doc = $(document);
		Main.isIE = !!document.all;
		Main.isIE6 = window.ActiveXObject && navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1] == 6.0 ? true : false;
		


		//使某个元素定位到视图中心
		Main.toViewCenter = function(el){
			var el = $(el),w = el.width(),h = el.height(),allw = Main.win.width(),allh = Main.win.height();
			el.css({left:allw/2 - w/2 + Main.win.scrollLeft(),top:allh/2 - h/2 + Main.win.scrollTop()});
		};


		
		//让某个元素始终保持在相对的固定位置(不随滚动条的滚动而变化)
		Main.startFixed = function(el, time){
			var el = $(el),fn,time = time || 500,
				top = parseInt(el.css('top')),sTop = Main.win.scrollTop(),_sTop = sTop,
				left = parseInt(el.css('left')),sLeft = Main.win.scrollLeft(),_sLeft = sLeft;
				
				fn = function(){
					_sTop = Main.win.scrollTop();
					_sLeft = Main.win.scrollLeft();
					if(sTop != _sTop){
						el.stop().animate({top:top + _sTop}, 50);
						sTop = _sTop;
					}
					if(sLeft != _sLeft){
						el.stop().animate({left:left + _sLeft}, 50);
						sLeft = _sLeft;
					}
				};
				//注意这里从代码层面上看，Timer 和 util形成了相互依赖 
				return new host['Timer']({time:time,fn:fn});
		};
		
		//计算字符长度，中文算2个
		Main.getByteLen = function(str){
			return str.replace(/[^\x00-\xff]/g, 'xx').length;
		};
		
		//获取url参数
		Main.getParam = function(name){
			var reg = new RegExp("(^|\\?|&)"+ name +"=([^&]*)(\\s|&|$)", "i");  
			if (reg.test(location.href)){
				return unescape(RegExp.$2.replace(/\+/g, " "));
			}else{
				return null;
			}
		};
		
		//Base64加密
		Main.Base64Method = function(){		
			_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; 			
			this.encode = function (input) {  
				var output = "";
				var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
				var i = 0;
				input = _utf8_encode(input);
				while (i < input.length) {
					chr1 = input.charCodeAt(i++);
					chr2 = input.charCodeAt(i++);
					chr3 = input.charCodeAt(i++);
					enc1 = chr1 >> 2;
					enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
					enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
					enc4 = chr3 & 63;
					if (isNaN(chr2)) {
						enc3 = enc4 = 64;
					} else if (isNaN(chr3)) {
						enc4 = 64;
					}
					output = output +
					_keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
					_keyStr.charAt(enc3) + _keyStr.charAt(enc4);
				}
				return output;
			} 			
			this.decode = function (input) {  
				var output = "";
				var chr1, chr2, chr3;
				var enc1, enc2, enc3, enc4;
				var i = 0;
				input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
				while (i < input.length) {
					enc1 = _keyStr.indexOf(input.charAt(i++));
					enc2 = _keyStr.indexOf(input.charAt(i++));
					enc3 = _keyStr.indexOf(input.charAt(i++));
					enc4 = _keyStr.indexOf(input.charAt(i++));
					chr1 = (enc1 << 2) | (enc2 >> 4);
					chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
					chr3 = ((enc3 & 3) << 6) | enc4;
					output = output + String.fromCharCode(chr1);
					if (enc3 != 64) {
						output = output + String.fromCharCode(chr2);
					}
					if (enc4 != 64) {
						output = output + String.fromCharCode(chr3);
					}
				}
				output = _utf8_decode(output);
				return output;
			} 			
			_utf8_encode = function (string) {
				string = string.replace(/\r\n/g,"\n");
				var utftext = "";
				for (var n = 0; n < string.length; n++) {
					var c = string.charCodeAt(n);
					if (c < 128) {
						utftext += String.fromCharCode(c);
					} else if((c > 127) && (c < 2048)) {
						utftext += String.fromCharCode((c >> 6) | 192);
						utftext += String.fromCharCode((c & 63) | 128);
					} else {
						utftext += String.fromCharCode((c >> 12) | 224);
						utftext += String.fromCharCode(((c >> 6) & 63) | 128);
						utftext += String.fromCharCode((c & 63) | 128);
					}
		 
				}
				return utftext;
			}			
			_utf8_decode = function (utftext) {
				var string = "";
				var i = 0;
				var c = c1 = c2 = 0;
				while ( i < utftext.length ) {
					c = utftext.charCodeAt(i);
					if (c < 128) {
						string += String.fromCharCode(c);
						i++;
					} else if((c > 191) && (c < 224)) {
						c2 = utftext.charCodeAt(i+1);
						string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
						i += 2;
					} else {
						c2 = utftext.charCodeAt(i+1);
						c3 = utftext.charCodeAt(i+2);
						string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
						i += 3;
					}
				}
				return string;
			}
	};
		
		
		
	//BASE64解密
	(function(){
		var END_OF_INPUT = -1;
		var base64Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/");
		var reverseBase64Chars = new Array();
		for (var i = 0; i < base64Chars.length; i++) {
			reverseBase64Chars[base64Chars[i]] = i
		}
		var base64Str;
		var base64Count;
		function setBase64Str(a) {
			base64Str = a;
			base64Count = 0
		}
		function readReverseBase64() {
			if (!base64Str) {
				return END_OF_INPUT
			}
			while (true) {
				if (base64Count >= base64Str.length) {
					return END_OF_INPUT
				}
				var a = base64Str.charAt(base64Count);
				base64Count++;
				if (reverseBase64Chars[a]) {
					return reverseBase64Chars[a]
				}
				if (a == "A") {
					return 0
				}
			}
			return END_OF_INPUT
		}
		function ntos(a) {
			a = a.toString(16);
			if (a.length == 1) {
				a = "0" + a
			}
			a = "%" + a;
			return unescape(a)
		}
		function decodeBase64(d) {
			setBase64Str(d);
			var a = "";
			var c = new Array(4);
			var b = false;
			while (!b && (c[0] = readReverseBase64()) != END_OF_INPUT && (c[1] = readReverseBase64()) != END_OF_INPUT) {
				c[2] = readReverseBase64();
				c[3] = readReverseBase64();
				a += ntos((((c[0] << 2) & 255) | c[1] >> 4));
				if (c[2] != END_OF_INPUT) {
					a += ntos((((c[1] << 4) & 255) | c[2] >> 2));
					if (c[3] != END_OF_INPUT) {
						a += ntos((((c[2] << 6) & 255) | c[3]))
					} else {
						b = true
					}
				} else {
					b = true
				}
			}
			return a
		}
		
		Main.decodeBase64 = decodeBase64;
		
	})();
	
	
	
		//根据模板和数据对象生成模板内容字符串
		//模板格式 <#=xxx#>
		Main.template = function(tpl, data){
			var me = this,o = data,p,reg;
			for(p in o){
				if(o.hasOwnProperty(p)){
					reg = RegExp('<#=' + p + '#>', 'g');
					tpl = tpl.replace(reg, o[p]);
				}
			}
			return tpl;
		};		
		
		//将数字保留两位小数并且千位使用逗号分隔
		Main.formatMoney = function(num){
			var num = Number(num),
				re = /(-?\d+)(\d{3})/;
				
			if(Number.prototype.toFixed){
				num = (num).toFixed(2);
			}else{
				num = Math.round(num*100)/100
			}
			num  =  '' + num;
			while(re.test(num)){
				num = num.replace(re,"$1,$2");
			}
			return num;  
		};
	
		
		
	
	host[name] = Main;
	
})(phoenix, "util", jQuery);










