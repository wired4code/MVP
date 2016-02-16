var app = angular.module('myApp', ['ngRoute', 'ngResource']);

// routes
app.config(function($routeProvider){

  $routeProvider

    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })

   .when('/home', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })

    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    });

});

// error regarding ? is occuring bc of line 27 being empty;
app.service('zipService', function(){
  console.log('this.zipcode inside service', this.zipcode);
  this.zipcode = '';

});


// controller
app.controller('mainController', ['$scope', 'zipService', '$resource', function($scope, zipService, $resource){


  $scope.zipcode = zipService.zipcode;

  $scope.$watch('zipcode', function(){
    zipService.zipcode = $scope.zipcode;
  });


   $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});


  $scope.result = $scope.weatherAPI.get({zip:$scope.zipcode, country: "us", appid: "d6dbfbaff7932cf4fe546adbf96d084d" });


}]);

app.controller('forecastController', ['$scope', 'zipService', '$resource', function($scope, zipService, $resource){

  $scope.zipcode = zipService.zipcode;

  $scope.$watch('zipcode', function(){
    zipService.zipcode = $scope.zipcode;
  });

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});


  $scope.result = $scope.weatherAPI.get({zip:$scope.zipcode, country: "us", appid: "d6dbfbaff7932cf4fe546adbf96d084d" });

  $scope.tempConvert = function(kelvin){
    return Math.round((1.8 * (kelvin - 273)) + 32);
  };


}]);









