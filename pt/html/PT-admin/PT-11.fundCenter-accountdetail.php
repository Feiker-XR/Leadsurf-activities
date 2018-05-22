<!DOCTYPE HTML>
<html lang="en-US" class="html-content">
<head>
    <meta charset="UTF-8">
    <title>客户列表</title>
    <link rel="stylesheet" href="../images/common/base.css"/>
    <link rel="stylesheet" href="../images/admin/admin.css"/>
    <script type="text/javascript" src="../js/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="../js/phoenix.base.js"></script>
    <script type="text/javascript" src="../js/phoenix.Class.js"></script>
    <script type="text/javascript" src="../js/phoenix.Event.js"></script>
    <script type="text/javascript" src="../js/phoenix.util.js"></script>
    <script type="text/javascript" src="../js/phoenix.Tab.js"></script>
    <script type="text/javascript" src="../js/phoenix.Hover.js"></script>
    <script type="text/javascript" src="../js/phoenix.Tip.js"></script>

<script src="../js/jquery-ui-1.10.2.js" type="text/javascript"></script>
<script src="../js/jquery.tmpl.min.js" type="text/javascript"></script>
<script src="../js/phoenix.Mask.js" type="text/javascript"></script>
<script src="../js/phoenix.DatePicker.js" type="text/javascript"></script>
<script src="../js/phoenix.SuperSearchGroup.js" type="text/javascript"></script>
<script src="../js/phoenix.SuperSearch.js" type="text/javascript"></script>
<script src="../js/phoenix.pagination.js" type="text/javascript"></script>
<script src="../js/phoenix.MiniWindow.js" type="text/javascript" ></script>
<script src="../js/phoenix.Message.js" type="text/javascript" ></script>
<script src="../js/phoenix.Common.js" type="text/javascript" ></script>


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
<div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="/admin/Rechargemange/">资金中心</a> &gt; 账户明细表</div></div>

        <div class="col-content">
            <div class="col-main">
                <div class="main">
            <h3 class="ui-title"><a class="btn btn-small" style="float:left;" href="javascript:void(0);" id="J-Download-Report">下载报表<b class="btn-inner"></b></a></h3>
                        <table id="J-table-data" class="table table-info table-function">
                                    <thead>
                                        <tr>
                                            <th id="J-sp-PlatformNumber" class="sp-td">
                                                <div class="sp-td-cont sp-td-cont-b">
                                                    <div class="sp-td-title">交易流水号</div>
                                                    <ul class="sp-filter-cont sp-filter-cont-b sp-filter-cont-hide">                                                         
                                                        <li>
                                                            <div class="input-append">
                                                             <input type="text" class="input w-2" size="10" maxlength="20"><a href="javascript:void(0);" class="btn sp-filter-submit"></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <span class="sp-filter-close"></span>
                                                </div>
                                            </th>
                                            <th id="J-sp-UserName" class="sp-td">
                                                <div class="sp-td-cont sp-td-cont-b">
                                                    <div class="sp-td-title">用户名</div>
                                                    <ul class="sp-filter-cont sp-filter-cont-b sp-filter-cont-hide">                                                         
                                                        <li>
                                                            <div class="input-append">
                                                             <input type="text" class="input w-2" size="10" maxlength="20" value=""><a href="javascript:void(0);" class="btn sp-filter-submit"></a>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <span class="sp-filter-close"></span>
                                                </div>
                                            </th>
                                            <th class="sp-td" id="J-sp-td-ApplicationPeriod">                                   
                                                <div class="sp-td-cont sp-td-cont-b">
                                                    <div class="sp-td-title">时间</div>
                                                    <ul class="sp-filter-cont sp-filter-cont-b sp-filter-cont-hide" style="width:270px;">                                                           
                                                  <li>
                                                    <div class="input-append">
                                                        <input type="text" tabindex="1" class="input w-2" id="sp-input-ApplicationPeriod-time-1"> - <input type="text" id="sp-input-ApplicationPeriod-time-2" class="input w-2" size="10"><a href="javascript:void(0);" class="btn sp-filter-submit"><b class="btn-inner"></b></a>
                                                    </div>
                                                   </li>
                                                    </ul>
                                                    <span class="sp-filter-close"></span>
                                                </div>     
                                            </th>
                                            <th id="J-sp-td-OrderType" class="sp-td">
                                                <div class="sp-td-cont sp-td-cont-b">
                                                    <div class="sp-td-title">摘要</div>
                                                    <div class="sp-filter-cont sp-filter-cont-b sp-filter-cont-select sp-filter-cont-hide" style="width: 80px;">
                                                        <ul>
                                                           <!--  -->
                                                            <li data-select-id="MDAX"><a href="#">充值</a></li>
                                                            <!--  -->
                                                            <li data-select-id="CWTF"><a href="#">提现</a></li>
                                                            <!--  -->
                                                            <li data-select-id="CWTR"><a href="#">提现退回</a></li>
                                                            <!--  -->
                                                            <li data-select-id="DVCB"><a href="#">投注扣款</a></li>
                                                            <!--  -->
                                                            <li data-select-id="CRVC"><a href="#">投注退款</a></li>
                                                            <!--  -->
                                                            <li data-select-id="RSXX" class="" style="position: relative;"><a href="#">投注返点</a></li>
                                                            <!--  -->
                                                            <li data-select-id="RRSX"><a href="#">撤销返点</a></li>
                                                            <!--  -->
                                                            <li data-select-id="PDXX"><a href="#">奖金派送</a></li>
                                                            <!--  -->
                                                            <li data-select-id="BDRX"><a href="#">撤销派奖</a></li>
                                                            <!--  -->
                                                            <li data-select-id="CFCX"><a href="#">撤单费用</a></li>
                                                            <!--  -->
                                                            <li data-select-id="RBRC"><a href="#">充值让利</a></li>
                                                            <!--  -->
                                                            <li data-select-id="PGXX"><a href="#">活动礼金</a></li>
                                                            <!--  -->
                                                            <li data-select-id="IPXX"><a href="#">平台奖励</a></li>
                                                            <!--  -->
                                                            <li data-select-id="SOSX"><a href="#">转出</a></li>
                                                            <!--  -->
                                                            <li data-select-id="BIRX"><a href="#">转入</a></li>
                                                            <!--  -->
                                                            <li data-select-id="SCDX"><a href="#">小额扣减</a></li>
                                                            <!--  -->
                                                            <li data-select-id="SCRX"><a href="#">小额接收</a></li>
                                                            <!--  -->
                                                            <li data-select-id="CEXX"><a href="#">客户理赔</a></li>
                                                            <!--  -->
                                                            <li data-select-id="AAXX"><a href="#">管理员增</a></li>
                                                            <!--  -->
                                                            <li data-select-id="DAXX"><a href="#">管理员减</a></li>
                                                            <!--  -->
                                                            <li data-select-id="TPXX"><a href="#">升级转入</a></li>
                                                            <!--  -->
                                                      </ul>
                                                    </div>
                                                    <span class="sp-filter-close" style="display: none;"></span>
                                                </div>
                                            </th>
                                            <th>收入金额</th>
                                            <th>冻结金额</th>
                                            <th>支出金额</th>
                                            <th>可用余额</th>
                                            <th>备注</th>
                                        </tr>
                                    </thead>
                                    <tbody id="showInfo"><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRSXXOMDB3XX0CGH8</a></td><td>fiona7d</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>72.3300</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRHAXOMEY3XX0CGH7</a></td><td>fiona6d</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>82,737,184.0064</td><td>fiona7d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRHAXOMEX3XX0CGH6</a></td><td>fiona5d</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.8170</td><td>fiona7d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRHAX53RV3XX0CGH5</a></td><td>a2309792067</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,740.1456</td><td>fiona7d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRHAX50AL3XX0CGH4</a></td><td>a230979206</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.2530</td><td>fiona7d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMRHAX4ME53XX0CGH3</a></td><td>cookies</td><td>2015-05-04 11:39:39</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,266.8300</td><td>fiona7d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMDVCBOMDB3XX0CGH2</a></td><td>fiona7d</td><td>2015-05-04 11:39:39</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>71.9300</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050401800w">GMDVCBOMDB3XX0CGD1</a></td><td>fiona7d</td><td>2015-05-04 11:35:38</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>71.9300</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DF3D201512100w">GMRHAX3ZUR3XX0UNG3</a></td><td>fh6869</td><td>2015-05-01 20:20:37</td><td>投注返点</td><td style="color:green">30.0000</td><td></td><td></td><td>197.8400</td><td>公共测试投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DF3D201512100w">GMRHAX3RTG3XX0UNG2</a></td><td>ibm666</td><td>2015-05-01 20:20:37</td><td>投注返点</td><td style="color:green">10.0000</td><td></td><td></td><td>299,707.8700</td><td>公共测试投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DF3D201512100w">GMDVCN4VYV3XX0UNG1</a></td><td>公共测试</td><td>2015-05-01 20:20:37</td><td>投注扣款</td><td></td><td>-200.0000</td><td>200.0000</td><td>10,000,134.4000</td><td></td></tr><tr><td>OTAAXX53QU3XX0UJQ2</td><td>tuhao666</td><td>2015-05-01 17:56:03</td><td>管理员增</td><td style="color:green">99,999,999.0000</td><td></td><td></td><td>99,999,999.0000</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMRSXXOMEY3XX0UUBg</a></td><td>fiona6d</td><td>2015-05-01 12:49:31</td><td>投注返点</td><td style="color:green">0.4500</td><td></td><td></td><td>82,737,183.9564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMRHAXOMEX3XX0UUBf</a></td><td>fiona5d</td><td>2015-05-01 12:49:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.7670</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMRHAX53RV3XX0UUBd</a></td><td>a2309792067</td><td>2015-05-01 12:49:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,740.0956</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMRHAX50AL3XX0UUBe</a></td><td>a230979206</td><td>2015-05-01 12:49:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.2030</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMRHAX4ME53XX0UUBc</a></td><td>cookies</td><td>2015-05-01 12:49:31</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,266.4300</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMDVCBOMEY3XX0UUBb</a></td><td>fiona6d</td><td>2015-05-01 12:49:31</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>82,737,183.5064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMPDXXOMEY3XX0UUBa</a></td><td>fiona6d</td><td>2015-05-01 12:49:31</td><td>奖金派送</td><td style="color:green">2.0000</td><td></td><td></td><td>82,737,183.5064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102500w">GMDVCBOMEY3XX0UUY9</a></td><td>fiona6d</td><td>2015-05-01 12:46:45</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>82,737,181.5064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMRSXXOMEY3XX0UU78</a></td><td>fiona6d</td><td>2015-05-01 12:19:31</td><td>投注返点</td><td style="color:green">0.4500</td><td></td><td></td><td>82,737,191.5064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMRHAXOMEX3XX0UU77</a></td><td>fiona5d</td><td>2015-05-01 12:19:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.7170</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMRHAX53RV3XX0UU76</a></td><td>a2309792067</td><td>2015-05-01 12:19:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,740.0456</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMRHAX50AL3XX0UU75</a></td><td>a230979206</td><td>2015-05-01 12:19:31</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.1530</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMRHAX4ME53XX0UU74</a></td><td>cookies</td><td>2015-05-01 12:19:31</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,266.0300</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMDVCBOMEY3XX0UU73</a></td><td>fiona6d</td><td>2015-05-01 12:19:31</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>82,737,191.0564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMPDXXOMEY3XX0UU72</a></td><td>fiona6d</td><td>2015-05-01 12:19:31</td><td>奖金派送</td><td style="color:green">4.0000</td><td></td><td></td><td>82,737,191.0564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050102200w">GMDVCBOMEY3XX0UU71</a></td><td>fiona6d</td><td>2015-05-01 12:19:05</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>82,737,187.0564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMRSXXOMEY3XX0USZl</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4500</td><td></td><td></td><td>82,737,197.0564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMRHAXOMEX3XX0USZk</a></td><td>fiona5d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.6670</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMRHAX53RV3XX0USZj</a></td><td>a2309792067</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,739.9956</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMRHAX50AL3XX0USZi</a></td><td>a230979206</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.1030</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMRHAX4ME53XX0USZh</a></td><td>cookies</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,265.6300</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMDVCBOMEY3XX0USZg</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>82,737,196.6064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMRSXXOMEY3XX0USZf</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4500</td><td></td><td></td><td>82,737,196.6064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMRHAXOMEX3XX0USZd</a></td><td>fiona5d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.6170</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMRHAX53RV3XX0USZe</a></td><td>a2309792067</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,739.9456</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMRHAX50AL3XX0USZc</a></td><td>a230979206</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.0530</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMRHAX4ME53XX0USZb</a></td><td>cookies</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,265.2300</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMDVCBOMEY3XX0USZa</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>82,737,196.1564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMRSXXOMEY3XX0USZ9</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4500</td><td></td><td></td><td>82,737,196.1564</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMRHAXOMEX3XX0USZ8</a></td><td>fiona5d</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>13,783.5670</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMRHAX53RV3XX0USZ7</a></td><td>a2309792067</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>845,539,739.8956</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMRHAX50AL3XX0USZ6</a></td><td>a230979206</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.0500</td><td></td><td></td><td>166,602.0030</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMRHAX4ME53XX0USZ5</a></td><td>cookies</td><td>2015-05-01 11:49:38</td><td>投注返点</td><td style="color:green">0.4000</td><td></td><td></td><td>50,015,264.8300</td><td>fiona6d投注产生</td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMDVCBOMEY3XX0USZ4</a></td><td>fiona6d</td><td>2015-05-01 11:49:38</td><td>投注扣款</td><td></td><td>-10.0000</td><td>10.0000</td><td>82,737,195.7064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900C">GMDVCBOMEY3XX0USW3</a></td><td>fiona6d</td><td>2015-05-01 11:46:52</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>82,737,195.7064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS150501019005">GMDVCBOMEY3XX0USU2</a></td><td>fiona6d</td><td>2015-05-01 11:44:09</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>82,737,205.7064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DJSS15050101900w">GMDVCBOMEY3XX0USQ1</a></td><td>fiona6d</td><td>2015-05-01 11:40:42</td><td>投注扣款</td><td></td><td style="color:red">10.0000</td><td style="color:red"></td><td>82,737,215.7064</td><td></td></tr><tr><td><a href="/gameoa/queryOrderDetail?orderCode=DF3D201512000w">GMRHAX3ZUR3XWXVG43</a></td><td>fh6869</td><td>2015-04-30 20:20:36</td><td>投注返点</td><td style="color:green">30.0000</td><td></td><td></td><td>167.8400</td><td>公共测试投注产生</td></tr></tbody>                                
                                <tfoot>
                                    <tr>
                                        <td colspan="18">
                                              <div id="Pagination" class="pagination" style="display: block;"><span>总共166笔记录,每页50笔,共4页</span><span class="current prev">上一页</span><span class="current">1</span><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#" class="next">下一页</a></div>
                                        </td>
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
<script>
(function($){
   
    
})(jQuery);
</script>
</body>
</html>