var user = angular.module('user', []);

user.controller('UserControl', ['$scope','$routeParams',
    function($scope, $routeParams) {
        console.log('UserId is ' + $routeParams.UserId);
        $scope.currentUser = {
            Id: 0,
            Name:'Sawyer',
            Avatar: 'http://localhost:8000/Database/Avatars/sawyer.bmp'
            };
}]);