app.directive('treeChart', ['bus', function (bus) {
  'use strict';

  return {
    restrict: 'E',
    replace: true,
    template: '<div id="graph"></div>',
    scope:{
        data: '='
    },
    link: function(scope, element) {
        var chart = d3.chart.architectureTree();

        scope.$watch("data", function(data) {
            if (typeof (data) === 'undefined') {
                return;
            }

            chart.diameter(960)
                .data(scope.data);

            d3.select(element[0])
                .call(chart);
        });
    }
  };
}]);
