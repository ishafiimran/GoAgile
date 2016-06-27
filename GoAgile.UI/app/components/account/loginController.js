(function (app) {

    app.controller('loginController', ['$scope', '$location', 'membershipService', loginController]);

    function loginController(scope, location, membershipService) {
        scope.credentials = {};

        scope.login = function () {

            membershipService.login(scope.credentials, loginCompleted);

        }

        function loginCompleted(result)
        {
            location.path('/dashboard')
        }
    }

})(angular.module("goa"));
