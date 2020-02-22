var car = /** @class */ (function () {
    //constructor
    function car(engine) {
        this.engine = engine;
    }
    //function
    car.prototype.disp = function () {
        console.log("Engine is :" + this.engine);
    };
    return car;
}());
//create an object
var obj = new car('XXYY123');
//access the field
console.log(obj.engine);
//access the function
obj.disp();
