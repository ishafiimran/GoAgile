
(function (app) {

    app.directive("pageHeader", pageHeader);

    function pageHeader() {

        return {
            restrict: 'E',
            //scope: {
            //    title: "=title"
            //},
            scope: {},
            templateUrl: '/app/shared/directives/pageHeader.html',
            link: function (scope, element, attrs) {
                scope.title = attrs["title"];
            }
        }

    }

})(angular.module("goa"));

