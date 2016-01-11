/**
 * Created by Chen on 2016-01-09.
 */

var COMMON = function () {
    //去除输入的
    this.clearRedundantZero = function (A) {
        if (A[A.length - 1] == 0) {
            A.splice(A.length - 1, 1);
            this.clearRedundantZero(A);
        }
    };
    this.sort = function (A) {
        A.sort(function (a, b) {
            return a < b ? 1 : -1;
        });
    };

    this.toCodeString = function(num,codeLength){
        var length = codeLength || 0;
        var str = num.toString();
        if(str.length < length){
            //补零
            var tmp = '';
            for(var i = 0;i< length - str.length;i++){
                tmp += '0';
            }

            str = tmp + str;
        }

        return str;
    };

    this.isValidly = function(A){
        var sum = 0;
        for(var i=0;i< A.length;i++){
            sum += Number(A[i]);
        }

        console.log(sum);
        return sum === 1;
    };

    this.computeEntropy = function (source) {
        var tmp = 0;
        for(var i = 0;i<source.length;i++){
            var pa = Number(source[i]);
            tmp += - (pa * Math.log(pa) / Math.log(2));
        }
        return tmp;
    }
};

var Common = new COMMON();