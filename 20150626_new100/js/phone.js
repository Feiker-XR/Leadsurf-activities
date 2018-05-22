$(function(){
	$(".line li").each(function(){
		var lnum=$(this).index()+1;
		$(this).css("backgroundImage","url(images/0"+lnum+".png)")
	});
	$(".float-box span").click(function(){
		$(this).parent().find("a").hide();
		$(this).hide();
		$(this).parent().find("em").show();
		$(this).parent().css("backgroundImage","none");
	});
	$(".float-box em").click(function(){
		$(this).parent().find("a").show();
		$(this).hide();
		$(this).parent().find("span").show();
		$(this).parent().css("backgroundImage","url(images/float-bg.png)");
	});
	var bdywid=$("body").width();
	if(bdywid<800){
		var adshei=bdywid*90/960;
		$("header").find(".ad").css({"width":""+bdywid+"px","height":""+adshei+"px"});
		$("header").find(".ad").find("img").css({"width":""+bdywid+"px","height":""+adshei+"px"});
		$(".now-reg-num p.title").text("注册人数");
		$(".custom-service").css({"fontSize":"0","lineHeight":"0","paddingRight":"3px","marginRight":"10px"});
		$(".layout").css("width",""+bdywid+"px");
		$(".banner").css({"height":"420px","backgroundImage":"url(images/banner02.jpg)"});
		$(".video-area").css({"top":"172px","left":""+(76-(800-bdywid)/2)+"px"});
		$(".btn").css({"right":"170px","top":"230px"}).find("span").hide();
		$(".content").css({"backgroundImage":"url(images/content02.jpg)"});
		$(".activity-desc").css({"marginLeft":"10px","paddingRight":"10px"});
		$("footer").css("backgroundImage","url(images/footer02.jpg)");
		$("header").css({"paddingBottom":"0"});
		$(".count-person").css({"marginRight":"0","marginTop":"23px"});
		$(".custom-service").css({"marginTop":"23px"});
		$(".activity-desc ul li").css("fontSize","14px");
		$(".activity-desc h3").css("fontSize","16px");
	}else{
		$("header").find(".ad").css({"width":"960px","height":"90px"});
		$("header").find(".ad").find("img").css({"width":"960px","height":"90px"});
		$(".now-reg-num p.title").text("本站最新注册人数");
		$(".custom-service").css({"fontSize":"12px","lineHeight":"16px","paddingRight":"10px","marginRight":"0"});
		$(".layout").css("width","1000px");
		$(".banner").css({"height":"483px","backgroundImage":"url(images/banner.jpg)"});
		$(".video-area").css({"top":"204px","left":"460px"});
		$(".btn").css({"bottom":"10px","right":"20px"}).find("span").show();
		$(".content").css({"backgroundImage":"url(images/content.jpg)"});
		$(".activity-desc").css({"marginLeft":"300px","paddingRight":"0"});
		$("footer").css("backgroundImage","url(images/footer.jpg)");
		$("header").css({"paddingBottom":"0"});
		$(".count-person").css({"marginRight":"0","marginTop":"23px"});
		$(".custom-service").css({"marginTop":"23px"});
		$(".logo").css({"width":"464px","backgroundImage":"url(images/logo.png)"});
		$(".footer-info").css("height","140px");
		$("footer").css({"backgroundImage":"url(images/footer.jpg)","height":"175px"});
		$(".copy-right").find(".left").text("Copyright © 凤凰娱乐 版权所有");
		$(".activity-desc ul li").css("fontSize","16px");
		$(".activity-desc h3").css("fontSize","18px");
	}
	if(bdywid<770){
			$(".logo").css({"width":"365px","backgroundImage":"url(images/logo02.png)"});
			$("header").css({"paddingBottom":"0"});
			$(".footer-info").css("height","140px");
			$("footer").css({"backgroundImage":"url(images/footer02.jpg)","height":"175px"});
		}
	if(bdywid<706){
			$(".logo").css({"width":"365px","backgroundImage":"url(images/logo02.png)"});
			$(".banner").css({"height":"420px","backgroundImage":"url(images/banner03.jpg)"});
			$(".video-area").css({"top":"177px","left":""+(220-(800-bdywid)/2)+"px"});
			$(".btn").css({"right":""+(120-(800-bdywid)/2)+"px","top":"230px"}).find("span").show();
			$("header").css({"paddingBottom":"0"});
			$(".count-person").css({"marginRight":"0","marginTop":"23px"});
			$(".custom-service").css({"marginTop":"23px"});
			$(".footer-info").css("height","292px");
			$("footer").css({"backgroundImage":"url(images/footer03.jpg)","height":"340px"});
		}
	if(bdywid<670){
		$("header").css({"paddingBottom":"10px"});
		$(".count-person").css({"marginRight":"10px","marginTop":"10px"});
		$(".custom-service").css({"fontSize":"12px","lineHeight":"16px","paddingRight":"13px"});
	}
	if(bdywid<570){
		$(".btn").css({"right":""+(435-(800-bdywid)/2)+"px","top":"120px"}).find("span").show();
		$(".video-player").hide();
		$(".video-area").css({"top":"177px","left":""+(230-(800-bdywid)/2)+"px"});
		$(".banner").css({"height":"420px","backgroundImage":"url(images/banner04.jpg)"});
	}
	if(bdywid<524){
		$(".custom-service").css({"fontSize":"0","lineHeight":"0","paddingRight":"3px"});
		$(".copy-right").find(".left").text("Copyright © 凤凰娱乐");
	}
	if(bdywid<430){
		$(".custom-service").css({"marginTop":"10px"});
		$(".logo").css({"width":"320px"});
	}
	$(window).resize(function(){
		var bdywid=$("body").width();
		if(bdywid<800){
			var adshei=bdywid*90/960;
			$("header").find(".ad").css({"width":""+bdywid+"px","height":""+adshei+"px"});
			$("header").find(".ad").find("img").css({"width":""+bdywid+"px","height":""+adshei+"px"});
			$(".now-reg-num p.title").text("注册人数");
			$(".custom-service").css({"fontSize":"0","lineHeight":"0","paddingRight":"3px","marginRight":"10px"});
			$(".layout").css("width",""+bdywid+"px");
			$(".banner").css({"height":"420px","backgroundImage":"url(images/banner02.jpg)"});
			$(".video-area").css({"top":"172px","left":""+(76-(800-bdywid)/2)+"px"});
			$(".btn").css({"right":"170px","top":"230px"}).find("span").hide();
			$(".content").css({"backgroundImage":"url(images/content02.jpg)"});
			$(".activity-desc").css({"marginLeft":"10px","paddingRight":"10px"});
			$("footer").css("backgroundImage","url(images/footer02.jpg)");
			$(".activity-desc ul li").css("fontSize","14px");
			$(".activity-desc h3").css("fontSize","16px");
		}else{
			$("header").find(".ad").css({"width":"960px","height":"90px"});
			$("header").find(".ad").find("img").css({"width":"960px","height":"90px"});
			$(".now-reg-num p.title").text("本站最新注册人数");
			$(".custom-service").css({"fontSize":"12px","lineHeight":"16px","paddingRight":"10px","marginRight":"0"});
			$(".layout").css("width","1000px");
			$(".banner").css({"height":"483px","backgroundImage":"url(images/banner.jpg)"});
			$(".video-area").css({"top":"204px","left":"460px"});
			$(".btn").css({"bottom":"10px","right":"20px"}).find("span").show();
			$(".content").css({"backgroundImage":"url(images/content.jpg)"});
			$(".activity-desc").css({"marginLeft":"300px","paddingRight":"0"});
			$("footer").css("backgroundImage","url(images/footer.jpg)");
			$("header").css({"paddingBottom":"0"});
			$(".count-person").css({"marginRight":"0","marginTop":"23px"});
			$(".custom-service").css({"marginTop":"23px"});
			$(".logo").css({"width":"464px","backgroundImage":"url(images/logo.png)"});
			$(".footer-info").css("height","140px");
			$("footer").css({"backgroundImage":"url(images/footer.jpg)","height":"175px"});
			$(".copy-right").find(".left").text("Copyright © 凤凰娱乐 版权所有");
			$(".activity-desc ul li").css("fontSize","16px");
			$(".activity-desc h3").css("fontSize","18px");
		}
		if(bdywid<770){
			$(".logo").css({"width":"365px","backgroundImage":"url(images/logo02.png)"});
			$("header").css({"paddingBottom":"0"});
			$(".footer-info").css("height","140px");
			$("footer").css({"backgroundImage":"url(images/footer02.jpg)","height":"175px"});
		}
		if(bdywid<706){
			$(".logo").css({"width":"365px","backgroundImage":"url(images/logo02.png)"});
			$(".banner").css({"height":"420px","backgroundImage":"url(images/banner03.jpg)"});
			$(".video-area").css({"top":"177px","left":""+(220-(800-bdywid)/2)+"px"});
			$(".btn").css({"right":""+(120-(800-bdywid)/2)+"px","top":"230px"}).find("span").show();
			$("header").css({"paddingBottom":"0"});
			$(".count-person").css({"marginRight":"0","marginTop":"23px"});
			$(".custom-service").css({"marginTop":"23px"});
			$(".footer-info").css("height","292px");
			$("footer").css({"backgroundImage":"url(images/footer03.jpg)","height":"340px"});
		}
		if(bdywid<670){
			$("header").css({"paddingBottom":"10px"});
			$(".count-person").css({"marginRight":"10px","marginTop":"10px"});
			$(".custom-service").css({"fontSize":"12px","lineHeight":"16px","paddingRight":"13px"});
		}
		if(bdywid<570){
			$(".video-player").remove().hide();
			$(".btn").css({"right":""+(435-(800-bdywid)/2)+"px","top":"120px"}).find("span").show();
			$(".video-player").hide();
			$(".video-area").css({"top":"177px","left":""+(230-(800-bdywid)/2)+"px"});
			$(".banner").css({"height":"420px","backgroundImage":"url(images/banner04.jpg)"});
		}
		if(bdywid<524){
			$(".custom-service").css({"fontSize":"0","lineHeight":"0","paddingRight":"3px"});
			$(".copy-right").find(".left").text("Copyright © 凤凰娱乐");
		}
		if(bdywid<430){
			$(".custom-service").css({"marginTop":"10px"});
			$(".logo").css({"width":"320px"});
		}
	});
	var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
    }
};
	
	if( isMobile.any() ) 
	{
		$(".video-player").remove().hide();
		$(".activity-desc dl").css("marginLeft","10px");
		$(".btn").css({"right":""+(435-(800-bdywid)/2)+"px","top":"120px"}).find("span").show();
		$(".rule dt,.rule dd").css("fontSize","14px");
		$(".activity-desc dl").css({"marginLeft":"0","paddingLeft":"0"});
		$(".activity-desc dt").css({"position":"static","marginLeft":"0"});
		$(".activity-desc ul").css({"marginLeft":"10px","marginTop":"15px"});
		$(".activity-desc h3 strong").css({"float":"none","display":"inline-block","marginBottom":"10px"});
		$(".custom-service").text("");
	}
	else{$(".video-player").show();$(".activity-desc dl").css("marginLeft","130px");$(".btn").css({"bottom":"10px","right":"20px"}).find("span").show();}
	$(".cover").hide();
});