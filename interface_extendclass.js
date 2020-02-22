var Emp = /** @class */ (function () {
    function Emp() {
    }
    return Emp;
}());
var obj = {
    Name: "John",
    Salary: 34000,
    Designation: "Manager",
    print: function () {
        console.log("Name=" + this.Name + "\n" + "Salary=" + this.Salary + "\n" + "Designation=" + this.Designation);
    }
};
obj.print();
