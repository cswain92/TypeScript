class Demo{
    public Compare<T>(a:T,b:T){
        console.log("a==b:"+(a==b));
    }
}
let object=new Demo();
object.Compare<number>(12,12);
object.Compare<string>("Tv","tv");