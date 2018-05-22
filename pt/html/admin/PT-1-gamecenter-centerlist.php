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
                    <ul class="ui-search clearfix">
                        <li class="name">
                            <label>游戏名称</label>
                            <input type="text" class="input" id="name" value="">
                            <select class="ui-select">
                                <option value="">选择标签</option>
                            </select>
                            <select class="ui-select">
                                <option value="全部客服">销售状态</option>
                            </select>
                            <select class="ui-select">
                                <option value="全部客服">审核状态</option>
                            </select>
                        </li>

                        <li>
                            <a href="javascript:void(0);" class="btn btn-important">查 询<b class="btn-inner"></b></a>
                            <a href="javascript:void(0);" class="btn">新增游戏<b class="btn-inner"></b></a>

                        </li>
                    </ul>
                    <table class="table table-info mytableinfo">
                        <thead>
                          <tr class="tfooter-tr">
                            <td><label for="" class="label"><input type="checkbox" class="checkbox">全选</label></td>
                            <td colspan="6">
                                <a href="javascript:void(0);" class="btn btn-important">通过<b class="btn-inner"></b></a>
                                <a href="javascript:void(0);" class="btn btn-primary">不通过<b class="btn-inner"></b></a>
                            </td>
                        </tr>

                        <tr>
                            <th colspan="2">游戏</th>
                            <th>ID</th>
                            <th>销售状态</th>
                            <th>代理规则</th>
                            <th>操作人/时间</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><input type="checkbox" class="checkbox"></td>
                            <td>
                                <a href="" class="game-name">
                                    <img class="row-img-small" width="50" height="50"
                                         src="http://static.firefrog.com/dynamic/45f35cf2750dcd059bc4b7f65b7adad4.jpg">
                                    <span>
                                        游戏中文名
                                        <br>
                                        game name
                                    </span>
                                </a>
                            </td>
                            <td>3562772</td>
                            <td>已上架</td>
                            <td>分红 10%</td>
                            <td>vic 2013-04-07 15:23:22</td>
                            <td class="operation">
                                <a class="" title="" href="javascript:void(0);">修改</a><br>
                                <a class="" title="结" href="javascript:void(0);">查看</a>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="checkbox"></td>
                            <td>
                                <a href="" class="game-name">
                                    <img class="row-img-small" width="50" height="50"
                                         src="http://static.firefrog.com/dynamic/45f35cf2750dcd059bc4b7f65b7adad4.jpg">
                                    <span>
                                        游戏中文名
                                        <br>
                                        game name
                                    </span>
                                </a>
                            </td>
                            <td>3562772</td>
                            <td>已上架</td>
                            <td>分红 10%</td>
                            <td>vic 2013-04-07 15:23:22</td>
                            <td class="operation">
                                <a class="" title="" href="javascript:void(0);">修改</a><br>
                                <a class="" title="结" href="javascript:void(0);">查看</a>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" class="checkbox"></td>
                            <td>
                                <a href="" class="game-name">
                                    <img class="row-img-small" width="50" height="50"
                                         src="http://static.firefrog.com/dynamic/45f35cf2750dcd059bc4b7f65b7adad4.jpg">
                                    <span>
                                        游戏中文名
                                        <br>
                                        game name
                                    </span>
                                </a>
                            </td>
                            <td>3562772</td>
                            <td>已上架</td>
                            <td>分红 10%</td>
                            <td>vic 2013-04-07 15:23:22</td>
                            <td class="operation">
                                <a class="" title="" href="javascript:void(0);">修改</a><br>
                                <a class="" title="结" href="javascript:void(0);">查看</a>
                            </td>
                        </tr>
                        </tbody>
                        <tfoot class="tfooter-tr">
                      
                        <tr>
                            <td colspan="7">

                                <div class="page-wrapper">
                                    <div class="page">
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
                                        <span class="page-few">到第 <input type="text" value=""
                                                                         class="input"> /100页</span>
                                        <input type="button" value="确 认" class="page-btn">

                                        <span class="columns-show">
                                            <span class="page-text">每页显示</span>
                                            <input type="text">
                                        </span>

                                    </div>

                                </div>
                            </td>
                        </tr>
                        </tfoot>
                    </table>

                    <br><br>


                    <div class="j-ui-miniwindow pop pt-pop">
                        <div class="hd"><i class="close closeBtn"></i></div>
                        <div class="bd">
                            <div class="game-tiles">
                                <div class="lf">
                                    <img src="../images/admin/game.jpg" width="120" height="120" alt=""/>

                                    <div class="st color-orange">审核中</div>
                                </div>
                                <div class="rf">
                                    <div class="gamename">
                                        游戏中文名
                                    </div>
                                    <p>ID:223234 上线时间：2015-12-12 00:22:44</p>

                                    <div class="color-orange">已上线</div>
                                    <div class="tag">
                                        <span>标签：</span>
                                        <strong>40线</strong>
                                        <strong>40线</strong>
                                        <strong>40线</strong>
                                        <strong>40线</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="operation-log">
                                <div class="gamename">
                                    推荐图片
                                </div>
                                <a href="">
                                    <img src="../images/admin/game.jpg" width="200" height="200" alt=""/>
                                </a>

                            </div>
                            <div class="operation-log">
                                <div class="gamename">
                                    代理规则 &nbsp;&nbsp;&nbsp;&nbsp;<select class="ui-select"><option>代理规则A</option></select>&nbsp;&nbsp;<a href="">查看</a>
                                </div>
                            </div>

                            <div class="operation-log">
                                <div class="gamename">
                                    游戏编码&nbsp;&nbsp;&nbsp;&nbsp;A2788232
                                </div>

                            </div>
                            <div class="operation-log">
                                <div class="gamename">
                                    操作日志
                                </div>
                                <div class="color-green">vic 2015.03.03 12:12:12 发布成功</div>
                                <div class="color-orange">vic 2015.03.03 12:12:12 审核通过</div>
                            </div>
                            
                        </div>
                        <br>
                        <a href="javascript:void(0);" class="btn btn-important">通过<b class="btn-inner"></b></a>
                        <a href="javascript:void(0);" class="btn btn-primary">不通过<b class="btn-inner"></b></a>
                    </div>
                    <br><br>

                    <div class="j-ui-miniwindow pop pt-pop create-game">
                        <div class="hd"><i class="close closeBtn"></i></div>
                        <div class="bd">
                            <p>
                                <label for="" class="label">游戏名称</label>
                                <input type="text" class="input" value="中文">
                                <input type="text" class="input" value="英文">
                            </p>

                            <p>
                                <label for="" class="label">游戏图片</label>
                                <input type="file" class="" value="中文">
                            </p>

                            <p>
                                <label for="" class="label">标签选择</label>
                                <b>
                                <em>游戏类别</em>
                                <span class="line">
                                <a href="" class="cur">热门</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                           
                                </span><br>
                                <em>奖励</em>
                                <span class="line">
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                              
                                </span><br>
                                <em>最低投注</em>
                                <span class="line">
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                           
                                </span><br>
                                <em>玩家级别</em>
                                <span class="line">
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                               
                           
                                </span><br>
                                <em>线数</em>
                                <span class="line">
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                              
                                </span><br>
                                <em>其他</em>
                                <span class="line">
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                                <a href="">40线</a>
                             
                                </span>

                                </b>
                            </p>

                            <p>
                                <label for="" class="label">推荐图片</label>
                                <input type="file" value="中文">
                            </p>

                            <p>
                                <label for="" class="label">代理规则</label>
                                <select class="ui-select">
                                    <option>选择代理规则</option>
                                </select>                               
                            </p>
                            <p>
                                <label for="" class="label">游戏编码</label>
                                <input type="text" class="input" value="">
                            </p>

                            <p>
                                <label for="" class="label">游戏状态</label>
                                <input type="radio">&nbsp;上架 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="radio">&nbsp;下架(修改页面时出现)

                            </p>


                        </div>
                        <a href="javascript:void(0);" class="btn btn-important">确定<b class="btn-inner"></b></a>
                        <a href="javascript:void(0);" class="btn">取消<b class="btn-inner"></b></a>
                        <br>
                    </div>

                    <br><br>

                   

                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>