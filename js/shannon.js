/**
 * Created by Chen on 2016-01-08.
 */

var Shannon = function (_source) {
    var Pa = [];
    var Ki = [];
    var P = [];
    var Code = [];

    this.Analyze = function () {
        //step 2
        for (var i = 1; i < P.length; i++) {
            Pa[i] = 0;
            for (var j = 0; j < i; j++) {
                Pa[i] += Number(P[j]);
            }
        }

        //step 3
        for (i = 1; i < Pa.length; i++) {
            //Ki[i] = Math.floor(-Math.log(P[i]) / Math.log(2));
            var tmp = -(Math.log(P[i]) / Math.log(2));
            if (parseInt(tmp) == tmp) {
                //是整数
                Ki[i] = tmp;
            } else {
                //是浮点数
                Ki[i] = Math.ceil(tmp);
            }
        }

        //step 4
        for (i = 1; i < Pa.length; i++) {
            var codeLength = Ki[i];
            var codeNum = parseInt(Number(Number((Pa[i]).toString(2))) * Math.pow(10, codeLength));
            Code[i] = Common.toCodeString(codeNum, codeLength);
        }

        return this.getList();
    };

    this.getAverageCodeLength = function () {
        var codeLength = 0;
        for (var i = 1; i < Ki.length; i++) {
            codeLength += P[i] * Ki[i];
        }

        return codeLength;
    };

    this.getCode = function(){
        return Code;
    };

    this.getList = function(){
        var tmp = [];
        for(var i = 1;i<Pa.length;i++){
            tmp.push({
                sign: 'a'+i,
                Pa:Pa[i],
                code: Code[i]
            });
        }
        return tmp;
    };

    (function () {
        //输入编码
        P[0] = 0;
        for (var i = 0; i < _source.length; i++) {
            P[i + 1] = _source[i];
        }
    })();
};