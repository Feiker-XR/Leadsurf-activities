$(document).ready(function(){
	var form = $('#J-form'),
		button = $('#J-form-submit'),
		h = $('#J-input-h'),
		s = $('#J-input-s'),
		fn;
	fn = function(e){
		var me = this,v = me.value,index;
		me.value = v = v.replace(/^\.$/g, '');
		index = v.indexOf('.');
		if(index > 0){
			me.value = v = v.replace(/(.+\..*)(\.)/g, '$1');
			if(v.substring(index+1,v.length).length>2){
				me.value= v = v.substring(0, v.indexOf(".") + 3);
			}
		}
		me.value = v = v.replace(/[^\d|^\.]/g, '');
		me.value = v = v.replace(/^00/g, '0');
		if($.trim(me.value) == ''){
			me.value = 0;
		}
	};
	h.keyup(fn);
	s.keyup(fn);
	button.click(function(e){
		e.preventDefault();
		form.submit();
	});
})