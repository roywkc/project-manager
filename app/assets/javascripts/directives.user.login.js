app.directive('userLogin',
  function() {
  return {
    restrict: 'E',
    scope: {
      isCollapsed: '@'
    },
    link: function (scope, element, attrs) {
      scope.user = {
        email: null,
        password: null
      };

      scope.submit = function() {
        $http.post("api/login")
          .success(function(res){
            // console.log(res);
            $location.url = "/dashboard";
          })
      }
   }
  }
});