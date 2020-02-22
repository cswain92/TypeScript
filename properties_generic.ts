class Product1{
  public Name:string;
  public Price:number;
}
class Employee1{
  public Name:string;
  public Salary:number;
  public Designation:string;
}
class Demo{
    public PrintDetails<T>(obj:T){
        for(var property in obj)
        console.log(property+":"+obj[property]+"\n")
    }
}
let  obj= new Demo();

let prod1=new Product1();
prod1.Name="Samsung TV";
prod1.Price=34000;

let emp1=new Employee1();
emp1.Name="chiranjib";
emp1.Salary=40000;
emp1.Designation="Manager";

obj.PrintDetails<Product1>(prod1);
obj.PrintDetails<Employee1>(emp1);