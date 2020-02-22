class Base{
  public id:number=1;
  public name:string="TV";
  public  print():void{
        console.log("Id="+this.id+"\n"+"Name="+this.name);
    }
}
class Derived{
    public  price:number=45777.75;
    public print():void{
        let obj=new Base(); //to access the member of base class
        obj.print();
        console.log("Price="+this.price)
    }
}
let obj=new Derived;
obj.print();  