gameApp.factory("gameFactory", function ()
{
	return{ 
		game : {
				"table" : [],
				"currentUser":"",
				"userToPlay" : "",	
				//this array will be use to keep the current index column to select for each row
				"colIndexes" : [],
				"gameEnded": false
				},
		createNewGame : function () 
							{

								var game = {};
								//clean arrays
								game.table = {};
								game.table.rows = [];		
								game.colIndexes = [];

								//fill table
								for (var i=0;i<6;i++)
								{
									game.table.rows.push({rowid:i,cols:[]});		
									for (var j=0;j<7;j++)
									{
										game.table.rows[i].cols.push({id: String(i) + String(j), rowid:i, colid:j, user:""});			
									}		
								}

								//fill colIndexs Array
								for (var j=0;j<7;j++)
								{
									game.colIndexes.push({index:6});
								}

								//set up users confiugration
								game.userToPlay = "1";
								game.currentUser = "";								
								return game;
							},
			checkGameFinished: function(table)
							{
								//horizontal check	
								var currentRow = {};	
								for (var i = 0; i<table.rows.length;i++)
								{				
									currentRow = table.rows[i];
									for (var j=0;j<currentRow.cols.length; j++)
									{
										if (j > 3)
										{
											break;
										}
										if (currentRow.cols[j].user !== ''
											&& currentRow.cols[j].user === currentRow.cols[j+1].user 
											&& currentRow.cols[j].user === currentRow.cols[j+2].user
											&& currentRow.cols[j].user === currentRow.cols[j+3].user)
										{
											return true;
										}
									}
								}

								//vertical check
								for (var i = 0; i<table.rows[0].cols.length;i++)
								{					
									for (var j=0;j<table.rows.length; j++)
									{
										if (j > 2)
										{
											break;
										}
										if (table.rows[j].cols[i].user !== ""
											&& table.rows[j].cols[i].user === table.rows[j+1].cols[i].user
											&& table.rows[j].cols[i].user === table.rows[j+2].cols[i].user
											&& table.rows[j].cols[i].user === table.rows[j+3].cols[i].user)
										{
											return true;
										}
									}
								}

								//TODO :)
								//diagonal check 
								return false;
							}


	}
})
