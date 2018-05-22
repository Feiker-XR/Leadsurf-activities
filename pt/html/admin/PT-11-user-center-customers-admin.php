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
            <div class="crumbs"><strong>当前位置：</strong><a href="#">客户管理</a> &gt; 列表</div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">
                    <ul class="ui-search clearfix">
                        <li class="name">
                            <select class="ui-select">
                                <option value="用户名">主帐号</option>
                            </select>
                            <input type="text" class="input" id="name" value="请输入您的用户名">
                        </li>
                        <li>
                            <label class="ui-label">PT代理：</label>
                            <select class="ui-select">
                                <option value="全部客服">全部客户</option>
                            </select>
                        </li>
                        <li>
                            <label class="ui-label">注册时间：</label>
                            <select class="ui-select">
                                <option value="全部客服">默认排序</option>
                                <option value="7天内">7天内</option>
                                <option value="15天内">15天内</option>
                                <option value="1个月内">1个月内</option>
                                <option value="3个月内">3个月内</option>
                                <option value="半年内">半年内</option>
                                <option value="1年内">1年内</option>
                                <option value="更久以前">更久以前</option>
                            </select>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="btn btn-important">搜 索<b class="btn-inner"></b></a>
                            <a href="javascript:void(0);" class="btn">下载报表<b class="btn-inner"></b></a>

                        </li>
                    </ul>
                    <table class="table table-info">
                        <thead>
                        <tr>
                            <th>主帐号</th>
                            <th>PT帐号</th>
                            <th>用户组</th>
                            <th>PT代理</th>
                            <th>下级数量</th>
                            <th>注册时间/IP</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>vava</td>
                            <td>head</td>
                            <td>三级代理</td>
                            <td>未开通</td>
                            <td>0人</td>
                            <td>2013-04-07 15:23<br/>[127.0.0.5]</td>
                            <td class="table-tool">
                                <a class="ico-detail" title="详情" href="javascript:void(0);"></a>
                                <a class="ico-lock" title="冻结" href="javascript:void(0);"></a>
                                <a class="ico-info" title="账户明细" href="javascript:void(0);"></a>
                                <a class="ico-note" title="投注记录" href="javascript:void(0);"></a>
                                <a class="ico-note" title="设置代理" href="javascript:void(0);"></a>
                            </td>
                        </tr>
                        <tr>
                            <td>vava</td>
                            <td>head</td>
                            <td>三级代理</td>
                            <td>未开通</td>
                            <td>0人</td>
                            <td>2013-04-07 15:23<br/>[127.0.0.5]</td>
                            <td class="table-tool">
                                <a class="ico-detail" title="详情" href="javascript:void(0);"></a>
                                <a class="ico-lock" title="冻结" href="javascript:void(0);"></a>
                                <a class="ico-info" title="账户明细" href="javascript:void(0);"></a>
                                <a class="ico-note" title="投注记录" href="javascript:void(0);"></a>
                                <a class="ico-note" title="设置代理" href="javascript:void(0);"></a>
                            </td>
                        </tr>
                        <tr>
                            <td>vava</td>
                            <td>head</td>
                            <td>三级代理</td>
                            <td>未开通</td>
                            <td>0人</td>
                            <td>2013-04-07 15:23<br/>[127.0.0.5]</td>
                            <td class="table-tool">
                                <a class="ico-detail" title="详情" href="javascript:void(0);"></a>
                                <a class="ico-lock" title="冻结" href="javascript:void(0);"></a>
                                <a class="ico-info" title="账户明细" href="javascript:void(0);"></a>
                                <a class="ico-note" title="投注记录" href="javascript:void(0);"></a>
                                <a class="ico-note" title="设置代理" href="javascript:void(0);"></a>
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
                </div>
            </div>
        </div>
    </div>
</div>
<div class="j-ui-miniwindow pop pt-pop">
    <div class="hd"><i class="close closeBtn"></i><span class="title">PT代理设置</span></div>
    <div class="bd">
        <div class="bd pt-box">
            <p><label>PT代理：</label><input type="radio" /><span>开通</span><input type="radio" /><span>关闭</span></p>
            <p><label>代理模式：</label><input type="radio" /><span>返点</span><input type="radio" /><span>分红</span></p>
            <p><label>生效时间：</label><input type="radio" /><span>次月生效</span><input type="radio" /><span>即时生效</span></p>
        </div>
    </div>
    <a href="javascript:void(0);" style="" class="btn confirm">确 认<b class="btn-inner"></b></a>
    <a href="javascript:void(0);" class="btn closeTip" style="display: none;">关 闭<b class="btn-inner"></b></a>
    <style>
        .pt-pop{width: auto; display: block;
            position: absolute;
            left: 100px;bottom: 0; z-index: 9999;}
        .pt-box p{
            line-height: 1.8;
        }
        .pt-box label,.pt-box span{width: 5em;display: inline-block;margin-right: 15px;}
        .pt-box input{margin-right: 10px;}

    </style>
</div>
</body>
</html>