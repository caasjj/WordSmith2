var wordsmith = angular.module('wordsmith', ['ngRoute', 'firebase']);

wordsmith.config(
  function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      controller: 'aController',
      templateUrl: 'views/view.html'
  })
}); 