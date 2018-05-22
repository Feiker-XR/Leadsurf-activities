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
                <strong>当前位置：</strong>
                <a href="#">代理中心</a> &gt; 运营成本配置
            </div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">                   
                    <table class="table table-info table-function">
                                <tbody>
                                <tr style="display:none">
                                       <td></td>
                                       <td></td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">运营成本配置</td>
                                    </tr>
                                    <tr>
                                        <td  class="w-4">每日运营成本配置</td>
                                        <td>
                                            <input type="text" class="input w-1" value="0">
                                            <span>元</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="ui-btn">
                                            <a class="btn btn-important" href="javascript:void(0);">保 存<b class="btn-inner"></b></a>
                                            <a class="btn" href="javascript:void(0);">取消<b class="btn-inner"></b></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                  
                   
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>