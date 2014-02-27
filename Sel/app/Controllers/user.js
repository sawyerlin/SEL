var user = angular.module('user', []);

user.controller('UserControl', ['$scope','$routeParams', '$http',
    function($scope, $routeParams, $http) {
        console.log('UserId is ' + $routeParams.UserId);
        $scope.currentUser = {};
        $scope.register = function() { 
            $http({
                method: 'POST',
                url: 'http://192.168.1.28:8001/user/register',
                data: $scope.currentUser,
                headers: {'Content-type': 'application/json'}
            }).
            success(function(data, status, headers, config) {

            });
        };
    }]);