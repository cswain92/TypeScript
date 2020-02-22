var Sample1 = /** @class */ (function () {
    function Sample1() {
    }
    Sample1.prototype.PrintList = function (names) {
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var value = names_1[_i];
            console.log(value);
        }
    };
    return Sample1;
}());
var obj3 = new Sample1();
obj3.PrintList(new Array("TV", 67676, "Watch"));
obj3.PrintList(["Laptop", "Book", 97878, "NoteBook"]);
