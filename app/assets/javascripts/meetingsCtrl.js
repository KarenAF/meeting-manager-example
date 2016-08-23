/* global angular */

(function () {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $http.get('/api/v1/meetings.json').then(function(response) {
     $scope.meetings = response.data;

      console.log(response.data);
    });
  $scope.message = "Hello world";

  $scope.setOrderAttribute = function(inputAttribute) {
    $scope.orderAttribute = inputAttribute;
  };

    window.$scope = $scope;    
  });
})();