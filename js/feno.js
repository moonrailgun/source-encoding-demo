/**
 * Created by Chen on 2016-01-11.
 */

//费诺编码
var Feno = function (_source) {
    var P = _source || [];
    var Code = [];

    //获取中心索引
    var getCenterIndex = function (array) {
        if (array.length < 2) {
            return 0;
        }

        var num = 0;
        var prevNum = 0;
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += Number(array[i]);
        }

        prevNum = sum;
        for (i = 0; i < array.length; i++) {
            num += Number(array[i]);
            if (Math.abs(num - sum / 2) > Math.abs(prevNum - sum / 2)) {
                return i;
            }
            prevNum = num;
        }
    };

    //获取子数组
    var getChildArray = function (parentArray, startIndex, endIndex) {
        var childArray = [];
        for (var i = startIndex; i <= endIndex; i++) {
            childArray.push(parentArray[i]);
        }

        return childArray;
    };

    var loop = function (code, p, startIndex, endIndex) {
        var operatedArray = getChildArray(p, startIndex, endIndex);
        var centerIndex = getCenterIndex(operatedArray);
        if (centerIndex != 0) {
            //可分
            var realCenterIndex = startIndex + centerIndex;
            //console.log('开始索引:'+startIndex+'中止索引:' + endIndex+ '操作数组：' + operatedArray + '中心索引:' + realCenterIndex);
            for (var i = startIndex; i < realCenterIndex; i++) {
                code[i] += '0';
            }
            loop(code, p, startIndex, realCenterIndex - 1);
            for (i = realCenterIndex; i <= endIndex; i++) {
                code[i] += '1';
            }
            loop(code, p, realCenterIndex, endIndex);
        } else {
            //不可分
            //console.log('不可分，操作数组:' + operatedArray + '当前索引:' + startIndex);
        }
    };

    this.Analyze = function () {
        for (var i = 0; i < P.length; i++) {
            Code[i] = '';
        }

        loop(Code, P, 0, P.length - 1);

        var tmp = [];
        for (i = 0; i < P.length; i++) {
            tmp.push({
                sign: 'a' + (i + 1),
                p: P[i],
                code: Code[i]
            });
        }
        return tmp;
    };

    //获取平均码长
    this.getAverageCodeLength = function () {
        var codeLength = 0;
        for (var i = 0; i < P.length; i++) {
            codeLength += P[i] * Code[i].length
        }
        return codeLength;
    };

    this.getCodingEfficiency = function () {
        var h = Common.computeEntropy(P);
        return Number(h / this.getAverageCodeLength()).toFixed(4);
    }
};