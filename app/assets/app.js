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

app.controller('MainController', function($rootScope, $http) {
  
  $rootScope.isLoggedIn = function() {
    return  $rootScope.email;
  }


  // Seed sample data for new db
  $rootScope.seedData = function(){
    $http.post("api/projects",{
      name: "new project 1",
      startDate: new Date,
      status: "new"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "new project 2",
      startDate: new Date,
      status: "new"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "new project 3",
      startDate: new Date,
      status: "new"
    }).success(function(res){console.log(res)})

    $http.post("api/projects",{
      name: "pending project 1",
      startDate: new Date,
      status: "pending"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "pending project 2",
      startDate: new Date,
      status: "pending"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "pending project 3",
      startDate: new Date,
      status: "pending"
    }).success(function(res){console.log(res)})

    var expiry_time = new Date();
    expiry_time.setDate(expiry_time.getDate()-4);

    $http.post("api/projects",{
      name: "expired project 1",
      startDate: expiry_time,
      status: "new"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "pending project 2",
      startDate: expiry_time,
      status: "pending"
    }).success(function(res){console.log(res)})
    $http.post("api/projects",{
      name: "pending project 3",
      startDate: expiry_time,
      status: "pending"
    }).success(function(res){console.log(res)})
  }
});