/**   
 * Simple Map   
 *    
 *    
 * var m = new Map();   
 * m.put('key','value');   
 * ...   
 * var s = "";   
 * m.each(function(key,value,index){   
 *      s += index+":"+ key+"="+value+"/n";   
 * });   
 * alert(s);   
 *    
 * @author dewitt   
 * @date 2008-05-24   
 */    
function Map() {     
    /** 存放键的数组(遍历用到) */    
    this.keys = new Array();     
    /** 存放数据 */    
    this.data = new Object();     
         
    /**   
     * 放入一个键值对   
     * @param {String} key   
     * @param {Object} value   
     */    
    this.put = function(key, value) {     
        if(this.data[key] == null){     
            this.keys.push(key);     
        }     
        this.data[key] = value;     
    };     
         
    /**   
     * 获取某键对应的值   
     * @param {String} key   
     * @return {Object} value   
     */    
    this.get = function(key) {     
        return this.data[key];     
    };     
         
    /**   
     * 删除一个键值对   
     * @param {String} key   
     */    
    this.remove = function(key) {     
        this.keys.remove(key);     
        this.data[key] = null;     
    };     
         
    /**   
     * 遍历Map,执行处理函数   
     *    
     * @param {Function} 回调函数 function(key,value,index){..}   
     */    
    this.each = function(fn){     
        if(typeof fn != 'function'){     
            return;     
        }     
        var len = this.keys.length;     
        for(var i=0;i<len;i++){     
            var k = this.keys[i];     
            fn(k,this.data[k],i);     
        }     
    };     
         
    /**   
     * 获取键值数组(类似Java的entrySet())   
     * @return 键值对象{key,value}的数组   
     */    
    this.entrys = function() {     
        var len = this.keys.length;     
        var entrys = new Array(len);     
        for (var i = 0; i < len; i++) {     
            entrys[i] = {     
                key : this.keys[i],     
                value : this.data[i]     
            };     
        }     
        return entrys;     
    };     
         
    /**   
     * 判断Map是否为空   
     */    
    this.isEmpty = function() {     
        return this.keys.length == 0;     
    };     
         
    /**   
     * 获取键值对数量   
     */    
    this.size = function(){     
        return this.keys.length;     
    };     
         
    /**   
     * 重写toString    
     */    
    this.toString = function(){     
        var s = "{";     
        for(var i=0;i<this.keys.length;i++,s+=','){     
            var k = this.keys[i];     
            s += k+"="+this.data[k];     
        }     
        s+="}";     
        return s;     
    };     
}  
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

$(document).ready(function(){
	var tab = new phoenix.Tab({eventType:'click',par:'#J-tab-lottery-type',triggers:'.tab-lottery-type-title li',panels:'.tab-lottery-type-panel',currClass:'tab-lottery-type-title-current',currPanelClass:'tab-lottery-type-panel-current'});
	
	$('.ui-check').hide();
	$("#J-file").change(function(){
		var ss = $("#J-file").val().split(".");
		if(ss.length>1)
			{
				var end = ss[ss.length-1];
				if(end!='JPG'&&end!='GIF'&&end!='PNG'&&end!='jpg'&&end!='gif'&&end!='png')
					{
					alert("图片只支持JPG、GIF、PNG格式");
					return;
					}
			}
		
		ajaxFileUpload();
	});
	
	var form = $('#J-form'),button = $('#J-button-submit'),
		select1 = $('#J-select-type'),
		select2 = $('#J-select-type-2'),
		title = $('#J-title'),
		file = $('#J-file'),
		url = $('#J-url'),
		ad = $('#J-word-ad'),
		info = $('#J-info'),
		content = $('#J-content'),
		order = $('#J-order'),
		hide = $('#J-hide-pic'),
		
		setMessage = function(dom, msg){
			dom.parent().find('.ui-check').html('<i></i>' + msg).show();
		},
		hideMessage = function(dom){
			dom.parent().find('.ui-check').hide();
		};
		
		
		file.change(function(){
			if($.trim(this.value) != ''){
				hideMessage(file);
			}
		});
		
		
	button.click(function(e){
		e.preventDefault();
		if(select1.val() == -1 || select2.val() == -1 || select1.val() == '' || select2.val() == ''){
			setMessage(select1, '请选择类目');
			return;
		}
		hideMessage(select1);
		
		if($.trim(title.val()).length < 1 || $.trim(title.val()).length > 100){
			setMessage(title, '标题长度应在1-100个字符');
			return;
		}
		hideMessage(title);
		
		if($.trim(hide.val()) == ''){
			setMessage(file, '请上传彩种Logo图片');
			return;
		}
		hideMessage(file);
		
		var ss = hide.val().split(".");
		if(ss.length>1)
			{
				var end = ss[ss.length-1];
				if(end!='JPG'&&end!='GIF'&&end!='PNG'&&end!='jpg'&&end!='gif'&&end!='png')
					{
					setMessage(file, '图片只支持JPG、GIF、PNG格式');
					return;
					}
			}
		
		if($.trim(url.val()).length < 1){
			setMessage(url, '彩种链接不能为空');
			return;
		}
		hideMessage(url);
		
		
		if($.trim(ad.val()).length < 1 || $.trim(ad.val()).length > 40){
			setMessage(ad, '广告语长度应为1-40个字符');
			return;
		}
		hideMessage(ad);
		
		
		if(WidthCheck(info.val()) < 1 || WidthCheck(info.val()) > 300 ){
			setMessage(info, '彩种简介长度应在1-300个字符');
			return;
		}
		hideMessage(info);
		
		
		if(!(/^\d+$/g).test($.trim(order.val()))){
			setMessage(order, '序号只能为非负整数');
			return;
		}
		if(Number($.trim(order.val())) < 0){
			setMessage(order, '序号只能为非负整数');
			return;
		}		
		if(Number($.trim(order.val())) > 1000000){
			setMessage(order, '序号不能大于1000000');
			return;
		}
		hideMessage(order);
		form.submit();
	});
})