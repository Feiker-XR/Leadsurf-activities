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
            <div class="crumbs">            
                <a href="#" class="more">新建规则</a>             
                <strong>当前位置：</strong>
                <a href="#">代理中心</a> &gt; 代理规则
            </div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">                   
                    <table class="table table-info">
                        <thead>
                        <tr>
                            <th>规则名称</th>
                            <th>返点</th>
                            <th>分红</th>
                            <th>应用游戏数量</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>PT老虎机默认规则</td>
                            <td>返点</td>
                            <td>分红</td>
                            <td>应用游戏数量</td>
                            <td class="table-tool">
                                <a class="ico-edit" title="编辑" href="javascript:void(0);"></a>
                                <a class="ico-delete" title="删除" href="javascript:void(0);"></a>
                            </td>
                        </tr>                       
                        </tbody>
                    </table>
                    <div class="page-wrapper">
                        <span class="page-text">共102条记录</span>

                        <div class="page page-right">
                            <a href="#" class="prev">上一步</a>
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#" class="current">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">7</a>
                            <a href="#">8</a>
                            <a href="#">9</a>
                            <a href="#">...</a>
                            <a href="#" class="next">下一步</a>
                            <span class="page-few">到第 <input type="text" value="" class="input"> /100页</span>
                            <input type="button" value="确 认" class="page-btn">
                        </div>
                    </div>
                    <div class="j-ui-miniwindow pop">
                        <div class="hd"><i class="close closeBtn"></i><span class="title">删除</span></div>
                        <div class="bd">
                        <div class="bd text-center"><div class="pop-waring"><i class="ico-waring <#=icon-class#>"></i><h4 class="pop-text"><span class="color-red">请确认是否要删除此条规则，删除后将无法恢复！</span><br></h4></div></div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-important">确认<b class="btn-inner"></b></a>
                        <a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>                       
                    </div>
                    <div class="j-ui-miniwindow pop">
                        <div class="hd"><i class="close closeBtn"></i><span class="title">删除</span></div>
                        <div class="bd">
                        <div class="bd text-center"><div class="pop-waring"><i class="ico-waring <#=icon-class#>"></i><h4 class="pop-text"><span class="color-red">此条规则正在使用，请先取消使用后再删除！</span><br></h4></div></div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-important">确认<b class="btn-inner"></b></a>
                        <a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>                       
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>