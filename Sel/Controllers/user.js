var user = angular.module('user', []);

user.controller('UserCtrl', function($scope) {
    $scope.currentUser = {
        Id: 0,
        Name:'Sawyer',
        Avatar: 'http://localhost:8000/Database/Avatars/sawyer.bmp'
        };
});