var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.service('zipService', function(){
  this.zip = 22201;
});


// controller
app.controller('currentWeatherController', ['$scope', '$resource', 'zipService', function($scope, $resource, zipService){

  $scope.zip = zipService.zip;

  $scope.$watch('zip', function(){
    zipService.zip = $scope.zip;
  })

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?zip="+$scope.zip+",us&appid=d6dbfbaff7932cf4fe546adbf96d084d", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  $scope.result = $scope.weatherAPI.get(/*{name:$scope.city}*/)

    console.log($scope.result);
}]);


