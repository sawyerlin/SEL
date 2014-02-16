var current = angular.module('current',[]);

current.controller('CurrentCtrl', function($scope) {
    $scope.currentAccount = {
        Id: 0,
        Name:'Sawyer',
        Avatar: 'http://localhost:8080/Database/Avatars/sawyer.bmp'
        };
});