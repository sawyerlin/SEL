var user = angular.module('user', []);

user.controller('UserControl', ['$scope','$routeParams', '$http',
    function($scope, $routeParams, $http) {
        console.log('UserId is ' + $routeParams.UserId);
        $scope.currentUser = {};
        $scope.register = function() { 
            $http({
                method: 'POST',
                url: 'http://localhost:8001/user/register',
                data: JSON.stringify($scope.currentUser),
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            }).
            //$http.post(
            //    'http://localhost:8001/user/register', 
            //    $scope.currentUser).
            success(function(data, status, headers, config) {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
            });
        };
    }]);