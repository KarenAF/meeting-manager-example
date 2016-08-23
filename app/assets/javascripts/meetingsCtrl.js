/* global angular */

(function () {
  "use strict";

  angular.module("app").controller("meetingsCtrl", function($scope, $http) {
    $http.get('/api/v1/meetings.json').then(function(response) {
     $scope.meetings = response.data;

      console.log(response.data);
    });
  $scope.message = "Hello world";

  $scope.addMeeting = function(inputName, inputAddress, inputStartTime, inputEndTime, inputNotes) {
    var params = {
      name: inputName,
      address: inputAddress,
      start_time: inputStartTime,
      end_time: inputEndTime,
      notes: inputNotes
    };
    $http.post('/api/v1/meetings.json', params).then(function(response) {
      $scope.meetings.push(response.data);
    });
  };

  $scope.setOrderAttribute = function(inputAttribute) {
    if (inputAttribute !== $scope.orderAttribute) {
      $scope.isOrderDescending = false;
    } else {
      $scope.isOrderDescending = !$scope.isOrderDescending;
    }
    $scope.orderAttribute = inputAttribute;
  };

    window.$scope = $scope;    
  });
})();