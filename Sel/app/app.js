var selApp = angular.module('selApp', [
    'ngRoute',
    'user',
    'advert'
    ]);

selApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl:'partials/home.html',
                controller:'AdvertListCtrl'
            });
    }
]);