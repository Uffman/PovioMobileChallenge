(function () {
    'use strict';

    angular
        .module('core.module')
        .service('RestaurantService', RestaurantService);

    RestaurantService.$inject = ['DataContext'];

    function RestaurantService(DataContext) {

        function getAll() {
            return DataContext.getAll().then(function (response) {               
                return response.data;
            });
        }

        function getById(id) {            
            return DataContext.getAll().then(function (response) {                
                var result = $.grep(response.data, function (item) {
                    return item.id == id;
                });
                
                return result[0];
            });
        }

        this.getAll = getAll;
        this.getById = getById;
    }
})();