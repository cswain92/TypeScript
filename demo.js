var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 0;
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Demo.prototype.print = function () {
        console.log("s=" + Demo.s + " n=" + this.n);
    };
    Demo.s = 0;
    return Demo;
}());
var obj1 = new Demo;
obj1.print();
var obj2 = new Demo;
obj2.print();
var obj3 = new Demo;
obj3.print();
