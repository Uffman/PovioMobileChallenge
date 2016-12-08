(function () {
    'use strict';

    angular.module('restaurantApp').config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/restaurants', {
                template: '<restaurant-list></restaurant-list>'
            })
            .when('/restaurants/:id', {
                template: '<restaurant-detail></restaurant-detail>'
            })
            .otherwise('/restaurants');
    }
})();