angular.module("angularCircleProgress").

directive("ppCircleProgress", function() {
  return {
    restrict: 'E',
    template: '<span></span>',
    scope: {
      'value': '=',
      'scale': '='
    },
    link: function link(scope, element, attrs) {
      $(element).circleProgress({
        value: element.attr("value"),
        size: 125,
        fill: {
          color: "#a6dd3c"
        },
        lineCap: "round",
        thickness: 8
      });
    }
  };
});
