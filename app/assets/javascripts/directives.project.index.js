app.directive('projectIndex',
  function($http, $rootScope, $location) {
  return {
    restrict: 'E',
    scope: true,
    link: function (scope, element, attrs) {

      if(!$rootScope.isLoggedIn()){
        $location.url("/");
      }

      //todo move http request into service
      $http.get("api/projects").success(function(res){     
        var projects = res;
        //Separate project division for use case in dashboard
        // todo: move handling to api
        var newProjects = _.filter(projects, function(project){
          return project.status == "new" && !isExpired(project);
        });
        var pendingProjects = _.filter(projects, function(project){
          return project.status == "pending" && !isExpired(project);
        });
        var expiredProjects = _.filter(projects, function(project){
          return isExpired(project);
        });

        scope.groupedProjects = {
          'New Projects': proccessProjects(newProjects), 
          'Pending Projects': proccessProjects(pendingProjects),
          'Expired Projects': proccessProjects(expiredProjects)
        };
      })

      var proccessProjects = function(projects) {
        return _.map(projects, function(project){
          project.approvedExperts = approvedExperts(project.experts)
          return project;
        });
      }

      var approvedExperts = function(experts) {
        return _.filter(experts,
          function(expert){return expert.status == 'approved'}
        ).map(function(expert){
          return expert.name;
        }).join(",");
        return;
      }

      var isExpired = function(project) {
        //todo move to project service to share with project show
        if(project){
          var expiryTime = new Date();
          expiryTime.setDate(expiryTime.getDate()-3);
          return Date.parse(project.startDate) < expiryTime
        } else {
          return false;
        }
      }

   }
  }
});