
var sellItControllers = angular.module('sellItControllers', []);

sellItControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/items').success(function(data) {
    $scope.items = data;
  });
}]);

sellItControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/api/items').success(function(data) {
    $scope.items = data;
    $scope.whichItem = $routeParams.itemId;

  });
}]);
