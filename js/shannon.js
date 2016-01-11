/**
 * Created by Chen on 2016-01-08.
 */

//香农编码
var Shannon = function (_source) {
    var P = [];
    var Pa = [];
    var Ki = [];
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

    //获取平均码长
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
                p:P[i],
                code: Code[i]
            });
        }
        return tmp;
    };

    this.getCodingEfficiency = function () {
        var h = Common.computeEntropy(_source);
        return Number(h / this.getAverageCodeLength()).toFixed(4);
    };

    (function () {
        //输入编码
        P[0] = 0;
        for (var i = 0; i < _source.length; i++) {
            P[i + 1] = _source[i];
        }
    })();
};