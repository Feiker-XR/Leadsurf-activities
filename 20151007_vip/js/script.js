/**
 * Created by arvin on 15/10/8.
 */

var vip = {
    isinit : false,
    init : function(){
        if(!this.isinit){
            this.runs();
            this.isinit=true;
        }else {
            return;
        }

    },
    runs : function(){
        var TH = this,
            section = $(".stage"),
            winheight=curScoll= 0,
            nheader=$(".header"),
            ql = $('.quicklink').find('a');

        $('.banner').addClass("start");
        $(window).on({
            resize : function(){
                winheight=$(this).height();
            },
            scroll : function(){
                curScoll=$(this).scrollTop();
                for(var i=0; i<section.size(); ++i){
                    if(curScoll > parseInt(section.eq(i).offset().top) - winheight + section.eq(i).height() * .5 && !section.eq(i).hasClass("start")){
                        section.eq(i).addClass("start");
                    }
                }
                if(curScoll>80){
                    if(nheader.hasClass("f")) return;
                        nheader.css({position:"fixed",top:-61});

                    var s=setTimeout(function(){
                        nheader.addClass("f").css({position:"fixed",top:0});
                    },10);
                }

                if(curScoll<61){
                    nheader.css({position:"absolute",top:0}).removeClass("f");
                }

            }
        }).resize().scroll();

        ql.eq(0).click(function(){
            $("html,body").stop(true).animate({scrollTop: $('.banner').offset().top} ,500)
        })
        ql.eq(1).click(function(){
            $("html,body").stop(true).animate({scrollTop: $('.service').offset().top} ,500)
        })
        ql.eq(2).click(function(){
            $("html,body").stop(true).animate({scrollTop: $('.grow').offset().top} ,500)
        })



    }
};

$(document).ready(function(){ vip.init();});









