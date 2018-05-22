<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
    <meta charset="UTF-8">
    <title>客户列表</title>
    <link rel="stylesheet" href="../images/common/base.css"/>
    <link rel="stylesheet" href="../images/admin/admin.css"/>
</head>
<body>
<div class="menu">
    <div class="menu-logo"></div>
    <ul class="menu-list">
        <li><a href="">首页</a></li>
        <li><a href="">全局</a></li>
        <li><a href="">用户</a></li>
        <li><a href="">游戏</a></li>
        <li><a href="">资金</a></li>
        <li><a href="">市场促销</a></li>
        <li><a href="">统计</a></li>
        <li><a href="">内容</a></li>
        <li><a href="">权限</a></li>
        <li class="current"><a href="">PT游戏</a></li>
    </ul>
    <div class="menu-quit"><a href="">退出</a><i class="ico-user"></i>你好，vava</div>
</div>
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
            <div class="crumbs"><strong>当前位置：</strong><a href="#">游戏中心</a> &gt; 游戏列表</div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">                
                    <dl class="create-tag">
                        <dt>
                            <div class="l">
                            <a href="" class="btn">
                                新建标签
                            </a>
                            </div>
                            <div class="r">
                                <a href="" class="btn">隐藏</a><a href="" class="btn btn-disable">删除</a>
                            </div>
                        </dt>
                        <dd>
                            <div class="tit">
                                游戏类别
                            </div>
                            <p>
                                <a href="" class="cur">我是一个标签</a>
                                <a href="" class="hidden">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                            </p>

                        </dd>
                        <dd>
                            <div class="tit">
                                奖励
                            </div>
                            <p>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>

                            </p>

                        </dd>
                        <dd>
                            <div class="tit">
                                最低投注
                            </div>
                            <p>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>

                            </p>

                        </dd>
                        <dd>
                            <div class="tit">
                                线数
                            </div>
                            <p>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>

                            </p>

                        </dd>
                        <dd>
                            <div class="tit">
                                玩家级别
                            </div>
                            <p>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>
                                <a href="">我是一个标签</a>

                            </p>

                        </dd>
                        <dd>
                            <div class="tit">
                                其他
                            </div>
                            <p>
                                <a href="">高清</a>
                                <a href="">电影主题</a>
                                <a href="">免费游戏</a>
                            </p>

                        </dd>
                    </dl>

                    <br><br>
                    <div class="j-ui-miniwindow pop">
                        <div class="hd"><i class="close closeBtn"></i></div>
                        <div class="bd text-center"><h4 class="pop-title">请先取消该标关联的所有游戏再进行删除操作！</h4></div>
                        <!--<a href="javascript:void(0);" class="btn btn-important">确定<b class="btn-inner"></b></a>-->
                        <a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>
                        <br>
                    </div>
                    <br><br>
                    <div class="j-ui-miniwindow pop">
                        <div class="hd"><i class="close closeBtn"></i></div>
                        <div class="bd">
                            <div class="bd text-center"><div class="pop-waring"><i class="ico-waring <#=icon-class#>"></i><h4 class="pop-text"><span class="color-red">确认删除！</span><br></h4></div></div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-important">删除<b class="btn-inner"></b></a>
                        <a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>
                        <br>
                    </div>

                    <br><br>
                    <div class="j-ui-miniwindow pop" style="width: 300px;">
                        <div class="hd"><i class="close closeBtn"></i><span class="title">新建标签</span></div>
                        <div class="bd">
                            <ul class="ui-form ui-fomr-mine text-center">
                                <li>
                                    <select class="ui-select">
                                        <option>游戏类别</option>
                                    </select>
                                </li>
                                <li>
                                    <input type="text" placeholder="输入标签内容" class="input">
                                </li>
                                <li>
                                    <input type="text" placeholder="输入标签内容" class="input">
                                    <em>+</em>
                                </li>
                                <li>
                                    <a href="javascript:void(0);" class="btn btn-important">添加一个<b class="btn-inner"></b></a>
                                    <!--<a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>-->
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>