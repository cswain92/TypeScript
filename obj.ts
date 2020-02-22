 let product:object;
 product={
     Id:1,
     Name:"Samsung Tv",
     IsInStock:true,
     price:45000.77,
     Quantity:2,
     ShippedTo:["Delhi","Hyd"],
     Total:function () {
         return product.Quantity*product.price;
     },
     print:function() {
         console.log("Name="+product.Name+"\n"+"Price="+product.price+"\n"+"Quantity="+product.Quantity+"\n"+"Total="+product.Total()+"\n"+"ShippedTo="+ product.ShippedTo.toString());
          }
 }
 product.print();
 product.Name="Nike Casuals";
 product.price=3500.98;
 product.Quantity=3;
 product.ShippedTo=["Mumbai","Chennai"];
 product.print();