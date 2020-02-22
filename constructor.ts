 class Database{
     constructor(dbName:string){
         console.log("connected to "+dbName);
     }
     public Insert():void{
         console.log("Record Inserted");
     }
     public Delete():void{
         console.log("Record Deleted")
     }
 }
 let oracle=new Database("Oracle");
 oracle.Delete();
 //oracle.Insert();
 let mysql = new Database("MySql");
 mysql.Insert();