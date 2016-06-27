
(function (app) {

    app.directive('sideMenubar', sideMenubar);

    function sideMenubar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/shared/directives/sideMenubar.html'
        }
    }

})(angular.module("goa"));
