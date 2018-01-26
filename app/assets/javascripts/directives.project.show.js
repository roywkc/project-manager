app.directive('projectShow',
  function($http, $routeParams, $route) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      $http.get("api/projects/"+$routeParams.id)
        .success(function(res){
          console.log(res)
          // console.log(res);
          scope.project = res;
        })
   }
  }
});