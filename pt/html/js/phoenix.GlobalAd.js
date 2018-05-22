

//广告静态类
(function(host, name, Event, $, undefined){
	var defConfig = {
		//所有广告位容器
		posdoms:'.j-ui-globalad-pos',
		//单个广告模板
		tplSingle:'<a data-posid="<#=posid#>" title="<#=title#>" href="<#=link#>" target="<#=target#>"><img src="<#=src#>" width="<#=width#>" height="<#=height#>" title="<#=title#>" alt="<#=title#>" /></a>',
		//切换广告容器class
		panelCls:'slider-pic',
		triggerCls:'slider-num',
		//切换广告模板
		tplMultiplePanel:'<ul class="<#=cls#> j-ui-slider-panel"><#=loop#></ul>',
		tplMultiplePanelRow:'<li><a data-posid="<#=posid#>" title="<#=title#>" href="<#=link#>" target="<#=target#>"><img src="<#=src#>" width="<#=width#>" height="<#=height#>" title="<#=title#>" alt="<#=title#>" /></a></li>',
		tplMultipleTrigger:'<ul class="<#=cls#> j-ui-slider-trigger"><#=loop#></ul>',
		tplMultipleTriggerRow:'<li><#=index#></li>'
	},
	//公共实例
	instance;
	
	var pros = {
		init:function(cfg){
			var me = this,url = cfg.url,callback = cfg.callback;
			me.data = [];
			$(function(){
				me.loadData(url, callback);
			});
		},
		loadData:function(url, callback){
			var me = this;
			$.ajax({
				url:url,
				dataType:'json',
				success:function(data){
					if(Number(data['isSuccess']) == 1){
						me.data = data['data'];
						if(data['data'] && data['data'].length > 0){
							me.build();
						}else{
							$(me.defConfig.posdoms).remove();
						}
						if($.isFunction(callback)){
							callback.call(me, me.data);
						}
					}else{
						alert(data['msg']);
					}
				}
			});
		},
		build:function(){
			var me = this,list = me.data,i = 0,len = list.length,ad,dom;
			for(;i < len;i++){
				ad = list[i];
				dom = me.getPosDom(ad['posid']);
				if(dom.size() < 1){
					continue;
				}else if(ad['list'].length < 1){
					dom.remove();
					continue;
				}
				if(ad['list'].length > 1){
					me.buildMultiple(ad['list'], ad['posid'], dom);
				}else{
					me.buildSingle(ad['list'][0], ad['posid'], dom);
				}
			}
		},
		//处理单个广告
		//ad 广告数据
		//posid 广告位id
		//dom 广告容器
		buildSingle:function(ad, posid, dom){
			var me = this,tpl = me.defConfig.tplSingle,html = "";
			ad = me.reBuildAd(ad, posid);
			html = host.util.template(tpl, ad);
			dom.html(html);
		},
		//处理切换广告
		buildMultiple:function(list, posid, dom){
			var me = this,i = 0,len = list.length,ad,panelStr = [],triggerStr = [],cfg = me.defConfig,
				tplp = cfg.tplMultiplePanelRow,
				tplt = cfg.tplMultipleTriggerRow,
				tplPanel = cfg.tplMultiplePanel,
				tplTrigger = cfg.tplMultipleTrigger,
				panelCls = cfg.panelCls,
				triggerCls = cfg.triggerCls,
				html = '';
			for(;i < len;i++){
				ad = me.reBuildAd(list[i], posid);
				ad['index'] = (i + 1);
				panelStr.push(host.util.template(tplp, ad));
				triggerStr.push(host.util.template(tplt, ad));
			}
			tplPanel = tplPanel.replace(/<#=cls#>/g, panelCls);
			tplTrigger = tplTrigger.replace(/<#=cls#>/g, triggerCls);
			html += tplPanel.replace(/<#=loop#>/g, panelStr.join(''));
			html += tplTrigger.replace(/<#=loop#>/g, triggerStr.join(''));
			dom.html(html);
		},
		//处理广告数据
		reBuildAd:function(ad, posid){
			var me = this;
			ad['posid'] = posid;
			ad['link'] = me.reBuildLink(posid, ad['id'], ad['link']);
			return ad;
		},
		//对链接进行处理
		reBuildLink:function(posid, id, link){
			return link;
		},
		//获取广告位dom
		getPosDom:function(posid){
			return $('#J-globalad-pos-' + posid);
		}
		

	};

	var Main = host.Class(pros, Event);
		Main.defConfig = defConfig;
	host[name] = Main;

})(phoenix, "GlobalAd", phoenix.Event, jQuery);







