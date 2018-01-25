angular.module(
  'projectApp', 
  [
    'ngRoute',
  ]
)
  .controller('MainController', function($scope) {
    $scope.tagline = 'test';
    console.log("hello")
});