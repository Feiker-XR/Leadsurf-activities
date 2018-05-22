/**
 * Created by arvin on 15/11/16.
 */
//--------------user.json注释
// succ 获取数据 1: 成功 , 0: 失败
// isfinish  用户今天是否抽奖 1: 抽过， 0: 未抽过
// amount 用户今日投注金额

//--------------user2.json注释
// succ 获取数据 1: 成功 , 0: 失败
// isfinish  用户今天是否抽奖 1: 抽过， 0: 未抽过
// amount 用户今日投注金额
// "award"   用户奖项
// "getmoney"  用户获得返奖金额

//--------award
//  1.5%  精美铂金奖
//  1.2%  璀璨钻石奖
//  1%    沉稳美玉奖
//  0.8%  溢彩琉璃奖
//  0.5%  浴火凤凰奖
(function($) {
    function F(t, o) {
        this.id = $.extend({
            'status1': '#status-1',
            'status2': '#status-2',
            'status3': '#status-3',
            'amount1': '#amount1',
            'amount2': '#amount2',
            'amount3': '#amount3',
            'remainder1': '#remainder1',
            'remainder2': '#remainder2',
            'remainder3': '#remainder3',
            'chestList': '#chest-list'
        }, o);
        this.limit = 5000;
        this.user = {};
        this.awardname = ['精美铂金奖','璀璨钻石奖','沉稳美玉奖','溢彩琉璃奖','浴火凤凰奖'];
        this.remainder = ['1.5%','1.2%','1%','0.8%','0.5%'] ;
        this.$dom = $(t);    // jquery对象
        this.start = {};     // 开始dom
        this.init();
    }
    F.prototype = {
        /**
         * 初始化
         */
        init: function() {
            var _this = this,
                opts = _this.opts,
                $dom = this.$dom;
            this.check();
        },
        //判断用户今日是否参与游戏
        check: function(){
            var _this = this;
            var url = 'user.json',
                data = '',
                succ = function(res){
                    _this.user = res;
                    if(res.succ=='1'){
                        if(res.isfinish == '1'){
                            _this.finished();
                        }else if(res.isfinish == '0'){
                            _this.startgame();
                        }
                    }else {
                        alert('数据错误，请刷新页面')
                    }
                };
            //请求用户状态接口
            this.request(url,data,succ);

        },
        //如果用户参与过游戏
        finished: function(){
            var _this = this;
            var $status1 = $(this.id.status1),
                $status2 = $(this.id.status2),
                $status3 = $(this.id.status3),
                $amount2 = $(this.id.amount2),
                $remainder2 = $(this.id.remainder2),
                $chestbox = $(this.id.chestList).find('.chest_box');
            $status1.hide();
            $status3.hide();
            $status2.show();
            $amount2.html(this.format(_this.user.amount));
            $remainder2.html(this.format(_this.user.getmoney));
            $chestbox.removeClass('chest_open chest_close').addClass('chest_disable');
        },
        //如果未参与游戏
        startgame: function(){
            var _this = this;
            var $status1 = $(this.id.status1),
                $status2 = $(this.id.status2),
                $status3 = $(this.id.status3),
                $amount1 = $(this.id.amount1),
                $amount3 = $(this.id.amount3),
                $remainder1 = $(this.id.remainder1),
                $remainder3 = $(this.id.remainder3),
                $chestbox = $(this.id.chestList).find('.chest_box');

            $status2.hide();
            var amount = Number(this.user.amount);
            //未满投注额
            if(amount < this.limit ) {
                $status1.show();
                $status3.hide();
                $amount1.html(this.format(_this.user.amount));
                var remainder1 = Number(5000 - _this.user.amount);
                $('.inner_bar').width(_this.user.amount/5000*150);
                $remainder1.html(this.format(remainder1));
                $('#remainder1-sub').html(this.format(_this.user.amount));
                $chestbox.removeClass('chest_open chest_close').addClass('chest_disable');
            //满足投注额
            }else {
                $status1.hide();
                $status3.show();
                $amount3.html(this.format(_this.user.amount));
                $chestbox.removeClass('chest_open chest_disable').addClass('chest_close');
                this.playgame();
            }
        },
        playgame: function(){
            var _this = this;
            var $chestbox = $(this.id.chestList).find('.chest_box');
            var $status1 = $(this.id.status1),
                $status2 = $(this.id.status2),
                $status3 = $(this.id.status3),
                $amount2 = $(this.id.amount2),
                $remainder2 = $(this.id.remainder2);
            var url = 'award.json',
                data = '';
            $chestbox.on('click',function(){
                var that = this;

                _this.request(url,data,function(res){
                    setTimeout(function() {
                        _this.showAlert();
                    },400);
                    $chestbox.removeClass('chest_open chest_close').addClass('chest_disable');
                    $(that).removeClass('chest_disable chest_close').addClass('chest_open');
                    $status1.hide();
                    $status2.show();
                    $status3.hide();
                    $chestbox.off('click');

                    $('#award2').html(_this.remainder[res.award]);
                    $('#popPercent').html(_this.remainder[res.award]);
                    $('#awardname').html(_this.awardname[res.award]);

                    $amount2.html(res.amount);
                    $remainder2.html(res.getmoney);

                },function(){

                })
            });
        },
        //弹出提示框
        showAlert: function(){
            var _this = this;
            var oMask = $('.mask');
            var oPop = $('.pop');
            var btn = oPop.find('.btn');
            oMask.show();
            oPop.removeClass('zoomOut').addClass('zoomIn animated').fadeIn(600);
            //关闭弹框
            btn.click(function(){
                oMask.hide();
                oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
            });
        },
        /**
         * ajax请求
         * @param url
         * @param data
         * @param succ
         * @param callback
         */
        request: function(url,data,succ,callback){
            var _this = this;
            $.ajax( {
                url: url,// 跳转到 action
                data: data,
                type:'post',
                dataType:'json',
                success: succ,
                error : function(e) {
                    console.log(e)
                    alert("异常！");
                }
            });
        },
        /**
         *
         * @param num
         * @param precision
         * @param separator
         * @returns {*}
         */
        format: function(num, precision, separator) {
            var parts;
            // 判断是否为数字
            if (!isNaN(parseFloat(num)) && isFinite(num)) {
                num = Number(num);
                // 处理小数点位数
                num = (typeof precision !== 'undefined' ? num.toFixed(precision) : num.toFixed(2)).toString();
                // 分离数字的小数部分和整数部分
                parts = num.split('.');
                // 整数部分加[separator]分隔
                parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
                return parts.join('.');
            }
            return NaN;
        }
    }

    $.fn.game = function(o) {
        var instance;

        this.each(function() {
            instance = $.data(this, 'game');
            if (instance) {
            } else {
                instance = $.data(this, 'game', new F(this, o));
            }
        });
        return instance;
    }
})(jQuery);

