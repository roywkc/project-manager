app.directive('projectIndex',
  function($http) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      $http.get("api/projects").success(function(res){
        // console.log(res);
        scope.projects = res;
      })
   }
  }
});