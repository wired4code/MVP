var app = angular.module('myApp', ['ngRoute', 'ngResource']);

// routes
app.config(function($routeProvider){

  $routeProvider
    .when('/',{
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })

    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'mainController'
    })

});

app.service('zipService', function(){
  this.zip = 48104;
});


// controller
app.controller('mainController', ['$scope', '$resource', 'zipService', function($scope, $resource, zipService){

  //$scope.zip = 22201;

  //$scope.zip = zipService.zip;

  /*$scope.$watch('zip', function(){
    zipService.zip = $scope.zip;
  });*/

  /*$scope.getCity = function(){
    console.log('click')
    console.log('zip code is ' + $scope.zipCity)
  };*/

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?zip=48197,us&appid=d6dbfbaff7932cf4fe546adbf96d084d", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  /*+zipService.zip+*/

  $scope.result = $scope.weatherAPI.get({zip:$scope.zip});

  //console.log($scope.result);

}]);


app.controller('forecastController', ['$scope', '$resource', 'zipService', function($scope, $resource, zipService){

  $scope.message = 'Forecast Controller is working!';

}]);







