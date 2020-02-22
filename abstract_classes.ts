interface Iproduct{
    Id:number;
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
abstract class ProductTemplate implements Iproduct{
   public Id:number;
   public Name:string;
   public Price:number;
   public Qty:number;
   abstract Total():number;
    Print():void{
        console.log("Print all Products details");
    }
}
class Product implements ProductTemplate{
    public Id:number=1;
    public Name:string="TV";
    public Price:number=4500.88;
    public Qty:number=2;
    public Total():number{
        return this.Qty*this.Price;
    }
    public Print():void{
        console.log("ID-"+this.Id+"\n"+
        "Name-"+this.Name+"\n"+
        "Price-"+this.Price+"\n"+
        "Total-"+this.Total());
    }
}
let product = new Product();
product.Print();