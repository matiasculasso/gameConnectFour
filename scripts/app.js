var gameApp = angular.module('gameApp', []);


gameApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/Games/:userId?newgame=true', {
	templateUrl: 'views/Game.html',
	controller: 'GameController',	
	reloadOnSearch: false
      }).          
      when('/Games/:userId', {
	templateUrl: 'views/Game.html',
	controller: 'GameController'	
      });
}]);

