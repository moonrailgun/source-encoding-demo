/**
 * Created by Chen on 2016-01-08.
 */

var Shannon = function(_source){
    var Pa = [];
    var source = _source;

    this.Analyze = function(){
        //step 2
        Pa[0] = 0;
        for(var i = 0;i<source.length;i++){
            Pa[i+1] = 0;
            for(var j = 0;j<Pa.length;j++){
                if(j==0){
                    Pa[i+1] += 0;
                }else{
                    Pa[i+1] += Number(source[j-1]);
                }
            }
        }
        console.log('Pa:' + Pa + '|length:' + Pa.length);

        //step 3
        //todo
    }
};