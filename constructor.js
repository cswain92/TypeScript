var Database = /** @class */ (function () {
    function Database(dbName) {
        console.log("connected to " + dbName);
    }
    Database.prototype.Insert = function () {
        console.log("Record Inserted");
    };
    Database.prototype.Delete = function () {
        console.log("Record Deleted");
    };
    return Database;
}());
var oracle = new Database("Oracle");
oracle.Delete();
//oracle.Insert();
var mysql = new Database("MySql");
mysql.Insert();
