/**
 * Created by Chen on 2016-01-09.
 */

var COMMON = function () {
    //去除输入的
    this.clearRedundantZero = function (A) {
        if (A[A.length - 1] == 0) {
            A.slice(A.length - 1, 1);
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
    }
};

var Common = new COMMON();