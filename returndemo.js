var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.Captcha = function () {
        var a = Math.random() * 10;
        var b = Math.random() * 10;
        var c = Math.random() * 10;
        var d = Math.random() * 10;
        var e = Math.random() * 10;
        var code = Math.round(a) + " " + Math.round(b) + " " + Math.round(c) + " " + Math.round(d) + " " + Math.round(e);
        return code;
    };
    return sample;
}());
var obj2 = new sample();
console.log(obj2.Captcha());
console.log(obj2.Captcha());
console.log(obj2.Captcha());
