var selApp = angular.module('selApp', [
    'ngRoute',
    'user',
    'announce'
    ]);

selApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'AnnounceControl'
            }).
            when('/users/:userId', {
                templateUrl: 'partials/user.html',
                controller:'UserControl'
            });
    }
]);