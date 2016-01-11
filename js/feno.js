/**
 * Created by Chen on 2016-01-11.
 */

//费诺编码
var Feno = function (_source) {
    var P = _source || [];
    var Code = [];
    var loopNum = 0;

    var loop = function (code, p, index) {
        loopNum++;

        var tmp = '';
        for(var i = 0;i<loopNum;i++){
            tmp += '1';
        }
        code[index] = tmp + '0';

        if (p.length - code.length >= 2) {
            loop(code, p, index+1);
        }else{
            code[index+1] =tmp + '1';
        }
    };

    this.Analyze = function () {
        if (P.length >= 2) {
            Code[0] = '00';
            Code[1] = '01';
        } else if (P.length == 1) {
            Code[0] = '00';
        } else {
            return;
        }

        loop(Code, P, 2);

        var tmp = [];
        for(var i =0;i< P.length;i++){
            tmp.push({
                sign: 'a' +(i+1),
                p:P[i],
                code:Code[i]
            });
        }
        return tmp;
    };

    //获取平均码长
    this.getAverageCodeLength = function(){
        var codeLength = 0;
        for(var i = 0;i< P.length;i++){
            codeLength += P[i] * Code[i].length
        }
        return codeLength;
    };

    this.getCodingEfficiency = function(){
        var h = Common.computeEntropy(P);
        return Number(h / this.getAverageCodeLength()).toFixed(4);
    }
};