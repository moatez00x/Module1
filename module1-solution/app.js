(function(){
'use strict';
angular.module('App',[])
.controller('AppController',AppController);
AppController.$inject=['$scope'];
function AppController($scope){
$scope.name= "";
$scope.result="";
$scope.test =function(){
  var str = $scope.name;
  var re= /,/ ;
  var strCopy = str.split(re);

 if(strCopy.length < 4)
 $scope.result= "Enjoy!";
 else {
 $scope.result= "Too much!" ;}

var t=0
 for (var i=0; i< strCopy.length;i++){
   if (strCopy[i]== "")
   t=t+1;
}
if(t===strCopy.length)
$scope.result="Empty";


}

}

}  )();
