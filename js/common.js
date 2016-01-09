/**
 * Created by Chen on 2016-01-09.
 */

var COMMON = function () {
    this.clearRedundantZero = function (A) {
        if (A[A.length - 1] == 0) {
            A.slice(A.length - 1, 1);
        }
    };
    this.sort = function (A) {
        A.sort(function (a, b) {
            return a < b ? 1 : -1;
        });
    };
};

var Common = new COMMON();