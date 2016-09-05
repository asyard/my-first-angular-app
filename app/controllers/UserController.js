(function() {

    var app = angular.module("githubViewer"); // use ,[] to define a module otherwise, asking for reference of specified module

    var UserController = function($scope, github, $log, $routeParams) {
        function onError(reason) {
            $scope.error = "Could not fetch value : " + reason;
            $scope.user = undefined;
        };

        function onRepos(data) {
            $scope.repos = data;
        };

        function onUserComplete(data) {
            $scope.user = data; //angular will automatically deserialize JSON object to javascript object
            github.getRepos($scope.user).then(onRepos, onError);
        };

        $scope.message = "Selam";
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-created_at"; // instead of '-created_at', we used repoSortOrder. <tr ng-repeat="repo in repos | orderBy : '-created_at' ">
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller("UserController", UserController); //Actually it is enough. But in real world, when using js minifiers, "$scope" may become "n" etc.

}());