/* jshint eqeqeq:false */

(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports.game = factory();
    } else {
        global.game = factory();
    }

}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
//工具方法 开始******************************************
    var _ = function () {
        },
        nativeKeys = Object.keys,
        ObjProt = Object.prototype,
        hasOwnPropert = ObjProt.hasOwnProperty,
        property = function (key) {
            return function (obj) {
                return obj === null ? void 0 : obj[key];
            };
        },
        MAX_ARRAY_INDEX = Math.pow(2, 53) - 1,
        collectNonEnumProps = function (obj, keys) {
            var nonEnumIdx = nonEnumerableProps.length;
            var constructor = obj.constructor;
            var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;

            // Constructor is a special case.
            var prop = 'constructor';
            if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

            while (nonEnumIdx--) {
                prop = nonEnumerableProps[nonEnumIdx];
                if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
                    keys.push(prop);
                }
            }
        },
        optimizeCb = function (func, context, argCount) {
            if (context === void 0) return func;
            switch (argCount === null ? 3 : argCount) {
                case 1:
                    return function (value) {
                        return func.call(context, value);
                    };
                case 2:
                    return function (value, other) {
                        return func.call(context, value, other);
                    };
                case 3:
                    return function (value, index, collection) {
                        return func.call(context, value, index, collection);
                    };
                case 4:
                    return function (accumulator, value, index, collection) {
                        return func.call(context, accumulator, value, index, collection);
                    };
            }
            return function () {
                return func.apply(context, arguments);
            };
        },
        createAssigner = function (keysFunc, undefinedOnly) {
            return function (obj) {
                var length = arguments.length;
                if (length < 2 || obj === null) return obj;
                for (var index = 1; index < length; index++) {
                    var source = arguments[index],
                        keys = keysFunc(source),
                        l = keys.length;
                    for (var i = 0; i < l; i++) {
                        var key = keys[i];
                        if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
                    }
                }
                return obj;
            };
        }, isArrayLike = function (collection) {
            var length = getLength(collection);
            return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
        }, getLength = property('length'), cb = function (value, context, argCount) {
            if (value === null) return _.identity;
            if (_.isFunction(value)) return optimizeCb(value, context, argCount);
            if (_.isObject(value)) return _.matcher(value);
            return _.property(value);
        };

    function createIndexFinder(dir, predicateFind, sortedIndex) {
        return function (array, item, idx) {
            var i = 0, length = getLength(array);
            if (typeof idx == 'number') {
                if (dir > 0) {
                    i = idx >= 0 ? idx : Math.max(idx + length, i);
                } else {
                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
                }
            } else if (sortedIndex && idx && length) {
                idx = sortedIndex(array, item);
                return array[idx] === item ? idx : -1;
            }
            if (item !== item) {
                idx = predicateFind(slice.call(array, i, length), _.isNaN);
                return idx >= 0 ? idx + i : -1;
            }
            for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
                if (array[idx] === item) return idx;
            }
            return -1;
        };
    }

    function createPredicateIndexFinder(dir) {
        return function (array, predicate, context) {
            predicate = cb(predicate, context);
            var length = getLength(array);
            var index = dir > 0 ? 0 : length - 1;
            for (; index >= 0 && index < length; index += dir) {
                if (predicate(array[index], index, array)) return index;
            }
            return -1;
        };
    }

    _.matcher = _.matches = function (attrs) {
        attrs = _.extendOwn({}, attrs);
        return function (obj) {
            return _.isMatch(obj, attrs);
        };
    };

    _.identity = function (value) {
        return value;
    };
    _.filter = _.select = function (obj, predicate, context) {
        var results = [];
        predicate = cb(predicate, context);
        _.each(obj, function (value, index, list) {
            if (predicate(value, index, list)) results.push(value);
        });
        return results;
    };
    _.each = _.forEach = function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj)) {
            for (i = 0, length = obj.length; i < length; i++) {
                iteratee(obj[i], i, obj);
            }
        } else {
            var keys = _.keys(obj);
            for (i = 0, length = keys.length; i < length; i++) {
                iteratee(obj[keys[i]], keys[i], obj);
            }
        }
        return obj;
    };

    _.findIndex = createPredicateIndexFinder(1);
    _.sortedIndex = function (array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        var value = iteratee(obj);
        var low = 0, high = getLength(array);
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
        }
        return low;
    };
    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);

    _.has = function (obj, key) {
        return obj !== null && hasOwnPropert.call(obj, key);
    };
    _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };

    _.isObject = function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    };

    _.keys = function (obj) {
        if (!_.isObject(obj)) return [];
        if (nativeKeys) return nativeKeys(obj);
        var keys = [];
        for (var key in obj) if (_.has(obj, key)) keys.push(key);
        // Ahem, IE < 9.
        if (hasEnumBug) collectNonEnumProps(obj, keys);
        return keys;
    };
    _.extendOwn = _.assign = createAssigner(_.keys);
    _.values = function (obj) {
        var keys = _.keys(obj);
        var length = keys.length;
        var values = Array(length);
        for (var i = 0; i < length; i++) {
            values[i] = obj[keys[i]];
        }
        return values;
    };

    _.contains = function (obj, item, fromIndex, guard) {
        if (!isArrayLike(obj)) obj = _.values(obj);
        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
        return _.indexOf(obj, item, fromIndex) >= 0;
    };
    _.compact = function (array) {
        return _.filter(array, _.identity);
    };


//获取多个数组间相同选号的个数,此方法用于组选和值
    _.intersection = function (array, arraySecond) {
        var result = 0;
        for (var i = 0; i < array.length; i++) {
            if (array[i] && arraySecond[i]) result++;
        }
        return result;
    };

//创造选号数组,模仿java
    function range(start, position) {
        var arr = [];
        for (; start < position; start++) arr.push(start);
        return arr;
    }

//创造号码记录数组
    function recordArray(start, position) {
        var arr = [];
        for (; start < position; start++) arr.push(false);
        return arr;
    }

//1.阶乘公式
    function factorial(num) {
        if (num <= 0) return 1;
        return num * factorial(num - 1);
    }

//2.组合公式
    function C(n, r) {
        if (r > n) return 0;
        if (r === undefined) throw Error("请传入每个参数");
        /*---数学公式=n!/r!(n-r)!----*/
        return factorial(n) / (factorial(r) * factorial(n - r));
    }

//提取选号结果=>swichesArray是一个布尔系列数组.用于指定提取NumberArray数组的值
    function pluckChooseResult(NumberArray, swichesArray) {
        return NumberArray.filter(function (value, key) {
            return swichesArray[key];
        });
    }

    function hanlder(v, k, arr) {
        arr[k] = false;
    }

//给出一个多级字符串,根据它来提取值
    function pluckDeepValueAString() {
        //return new Function('options', 'return options.' + key + ';')(obj);
    }

//机选一个号码.
    function randomPluck(array, num) {
        var cacheIndex = [];

        function randomNum() {
            var n = Math.floor(Math.random() * array.length);
            if (cacheIndex.indexOf(n) > -1) n = randomNum();
            cacheIndex.push(n);
            return n;
        }

        if (!num) {
            var index = Math.floor(Math.random() * array.length);
            array[index] = true;

        } else {
            for (var i = 0; i < num; i++) array[randomNum()] = true;
        }
        return array;
    }

//工具方法 结束*********************************************


//业务工具 开始*********************************************
//创建选球
    function CreateOneRowBall() {
        return {'': recordArray(0, 10)};
    }

    function CreateOneRowBallvesion2() {
        return {'二重号位': recordArray(0, 10)};
    }

    function CreatefiveRowBall() {
        return {
            '万位': recordArray(0, 10),
            '千位': recordArray(0, 10),
            '百位': recordArray(0, 10),
            '十位': recordArray(0, 10),
            '个位': recordArray(0, 10)
        };
    }

    function CreateFourRowBall() {
        return {
            '千位': recordArray(0, 10),
            '百位': recordArray(0, 10),
            '十位': recordArray(0, 10),
            '个位': recordArray(0, 10)
        };
    }

    function CreateThreeRowBall() {
        return {
            '万位': recordArray(0, 10),
            '千位': recordArray(0, 10),
            '百位': recordArray(0, 10)
        };
    }

    function CreateThreeRowBallversion2() {
        return {
            '千位': recordArray(0, 10),
            '百位': recordArray(0, 10),
            '十位': recordArray(0, 10)
        };
    }

    function CreateThreeRowBallversion3() {
        return {
            '百位': recordArray(0, 10),
            '十位': recordArray(0, 10),
            '个位': recordArray(0, 10)
        };
    }

    function CreateTwoRowBall() {
        return {
            '万位': recordArray(0, 10),
            '千位': recordArray(0, 10)
        };
    }

    function CreateTwoRowBallversion2() {
        return {
            '十位': recordArray(0, 10),
            '个位': recordArray(0, 10)
        };
    }

    function CreateChonghaoBall() {
        return {
            '二重号位': recordArray(0, 10),
            '单号位': recordArray(0, 10)
        };
    }

    function CreateChonghaoBallversion2() {
        return {
            '三重号位': recordArray(0, 10),
            '单号位': recordArray(0, 10)
        };
    }

    function CreateChonghaoBallversion3() {
        return {
            '三重号位': recordArray(0, 10),
            '二重号位': recordArray(0, 10)
        };
    }

    function CreateChonghaoBallversion4() {
        return {
            '四重号位': recordArray(0, 10),
            '单号位': recordArray(0, 10)
        };
    }

//设置大小单双,清除
    function daxiaodanshuangqing(arr, tag) {
        function setDaXiao(startIndex, endindex, array) {
            for (var i = 0; i < array.length; i++) {
                if (i >= startIndex && i < endindex) {
                    array[i] = true;
                } else {
                    array[i] = false;
                }
            }
        }

        function setDanShuang(tag, array) {
            function setFalse(arr, i) {
                arr[i] = false;
            }

            function setTrue(arr, i) {
                arr[i] = true;
            }

            for (var i = 0; i < array.length; i++) {
                if (tag == 'dan') {
                    if (i % 2 === 0) {
                        setFalse(array, i);
                    } else {
                        setTrue(array, i);
                    }
                } else {
                    if (i % 2 === 0) {
                        setTrue(array, i);
                    } else {
                        setFalse(array, i);

                    }

                }
            }
        }

        function qing(array) {
            array.some(hanlder);
        }

        function setquan(array) {
            for (var i = 0; i < array.length; i++) arr[i] = true;
        }

        switch (tag) {
            case 'da':
                setDaXiao(arr.length / 2, arr.length, arr);
                break;
            case 'xiao':
                setDaXiao(0, arr.length / 2, arr);
                break;
            case 'dan':
                setDanShuang('dan', arr);
                break;
            case 'shuang':
                setDanShuang('shuang', arr);
                break;
            case 'quan':
                setquan(arr);
                break;
            case 'qing':
                qing(arr);
                break;
        }

        return arr;
    }


//.普通计算投注数
    function generalCount(arr) {
        //由于这里传进来的球是没有通过处理的._.compact用于删除掉没有被选中的球,然后才能计算投注
        var result = 1;
        //简单判断是不是二维数组,如果是二维数组,计算投注原则就是:每行中选中的球相乘,如果不是二维数组,那么计算投注原则就是选中多少个球,就是多少投
        if (arr[0] instanceof Array) {
            //2._.compact用于删除掉没有被选中的球
            for (var i = 0; i < arr.length; i++) result = result * _.compact(arr[i]).length;
        } else {
            return _.compact(arr).length;
        }
        return result;
    }


    function getMyChoose(obj) {
        var funName = this.constructor.name;
        var ballOneTo26 = /^\w+sanzuxuanhezhi$/;
        var ballOneTo17 = /^\w+erzuxuanhezhi$/;
        var startPos = ballOneTo26.test(funName) || ballOneTo17.test(funName) ? 1 : 0;

        var arr = _.values(this.checkBallArray);
        var rs = [];
        for (var i = 0; i < arr.length; i++) {
            rs[i] = pluckChooseResult(range(startPos, arr[i].length + startPos), arr[i]);
        }
        obj.result = rs;
        return obj;

    }

//一一一一一一一一一一一一,五星,四星组选投注数计算公式------------------------------


    /*五星组选120*/


    /*五星组选60*/


    /*五星组选30*/


    function wuxingbudingwei() {
        var count = this.constructor(_.compact(_.values(this.checkBallArray)[0]).length);
        return getMyChoose.call(this, {count: count});

    }

    function generGetData() {
        var count = this.constructor(_.values(this.checkBallArray));
        return getMyChoose.call(this, {count: count});

    }

    function zuxuanGenner() {
        var aArr = _.values(this.checkBallArray)[0];
        var bArr = _.values(this.checkBallArray)[1];
        var a = _.compact(aArr).length;
        var b = _.compact(bArr).length;
        var r = _.intersection(aArr, bArr);
        var count = this.constructor(a, b, r);
        return getMyChoose.call(this, {count: count});

    }

    function zhuhe() {
        var arr = _.compact(_.values(this.checkBallArray)[0]);
        var count = this.constructor(arr.length);
        return getMyChoose.call(this, {count: count});
    }

    function countN() {
        var count = 0;
        var result = pluckChooseResult(range(0, 28), _.values(this.checkBallArray)[0]);
        for (var i = 0; i < result.length; i++) {
            count += this.constructor(result[i]);
        }
        return getMyChoose.call(this, {count: count});

    }

    function sanzuxuanhezhi() {
        var count = 0;
        var result = pluckChooseResult(range(1, 27), _.values(this.checkBallArray)[0]);
        for (var i = 0; i < result.length; i++) {
            count += this.constructor(result[i]);
        }
        return getMyChoose.call(this, {count: count});
    }

    /*******************************业务业务业务业务业务****************************/
    function wuxingzhixuanfushi(arr) {
        return generalCount(arr);
    }

    wuxingzhixuanfushi.prototype.checkBallArray = CreatefiveRowBall();
    wuxingzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    wuxingzhixuanfushi.prototype.getData = generGetData;


    function wuxingzuxuanzuxuan120(a) {
        return C(a, 5);
    }

    wuxingzuxuanzuxuan120.prototype.checkBallArray = CreateOneRowBall();
    wuxingzuxuanzuxuan120.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);


        ball[0].some(hanlder);
        randomPluck(ball[0], 5);
    };
    wuxingzuxuanzuxuan120.prototype.getData = zhuhe;

    function wuxingzuxuanzuxuan60(a, b, r) {
        return C(a, 1) * C(b, 3) - r * C(b - 1, 2);
    }


    wuxingzuxuanzuxuan60.prototype.checkBallArray = CreateChonghaoBall();
    wuxingzuxuanzuxuan60.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1], 3);

        if (this.getData().count === 0) {
            this.getramdom();
        }

    };
    wuxingzuxuanzuxuan60.prototype.getData = zuxuanGenner;


    function wuxingzuxuanzuxuan30(a, b, r) {
        return C(a, 2) * C(b, 1) - r * C(a - 1, 1);
    }

    wuxingzuxuanzuxuan30.prototype.checkBallArray = CreateChonghaoBall();
    wuxingzuxuanzuxuan30.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0], 2);
        randomPluck(ball[1]);
        if (this.getData().count === 0) {
            this.getramdom();
        }

    };
    wuxingzuxuanzuxuan30.prototype.getData = zuxuanGenner;
    /*五星组选20*/
    function wuxingzuxuanzuxuan20(a, b, r) {
        return C(a, 1) * C(b, 2) - r * C(b - 1, 1);
    }

    wuxingzuxuanzuxuan20.prototype.checkBallArray = CreateChonghaoBallversion2();
    wuxingzuxuanzuxuan20.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1], 2);
        if (this.getData().count === 0) {
            this.getramdom();
        }
    };
    wuxingzuxuanzuxuan20.prototype.getData = zuxuanGenner;


    /*五星组选10*/
    function wuxingzuxuanzuxuan10(a, b, r) {
        return C(a, 1) * C(b, 1) - r;
    }

    wuxingzuxuanzuxuan10.prototype.checkBallArray = CreateChonghaoBallversion3();
    wuxingzuxuanzuxuan10.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1]);
        if (this.getData().count === 0) {
            this.getramdom();
        }
    };
    wuxingzuxuanzuxuan10.prototype.getData = zuxuanGenner;
    /*五星组选 5*/
    function wuxingzuxuanzuxuan5(a, b, r) {
        return wuxingzuxuanzuxuan10(a, b, r);
    }

    wuxingzuxuanzuxuan5.prototype.checkBallArray = CreateChonghaoBallversion4();
    wuxingzuxuanzuxuan5.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);

        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1]);
        if (this.getData().count === 0) {
            this.getramdom();
        }
    };
    wuxingzuxuanzuxuan5.prototype.getData = zuxuanGenner;
    function wuxingbudingweiyimabudingwei(arr) {
        return generalCount(arr);
    }

    wuxingbudingweiyimabudingwei.prototype.checkBallArray = CreateOneRowBall();
    wuxingbudingweiyimabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    wuxingbudingweiyimabudingwei.prototype.getData = generGetData;


    function wuxingbudingweiermabudingwei(b) {
        return C(b, 2);
    }

    wuxingbudingweiermabudingwei.prototype.checkBallArray = CreateOneRowBall();
    wuxingbudingweiermabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    wuxingbudingweiermabudingwei.prototype.getData = wuxingbudingwei;

    function wuxingbudingweisanmabudingwei(b) {
        return C(b, 3);
    }

    wuxingbudingweisanmabudingwei.prototype.checkBallArray = CreateOneRowBall();
    wuxingbudingweisanmabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 3);
    };
    wuxingbudingweisanmabudingwei.prototype.getData = wuxingbudingwei;


    function wuxingquweiyifanfengshun(arr) {
        return generalCount(arr);
    }

    wuxingquweiyifanfengshun.prototype.checkBallArray = CreateOneRowBall();
    wuxingquweiyifanfengshun.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    wuxingquweiyifanfengshun.prototype.getData = generGetData;


    function wuxingquweihaoshichengshuang(arr) {
        return generalCount(arr);
    }

    wuxingquweihaoshichengshuang.prototype.checkBallArray = CreateOneRowBall();
    wuxingquweihaoshichengshuang.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    wuxingquweihaoshichengshuang.prototype.getData = generGetData;


    function wuxingquweisanxingbaoxi(arr) {
        return generalCount(arr);
    }

    wuxingquweisanxingbaoxi.prototype.checkBallArray = CreateOneRowBall();
    wuxingquweisanxingbaoxi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    wuxingquweisanxingbaoxi.prototype.getData = generGetData;

    function wuxingquweisijifacai(arr) {
        return generalCount(arr);
    }

    wuxingquweisijifacai.prototype.checkBallArray = CreateOneRowBall();
    wuxingquweisijifacai.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    wuxingquweisijifacai.prototype.getData = generGetData;


    function sixingzhixuanfushi(arr) {
        return generalCount(arr);
    }

    sixingzhixuanfushi.prototype.checkBallArray = CreateFourRowBall();
    sixingzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    sixingzhixuanfushi.prototype.getData = generGetData;

    /*四星组选24*/
    function sixingzuxuanzuxuan24(a) {
        return C(a, 4);
    }

    sixingzuxuanzuxuan24.prototype.checkBallArray = CreateOneRowBall();
    sixingzuxuanzuxuan24.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 4);
    };
    sixingzuxuanzuxuan24.prototype.getData = zhuhe;

//四星组选12
    function sixingzuxuanzuxuan12(a, b, r) {
        return C(a, 1) * C(b, 2) - r * C(b - 1, 1);
    }

    sixingzuxuanzuxuan12.prototype.checkBallArray = CreateChonghaoBall();
    sixingzuxuanzuxuan12.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1], 2);
        if (this.getData().count === 0) {
            this.getramdom();
        }

    };
    sixingzuxuanzuxuan12.prototype.getData = zuxuanGenner;


//四星组选6
    function sixingzuxuanzuxuan6(b) {
        return C(b, 2);
    }

    sixingzuxuanzuxuan6.prototype.checkBallArray = CreateOneRowBallvesion2();
    sixingzuxuanzuxuan6.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    sixingzuxuanzuxuan6.prototype.getData = zhuhe;


//四星组选4
    /**
     *
     * @param a
     * @param b
     * @param r
     * @returns {number}
     */
    function sixingzuxuanzuxuan4(a, b, r) {
        return C(a, 1) * C(b, 1) - r;
    }

    sixingzuxuanzuxuan4.prototype.checkBallArray = CreateChonghaoBallversion2();
    sixingzuxuanzuxuan4.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        ball[1].some(hanlder);
        randomPluck(ball[0]);
        randomPluck(ball[1]);
        if (this.getData().count === 0) {
            this.getramdom();
        }

    };
    sixingzuxuanzuxuan4.prototype.getData = zuxuanGenner;


    function sixingbudingweiyimabudingwei(arr) {
        return generalCount(arr);
    }

    sixingbudingweiyimabudingwei.prototype.checkBallArray = CreateOneRowBall();
    sixingbudingweiyimabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    sixingbudingweiyimabudingwei.prototype.getData = generGetData;


    function sixingbudingweiermabudingwei(b) {
        return C(b, 2);
    }

    sixingbudingweiermabudingwei.prototype.checkBallArray = CreateOneRowBall();
    sixingbudingweiermabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    sixingbudingweiermabudingwei.prototype.getData = zhuhe;

    /**
     *
     * @param arr
     * @returns {*}
     */
    function qiansanzhixuanfushi(arr) {
        return generalCount(arr);
    }

    qiansanzhixuanfushi.prototype.checkBallArray = CreateThreeRowBall();
    qiansanzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    qiansanzhixuanfushi.prototype.getData = generGetData;


//前三直选和值
    /**
     *
     * @param n
     * @returns {number}
     */

    function qiansanzhixuanhezhi(n) {
        //公式:((n+1)*(n+2))/2,n≤9;((n+1)*(n+1))-(3*(n-8)*(n-9))/2,10<=n,n<=14;((29-n)*(28-n))/2,n>=15,n≤29;
        if (n <= 9) {
            return ((n + 1) * (n + 2)) / 2;
        } else if (n >= 10 && n <= 14) {
            return (((n + 1) * (n + 2) - (3 * (n - 8) * (n - 9)))) / 2;
        } else if (n >= 15 && n <= 17) {
            return {15: 73, 16: 69, 17: 63}[n];
        } else {
            return (29 - n) * (28 - n) / 2;
        }
    }

    qiansanzhixuanhezhi.prototype.checkBallArray = {'': recordArray(0, 28)};
    qiansanzhixuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qiansanzhixuanhezhi.prototype.getData = countN;

//前三直选跨度
    /**
     *
     * @param n
     * @returns {*}
     */
    function qiansanzhixuankuadu(n) {
        return {"0": 10, "1": 54, "2": 96, "3": 126, "4": 144, "5": 150, "6": 144, "7": 126, "8": 96, "9": 54}[n];
    }

    qiansanzhixuankuadu.prototype.checkBallArray = CreateOneRowBall();
    qiansanzhixuankuadu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qiansanzhixuankuadu.prototype.getData = countN;

//前三组选和值
    /**
     *
     * @param n
     * @returns {*}
     */

    function qiansanzuxuanhezhi(n) {
        return {
            "1": 1,
            "2": 2,
            "3": 2,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 8,
            "8": 10,
            "9": 11,
            "10": 13,
            "11": 14,
            "12": 14,
            "13": 15,
            "14": 15,
            "15": 14,
            "16": 14,
            "17": 13,
            "18": 11,
            "19": 10,
            "20": 8,
            "21": 6,
            "22": 5,
            "23": 4,
            "24": 2,
            "25": 2,
            "26": 1
        }[n];
    }

    qiansanzuxuanhezhi.prototype.checkBallArray = {'': recordArray(0, 26)};
    qiansanzuxuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);

    };
    qiansanzuxuanhezhi.prototype.getData = sanzuxuanhezhi;


//前三组选组三
    /**
     *
     * @param b
     * @returns {number}
     */
    function qiansanzuxuanzusan(b) {
        return b < 2 ? 0 : C(b, 2) * 2;
    }

    qiansanzuxuanzusan.prototype.checkBallArray = CreateOneRowBall();
    qiansanzuxuanzusan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    qiansanzuxuanzusan.prototype.getData = zhuhe;

    /**
     *
     * @param b
     * @returns {*}
     */
    function qiansanzuxuanzuliu(b) {
        return C(b, 3);
    }

    qiansanzuxuanzuliu.prototype.checkBallArray = CreateOneRowBall();
    qiansanzuxuanzuliu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 3);

    };
    qiansanzuxuanzuliu.prototype.getData = zhuhe;

    /**
     *
     * @param arr
     * @returns {*}
     */
    function qiansanbudingweiyimabudingwei(arr) {
        return arr;
    }

    qiansanbudingweiyimabudingwei.prototype.checkBallArray = CreateOneRowBall();
    qiansanbudingweiyimabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qiansanbudingweiyimabudingwei.prototype.getData = wuxingbudingwei;

    /**
     *
     * @param b
     * @returns {*}
     */
    function qiansanbudingweiermabudingwei(b) {
        return C(b, 2);
    }

    qiansanbudingweiermabudingwei.prototype.checkBallArray = CreateOneRowBall();
    qiansanbudingweiermabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0],2);
    };
    qiansanbudingweiermabudingwei.prototype.getData = zhuhe;


    function zhongsanzhixuanfushi(arr) {
        return generalCount(arr);
    }

    zhongsanzhixuanfushi.prototype.checkBallArray = CreateThreeRowBallversion2();
    zhongsanzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    zhongsanzhixuanfushi.prototype.getData = generGetData;


//中三直选和值
    function zhongsanzhixuanhezhi(n) {
        return qiansanzhixuanhezhi(n);
    }

    zhongsanzhixuanhezhi.prototype.checkBallArray = {'': recordArray(0, 28)};
    zhongsanzhixuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    zhongsanzhixuanhezhi.prototype.getData = countN;


//中三直选跨度
    /**
     *
     * @param n
     * @returns {*}
     */
    function zhongsanzhixuankuadu(n) {
        return qiansanzhixuankuadu(n);
    }

    zhongsanzhixuankuadu.prototype.checkBallArray = CreateOneRowBall();
    zhongsanzhixuankuadu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    zhongsanzhixuankuadu.prototype.getData = countN;


//中三组选和值
    function zhongsanzuxuanhezhi(n) {
        return qiansanzuxuanhezhi(n);
    }

    zhongsanzuxuanhezhi.prototype.checkBallArray = {'': recordArray(0, 26)};
    zhongsanzuxuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    zhongsanzuxuanhezhi.prototype.getData = sanzuxuanhezhi;


//中三组选组三
    function zhongsanzuxuanzusan(n) {
        return qiansanzuxuanzusan(n);
    }

    zhongsanzuxuanzusan.prototype.checkBallArray = CreateOneRowBall();
    zhongsanzuxuanzusan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    zhongsanzuxuanzusan.prototype.getData = zhuhe;

    /**
     *
     * @param b
     * @returns {*}
     */

    function zhongsanzuxuanzuliu(b) {
        return qiansanzuxuanzuliu(b);
    }

    zhongsanzuxuanzuliu.prototype.checkBallArray = CreateOneRowBall();
    zhongsanzuxuanzuliu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 3);
    };
    zhongsanzuxuanzuliu.prototype.getData = zhuhe;

    function zhongsanbudingweiyimabudingwei(arr) {
        return arr;
    }

    zhongsanbudingweiyimabudingwei.prototype.checkBallArray = CreateOneRowBall();
    zhongsanbudingweiyimabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    zhongsanbudingweiyimabudingwei.prototype.getData = wuxingbudingwei;

    /**
     *
     * @param b
     * @returns {*}
     */
    function zhongsanbudingweiermabudingwei(b) {
        return C(b, 2);
    }

    zhongsanbudingweiermabudingwei.prototype.checkBallArray = CreateOneRowBall();
    zhongsanbudingweiermabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0],2);
    };
    zhongsanbudingweiermabudingwei.prototype.getData = zhuhe;


    function housanzhixuanfushi(arr) {
        return generalCount(arr);
    }

    housanzhixuanfushi.prototype.checkBallArray = CreateThreeRowBallversion3();
    housanzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    housanzhixuanfushi.prototype.getData = generGetData;


//后三直选和值
    function housanzhixuanhezhi(n) {
        return qiansanzhixuanhezhi(n);
    }

    housanzhixuanhezhi.prototype.checkBallArray = {'': recordArray(0, 28)};
    housanzhixuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);

    };
    housanzhixuanhezhi.prototype.getData = countN;


//后三直选跨度
    function housanzhixuankuadu(n) {
        return qiansanzhixuankuadu(n);
    }

    housanzhixuankuadu.prototype.checkBallArray = CreateOneRowBall();
    housanzhixuankuadu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);

    };
    housanzhixuankuadu.prototype.getData = countN;


//后三组选和值
    function housanzuxuanhezhi(n) {
        return qiansanzuxuanhezhi(n);
    }

    housanzuxuanhezhi.prototype.checkBallArray = {'': recordArray(0, 26)};
    housanzuxuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);

    };
    housanzuxuanhezhi.prototype.getData = sanzuxuanhezhi;

//后三组选组三
    function housanzuxuanzusan(n) {
        return qiansanzuxuanzusan(n);
    }

    housanzuxuanzusan.prototype.checkBallArray = CreateOneRowBall();
    housanzuxuanzusan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 2);
    };
    housanzuxuanzusan.prototype.getData = zhuhe;


    function housanzuxuanzuliu(b) {
        return qiansanzuxuanzuliu(b);
    }

    housanzuxuanzuliu.prototype.checkBallArray = CreateOneRowBall();
    housanzuxuanzuliu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0], 3);
    };
    housanzuxuanzuliu.prototype.getData = zhuhe;


    function housanbudingweiyimabudingwei(arr) {
        return arr;
    }

    housanbudingweiyimabudingwei.prototype.checkBallArray = CreateOneRowBall();
    housanbudingweiyimabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    housanbudingweiyimabudingwei.prototype.getData = wuxingbudingwei;

    /**
     *
     * @param b
     * @returns {*}
     */
    function housanbudingweiermabudingwei(b) {
        return C(b, 2);
    }

    housanbudingweiermabudingwei.prototype.checkBallArray = CreateOneRowBall();
    housanbudingweiermabudingwei.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0],2);

    };
    housanbudingweiermabudingwei.prototype.getData = zhuhe;


    function getbaodan() {
        var count = 54;
        var result = _.compact(_.values(this.checkBallArray)[0]).length;
        if (result !== 1) {
            count = 0;
        }
        return getMyChoose.call(this, {count: count});

    }

    function qiansanzuxuanbaodan() {
        return 54;
    }

    qiansanzuxuanbaodan.prototype.checkBallArray = CreateOneRowBall();
    qiansanzuxuanbaodan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);

    };
    qiansanzuxuanbaodan.prototype.getData = getbaodan;


    function zhongsanzuxuanbaodan() {
        return qiansanzuxuanbaodan();
    }

    zhongsanzuxuanbaodan.prototype.checkBallArray = CreateOneRowBall();
    zhongsanzuxuanbaodan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    zhongsanzuxuanbaodan.prototype.getData = getbaodan;


    function housanzuxuanbaodan() {
        return qiansanzuxuanbaodan();
    }

    housanzuxuanbaodan.prototype.checkBallArray = CreateOneRowBall();
    housanzuxuanbaodan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    housanzuxuanbaodan.prototype.getData = getbaodan;


//,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星,二星
    function qianerzhixuanfushi(arr) {
        return generalCount(arr);
    }

    qianerzhixuanfushi.prototype.checkBallArray = CreateTwoRowBall();
    qianerzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    qianerzhixuanfushi.prototype.getData = generGetData;

    function houerzhixuanfushi(arr) {
        return generalCount(arr);
    }

    houerzhixuanfushi.prototype.checkBallArray = CreateTwoRowBallversion2();
    houerzhixuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        for (var key in ball) {
            ball[key].some(hanlder);
            randomPluck(ball[key]);
        }
    };
    houerzhixuanfushi.prototype.getData = generGetData;


    function erzuxuanhezhi() {
        var count = 0;
        var result = pluckChooseResult(range(0, 19), _.values(this.checkBallArray)[0]);
        for (var i = 0; i < result.length; i++) {
            count += this.constructor(result[i]);
        }
        return getMyChoose.call(this, {count: count});
    }


//前二直选和值
    function qianerzhixuanhezhi(n) {
        //公式:n+1, n<=9; 19-n,n>9;
        return n <= 9 ? n + 1 : 19 - n;
    }

    qianerzhixuanhezhi.prototype.checkBallArray = {'': recordArray(0, 19)};
    qianerzhixuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qianerzhixuanhezhi.prototype.getData = erzuxuanhezhi;


//后二直选和值
    function houerzhixuanhezhi(n) {
        return qianerzhixuanhezhi(n);
    }

    houerzhixuanhezhi.prototype.checkBallArray = {'': recordArray(0, 19)};
    houerzhixuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    houerzhixuanhezhi.prototype.getData = erzuxuanhezhi;


//前二直选跨度
    function qianerzhixuankuadu(n) {
        return {"0": 10, "1": 18, "2": 16, "3": 14, "4": 12, "5": 10, "6": 8, "7": 6, "8": 4, "9": 2}[n];
    }

    qianerzhixuankuadu.prototype.checkBallArray = CreateOneRowBall();
    qianerzhixuankuadu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qianerzhixuankuadu.prototype.getData = countN;


    function houerzhixuankuadu(n) {
        return qianerzhixuankuadu(n);
    }

    houerzhixuankuadu.prototype.checkBallArray = CreateOneRowBall();
    houerzhixuankuadu.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    houerzhixuankuadu.prototype.getData = countN;

    /**
     *组选复式
     * @param b
     * @returns {*}
     */
    function qianerzuxuanfushi(b) {
        return C(b, 2);
    }

    qianerzuxuanfushi.prototype.checkBallArray = CreateOneRowBall();
    qianerzuxuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0],2);
    };
    qianerzuxuanfushi.prototype.getData = zhuhe;

    function houerzuxuanfushi(b) {
        return qianerzuxuanfushi(b);
    }

    houerzuxuanfushi.prototype.checkBallArray = CreateOneRowBall();
    houerzuxuanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0],2);
    };
    houerzuxuanfushi.prototype.getData = zhuhe;


    function erzuxunhezhi() {
        var count = 0;
        var result = pluckChooseResult(range(1, 18), _.values(this.checkBallArray)[0]);
        for (var i = 0; i < result.length; i++) {
            count += this.constructor(result[i]);
        }
        return getMyChoose.call(this, {count: count});
    }

//前二组选和值
    function qianerzuxuanhezhi(n) {
        return n <= 9 ? Math.ceil(n / 2) : Math.ceil((18 - n) / 2);
    }

    qianerzuxuanhezhi.prototype.checkBallArray = {'': recordArray(1, 18)};
    qianerzuxuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qianerzuxuanhezhi.prototype.getData = erzuxunhezhi;

//后二组选和值
    function houerzuxuanhezhi(n) {
        return qianerzuxuanhezhi(n);
    }

    houerzuxuanhezhi.prototype.checkBallArray = {'': recordArray(1, 18)};
    houerzuxuanhezhi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    houerzuxuanhezhi.prototype.getData = erzuxunhezhi;


    function erbaodan() {
        var count = 5;
        var result = _.compact(_.values(this.checkBallArray)[0]).length;
        if (result !== 1) count = 0;
        return getMyChoose.call(this, {count: count});
    }

    /**
     *包胆
     * @returns {number}
     */

    function qianerzuxuanbaodan() {
        return 5;
    }

    qianerzuxuanbaodan.prototype.checkBallArray = CreateOneRowBall();
    qianerzuxuanbaodan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    qianerzuxuanbaodan.prototype.getData = erbaodan;

    function houerzuxuanbaodan() {
        return qianerzuxuanbaodan();
    }

    houerzuxuanbaodan.prototype.checkBallArray = CreateOneRowBall();
    houerzuxuanbaodan.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        ball[0].some(hanlder);
        randomPluck(ball[0]);
    };
    houerzuxuanbaodan.prototype.getData = erbaodan;

    function yixingdingweidanfushi(arr) {
        var result = 0;
        for (var i = 0; i < arr.length; i++) result = result += _.compact(arr[i]).length;
        return result;
    }

    yixingdingweidanfushi.prototype.checkBallArray = CreatefiveRowBall();
    yixingdingweidanfushi.prototype.getramdom = function () {
        var ball = _.values(this.checkBallArray);
        var n = Math.floor(Math.random() * ball.length);
        for (var key in ball) {
            ball[key].some(hanlder);
        }
        randomPluck(ball[n]);
    };
    yixingdingweidanfushi.prototype.getData = generGetData;


//业务工具 结束*********************************************
    _.range = range;
    _.pluckChooseResult = pluckChooseResult;
    _.randomPluck = randomPluck;
    _.recordArray = recordArray;
    _.daxiaodanshuangqing = daxiaodanshuangqing;
    _.daxiaodanshuangqing = daxiaodanshuangqing;
    return {
        _: _,
        wuxingzhixuanfushi: wuxingzhixuanfushi,
        wuxingzuxuanzuxuan120: wuxingzuxuanzuxuan120,
        wuxingzuxuanzuxuan60: wuxingzuxuanzuxuan60,
        wuxingzuxuanzuxuan30: wuxingzuxuanzuxuan30,
        wuxingzuxuanzuxuan20: wuxingzuxuanzuxuan20,
        wuxingzuxuanzuxuan10: wuxingzuxuanzuxuan10,
        wuxingzuxuanzuxuan5: wuxingzuxuanzuxuan5,
        wuxingbudingweiyimabudingwei: wuxingbudingweiyimabudingwei,
        wuxingbudingweiermabudingwei: wuxingbudingweiermabudingwei,
        wuxingbudingweisanmabudingwei: wuxingbudingweisanmabudingwei,
        wuxingquweiyifanfengshun: wuxingquweiyifanfengshun,
        wuxingquweihaoshichengshuang: wuxingquweihaoshichengshuang,
        wuxingquweisanxingbaoxi: wuxingquweisanxingbaoxi,
        wuxingquweisijifacai: wuxingquweisijifacai,
        sixingzhixuanfushi: sixingzhixuanfushi,
        sixingzuxuanzuxuan24: sixingzuxuanzuxuan24,
        sixingzuxuanzuxuan12: sixingzuxuanzuxuan12,
        sixingzuxuanzuxuan6: sixingzuxuanzuxuan6,
        sixingzuxuanzuxuan4: sixingzuxuanzuxuan4,
        sixingbudingweiyimabudingwei: sixingbudingweiyimabudingwei,
        sixingbudingweiermabudingwei: sixingbudingweiermabudingwei,
        qiansanzhixuanfushi: qiansanzhixuanfushi,
        qiansanzhixuanhezhi: qiansanzhixuanhezhi,
        qiansanzhixuankuadu: qiansanzhixuankuadu,
        qiansanzuxuanhezhi: qiansanzuxuanhezhi,
        qiansanzuxuanzusan: qiansanzuxuanzusan,
        qiansanzuxuanzuliu: qiansanzuxuanzuliu,
        qiansanzuxuanbaodan: qiansanzuxuanbaodan,
        qiansanbudingweiyimabudingwei: qiansanbudingweiyimabudingwei,
        qiansanbudingweiermabudingwei: qiansanbudingweiermabudingwei,
        zhongsanzhixuanfushi: zhongsanzhixuanfushi,
        zhongsanzhixuanhezhi: zhongsanzhixuanhezhi,
        zhongsanzhixuankuadu: zhongsanzhixuankuadu,
        zhongsanzuxuanhezhi: zhongsanzuxuanhezhi,
        zhongsanzuxuanzusan: zhongsanzuxuanzusan,
        zhongsanzuxuanzuliu: zhongsanzuxuanzuliu,
        zhongsanzuxuanbaodan: zhongsanzuxuanbaodan,
        zhongsanbudingweiyimabudingwei: zhongsanbudingweiyimabudingwei,
        zhongsanbudingweiermabudingwei: zhongsanbudingweiermabudingwei,
        housanzhixuanfushi: housanzhixuanfushi,
        housanzhixuanhezhi: housanzhixuanhezhi,
        housanzhixuankuadu: housanzhixuankuadu,
        housanzuxuanhezhi: housanzuxuanhezhi,
        housanzuxuanzusan: housanzuxuanzusan,
        housanzuxuanzuliu: housanzuxuanzuliu,
        housanzuxuanbaodan: housanzuxuanbaodan,
        housanbudingweiyimabudingwei: housanbudingweiyimabudingwei,
        housanbudingweiermabudingwei: housanbudingweiermabudingwei,
        qianerzhixuanfushi: qianerzhixuanfushi,
        qianerzhixuanhezhi: qianerzhixuanhezhi,
        qianerzhixuankuadu: qianerzhixuankuadu,
        qianerzuxuanfushi: qianerzuxuanfushi,
        qianerzuxuanhezhi: qianerzuxuanhezhi,
        qianerzuxuanbaodan: qianerzuxuanbaodan,
        houerzhixuanfushi: houerzhixuanfushi,
        houerzhixuanhezhi: houerzhixuanhezhi,
        houerzhixuankuadu: houerzhixuankuadu,
        houerzuxuanfushi: houerzuxuanfushi,
        houerzuxuanhezhi: houerzuxuanhezhi,
        houerzuxuanbaodan: houerzuxuanbaodan,
        yixingdingweidanfushi: yixingdingweidanfushi
    };
}));


