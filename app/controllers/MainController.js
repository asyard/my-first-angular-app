(function() {

    var app = angular.module("githubViewer"); // use ,[] to define a module otherwise, asking for reference of specified module

    var MainController = function($scope, $location, $log) {

        $scope.search = function(username) {
            $log.debug("searching for : " + username);
            $location.path("/user/"+username);
        };

        $scope.message = "Selam";
        $scope.repoSortOrder = "-created_at"; // instead of '-created_at', we used repoSortOrder. <tr ng-repeat="repo in repos | orderBy : '-created_at' ">

    };

    app.controller("MainController", MainController); //Actually it is enough. But in real world, when using js minifiers, "$scope" may become "n" etc.
    //app.controller("MainController", ["$scope", "github", "$http", "$log", MainController]); // we tell angular that we use two parameters for this controller.

}());