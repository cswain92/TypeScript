class Employee{
    public FirstName:string="Raj";
   public LastName:string="Kumar";
   public Print():void{
        console.log(this.FirstName+" "+this.LastName);
    }
}
class PartTimeEmployee extends Employee{
   public FirstName:string="Kiran";
   public LastName:string="Rao";
   public Print():void{
      
        console.log(this.FirstName+" "+this.LastName+"-Part Time");
    }
}
class FullTimeEmployee extends Employee{
    public FirstName:string="Tom";
    public LastName:string="Hanks";
    public Print():void{
        
         console.log(this.FirstName+" "+this.LastName+"-FullTime");
     }
 }
 let emplyoees:Employee[]=new Array();
 emplyoees[0]=new Employee();
 emplyoees[1]=new PartTimeEmployee();
 emplyoees[2]=new FullTimeEmployee();

 for (var index = 0; index < emplyoees.length; index++) {
     emplyoees[index].Print();
     
 }

