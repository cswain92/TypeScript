var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 45777.75;
        return _this;
    }
    Derived.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Price=" + this.price);
    };
    return Derived;
}(Base));
var obj = new Derived;
obj.print();
//let obj:Base=new Derived();
