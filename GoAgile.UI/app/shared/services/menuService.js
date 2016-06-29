(function (app) {

    app.factory("menuService", menuService);

    function menuService() {

        var menuService = {};

        menuService.getMenuItems = function (userType) {

            var menuItems = [];
            menuItems.push({ title: "Dashboard", link:"dashboard"  });

            if (userType == "1" || true)
            {
                menuItems.push({ title: "Projects", link: "projects" });
            }

            return menuItems;

        }

        return menuService;

    }

})(angular.module("goa"));