var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.Compare = function (a, b) {
        console.log("a==b:" + (a == b));
    };
    return Demo;
}());
var object = new Demo();
object.Compare(12, 12);
object.Compare("Tv", "tv");
