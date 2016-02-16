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

    .when('/forecast/:zip', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })

});

app.service('zipService', function(){
  this.zipcode = 22201;
});


// controller
app.controller('mainController', ['$scope', 'zipService', '$resource', '$routeParams', function($scope, zipService, $resource, $routeParams){

  //$scope.zipcode = zipService.zipcode;
  $scope.zip = $routeParams.zip;

  //console.log('zip code entered is', $scope.zip)

  $scope.zipcode = zipService.zipcode;

  $scope.$watch('zipcode', function(){
    zipService.zipcode = $scope.zipcode;
  });

  /*$scope.getCity = function(){
    console.log('click')
    console.log('zip code is ' + $scope.zipCity)
  };*/

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  /*+zipService.zip+*/

  $scope.result = $scope.weatherAPI.get({zip:$scope.zipcode, country: "us", appid: "d6dbfbaff7932cf4fe546adbf96d084d" });

  //console.log($scope.result);

}]);

app.controller('forecastController', ['$scope', 'zipService', '$resource', '$routeParams', function($scope, zipService, $resource, $routeParams){

  $scope.zip = $routeParams.zip;

  $scope.zipcode = zipService.zipcode;

  $scope.$watch('zipcode', function(){
    zipService.zipcode = $scope.zipcode;
  });

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});


  $scope.result = $scope.weatherAPI.get({zip:$scope.zipcode, country: "us", appid: "d6dbfbaff7932cf4fe546adbf96d084d" });

  $scope.tempConvert = function(kelvin){
    return Math.round((1.8 * (kelvin - 273)) + 32);
  }


}]);









