var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.PrintNumbers = function (n) {
        for (var i = 0; i <= n; i++) {
            console.log(i);
        }
    };
    return sample;
}());
var obj1 = new sample();
obj1.PrintNumbers("chiranjib");
