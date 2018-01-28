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
              console.log("wtf")
              $location.path('/dashboard', false);
            } else {
              console.log(res)
              scope.form.error = "Sorry, Invalid Authentication Credentials"
            }
          },function(res){
            console.log("ffs")
            scope.form.error = "Sorry, Invalid Authentication Credentials"
          });
      }
   }
  }
});