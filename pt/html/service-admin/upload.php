<?php
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2013-08-22 10:45:15
 * @version $Id$
 */
if($_FILES ['file']){
$rs = file_get_contents($_FILES ['file']['tmp_name']);
$rs = str_replace("/n", "", $rs);
$rs = str_replace("/r", "", $rs);
}
if($rs == ''){
	die('');
}
  //这里是你要执行的业务逻辑，再次省略，你也可以打印出结果。
echo "<script>(function(){window.parent.uploadResponse('".$rs."');})();</script>";
?>