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
var Employee = /** @class */ (function () {
    function Employee() {
        this.FirstName = "Raj";
        this.LastName = "Kumar";
    }
    Employee.prototype.Print = function () {
        console.log(this.FirstName + " " + this.LastName);
    };
    return Employee;
}());
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Kiran";
        _this.LastName = "Rao";
        return _this;
    }
    PartTimeEmployee.prototype.Print = function () {
        console.log(this.FirstName + " " + this.LastName + "-Part Time");
    };
    return PartTimeEmployee;
}(Employee));
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Tom";
        _this.LastName = "Hanks";
        return _this;
    }
    FullTimeEmployee.prototype.Print = function () {
        console.log(this.FirstName + " " + this.LastName + "-FullTime");
    };
    return FullTimeEmployee;
}(Employee));
var emplyoees = new Array();
emplyoees[0] = new Employee();
emplyoees[1] = new PartTimeEmployee();
emplyoees[2] = new FullTimeEmployee();
for (var index = 0; index < emplyoees.length; index++) {
    emplyoees[index].Print();
}
