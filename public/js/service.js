wordsmith.factory('aFactory', ['$firebase', function($firebase){
  var ref = new Firebase('https://wordsmith2.firebaseio.com/app');
  return $firebase( ref );
}]);