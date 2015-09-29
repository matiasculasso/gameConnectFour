gameApp.controller('GameController', function($scope, gameFactory, $routeParams, $location) {			
	
	
	if ($location.search()["newgame"] === "true")
	{
		console.log("starting new game");
		gameFactory.game = gameFactory.createNewGame();		
		$location.search({});			
	}

	
	$scope.game = gameFactory.game;		

	$scope.checkCell = function(rowid, colid)
	{

		if ($scope.game.gameEnded === true)
		{
			alert("Game ended, please click 'start new game'");
			return;
		}

		$scope.game.currentUser = $routeParams.userId;
		if($scope.game.currentUser != $scope.game.userToPlay)
		{
			alert("Wait for your turn!!!!!");
			return;
		}

		//select the new cell for the row selected
		$scope.game.colIndexes[colid].index--;
		if($scope.game.colIndexes[colid].index < 0)
		{
			return;
		}
		var colIndexToSelect = $scope.game.colIndexes[colid].index;
		$scope.game.table.rows[colIndexToSelect].cols[colid].user = $scope.game.userToPlay;				
		//update the user to play
		$scope.game.userToPlay === "1" ? $scope.game.userToPlay = "2" : $scope.game.userToPlay = "1";		
		if (gameFactory.checkGameFinished($scope.game.table))
		{
			$scope.game.gameEnded = true;
			$scope.game.userToPlay = "";
		}		
	}


});
