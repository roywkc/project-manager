app.directive('userNew',
  function($http, $location, $rootScope) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      scope.user = {
        email: null,
        password: null
      };

      scope.submit = function() {
        //todo: move to servicec
        $http.post("api/users ", scope.user)
          .success(function(res){
            $rootScope.email = scope.user.email;
            $location.path('/dashboard', false);
          })
      }
   }
  }
});