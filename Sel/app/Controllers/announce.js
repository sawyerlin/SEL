var announce = angular.module('announce',[]);

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

var announceList = [];
for (var i = 1; i < 24; i ++) {
    var type = i % 2 == 0 ? 'article': 'service';
    announceList.push(
        {'name':'bassin' + i, 
            'description':'pour une maison' + i, 
            'image': 'http://localhost:8000/Database/Images/' + i + '.jpg',
            'type': type
            });
}

announce.controller('AnnounceControl', function($scope) {
    $scope.adverts = announceList;
    $scope.categories = categories;
    $scope.selectedIndex = 0;
    $scope.itemClicked = function($index) {
        console.log($index);
        $scope.selectedIndex = $index;
    };
});