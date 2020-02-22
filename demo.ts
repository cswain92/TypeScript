class Demo{
    static s=0;
    n=0;
    constructor(){
        Demo.s=Demo.s+1;
        this.n=this.n+1;
    }
    print(){
        console.log(`s=${Demo.s} n=${this.n}`);
    }
}
let obj1= new Demo;
obj1.print();
let obj2=new Demo;
obj2.print();
let obj3=new Demo;
obj3.print();