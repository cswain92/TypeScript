  interface IAngular2{
      CrossPlatform:string;
      Speed:number;
  }
  interface IAngular4 extends IAngular2{
      Routing:string;
      Materials:string;
  }
  let angular = <IAngular4>{};
  angular.CrossPlatform="Cordova-ionic";
  angular.Speed=10;
  angular.Routing="New Router state";
  angular.Materials="New plugins";
  console.log(angular.CrossPlatform);
  