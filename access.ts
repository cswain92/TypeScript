class parent {
   public Id:number=1;
   private Name:string="TV";
   protected Price:number=54688.99;
}
child class extends parent{
    print(childObject:child){
        var parentObj=new parent();
        parentObj.Id=1;
        //parentObj.Name="TV";

        childObject.Id=2;
        childObject.Price=42333.99;
       // childObject.Name="Laptop"
    }
}