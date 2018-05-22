<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
    <meta charset="UTF-8">
    <title>客户列表</title>
    <link rel="stylesheet" href="../images/common/base.css"/>
    <link rel="stylesheet" href="../images/admin/admin.css"/>
</head>
<body>
<?php 
        include 'header.html';
    ?>
<div class="col-content">
    <div class="col-side">
        <dl class="nav">
            <?php 
            include 'nav.html';
            ?>
        </dl>
        <p class="copy">&copy; 2001-2012 591PH.<br/>All right reserved.</p>
    </div>
    <div class="col-main">
        <div class="col-crumbs">
            <div class="crumbs">
                <a href="#" class="more">新建规则</a>
                <strong>当前位置：</strong>
                <a href="#">代理中心</a> &gt; 代理规则
            </div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">
                    <form action="http://admin.firefrog.com/aclAdmin/createUser" id="info-content">
                        <input id="J-user-id" type="hidden" value="3" name="id">
                        <input type="hidden" value="0" name="status">

                        <ul class="ui-form">
                            <li>
                                <label class="ui-label" for="">规则名称：</label>
                                <input name="account" id="userName" type="text" value="" class="input w-4">
                                <span class="ui-text-prompt"><span style="color:#ff0000">规则名称不能为空</span></span>
                            </li>
                            <li>
                                <label class="ui-label" for="">规则内容：</label>
                                <b>
                                    代理返点
                                </b>
                                <ul class="ui-form  ui-form-small in-profit2">
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">返点比例：</label>
                                        <input name="account" type="text" value="" class="input w-3">
                                    <span class="ui-info">
                                        %                                        
                                    </span>
                                    </li>
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">发放方式：</label>
                                        <select name="" class="ui-select">
                                            <option value="">自动</option>
                                        </select>

                                    </li>
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">结算周期：</label>
                                        <select name="" class="ui-select">
                                            <option value="">每天</option>
                                        </select>

                                    </li>
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">发放时间：</label>
                                        <select name="" class="ui-select">
                                            <option value="">每天</option>
                                        </select>

                                    </li>


                                </ul>
                                <label class="ui-label" for=""></label>
                                <b>
                                    代理分红
                                </b>
                                <ul class="ui-form  ui-form-small in-profit">
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">分红比例：</label>
                                        <span class="yk"><span class="l">盈亏值</span><span class="l r">返点比例</span><br>
                                            <span class="line"></span><br>
                                            <span class="l">
                                                <input name="account" type="text" value="" class="input w-1">
                                                <b>-</b>
                                                <input name="account" type="text" value="" class="input w-1"><br>
                                                <input name="account" type="text" value="" class="input w-1">
                                                <b>-</b>
                                                <input name="account" type="text" value="" class="input w-1">         
                                            </span>
                                            <span class="l r">
                                                <input name="account" type="text" value="" class="input w-1">
                                                <span>%</span><br>
                                                <input name="account" type="text" value="" class="input w-1">
                                                <span>%</span>
                                            </span>    
                                        </span>
                                        <b class="b">
                                            <b>+</b><br>
                                            <b>-</b>
                                        </b>
                                    </li>                                                                    
                                    <li>
                                        <label class="ui-label" for=""></label>
                                        <label class="ui-label w-auto" for="">分红方式：</label>
                                        <select name="" class="ui-select">
                                            <option value="">手动</option>
                                        </select>

                                    </li>


                                </ul>

                            </li>

                            <li class="ui-btn">
                                <a id="editButton" class="btn btn-important" href="javascript:void(0);">提交<b
                                        class="btn-inner"></b></a>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>