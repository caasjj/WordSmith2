wordsmith.controller('aController', ['$scope', 'aFactory', function($scope, factory){
  factory.$bind($scope, 'app');
  factory.$on('loaded', function() {
    $scope.app.name = 'WordSmith';
  });
}]);