var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/board', {
            templateUrl: '/views/templates/board.html',
            controller: 'BoardController'
        })
        .when('/edit', {
            templateUrl: '/views/templates/edit.html',
            controller: 'EditController'
        })
        .when('/archive', {
            templateUrl: '/views/templates/archive.html',
            controller: 'ArchiveController'
        })
        .otherwise({
            redirectTo: 'board'
        });
}]);

myApp.controller('UserController', ['$scope', 'DataFactory', '$http',  function($scope, DataFactory) {
    $scope.dataFactory = DataFactory;

    console.log('hit user controller');

    $scope.dataFactory.retrieveUser().then(function() {
        $scope.user = $scope.dataFactory.userInfo().username;
    });

    $scope.clientClickLogout = function() {
        $scope.dataFactory.userLogoutReq().then(function() {
        });
    }

    //$scope.reroute = function() {
    //    console.log('in new user controller');
    //    $window.location = 'user.html#/edit';
    //};

}]);