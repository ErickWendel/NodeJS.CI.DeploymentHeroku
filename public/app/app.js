angular.module('app', []);
angular.module('app').controller('testCtrl', function($scope) {

    $scope.jobs = [{
            title: 'Sales Person',
            description: "you will fight dragons"
        }, {
            title: 'Accounts',
            description: "you will fight dragons with accounts"
        }, {
            title: 'Developers',
            description: "you will fight dragons"
        }, {
            title: 'Managers',
            description: "you will fight dragons"
        }
    ];
});