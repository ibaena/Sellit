
var sellItControllers = angular.module('sellItControllers', []);

sellItControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/items').success(function(data) {
    console.log(data);
    $scope.items = data;
  });
}]);
