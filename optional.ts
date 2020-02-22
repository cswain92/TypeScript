class Sample{
    Details(name:string,price?:number):void{
        if(price==undefined){
            console.log("Name="+name)
        }else{
            console.log("Name="+name+"\n"+"Price="+price);
        }
    }
}
let obj2=new Sample();
obj2.Details("TV");