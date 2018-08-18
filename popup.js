var myApp = angular.module("myApp", []);
var myCtrl = myApp.controller("myCtrl", function($scope, $interval) {
  $scope.dob = "1995-11-12";
  (function() {
    $interval(function() {
      var split = $scope.dob.split("-");
      var bday = new Date(split[0], split[1], split[2], 0, 0, 0, 0);
      $scope.curr = new Date();
      var actual = ($scope.curr - bday) / 31536000000;
      var toStr = actual + "";
      toStr = toStr.substring(0, 13);
      $scope.diff = toStr;
    }, 10);
  })();
});
