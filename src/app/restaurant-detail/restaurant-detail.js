(function () {
    'use strict';

    angular
        .module('restaurantApp')
        .component('restaurantDetail', {
            templateUrl: 'app/restaurant-detail/restaurant-detail.html',
            controller: PhoneDetailController
        });

    PhoneDetailController.$inject = ['RestaurantService', '$routeParams'];

    function PhoneDetailController(RestaurantService, $routeParams) {
        var self = this;

        RestaurantService.getById($routeParams.id).then(function (response) {
            self.restaurant = response;
        });

        self.goBack = function () {
            window.history.back();
        };
    }
})();