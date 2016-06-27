(function (app) {

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        //Fault Url
        $urlRouterProvider
          .when('/c?id', '/contacts/:id')
          .when('/user/:id', '/contacts/:id')
          .otherwise('/login');

        //Layout state
        $stateProvider
          .state("public", {
              //url: "",
              abstract: true,
              templateUrl: "/app/shared/layouts/publiclayout.html"
          })
        .state("private", {
            url: "",
            abstract: true,
            templateUrl: "/app/shared/layouts/privatelayout.html"
        })
        .state("selectedtask", {
            url: "",
            abstract: true,
            parent: "private",
            templateUrl: "/app/shared/layouts/tasklayout.html"
        })

        //Account
        .state("login", {
            url: "/login",
            parent: "public",
            templateUrl: "/app/components/account/login.html",
            controller: "loginController"
        })
        .state("register", {
            url: "/register",
            parent: "public",
            templateUrl: "/app/components/account/register.html"
        })
        .state("resetPassword", {
            url: "/resetPassword",
            parent: "public",
            templateUrl: "/app/components/account/resetPassword.html"
        })

        //Profile
        .state("profile", {
            url: "/profile",
            parent: "private",
            templateUrl: "/app/components/profile/profile.html"
        })

        //Dashborad
        .state("dashboard", {
            url: "/dashboard",
            parent: "private",
            templateUrl: "/app/components/dashboard/dashboard.html"
        })

        //Projects
        .state("release", {
            url: "/task/:id/release",
            parent: "selectedtask",
            templateUrl: "/app/components/release/release.html"
        })

    }
    ]);

})(angular.module("goa"));


