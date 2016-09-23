var app = angular.module('wdi11', [])

app.run(function(data) {
  data.fetchJsonData().then(function (response) {
      // console.log('data loaded');
  }, console.error);
});
