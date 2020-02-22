var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var Demo1 = /** @class */ (function () {
    function Demo1() {
    }
    Demo1.prototype.PrintDetails = function (obj5) {
        console.log("Name=" + obj5.Name);
    };
    return Demo1;
}());
var obj5 = new Demo1();
var prod = new Product();
prod.Name = "Samsung TV";
var emp = new Employee();
emp.Name = "John";
obj5.PrintDetails(prod);
obj5.PrintDetails(emp);
