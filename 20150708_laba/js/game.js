/**
 * Created by arvin on 15/7/10.
 */


/**
 *
 *   '4,4,4', 奖金：1000, 奖品号：0
 *   ‘1,1,1’, 奖金：888,  奖品号：1
 *   '2,2,2', 奖金：588,  奖品号：2
 *   两个‘1’,  奖金：688,  奖品号：3
 *   两个'2',  奖金：388,  奖品号：4
 *   ‘0,0,0’, 奖金：1000,  奖品号：5
 *   ‘3,3,3’, 奖金：688,   奖品号：6
 *   两个'0',  奖金：888,   奖品号 7
 *   两个'3',  奖金：588,  奖品号：8
 *   其他,     奖金：288,  奖品号：9
 */



(function($) {
    function F(t, o) {
        this.opts = $.extend({
            disc_size: 3, // 轮盘个数
            delay: 150, // 每个彩球动画执行延迟时间基数
            offset: [186, 146], // 水果宽高
            marquee_speed: 600,
            host: 'http://www.baidu.com'
        }, o);
        this.$dom = $(t);    // jquery对象
        this.start = {};     // 开始dom
        this.light = {};     // 跑马灯dom
        this.timer = null;   // 跑马灯定时器
        this.fruit = {};     // 水果盒子dom
        this.disc = [];      // 水果盘子
        this.discTimer = []; // 水果定时器
        this.stop = {};      // 停止容器dom
        this.allstop = {};   // 停止flag
        this.tryagain = {};  // 结果操作dom
        this.result = {};    // 奖金显示dom
        this.prize = {};     // 中奖图标dom
        this.scrollaudio = {};  // 开始音效
        this.keeptimer = {};
        this.response = {
            numbers: '4,4,4',
            prize: '0',
            award: '1000'
        }
        this.code = '';

        this.isStart = false; // 是否开始滚动
        this.gameover = false;

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
            this.fruit = $dom.find('.fruit');
            this.light = $dom.find('.light');
            this.start = $dom.find('.start');
            this.stop = $dom.find('.stop');
            this.tryagain = $dom.find('.tryagain');
            //this.result = $dom.find('.result');
            this.prize = $dom.find('.prize');
            this.createdom();
            _this.keydown();  // 键盘事件
            this.response = this.random();
            _this.play();

        },
        play: function(){
            var _this = this;
            this.start.on('click',function(){
                _this.closeMarquee();
                if(!_this.gameover){
                    _this.keepOnce('first',function(){
                        $('.guide').hide();

                        if(!_this.isStart ){
                            _this.isStart = true;
                            _this.drawbar();
                            _this.scroll();

                        }else{
                            _this.drawbar();
                            _this.repeat();
                        }
                    },300)
                }else{
                    alert('您已参加过游戏，请把机会留给他人')
                }


            });
        },
        keepOnce: function(id, fn, wait){
            var _this = this;
                if (_this.keeptimer[id]) {
                    window.clearTimeout(_this.keeptimer[id]);
                    delete _this.keeptimer[id];
                }

                return _this.keeptimer[id] = window.setTimeout(function() {
                    fn();
                    delete _this.keeptimer[id];
                }, wait);
        },
        /**
         * 键盘事件
         */
        keydown: function(){
            var _this = this;
            //键盘绑定事件
            $(window).keydown(function(e){
                if(e.which == 32){
                    _this.stop.find('div').not('.clicked').eq(0).trigger('click');
                }
                return false;
            });

        },
        offkeydown: function(){
            $(window).off('keydown');
        },
        /**
         * 创建水果盘子
         */
        createdom: function() {
            var _this = this,
                opts = _this.opts;
            for (var i = 0; i < opts.disc_size; i++) {
                _this.disc.push(
                    $('<div>', {
                        'class': 'fruit_' + (i + 1)
                    }).appendTo(_this.fruit)
                );
            }
        },
        // 跑马灯效果
        marquee: function(speed) {
            var _this = this;
            if(this.timer) clearInterval(this.timer);
            if(speed){
                this.timer = setInterval(function(){
                    _this.light.addClass('lightup');
                    setTimeout(function(){
                        _this.light.removeClass('lightup')
                    },speed);
                },speed*2);
            }

        },
        closeMarquee: function(){
            if(this.timer) clearInterval(this.timer);
        },
        // 拉杆动画效果
        drawbar: function(callback) {
            var audio = new Audio('images/la.wav');//路径
            audio.play();
            this.start.eq(0).animate({
                opacity: 'hide'
            }, 300, function() {
                $(this).animate({
                    opacity: 'show'
                }, 300, function(){
                    callback && callback();
                });
            });
            this.start.eq(1).animate({
                opacity: 'show'
            }, 300, function() {
                $(this).animate({
                    opacity: 'hide'
                }, 300, function(){
                    callback && callback();
                });
            });
        },

        // 水果滚动效果
        scroll: function() {
            var _this = this,
                opts = _this.opts,
                numbers = this.response.numbers;

            this.scrollaudio = new Audio('images/start.wav');//路径
            this.scrollaudio.loop="loop";
            this.scrollaudio.play();


            if( numbers && typeof numbers === 'string' ){
                numbers = numbers.split(',');

            }else {
                console.log('系统错误：中奖号码不符合规范')
                return;
            }
            if(Object.prototype.toString.call(numbers) === '[object Array]' && numbers.length == opts.disc_size){
                //开始滚动
                $.each(_this.disc, function(id, slide) {
                    _this.aniStart(slide,id);
                    _this.allstop[id] = false;
                });
                //绑定停止事件
                this.stop.find('div').on('click',function(){
                    var n = $(this).index();
                    $(this).addClass('clicked')
                    _this.aniStop(_this.disc[n],n);
                    $(this).off('click');
                });
            }

        },
        aniStart: function(obj,id){
            var speed = 0;
            var _this = this;
            setTimeout(function(){
                _this.discTimer[id] = setInterval(function(){
                    speedup();
                    if( Number($(obj).css('marginTop').replace('px','')) + 3040 <= 0 ) {
                        $(obj).css({marginTop: -120});
                    }else {
                        $(obj).css({marginTop: '+=' + speed});
                    }
                },30);
            },id*this.opts.delay)

            function speedup(){
                speed = (speed >= -30? speed-=3 : -30)
            }
        },
        /**
         * 滚动停止
         * @param obj
         * @param id
         */
        aniStop: function(obj,id){
            var _this = this,
                opts = _this.opts;
            var numbers = this.response.numbers;
            if( numbers && typeof numbers === 'string' ){
                numbers = numbers.split(',');
            }else {
                return;
            }

            var audio = new Audio('images/stop.MP3');//路径
            audio.play();

            //清除无限滚动
            clearInterval(_this.discTimer[id]);

            //加载减速停止动画
            var nowTop = Number($(obj).css('marginTop').replace('px',''));
            var moveBase = Math.floor(nowTop/(opts.offset[1]*5))*opts.offset[1]*5 -120;
            var target = moveBase -  numbers[id]* opts.offset[1];
            var timer = setInterval(function(){
                var _nowTop = Number($(obj).css('marginTop').replace('px',''));
                var speed = ( target- _nowTop)/8;
                speed = speed>0?Math.ceil(speed):Math.floor(speed);
                if( _nowTop <= target){
                    //点击flag置为真
                    _this.allstop[id] = true;
                    var isAllstop = true;
                    $.each(_this.allstop,function(n,bool){
                        isAllstop =  isAllstop && bool;
                    });

                    if(isAllstop){

                        _this.scrollaudio.pause();
                        //跑马灯加速
                        _this.marquee(100);
                        setTimeout(function(){
                            _this.showResult();
                        },1000)
                        //_this.tryagain.find('.award').on('click',function(){
                        //});
                    }
                    clearInterval(timer);
                }else{
                    $(obj).css({marginTop: '+=' + speed});
                }
            },30)
        },
        /**
         * 浅重置
         */
        repeat: function(){
            var _this = this;
            _this.offkeydown();
            _this.keydown();  // 键盘事件
            $.each(_this.discTimer,function(id,timer){
                clearInterval(timer);
                _this.fruit.find('div').css({'marginTop': '-120px'})
            });
            this.response = this.random();
            this.stop.find('div').removeClass('clicked');
            this.prize.find('div').removeClass('active');

            // 关闭跑马灯
            this.marquee();

            setTimeout(function(){
                _this.drawbar();
                _this.scroll();
            },100)


        },
        /**
         * 显示中奖结果
         * @param callback
         */
        showResult: function(callback){
            var _this = this;
            //显示中奖金额
            //var fix = ['','0','00','000','0000'];
            //var money = this.response.money;
            //money = fix[4 - money.length] + money;
            //money = money.split('');
            //var numbers = this.result.find('span');
            //for(var i=money.length; i>=0; i--){
            //    numbers.eq(i).addClass('number_'+ money[i]);
            //}
            //显示中奖图标
            this.prize.find('div').eq(Number(this.response.prize)).addClass('active');

            //填充兑换码
            $('.pop').find('.code').text(_this.response.code);
            $('.pop').find('.line1').text(_this.response.award);
            $('.pop').find('.pop_prize').attr('class','pop_prize').addClass('p_'+_this.response.prize);

            setTimeout(function(){
                _this.showAlert()
            },800)

        },
        /**
         * 弹出提示框
         */
        showAlert: function(){
            var _this = this;
            var oMask = $('.mask');
            var oPop = $('.pop');
            var close = oPop.find('.pop_close');
            var register = oPop.find('.register');
            var playagain = oPop.find('.playagain');
            var tel = oPop.find('#telephone');
            _this.offkeydown();
            tel.val('');
            register.off('click');

            oMask.show();
            oPop.removeClass('zoomOut').addClass('zoomIn animated').fadeIn(600);
            //关闭弹框
            close.click(function(){
                oMask.hide();
                oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
                $('.guide').show();
            });

            playagain.click(function(){
                $('.guide').show();
                oMask.hide();
                oPop.removeClass('zoomIn').addClass('zoomOut').fadeOut(600);
            });
            //校验是否输入手机号
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;

            register.click(function(){
                var num = tel.val().trim();
                if (!reg.test(num)) {
                    alert("请输入正确手机号");
                    return false;
                }
            })
        },
        /**
         * 显示状态提示语
         * @param msg
         */
        loading: function(msg){
            var oMask = $('.mask');
            oMask.show();
            $('<div>', {
                'class': 'loading',
                text: msg
            }).appendTo($('body'));

        },
        /**
         * 关闭状态提示框
         */
        loadingfinish: function(){
            $('.mask').hide();
            $('.loading').remove();
        },
        /**
         * 网络请求
         * @param callback 成功回调函数
         */
        request: function(callback){
            var _this = this;

            $.ajax( {
                url:'data.php',// 跳转到 action
                data:_this.response,
                type:'post',
                dataType:'json',
                success:function(res) {

                    //读取成功
                    if (res['status'] == '0') {
                        _this.code = res['Redeem_code'];
                        $.isFunction(callback) && callback();
                    }else {
                        alert('获取兑换码失败');
                    }
                },
                error : function() {
                    alert("异常！");
                }
            })


        },
        /**
         *   '4,4,4', 奖金：1000, 奖品号：0
         *   ‘1,1,1’, 奖金：888,  奖品号：1
         *   '2,2,2', 奖金：588,  奖品号：2
         *   两个‘1’,  奖金：688,  奖品号：3
         *   两个'2',  奖金：388,  奖品号：4
         *   ‘0,0,0’, 奖金：1000,  奖品号：5
         *   ‘3,3,3’, 奖金：688,   奖品号：6
         *   两个'0',  奖金：888,   奖品号 7
         *   两个'3',  奖金：588,  奖品号：8
         *   其他,     奖金：288,  奖品号：9
         */
        random: function(){
            var number = Math.floor(Math.random()*10);
            function result(str){
                switch(str){
                    case 0:
                        return {
                            numbers:'4,4,4',   // 中奖序列号
                            prize: '0',        // 奖品号
                            award: '1000'     // 中奖金额
                        }
                        break;
                    case 1:
                        return {
                            numbers:'1,1,1',   // 中奖序列号
                            prize: '1',        // 奖品号
                            award: '888'     // 中奖金额
                        }
                        break;
                    case 2:
                        return {
                            numbers:'2,2,2',   // 中奖序列号
                            prize: '2',        // 奖品号
                            award: '588'     // 中奖金额
                        }
                        break;
                    case 3:
                        return {
                            numbers: random_second(1),   // 中奖序列号
                            prize: '3',        // 奖品号
                            award: '688'     // 中奖金额
                        }
                        break;
                    case 4:
                        return {
                            numbers:random_second(2),   // 中奖序列号
                            prize: '4',        // 奖品号
                            award: '388'     // 中奖金额
                        }
                        break;
                    case 5:
                        return {
                            numbers:'0,0,0',   // 中奖序列号
                            prize: '5',        // 奖品号
                            award: '1000'     // 中奖金额
                        }
                        break;
                    case 6:
                        return {
                            numbers:'3,3,3',   // 中奖序列号
                            prize: '6',        // 奖品号
                            award: '688'     // 中奖金额
                        }
                        break;
                    case 7:
                        return {
                            numbers:random_second(0),   // 中奖序列号
                            prize: '7',        // 奖品号
                            award: '888'     // 中奖金额
                        }
                        break;
                    case 8:
                        return {
                            numbers:random_second(3),   // 中奖序列号
                            prize: '8',        // 奖品号
                            award: '588'     // 中奖金额
                        }
                        break;
                    case 9:
                        return {
                            numbers:getArrayItems([0,1,2,3,4],3),   // 中奖序列号
                            prize: '9',        // 奖品号
                            award: '288'     // 中奖金额
                        }
                        break;
                }
            }
            //获取两位相同随机数
            function random_second(except){
                var no = Math.floor(Math.random()*3);
                var num_str = '';
                for(var i=0;i<3;i++){
                    if(i == no){
                        num_str += getExcept(except)+'';
                    }else{
                        num_str += except+'';
                    }
                }
                function getExcept(except){
                    var result = get5();
                    function get5(){
                        return Math.floor(Math.random()*5);
                    }
                    if(result == Number(except)){
                        return arguments.callee(except);
                    }
                    return result;
                }
                return num_str.split('').join(',');
            }
            //获取三位不重复随机数
            function getArrayItems(arr, num) {
                //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
                var temp_array = new Array();
                for (var index in arr) {
                    temp_array.push(arr[index]);
                }
                //取出的数值项,保存在此数组
                var return_array = new Array();
                for (var i = 0; i<num; i++) {
                    //判断如果数组还有可以取出的元素,以防下标越界
                    if (temp_array.length>0) {
                        //在数组中产生一个随机索引
                        var arrIndex = Math.floor(Math.random()*temp_array.length);
                        //将此随机索引的对应的数组元素值复制出来
                        return_array[i] = temp_array[arrIndex];
                        //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                        temp_array.splice(arrIndex, 1);
                    } else {
                        //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                        break;
                    }
                }
                return return_array.join(',');
            }

            return result(number);
        },
        random1: function(){
            var number_str = rd(0,4)+rd(0,4)+rd(0,4);
            //产生指定范围随机数
            function rd(n,m){
                var c = m-n+1;
                return Math.floor(Math.random() * c + n)+'';
            }
            var now_str = number_str.split('').join(',');

            number_str = number_str.split('').sort().join('');

            var reg = /([0-4])\1/g ;
            if(reg.test(number_str)) {
                number_str = number_str.match(reg)[0];
            }
            return result(number_str);

            function result(str){
                switch(str){
                    case '444':
                        return {
                            numbers:'4,4,4',   // 中奖序列号
                            prize: '0',        // 奖品号
                            award: '1000'     // 中奖金额
                        }
                        break;
                    case '111':
                        return {
                            numbers:'1,1,1',   // 中奖序列号
                            prize: '1',        // 奖品号
                            award: '888'     // 中奖金额
                        }
                        break;
                    case '222':
                        return {
                            numbers:'2,2,2',   // 中奖序列号
                            prize: '2',        // 奖品号
                            award: '588'     // 中奖金额
                        }
                        break;
                    case '11':
                        return {
                            numbers: now_str,   // 中奖序列号
                            prize: '3',        // 奖品号
                            award: '666'     // 中奖金额
                        }
                        break;
                    case '22':
                        return {
                            numbers:now_str,   // 中奖序列号
                            prize: '4',        // 奖品号
                            award: '388'     // 中奖金额
                        }
                        break;
                    case '000':
                        return {
                            numbers:'0,0,0',   // 中奖序列号
                            prize: '5',        // 奖品号
                            award: '1000'     // 中奖金额
                        }
                        break;
                    case '333':
                        return {
                            numbers:'3,3,3',   // 中奖序列号
                            prize: '6',        // 奖品号
                            award: '666'     // 中奖金额
                        }
                        break;
                    case '00':
                        return {
                            numbers:now_str,   // 中奖序列号
                            prize: '7',        // 奖品号
                            award: '888'     // 中奖金额
                        }
                        break;
                    case '33':
                        return {
                            numbers:now_str,   // 中奖序列号
                            prize: '8',        // 奖品号
                            award: '588'     // 中奖金额
                        }
                        break;
                    default:
                        return {

                            numbers: now_str,   // 中奖序列号
                            prize: '9',        // 奖品号
                            award: '288'     // 中奖金额
                        }
                        break;
                }
            }
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

