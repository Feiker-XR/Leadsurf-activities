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
        <div class="col-crumbs"><div class="crumbs"><strong>当前位置：</strong><a href="#">广告</a> &gt; <a href="#">广告管理</a> &gt; 修改广告</div></div>
        <div class="col-content">
                <div class="col-main">
                    <div class="main">
                        <form id="J-form-upload" name="form1" enctype="multipart/form-data" method="post" action="upload.php" target="check_file_frame">
                            <input name="file" type="file" id="J-upload-file" class="upload-file-button" size="40" hidefocus="true" value="导入" style="display:none;">
                        </form>
                    
                        
                        <form action="?" id="J-form">
                            
                        <ul class="ui-form">
                            <li></li>
                            <li style="margin:0;">
                                <label for="" class="ui-label">展示用户组：</label>
                                <span class="checkbox-list">
                                    <label for="J-checkbox-all" class="label"><input id="J-checkbox-all" type="checkbox" value="1" class="checkbox">全部站内用户</label>
                                    <label for="J-usergroup-13" class="label"><input type="checkbox" value="13" class="checkbox" id="J-usergroup-13">游客</label>
                                </span>
                            </li>
                            <li class="J-panel-group">
                                <label for="" class="ui-label"></label>
                                <span class="checkbox-list">
                                    <label for="J-usergroup-2" class="label"><input type="checkbox" value="2" class="checkbox" id="J-usergroup-2">总代</label>
                                    <label for="J-usergroup-3" class="label"><input type="checkbox" value="3" class="checkbox" id="J-usergroup-3">其他代理</label>
                                    <label for="J-usergroup-10" class="label"><input type="checkbox" value="10" class="checkbox" id="J-usergroup-10">玩家</label>
                                </span>
                            </li>
                            <li class="J-panel-group">
                                <label for="" class="ui-label"></label>
                                <span class="checkbox-list">
                                    <label for="J-usergroup-11" class="label"><input type="checkbox" value="11" class="checkbox" id="J-usergroup-11">VIP</label>
                                    <label for="J-usergroup-12" class="label"><input type="checkbox" value="12" class="checkbox" id="J-usergroup-12">非VIP</label>
                                </span>
                            </li>
                            <li class="J-panel-group">
                                <label for="" class="ui-label"></label>
                                <span class="checkbox-list checkbox-list-last">
                                    
                                </span>
                                <span class="ui-check"><i></i>请选择一个用户组</span>
                            </li>
                            
                            <li>
                                <label class="ui-label">广告投放位置：</label>
                                <div class="select-position" id="J-panel-ad-position">
                                    <table class="table table-info table-group ">
                                        <thead>
                                            <tr>
                                                <th>页面/位置/尺寸</th>
                                                <th>预览</th>
                                                <th>已绑定</th>
                                                <th>进行中</th>
                                                <th>未开始</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">平台首页(index_beginner_guide-220*190)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">注册页(index_pos_register-400*300)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">登录页(index_pos_login-500*288)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">平台首页(index_pos_center-760*360)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">平台首页(index_down_app-220*270)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                                  <tr>
                                            <td class="table-tool text-left"><label class="label"><input type="checkbox" class="checkbox">PT首页(PT_index-220*150)</label></td>
                                                <td class="table-tool"><a href="javascript:void(0);" title="预览" class="ico-preview"></a></td>
                                                <td>6</td>
                                                <td>6</td>
                                                <td>3</td>
                                            </tr>
                                  
                                        </tbody>
                                    </table>
                                    <span class="ui-check"><i></i>请至少选择一个广告位</span>
                                </div>
                            </li>
                            <li>
                                <label class="ui-label">广告名称：</label>
                                <input id="J-input-title" type="text" class="input" value=""> <span class="ui-prompt">(限20个字)</span>
                                <span class="ui-check"><i></i>广告名称不能为空</span>
                            </li>
                            <li class="pic-size">
                                <label class="ui-label" for="name">图片尺寸：</label>
                                <input type="hidden" id="J-input-img-src" value="">
                                <span class="ui-singleline">宽 <input id="J-input-img-w" type="text" class="input input-disable" value="" disabled="disabled" style="text-align:center;"> 像素</span>
                                <span class="ui-singleline">高 <input id="J-input-img-h" type="text" class="input input-disable" value="" disabled="disabled" style="text-align:center;"> 像素</span>
                            </li>
                            <li id="J-panel-upload">
                                <label class="ui-label">上传图片：</label>
                                <a class="btn" href="javascript:void(0);" onclick="document.getElementById('J-form-upload').file.click();">上传图片<b class="btn-inner"></b></a>
                                <span class="ui-prompt">支持格式：JPG、GIF、PNG，不可超过100k</span>
                                <span id="J-msg-upload-tip" class="ui-check"><i></i>广告图片不能为空</span>
                            </li>
                            <li style="margin:0;">
                                <iframe src="upload.php" style="margin-left:150px;height:50px;" name="check_file_frame" frameborder="0"></iframe>
                            </li>

                            <li>
                                <label class="ui-label" for="name">链接地址：</label>
                                <input id="J-input-link" type="text" class="input" value="">
                                <span class="ui-prompt">链接地址为空则无链接</span>
                            </li>
                            <li class="time">
                                <label class="ui-label" for="name">有效期：</label>
                                <input id="J-time-start" type="text" class="input" value=""> - <input id="J-time-end" type="text" class="input" value="">
                                <span class="ui-check"><i></i>请选择广告有效期</span>
                            </li>
                            <li class="ui-btn">
                                <a id="J-button-submit" class="btn btn-important" href="javascript:void(0);">提交审核<b class="btn-inner"></b></a>
                                <a class="btn" href="javascript:void(0);">保 存<b class="btn-inner"></b></a>
                            </li>
                        </ul>
                        </form>
                        
                        <div style="height:700px"></div>
                        
                        
                    </div>
                </div>
            </div>
    </div>
</div>
</body>
</html>