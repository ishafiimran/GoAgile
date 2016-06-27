(function (app) {

    app.controller("privateLayoutController", ['$rootScope', '$scope', 'membershipService', 'menuService', privateLayoutController]);

    function privateLayoutController($rootScope, $scope, membershipService, menuService) {

        $scope.user = {};
        $scope.menuItems = [];

        $scope.logout = function () {
            membershipService.logout();
        }

        function init() {

            var user = membershipService.getUserDetails();

            if (user != undefined && user != null) {
                $scope.user = user;
            }
            else {
                //$scope.logout();
            }

            getMenuItems();
            getUserName();

        }

        function getMenuItems() {
            $scope.menuItems = menuService.getMenuItems($scope.user.userType);
        }

        function getUserName() {

            $scope.user.displayName = $scope.user.username;

        }

        init();

    }


})(angular.module("goa"));

