(function (app) {

    app.factory('membershipService', ['apiService', '$q', '$rootScope', '$location', membershipService]);

    function membershipService(apiService, $q, $rootScope, $location) {

        var membershipService = {};

        membershipService.login = function (credentials, loginCompleted)
        {
            if (credentials.userName == credentials.password || true) {
                saveCredentials(credentials);
                loginCompleted(credentials);
                
            } else {
                alert('Login failed');
            }


        }

        membershipService.logout = function () {
            removeCredentials();
            $location.path("/");
        }

        membershipService.isUserLoggedIn = function () {
            return $rootScope.loggedinUser != undefined && $rootScope.loggedinUser != null;
        }

        membershipService.getUserDetails = function () {
            return $rootScope.loggedinUser;
        }

        function saveCredentials(credentials) {

            if (credentials.userName == "Imran") {
                credentials.userType = 1;
            }
            else {
                credentials.userType = 2;
            }

            $rootScope.loggedinUser = {
                username: credentials.userName,
                userType: credentials.userType,
            }
        }

        function removeCredentials() {
            $rootScope.loggedinUser = null;
        }

        return membershipService;

    }

})(angular.module("goa"));
