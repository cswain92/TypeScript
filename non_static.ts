class Demo{
    static s=0;
           n=0;
    constructor(){
        Demo.s=Demo.s+1;
        this.n=this.n+1;
    }
    print(){
        console.log(`s=${Demo.s} \n n=${this.n}`);
    }
}
let obj3 = new Demo;
obj3.print();
let obj4 = new Demo;
obj4.print();
let obj5 = new Demo;
obj5.print();