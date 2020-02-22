class Emp{
     Name:string;
     Salary:number;
}
interface IEmp extends Emp{
     Designation:string;
        print():void;
}
let obj:IEmp={
    Name:"John",
    Salary:34000,
    Designation:"Manager",
    print():void{
        console.log("Name="+this.Name+"\n"+"Salary="+this.Salary+"\n"+"Designation="+this.Designation)
    }
    

}
obj.print();
