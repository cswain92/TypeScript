var Demo = /** @class */ (function () {
    function Demo() {
        this.n = 0;
        Demo.s = Demo.s + 1;
        this.n = this.n + 1;
    }
    Demo.prototype.print = function () {
        console.log("s=" + Demo.s + " \n n=" + this.n);
    };
    Demo.s = 0;
    return Demo;
}());
var obj3 = new Demo;
obj3.print();
var obj4 = new Demo;
obj4.print();
var obj5 = new Demo;
obj5.print();
