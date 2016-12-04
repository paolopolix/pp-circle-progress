angular.module("angularCircleProgress", [
  "ngRoute"
]).

config(["$routeProvider", function($routeProvider) {
  $routeProvider.
  when("/", {
    templateUrl: "app/template/home.html",
    controller: "mainCtrl"
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
