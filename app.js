var app = angular.module('myApp', ['ngRoute', 'ngResource']);

app.controller('currentWeatherController', ['$scope', function($scope){

  $scope.city = 'Ann Arbor';
  $scope.temp = 50;

}]);