(function (app) {

    app.factory('apiService', ['$http', apiService]);

    function apiService(http) {

        var apiService = {};

        apiService.get = function (url, config, onsuccess, onerror) {

            http.get(url, config).then(
                function (response) {
                    onsuccess(response);
                },
                function (error) {
                    onerror(error);
                }
                );

        };

        apiService.post = function (url, data, onsuccess, onerror) {

            http.post(url, data).then(
                function (response) {
                    onsuccess(response);
                },
                function (error) {
                    onerror(error);
                }
                );

        };

        return apiService;

    }

})(angular.module("goa"));
