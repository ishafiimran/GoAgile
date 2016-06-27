
(function (app) {

    app.directive('topMenubar', topMenubar);

    function topMenubar() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/shared/directives/topMenuBar.html'
        }
    }

})(angular.module("goa"));
