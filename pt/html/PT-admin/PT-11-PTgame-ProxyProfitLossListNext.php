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
            <div class="crumbs"><strong>客户层级：</strong><a href="#">报表查询</a>  &gt; 测试</div>
        </div>
        <div class="col-content">
            <div class="col-main">
                <div class="main">
                   
                    <table class="table table-info text-center my-next-table">
                        <thead>
                            <tr>
                                <th>用户名</th>
                                <th class="table-toggle"><a href="#" id="3">投注<i class="ico-up-current"></i><i class="ico-down-current"></i></a></th>
                                <th class="table-toggle"><a href="#" id="3">游戏奖金<i class="ico-up-current"></i><i class="ico-down-current"></i></a></th>
                                <th class="table-toggle"><a href="#" id="3">活动奖励<i class="ico-up-current"></i><i class="ico-down-current"></i></a></th>
                                <th class="table-toggle"><a href="#" id="3">盈亏<i class="ico-up-current"></i><i class="ico-down-current"></i></a></th>
                            </tr>
                        </thead>
                       <tbody>
                           <tr>
                               <td>测试</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                           </tr>
                           <tr>
                               <td>测试</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                           </tr>
                           <tr>
                               <td>测试</td>
                               <td><span >￥0.00</span> <a title="活跃用户" href="" class="ico-user-star"></a></td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
                               <td>￥0.00</td>
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