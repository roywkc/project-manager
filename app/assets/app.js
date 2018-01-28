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
      .when('/', {// home page
        templateUrl: 'views/session.new.html'
      })
      .when('/signup', {
        templateUrl: 'views/user.new.html'
      })
      .when('/dashboard',{
        templateUrl: 'views/project.index.html',
      })
      .when('/projects/:id', {
        templateUrl: 'views/project.show.html',
      })
      .otherwise({redirectTo: "/"});
}]);

app.controller('MainController', function($rootScope) {
  $rootScope.email = "roy@woywoy.com"
});