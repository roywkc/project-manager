app.directive('userLogin',
  function($http, $location, $rootScope) {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.user = {
        email: null,
        password: null
      };
      scope.form = {
        error: ""
      }
      scope.submit = function() {
        scope.form.error = "";
        //todo: move to service
        $http.post("api/users/login", scope.user)
          .then(function(res){
            if(res.status == 200) {
              $rootScope.email = scope.user.email;
              $location.path('/dashboard', false);
            } else {
              scope.form.error = "Sorry, Invalid Authentication Credentials"
            }
          },function(res){
            scope.form.error = "Sorry, Invalid Authentication Credentials"
          });
      }
   }
  }
});