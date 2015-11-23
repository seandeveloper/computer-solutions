angular.module('computerSolutions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        }).
        when('/about', {
            templateUrl: 'about.html',
            controller: 'HomeController'
        }).
        when('/services', {
            templateUrl: 'services.html',
            controller: 'ServicesController'
        }).
        when('/contact', {
            templateUrl: 'contact.html',
            controller: 'ContactController'
        }).
        otherwise({redirectTo: '/main'});
    }])

    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {
        $http.get('services.json').then(function (response) {
            $scope.services = response.data;
        })
    }])
    .controller('ServicesController', ['$scope', '$http', function ($scope, $http) {
        $http.get('services.json').then(function (response) {
            console.log(response.data);
            $scope.services = response.data;
        })
    }])
    .controller('ContactController', ['$scope', '$http', function ($scope, $http) {
        $http.get('locations.json').then(function (response) {
            console.log(response.data);
            $scope.locations = response.data;
        })
    }]);