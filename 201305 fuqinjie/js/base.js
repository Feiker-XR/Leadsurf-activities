
(function(undefined){
	var $ = {};
	
	$.hasClass = function(ele,cls) { 
		return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
	}
	
	$.addClass = function(ele,cls) {
		//console.log(ele.className);
		if(ele.className == ""){
			//console.log(ele.className = "");
			ele.className += cls;
		}else if(!this.hasClass(ele,cls)){
			//console.log(this.className);
			ele.className += " "+ cls;
		}
	}
	$.removeClass = function(ele,cls) { 
		if ($.hasClass(ele,cls)) { 
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)'); 
			ele.className=ele.className.replace(reg,''); 
		}
	}
	
	$.getID = function(id){
		return document.getElementById(id);
	}

	$.getClass = function(cls, obj){
		var array = [],
		currentObj = obj ? obj : document;
		var tagNameElem = currentObj.getElementsByTagName('*');
		for(var i=0,l=tagNameElem.length;i<l;i++){
			var obj = tagNameElem[i];
				if($.hasClass(obj, cls)){
					array.push(obj);
				}
		}
		return array;
	}
	//指针
	$.each = function(array, closure){
		for(var i=0,l=array.length;i<l;i++){
			closure.call(array[i]);
		}
	}
	//索引
	$.indexOfArray = function(current, obj){
		for (var i = 0;i < obj.length; i++) {
			if (obj[i] == current) {
				return i;
			}
		}
	}
	window.MyUtils = $;
})();
/* slider */
/*
var adPic = MyUtils.getID("adPic"),
adNum = MyUtils.getID("adNum"),
adPicEls = adPic.getElementsByTagName("LI"),
adNumEls = adNum.getElementsByTagName("LI"),
adNumCur = MyUtils.getClass("current", adNum)[0],
e=e||window.event,
html=document.documentElement,
htmlWidth=html.clientWidth;
for(var i = 0; i < adPicEls.length; i++){
	adPicEls[i].style.width = htmlWidth + "px";
	adPic.style.width = htmlWidth * adPicEls.length +"px";
}
window.onresize=function(){
	e=e||window.event,
	html=document.documentElement,
	htmlWidth=html.clientWidth;
	for(var i = 0; i < adPicEls.length; i++){
		adPicEls[i].style.width = htmlWidth + "px";
		adPic.style.width = htmlWidth * adPicEls.length +"px";
	}
}

var t = n =0, count;
$(document).ready(function(){
	count=$("#adPic li").length;
	$("#adNum li").click(function(){
		var i = $(this).text() -1;//获取Li元素内的值，即1，2，3
		n = i;
		if (i >= count) return;
		$(this).toggleClass("current");
		$(this).siblings().removeAttr("class");
		var x = -n * htmlWidth + "px";
		$("#adPic").animate({marginLeft: x}, 700);
	});
	t = setInterval("showAuto()", 3000);
	$("#adNum").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 3000);});
	$("#adPic").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 3000);});
})

function showAuto(){
	n = n >=(count -1) ?0 : ++n;
	$("#adNum li").eq(n).trigger('click');
}

*/



var explain = MyUtils.getID("explain"),
pop = MyUtils.getID("pop"),
close = MyUtils.getID("close"),
mask = MyUtils.getID("mask");
pop.style.display = "none";
mask.style.display = "none";
explain.onclick = function(e){
	var e=e||window.event;
	// 可视窗口
	var html=document.documentElement;
	mask.style.display = "block";
	mask.style.position = "absolute";
	mask.style.width = "100%";
	mask.style.height = html.scrollHeight + "px";
	mask.style.top = 0 + "px";
	//mask.style.top = html.scrollHeight - html.clientHeight+ "px";// - mask.clientHeight
	pop.style.display = "block";
	//设置box属性值
	pop.style.left = 0;
	pop.style.top = 0;
	pop.style.left = html.scrollWidth/2 - pop.clientWidth/2 + "px";
	pop.style.top = html.scrollHeight - html.clientHeight/2 - pop.clientHeight/2 + "px";
}
close.onclick = function(){
	mask.style.display = "none";
	pop.style.display = "none";
}

/* jmpinfo */
var jmpTimer = null;
var A = MyUtils.getID("hd");
var J = MyUtils.getID("bd");
var C = MyUtils.getID("closeJump");
var curLeft=0,curTop=0;
curLeft+=A.offsetLeft;
curTop+=A.offsetTop;

A.onclick = function(){

J.style.display = "block";
J.style.left = curLeft + A.offsetWidth/2 -50 + "px";
J.style.top = curTop + A.offsetHeight + "px";

}
C.onclick = function(){
	J.style.display = "none";
}

