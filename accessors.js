var User = "admin";
var Movie = /** @class */ (function () {
    function Movie() {
    }
    Object.defineProperty(Movie.prototype, "MovieName", {
        get: function () {
            return this._MovieName;
        },
        set: function (newName) {
            if (User && User == "admin") {
                this._MovieName = newName;
            }
            else {
                console.log("Not Allowed");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
}());
var movie = new Movie();
movie.MovieName = "Thor";
console.log(movie.MovieName);
