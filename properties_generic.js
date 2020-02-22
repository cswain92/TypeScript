var Product1 = /** @class */ (function () {
    function Product1() {
    }
    return Product1;
}());
var Employee1 = /** @class */ (function () {
    function Employee1() {
    }
    return Employee1;
}());
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.PrintDetails = function (obj) {
        for (var property in obj)
            console.log(property + ":" + obj[property] + "\n");
    };
    return Demo;
}());
var obj = new Demo();
var prod1 = new Product1();
prod1.Name = "Samsung TV";
prod1.Price = 34000;
var emp1 = new Employee1();
emp1.Name = "chiranjib";
emp1.Salary = 40000;
emp1.Designation = "Manager";
obj.PrintDetails(prod1);
obj.PrintDetails(emp1);
