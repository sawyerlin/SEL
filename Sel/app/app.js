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
                controller: 'UserControl'
            }).when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'UserControl'
            }).when('/register', {
                templateUrl: 'partials/register.html',
                controller:'UserControl'
            });
    }
]);