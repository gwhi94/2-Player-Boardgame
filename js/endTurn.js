function endTurn(){//function to handle if a player ends a go early
	 if(playerOne.active == true){
	 	playerOne.maxGo = 0; //sets players max go to zero and passes control over the other player
	 		$("#player1Go").attr("disabled",true);
	 			playerMovement();
	 }else if(playerTwo.active == true){
	 	playerTwo.maxGo = 0;
	 		$("#player2Go").attr("disabled",true);
	 			p2Movement();
	 }

}
