class Base{
    public id:number=1;
    constructor(){

    }
    public name:string="TV";
    public  print():void{
          console.log("Id="+this.id+"\n"+"Name="+this.name);
      }
  }
  class Derived extends Base{
      public  price:number=45777.75;
      public print():void{
          super.print();
          console.log("Price="+this.price)
      }
  }
 let obj=new Derived;
  obj.print();
 // let obj:Base=new Derived();