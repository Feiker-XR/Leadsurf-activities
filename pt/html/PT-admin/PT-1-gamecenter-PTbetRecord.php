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
            <div class="crumbs"><strong>当前位置：</strong><a href="#">游戏中心</a> &gt; PT投注记录</div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">
                    <div class="ui-search clearfix richard-ui-search">
                        <ul class="">
                            <li class="name">
                                <label class="ui-label">游戏名称：</label>
                                <select class="ui-select">
                                    <option value="用户名">老虎机</option>
                                </select>
                            </li>
                            <li class="name">
                                <label class="ui-label">用户名/单号：</label>
                                <input type="text" class="input">
                                <label for="" class="label"><input type="checkbox" class="checkbox">包含下级</label>
                            </li>
                            <li class="time">
                                <label class="ui-label">投注时间：</label>
                                <select class="ui-select">
                                    <option value="7天内">3天</option>
                                </select>
                                <input type="text" class="input" placeholder="2015-04-04 00:00:00">
                                <input type="text" class="input" placeholder="2015-04-04 00:00:00">
                            </li>
                            <li class="name">
                                <label class="ui-label">游戏状态：</label>
                                <select class="ui-select">
                                    <option value="">所有</option>
                                </select>
                            </li>
                            <li class="funds">
                                <label class="ui-label">资金：</label>
                                <input type="text" class="input">
                                -
                                <input type="text" class="input">
                            </li>
                            <li>
                                <label class="ui-label">每页记录数：</label>
                                <input type="text" class="input" style="width: 50px;">
                            </li>

                            <li>
                                <a href="javascript:void(0);" class="btn btn-important">搜 索<b class="btn-inner"></b></a>
                                <a href="javascript:void(0);" class="btn">导出报表<b class="btn-inner"></b></a>

                            </li>
                        </ul>

                    </div>
                    <table class="table table-info richard-table">
                        <thead>
                        <tr>
                            <th>游戏名称</th>
                            <th>用户名</th>
                            <th>投注单号</th>
                            <th>投注时间</th>
                            <th>投注金额</th>
                            <th>奖金</th>
                            <th>盈亏</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>钢铁侠 50线</td>
                            <td>测试1122</td>
                            <td>1234554</td>
                            <td>2013-04-07 15:23</td>
                            <td>100:00</td>
                            <td>10</td>
                            <td>
                                <span class="color-green">+5:00</span>
                            </td>
                        </tr>
                        <tr>
                            <td>钢铁侠 50线</td>
                            <td>测试1122</td>
                            <td>1234554</td>
                            <td>2013-04-07 15:23</td>
                            <td>100:00</td>
                            <td>10</td>
                            <td>
                                <span class="color-red">-5:00</span>
                            </td>
                        </tr>
                        <tr>
                            <td>钢铁侠 50线</td>
                            <td>测试1122</td>
                            <td>1234554</td>
                            <td>2013-04-07 15:23</td>
                            <td>100:00</td>
                            <td>10</td>
                            <td>
                                <span class="color-red">-5:00</span>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <td>小结：</td>
                            <td><span class="price"><dfn>&yen;</dfn>11：50</span></td>
                            <td><span class="price"><dfn>&yen;</dfn>11：50</span></td>
                            <td><span class="price"><dfn>&yen;</dfn>11：50</span></td>
                        </tr>
                        </tfoot>
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
</body>
</html>