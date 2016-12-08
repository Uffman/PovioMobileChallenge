angular
    .module('restaurantApp')
    .component('restaurantList', {
        templateUrl: 'app/restaurant-list/restaurant-list.html',
        controller: PhoneListController
    });

PhoneListController.$inject = ['RestaurantService'];

function PhoneListController(RestaurantService) {
    var self = this;

    RestaurantService.getAll().then(function (response) {        
        self.restaurants = response;
    });    
}