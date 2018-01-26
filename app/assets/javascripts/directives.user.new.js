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
        $http.post("api/user")
          .success(function(res){
            // console.log(res);
            $location.url = "/dashboard";
          })
      }

   }
  }
});