<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>封锁变价</title>
<style>
* {padding:0;margin:0;}
.main-cont {width:700px;margin:0 auto;margin-top:50px;}
.main-cont table {font-size:12px;border-collapse:collapse;border:1px solid #CCC;border-right:0;border-top:0;}
.main-cont table th,.main-cont table td {border:1px solid #CCC;border-left:0;border-bottom:0;padding:10px;}
.main-cont table th {background:#09AC8D;color:#FFF;}
.main-cont table td {text-align:center;padding:10px;}

.title {font-size:12px;font-weight:bold;text-align:center;padding:20px;}

</style>
</head>

<body>


<div style="display:none">
<?php
//封锁变价查看详情



print_r($_POST);




?>
</div>




<div class="main-cont">
<div class="title">以下内容中，有部分号码的存在奖金变动</div>
<table width="100%">
	<tr>
		<th>投注项</th>
		<th>发生奖金变动的号码</th>
		<th>目前奖金</th>
		<th>对应奖金的购买倍数</th>
	</tr>
	<tr>
		<td rowspan="4">[三星_一码不定位]<br />1，2，3</td>
		<td>010</td>
		<td>6.6</td>
		<td>200</td>
	</tr>
	<tr>
	  <td>112</td>
      <td>6.6</td>
	  <td>200</td>
	</tr>
	<tr>
	  <td>021</td>
      <td>6.6</td>
	  <td>200</td>
	</tr>
	<tr>
	  <td>758</td>
      <td>6.6</td>
	  <td>200</td>
	</tr>
	<tr>
		<td>[三星_一码不定位]<br />1，2，3</td>
		<td>010</td>
		<td>6.6</td>
		<td>200</td>
	</tr>
	<tr>
		<td rowspan="2">[三星_一码不定位]<br />1，2，3</td>
		<td>010</td>
		<td>6.6</td>
		<td>200</td>
	</tr>
	<tr>
	  <td>245</td>
      <td>6.6</td>
	  <td>200</td>
	</tr>
</table>
<br />
<br />


<div class="title">以下内容中，存在受限内容，系统已经为您做出调整</div>
<table width="100%">
	<tr>
		<th>投注项</th>
		<th>计划投注倍数</th>
		<th>目前可投倍数</th>
	</tr>
	<tr>
		<td>[三星_一码不定位]<br />1，2，3</td>
		<td>300</td>
		<td>200</td>
	</tr>
	<tr>
		<td>[三星_一码不定位]<br />1，2，3</td>
		<td>500</td>
		<td>200</td>
	</tr>
</table>
</div>



</body>
</html>
