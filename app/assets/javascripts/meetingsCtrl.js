/* global angular */

(function () {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $http.get('/api/v1/meetings.json').then(function(response) {
      console.log(response.data);
    });
  $scope.message = "Hello world";

    window.$scope = $scope;    
  });
})();