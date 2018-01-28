app.directive('userNew',
  function($http, $location) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      scope.user = {
        email: null,
        password: null
      };

      scope.submit = function() {
        //todo: move to service
        $http.post("api/user", scope.user)
          .success(function(res){
            $location.url = "/dashboard";
          })
      }

   }
  }
});