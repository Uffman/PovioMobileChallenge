(function () {
    'use strict';

    angular
        .module('data.module')
        .service('DataContext', DataContext);

    DataContext.$inject = ['$http'];

    function DataContext($http) {
        var apiUrl = 'app/data/restaurants.json';

        function getAll() {
            return $http(
                {
                    method: 'GET',
                    url: apiUrl
                });
        }
        
        this.getAll = getAll;     
    }
})();