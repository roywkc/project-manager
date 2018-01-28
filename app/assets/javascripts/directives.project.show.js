app.directive('projectShow',
  function($http, $routeParams, $route) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      //todo: move to service
      $http.get("api/projects/"+$routeParams.id)
        .success(function(res){
          scope.project = res;
        });

      scope.submit = function() {
        $http.put("api/projects/"+$routeParams.id, scope.project)
          .success(function(res){
            // for some reason success here doesnt respond new project
            // todo: solve this bug
            $http.get("api/projects/"+$routeParams.id)
              .success(function(res){
                scope.project = res;
              });
          });
      }

      scope.isLoggedIn = function() {
        //todo:
        return true;
      }
      scope.updateExpertStatus = function(index, status) {
        if (scope.project.experts[index]){
          scope.project.experts[index].status = status;
        }
      }
      scope.removeExpert = function(index) {
        scope.project.experts.splice(index, 1);
      }

      scope.isExpired = function() {
        if(scope.project){
          var expiry_time = new Date();
          expiry_time.setDate(expiry_time.getDate()-3);
          return Date.parse(scope.project.start_date) < expiry_time
        } else {
          return false;
        }

      }
   }
  }
});