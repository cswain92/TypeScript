var Base = /** @class */ (function () {
    function Base() {
        this.id = 1;
        this.name = "TV";
    }
    Base.prototype.print = function () {
        console.log("Id=" + this.id + "\n" + "Name=" + this.name);
    };
    return Base;
}());
var Derived = /** @class */ (function () {
    function Derived() {
        this.price = 45777.75;
    }
    Derived.prototype.print = function () {
        var obj = new Base(); //to access the member of base class
        obj.print();
        console.log("Price=" + this.price);
    };
    return Derived;
}());
var obj = new Derived;
obj.print();
