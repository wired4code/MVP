var app = angular.module('myApp', ['ngRoute', 'ngResource']);

// services

/*app.service('zipService', function(){
  this.zip = '48104';
});*/

// controller
app.controller('currentWeatherController', ['$scope', /*'zipService', */function($scope, zipService){

  $scope.zipCode = '';

/*  $scope.$watch('zip', function(){
    zipService.zip = $scope.zip;
  });*/

}]);


