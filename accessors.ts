let User:string="admin";
    class Movie{
    private _MovieName:string;

     get MovieName(){
        return this._MovieName;
    }
    set MovieName(newName:string){
        if(User && User=="admin"){
          this._MovieName=newName;
        }else{
            console.log("Not Allowed");
        }
    }  
 }
 let movie= new Movie();
 movie.MovieName="Thor";
 console.log(movie.MovieName);