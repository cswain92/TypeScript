class Sample1{
  public PrintList(names:any[]):void{
       for(var value of names){
           console.log(value);
       }
  }
}
let obj3=new Sample1();
obj3.PrintList(new Array("TV","Watch"));
obj3.PrintList(["Laptop","Book",97878,"NoteBook",true]);