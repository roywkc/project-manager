app = angular.module('projectApp', ['ngRoute',]);

app.config([
  '$routeProvider',
  '$locationProvider',
  function(
    $routeProvider,
    $locationProvider
  ) {
    $locationProvider.html5Mode(true);
    return $routeProvider
        // home page
        .when('/', {
          templateUrl: 'views/session.new.html'
        })
        .when('/projects',{
          templateUrl: 'views/project.index.html',
        })
        // .when('projects/:id', {
        //   templateUrl: 'views/project.show.html',
        // })
}]);

app.controller('MainController', function($scope) {
  $scope.tagline = 'test';
  console.log("hello")
});