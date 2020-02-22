class Product{
    public Name:string;
}
class Employee{
    public Name:string;
}
class Demo1{
    public PrintDetails<T>(obj5:T){
        console.log("Name="+obj5.Name);
    }
}
let obj5=new Demo1();

let prod=new Product();
prod.Name="Samsung TV";

let emp=new Employee();
emp.Name="John";

obj5.PrintDetails<Product>(prod);
obj5.PrintDetails<Employee>(emp);