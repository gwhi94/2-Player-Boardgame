function playerMovement(){//function to handle movement of player 1

	$("#player2Go").attr('disabled',true);
	$('.player1').css('background-color', '#00cc66');
	$("#startGame").attr("disabled", true);
	$("#endGo").removeAttr("disabled");//enables the end go button
	$("#statusBoxText").html(playerOne.name + "s Go");//prints to the game status box that its player 1's go
	$("#player1Go").css("color", "green");//player ones button turns green
	$("#playerOneInfo").css("background-color", "#00cc66");


	playerOne.active = true; //sets active player to player 1

	if (playerOne.maxGo == 0){ //if statement to handle the end of player 1's go
		playerOne.active = false; //stes player 1 to inactive
		playerTwo.maxGo = 3; //resets player 2's max go
		$('.player1').css('background-color', '#d9d9d9');
		setTimeout(function(){alert(playerTwo.name +"s Go");},1000); //slight delay to let the player know their go is coming up
		$("#player1Go").attr("diasbled", true);
		$("#player2Go").removeAttr("disabled");
		$("#player1Go").css("color", "red");
		$("#playerOneInfo").css("background-color", "#ffffff");
		p2Movement();
	}

	//setting variables for possible moves the player can make
	var p1AboveMove = $("#" + playerOne.position).prevAll().eq(8); //finds tile above player 1
	var p1BelowMove = $("#" + playerOne.position).nextAll().eq(8);//finds tile below player 1
	var p1LeftMove = $("#" + playerOne.position).prev();//finds tile to left of player
	var p1RightMove = $("#" + playerOne.position).next();//finds tile to right of player
	var wallMove = document.getElementsByClassName("wall");//finds walls
	var p2Move = document.getElementsByClassName("player2");//finds the other player
	var p2AboveMoveFight = $(p2Move).prevAll().eq(8).attr('id'); //finds tile above player 2 for triggering fights
	var p2BelowMoveFight = $(p2Move).nextAll().eq(8).attr('id');//finds tile below player 2
	var p2LeftMoveFight = $(p2Move).prev().attr('id');//finds tile to left of player uses ID to match to player 1's ID
	var p2RightMoveFight = $(p2Move).next().attr('id');//finds tile to right of player 2	
	weapon1.weaponMove = document.getElementsByClassName("weapon1");//finds weapon 1
	weapon2.weaponMove = document.getElementsByClassName("weapon2");//finds weapon 2
	weapon3.weaponMove = document.getElementsByClassName("weapon3"); //finds weapon 3
	weapon4.weaponMove = document.getElementsByClassName("weapon4"); //finds weapon 4
	weapon5.weaponMove = document.getElementsByClassName("weapon5"); //finds weapon 4	
	var weaponsArray = [$(weapon1.weaponMove).attr('class'),$(weapon2.weaponMove).attr('class'), //array to group together weapon positions
						$(weapon3.weaponMove).attr('class'),$(weapon4.weaponMove).attr('class'),
						$(weapon5.weaponMove).attr('class')];
	

	$('game-board').ready(function(){ //listens for tile clicked on
		$('div').off().on("click", function(event){	//using .off() and on method here to prevent click being 'heard' more than once
			playerOne.selectedTile = ($(this).attr('id')); //pulls clicked tiles based on id
				playerOne.selectedTileClass = ($(this).attr('class'));//pulls clicked tiles based on class
					event.stopPropagation();//stops bubbling from the click listener

			//if statement to check if tile selected is above, below, left or right of player and is not a wall
			//if selected tile is tile below and not wall
			if ((playerOne.maxGo > 0) && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))||
				((playerOne.selectedTile == $(p1AboveMove).attr('id')))||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && ((playerOne.selectedTileClass != $(wallMove).attr('class'))) && 							
						(!(weaponsArray.includes(playerOne.selectedTileClass)))								
							&& ((playerOne.selectedTileClass != $(p2Move).attr('class')))){								
								$("#" + playerOne.selectedTile).removeClass().addClass('player1');//removes the box class and adds the player1 class
									$('.player1').css('background-color', '#d9d9d9');
										$("#" + playerOne.position).removeClass().addClass('box');//removes the player 1 class from prev box and adds box class
											playerOne.position = playerOne.selectedTile;//updates player 1 position
												playerOne.maxGo--; //decrements player 1's max go by 1
													setTimeout(playerMovement() ,2000);	//re calls movement function after 2 second delay

			//checking for weapon tiles
			}else if ((playerOne.maxGo > 0)  && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))
				||((playerOne.selectedTile == $(p1AboveMove).attr('id')))
				 	||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					   ||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && (playerOne.selectedTileClass == $(weapon1.weaponMove).attr('class'))){ 	//if statement to check if player has picked up weapon 1

							pickUpWeapon(playerOne,playerMovement,weapon1.weaponPosition,playerOne.position,15,"Laser Rifle",playerOne.selectedTile,playerTwo.selectedTile); //passes the weapon, player position, damage of new weapon, name and the selected tiles
																										                                            						// to the pickUpWeapon() as arguments
			}else if ((playerOne.maxGo > 0)  && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))
				||((playerOne.selectedTile == $(p1AboveMove).attr('id')))
				 	||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					    ||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && (playerOne.selectedTileClass == $(weapon2.weaponMove).attr('class'))){

							pickUpWeapon(playerOne,playerMovement,weapon2.weaponPosition,playerOne.position,17,"Shotgun",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerOne.maxGo > 0)  && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))
				||((playerOne.selectedTile == $(p1AboveMove).attr('id')))
				 	||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					    ||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && (playerOne.selectedTileClass == $(weapon3.weaponMove).attr('class'))){

							pickUpWeapon(playerOne,playerMovement,weapon3.weaponPosition,playerOne.position,30,"Railgun",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerOne.maxGo > 0)  && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))
				||((playerOne.selectedTile == $(p1AboveMove).attr('id')))
				 	||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					    ||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && (playerOne.selectedTileClass == $(weapon4.weaponMove).attr('class'))){

							pickUpWeapon(playerOne,playerMovement,weapon4.weaponPosition,playerOne.position,10,"Laser Pistol",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerOne.maxGo > 0)  && ((((playerOne.selectedTile == $(p1BelowMove).attr('id')))
				||((playerOne.selectedTile == $(p1AboveMove).attr('id')))
				 	||((playerOne.selectedTile == $(p1LeftMove).attr('id')))
					    ||((playerOne.selectedTile == $(p1RightMove).attr('id'))))) && (playerOne.selectedTileClass == $(weapon5.weaponMove).attr('class'))){

							pickUpWeapon(playerOne,playerMovement,weapon5.weaponPosition,playerOne.position,10,"Revolver",playerOne.selectedTile,playerTwo.selectedTile);

			}

			if ((playerOne.position==p2AboveMoveFight) || (playerOne.position==p2BelowMoveFight) || (playerOne.position==p2LeftMoveFight) ||
			 		(playerOne.position==p2RightMoveFight)){
						playerOne.maxGo = 0;
							$("#statusBoxText").html("FIGHT!!");
								setTimeout(fight() ,1000);	//calls the fight() when player 1's position is adjacent to player 2
			}

		});
	});

	}