﻿var advert = angular.module('advert',[]);

var categories = [
    {
        'Id': 0,
        'Name': '',
        'ShowName': 'Toute',
    },
    {
        'Id': 1,
        'Name': 'article',
        'ShowName': 'Article',
    }, {
        'Id': 2,
        'Name': 'service',
        'ShowName':'Service'
    }];

var adverts = [];
for (var i = 1; i < 24; i ++) {
    var type = i % 2 == 0 ? 'article': 'service';
    adverts.push(
        {'name':'bassin' + i, 
            'description':'pour une maison' + i, 
            'image': 'http://localhost:8000/Database/Images/' + i + '.jpg',
            'type': type
            });
}
var currentUser = {
        Id: 0,
        Name:'Sawyer',
        Avatar: 'http://localhost:8000/Database/Avatars/sawyer.bmp'
        };

advert.controller('AdvertListCtrl', function($scope) {
    $scope.currentUser = currentUser;
    $scope.adverts = adverts;
    $scope.categories = categories;
    $scope.selectedIndex = 0;
    $scope.itemClicked = function($index) {
        console.log($index);
        $scope.selectedIndex = $index;
    };
});