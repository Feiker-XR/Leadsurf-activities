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
            <div class="crumbs"><strong>当前位置：</strong><a href="#">PT游戏</a> <a href="#">&gt; 代理游戏</a> &gt; 代理盈亏报表</div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">
                    <form>
                        <ul class="ui-search">
                            <li class="time">
                                <label for="" class="ui-label">时间：</label>
                                <input type="text" value="2015-05-04" class="input"> 至 <input  type="text" value="2015-05-04" class="input">
                            </li>
                            <li class="name">
                                <label class="ui-label">用户名：</label>
                                <input type="text" value="请输入您的用户名"  class="input">
                            </li>
                            <li class="name">
                                <label class="ui-label">用户组：</label>
                                 <select class="ui-select" >
                                        <option value="" selected="">全部客户</option>
                                        <!--  -->
                                        <option value="-1">玩家</option>
                                        <!--  -->
                                        <option value="0" selected="">总代</option>
                                        <!--  -->
                                        <option value="1">一级代理</option>
                                        <!--  -->
                                        <option value="2">二级代理</option>
                                        <!--  -->
                                        <option value="3">三级代理</option>
                                        <!--  -->
                                        <option value="4">四级代理</option>
                                        <!--  -->
                                        <option value="5">五级代理</option>
                                        <!--  -->
                                        <option value="6">六级代理</option>
                                        <!--  -->
                                        <option value="7">七级代理</option>
                                        <!--  -->
                                        <option value="8">八级代理</option>
                                        <!--  -->
                                        <option value="9">九级代理</option>
                                        <!--  -->
                                        <option value="10">十级代理</option>
                                        <!--  -->
                                        <option value="11">十一级代理</option>
                                        <!--  -->
                                    </select>
                            </li>
                            <li style="clear:both" class="name">
                                <label class="ui-label">游戏名称：</label>
                                <select class="ui-select">
                                    <option value="">所有</option>
                                    <!--  -->
                                        <option value="99101">重庆时时彩</option>
                                        <!--  -->
                                        <option value="99102">江西时时彩</option>
                                        <!--  -->
                                        <option value="99105">黑龙江时时彩</option>
                                        <!--  -->
                                        <option value="99103">新疆时时彩</option>
                                        <!--  -->
                                        <option value="99107">上海时时乐</option>
                                        <!--  -->
                                        <option value="99106">乐利时时彩</option>
                                        <!--  -->
                                        <option value="99104">天津时时彩</option>
                                        <!--  -->
                                        <option value="99111">吉利分分彩</option>
                                        <!--  -->
                                        <option value="99112">顺利秒秒彩</option>
                                        <!--  -->
                                        <option value="99108">3D</option>
                                        <!--  -->
                                        <option value="99109">排列5</option>
                                        <!--  -->
                                        <option value="99301">山东11选5</option>
                                        <!--  -->
                                        <option value="99302">江西11选5</option>
                                        <!--  -->
                                        <option value="99303">广东11选5</option>
                                        <!--  -->
                                        <option value="99304">重庆11选5</option>
                                        <!--  -->
                                        <option value="99305">乐利11选5</option>
                                        <!--  -->
                                        <option value="99201">北京快乐8</option>
                                        <!--  -->
                                        <option value="99401">双色球</option>
                                        <!--  -->
                                        <option value="99501">江苏快三</option>
                                        <!--  -->
                                </select>
                            </li>
                            <li class="name">
                                <label class="ui-label">游戏玩法：</label>
                                <select class="ui-select" >
                                    <option value="">所有</option>
                                </select>
                            </li>
                            <li class="name">
                                <label class="ui-label" >冻结帐号：</label>
                                <select class="ui-select" >
                                    <option value="">所有</option>
                                    <option value="1">是</option>
                                    <option value="2">否</option>
                                </select>
                            </li>
                            <li class="name">
                                <label class="ui-label">模式：</label>
                                <select class="ui-select">
                                    <option value="">所有</option>
                                    <option value="1">元</option>
                                    <option value="2">角</option>
                                </select>
                            </li>
                            <li><a href="javascript:void(0);" id="J-button-submit" class="btn btn-important">搜 索<b class="btn-inner"></b></a></li>
                        </ul>
                    </form>
                    <table class="table table-info text-center">
                        <thead>
                            <tr>
                                <th>用户名</th>
                                <th>模式</th>
                                <th>分红周期</th>

                                <th>活跃用户数</th>
                                <th>总销量</th>
                                <th>游戏奖金</th>

                                <th>活动奖励</th>
                                <th>运营成本</th>
                                <th>总盈亏</th>

                                <th>返点金额</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                       <tbody>
                           <tr>
                               <td>测试</td>
                               <td>返点</td>
                               <td>201501-201503</td>
                               <td>0</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td><a href="">查看下级</a></td>
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
</body>
</html>