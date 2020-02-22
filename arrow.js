var Arrow = /** @class */ (function () {
    function Arrow() {
        this.Add = function (a, b) { return a + b; };
        this.Hello = function (Uname) { return "Hello!" + " " + Uname; };
    }
    return Arrow;
}());
var obj1 = new Arrow();
console.log(obj1.Add(10, 55));
console.log(obj1.Hello("Chiranjib"));
