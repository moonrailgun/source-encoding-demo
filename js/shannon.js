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
            Code[i] = parseInt(Number(Number((Pa[i]).toString(2))) * Math.pow(10, Ki[i]));
        }

        console.log(Code);
    };

    this.getAverageCodeLength = function () {
        var codeLength = 0;
        for (var i = 1; i < Ki.length; i++) {
            codeLength += P[i] * Ki[i];
        }

        return codeLength;
    };

    (function () {
        //输入编码
        P[0] = 0;
        for (var i = 0; i < _source.length; i++) {
            P[i + 1] = _source[i];
        }
    })();
};