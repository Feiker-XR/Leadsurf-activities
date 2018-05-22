<!DOCTYPE html>
<meta charset="utf-8">
<style>
#box
{
	width:470px;
	position:relative;	
	border:1px solid #000;
}
.father
{
	position:relative;
	width:390px;
	height:320px;
	margin:20px;
}
.father li
{
	width:100px;
	height:100px;
	background:#ddd;
	list-style:none;
	position:absolute;
	top:0;
	left:0;
	color:#fff;
	font-size:90px;
	line-height:100px;
	text-align:center;
}
</style>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script>
$(function()
{
	var $li=$('.father li');
	function rand_color()
	{
		var str='01234567890abcdef';
		// parseInt(Math.random()*(上限-下限+1)+下限);
		var c='#';
		for(i=1;i<=6;i++)
		{
			var j=parseInt(Math.random()*(15-0+1)+0);//生成0-15随机数
			c+=str.slice(j,j+1);
		}
		return c;
	}

	var pos_arr=[];//位置数组
	$li.each(function()
	{
		var i=$(this).index();//当前索引
		var x=(i%4)*(100+10);
		var y=parseInt(Math.floor(i/4))*(100+10);
		$(this).css({'background-color':rand_color(),'left':x+'px','top':y+'px'})
		.html(i);
		pos_arr[i]=x+','+y;

	});
	$('input').click(function()
	{
		pos_arr.sort(function () {return Math.random()>0.5?true:false;});
		
		for(i in pos_arr)
		{
				console.log(pos_arr);
			var a=pos_arr[i].split(',');
			var x=a[0],y=a[1];
			$li.eq(i).stop(true,true).animate({'left':x+'px','top':y+'px'},500,'swing');
		}
	});
});
</script>
<input type="button" value="单击随机排序">BY <a href="http://qianduanblog.com" target="_blank" title="云淡然首页">云淡然</a>
<div id="box">
	<ul class="father">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>