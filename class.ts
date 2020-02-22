class car {
    //field

    engine:string;

    //constructor
    constructor(engine:string){
        this.engine= engine;
    }
    //function
    disp():void{
        console.log("Engine is :"+ this.engine);
    }
}
//create an object
var obj = new car('XXYY123');

//access the field
console.log(obj.engine);

//access the function
obj.disp();