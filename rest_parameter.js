var sample2 = /** @class */ (function () {
    function sample2() {
    }
    sample2.prototype.PrintList = function () {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            names[_i] = arguments[_i];
        }
        for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
            var value = names_1[_a];
            console.log(value);
        }
    };
    return sample2;
}());
var obj4 = new sample2();
obj4.PrintList("TV", 67567, "Radio", true); //we don't need an array constructor here we can directly pass those values..
