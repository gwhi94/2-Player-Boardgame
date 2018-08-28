function fight(){

	$("#player1Go").attr("disabled", true);
	$("#player2Go").attr("disabled", true);
	$(".player1,.player2").css("background-color","red");


	if (playerOne.active == true && playerTwo.active == false){ //checks to see which player is active

		$('#p1AttackButton,#p1DefendButton').prop("disabled", false);//enables attack and defend buttons
		$("#playerOneInfo").css("background-color", "#00cc66");//sets green background color to player 1

		$("#p1AttackButton").off().on('click' ,function(event){//listens for attack button clicked, one method to ensure only called once per click
			event.stopPropagation();
			event.preventDefault();
		$('#p1DefendButton').prop("disabled", true);//disables the defend button
		$('#p1AttackButton').prop("disabled", true);
			var p1AttackDamage = Math.floor(Math.random() * playerOne.damage);//calculates attack damage by multiplying the players current weapon damage with a random integer, to prevent linear attack damages, can be zero
			if (playerTwo.defend == true){//IF player 2 defended on the previous round then the attack damage calculated will be halved
				p1AttackDamage = Math.floor(p1AttackDamage/2);
				playerTwo.defend = false;
			}

		$('#statusBoxText').html(playerOne.name+ " did "+p1AttackDamage+ ' damage');//updates game stat box with damage dealt	              	
		$("#playerOneInfo").css('background-color', '#ffffff');	//changes player 1's background color back to white
			playerTwo.health = playerTwo.health - p1AttackDamage;//modifies player 2's health
		$('#p2CurrentHealth').html(playerTwo.health);	//displays player 1's new health

			if (playerTwo.health <= 0){//if statement to handle if player 2 dies
				$('.fightButtons').hide();
				$("#statusBoxText").html(playerTwo.name+ " has Died");
				$("#p2CurrentWeapon,#p2CurrentHealth,#p2CurrentDamage").html("Loser");
				$("#p1CurrentWeapon,#p1CurrentHealth,#p1CurrentDamage").html("Winner");
				endGame();//calls the endGame()
			}

			playerOne.active = false;
			playerTwo.active = true;
			fight();

		});

		if($("#p1DefendButton").off().on('click', function(event){//handler to listen for player 1 clicking defend instead of fight
				event.preventDefault();
				event.stopPropagation();
			$("#statusBoxText").html(playerOne.name + " Defended");
			$('#p1DefendButton').prop("disabled", true);
			$('#p1AttackButton').prop("disabled", true);
			$("#playerOneInfo").css('background-color', '#ffffff');
				playerOne.defend = true;
				playerOne.active = false;
				playerTwo.active = true;
				fight();//if defend is clicked, it sets playerOne.defend to true and passes back to player 2

		}));

	}else if(playerTwo.active == true && playerOne.active == false){

		$('#p2AttackButton,#p2DefendButton').prop("disabled", false);
		$("#playerTwoInfo").css("background-color", "#00cc66");
		$("#p2AttackButton").off().on('click' ,function(event){
			event.stopPropagation();
			event.preventDefault();
		$('#p2DefendButton').prop("disabled", true);
		$('#p2AttackButton').prop("disabled", true);
			var p2AttackDamage = Math.floor(Math.random() * playerTwo.damage);

			if (playerOne.defend == true){
				p2AttackDamage = Math.floor(p2AttackDamage/2);
				playerOne.defend = false;
			}

		$('#statusBoxText').html(playerTwo.name+" did "+p2AttackDamage+ ' damage');				 		              																										
		$('#playerTwoInfo').css('background-color', '#ffffff');
			playerOne.health = playerOne.health - p2AttackDamage;
		$('#p1CurrentHealth').html(playerOne.health);

		if (playerOne.health <= 0){
				$('.fightButtons').hide();
				$("#statusBoxText").html(playerOne.name+" has Died");
				$("#p1CurrentWeapon,#p1CurrentHealth,#p1CurrentDamage").html("Loser");
				$("#p2CurrentWeapon,#p2CurrentHealth,#p2CurrentDamage").html("Winner");
				endGame();
			}

			playerTwo.active = false;
			playerOne.active = true;
			fight();

		});

		if($("#p2DefendButton").off().on('click', function(event){
				event.stopPropagation();
				event.preventDefault();
			$("#statusBoxText").html(playerTwo.name+ " Defended");
			$('#p2DefendButton').prop("disabled", true);
			$('#p2AttackButton').prop("disabled", true);
			$("#playerTwoInfo").css('background-color', '#ffffff');
				playerTwo.defend = true;
				playerTwo.active = false;
				playerOne.active = true;
				fight();
		}));
	}
}
