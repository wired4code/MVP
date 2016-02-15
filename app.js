var app = angular.module('myApp', ['ngRoute', 'ngResource']);


// controller
app.controller('currentWeatherController', ['$scope', '$resource', function($scope, $resource){

  $scope.zipCode = '';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?zip=48197,us&appid=d6dbfbaff7932cf4fe546adbf96d084d", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  $scope.result = $scope.weatherAPI.get({name:$scope.city})

    console.log($scope.result);
}]);


