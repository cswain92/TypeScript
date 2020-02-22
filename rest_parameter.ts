 class sample2{
  public PrintList(...names:any[]):void{
          for(var value of  names){
              console.log(value);
          }
  }
 }
 let obj4=new sample2();
 obj4.PrintList("TV",67567,"Radio",true);   //we don't need an array constructor here we can directly pass those values..