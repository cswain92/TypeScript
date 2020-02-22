var Sample = /** @class */ (function () {
    function Sample() {
    }
    Sample.prototype.Details = function (name, price) {
        if (price == undefined) {
            console.log("Name=" + name);
        }
        else {
            console.log("Name=" + name + "\n" + "Price=" + price);
        }
    };
    return Sample;
}());
var obj2 = new Sample();
obj2.Details("TV");
