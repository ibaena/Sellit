var SellIt = angular.module('SellIt', [
  'ngRoute',
  'sellItControllers'
]);

SellIt.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/',{
    templateUrl: '/views/partials/items.html',
    controller: 'ListController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
