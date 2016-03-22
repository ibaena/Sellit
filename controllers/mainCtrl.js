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

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId) - 1;
    } else {
      $scope.prevItem = $scope.items.length - 1;
    }
    if ($routeParams.itemId < $scope.items.length - 1) {
      $scope.nextItem = Number($routeParams.itemId) + 1;
    } else {
      $scope.nextItem = 0;
    }
  });
}]);

sellItControllers.controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.user = {};
  $scope.register = function() {
    $http({
      method: 'POST',
      url: '/register',
      data: $scope.user
    }).success(function(data) {
      $scope.users = data;
      console.log('You added a user! %s', $scope.users.username);
      $scope.user = {};
      $location.path('/login');
    });
  };
}]);

sellItControllers.controller('LoginController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('/api/items').success(function(data) {
    $scope.items = data;
  });
  $scope.user = {};
  $scope.login = function() {
    $http({
      method: 'POST',
      url: '/login',
      data: $scope.user
    }).success(function(data) {
      $scope.loggedIn = true;
      $scope.users = data;
      $scope.user = {};
    });
  };

}]);
