interface IDictionary{
    [index:number]:string;
}
let Dictionary:IDictionary=["TV","Mobile"];

for(var property in Dictionary){
    console.log(property+":"+Dictionary[property]);
}