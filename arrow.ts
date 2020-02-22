 class Arrow{
     public Add=(a:number,b:number)=>a+b;
     public Hello=(Uname:string)=>"Hello!"+" "+ Uname;
 }
 let obj1= new Arrow();

 console.log(obj1.Add(10,55));
 console.log(obj1.Hello("Chiranjib"));