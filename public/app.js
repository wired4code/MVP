var app = angular.module('myApp', []);


app.controller('ZipController', ['$scope', '$http', function($scope, $http){

  $scope.hasZip = false;

  $scope.zipcode;

  $scope.getZip = function(){
     if($scope.zippercode === undefined){
      window.alert('a proper zip code is required');
     } else{
       $scope.forecast($scope.zippercode);
       $scope.hasZip = true;
     }

  }

  $scope.forecast = function(zip){

    $http.get("http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=d6dbfbaff7932cf4fe546adbf96d084d")
  .then(function(response){ $scope.result = response.data; });

    $scope.zippercode = '';

  }

  $scope.tempConvert = function(kelvin){
    return Math.round((1.8 * (kelvin - 273)) + 32);
  };

  $scope.round = function(speed){
    return Math.round(speed);
  }


}]);