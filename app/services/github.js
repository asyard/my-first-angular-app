(function(){

    var github = function($http){

        var getUser = function(username){
            return $http.get("https://api.github.com/users/" + username)
                .then(function(response){
                    return response.data;
                });
        };

        var getRepos = function(user){
            return $http.get(user.repos_url)
                .then(function(response){
                    return response.data;
                });
        };

        // revealing module design pattern
        return {
            getUser: getUser,
            getRepos: getRepos
        };

    };

    var module = angular.module("githubViewer"); // we didnt use []. asking for reference of specified module
    module.factory("github", github);   // register a service with angular

}());