app.directive('projectShow',
  function($http, $routeParams, $route) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {
      scope.form = {};
      //todo: move to service
      var getProject = function() {
        $http.get("api/projects/"+$routeParams.id)
          .success(function(res){
            scope.project = res;
            scope.project.experts = _.values(scope.project.experts);
        });
      }

      getProject();

      scope.submit = function() {
        $http.put("api/projects/"+$routeParams.id, scope.project)
          .success(function(res){
            // for some reason success here doesnt respond new project
            // todo: solve this bug
            getProject();
          });
      }

      scope.updateExpertStatus = function(index, status) {
        if (scope.project.experts[index]){
          scope.project.experts[index].status = status;
        }
      }
      scope.removeExpert = function(index) {
        scope.project.experts.splice(index, 1);
      }

      scope.addExpert = function() {
        if (scope.form.newExpert) {
         scope.project.experts.push({
            status: "pending",
            name: scope.form.newExpert
          });
         scope.form.newExpert = "";
        }
      }
      scope.isExpired = function() {
        if(scope.project){
          var expiryTime = new Date();
          expiryTime.setDate(expiryTime.getDate()-3);
          return Date.parse(scope.project.startDate) < expiryTime
        } else {
          return false;
        }
      }
   }
  }
});