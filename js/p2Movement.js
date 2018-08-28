function p2Movement(){//handles player 2 movement

	$("#player1Go").attr('disabled',true);
	$('.player2').css('background-color', '#00cc66');
	$("#player2Go").css("color", "green");
	$("#statusBoxText").html(playerTwo.name+"s Go");
	$("#playerTwoInfo").css("background-color", "#00cc66");

	playerTwo.active = true;

	if (playerTwo.maxGo == 0){
		playerTwo.active = false;
		playerOne.maxGo = 3;
		$('.player2').css('background-color', '#d9d9d9');
		setTimeout(function() {alert(playerOne.name+"s Go");},1000);
		$("#player2Go").attr("diasbled", true);
		$("#player1Go").removeAttr("disabled");
		$("#player2Go").css("color", "red");
		$("#playerTwoInfo").css("background-color", "#ffffff");
		playerMovement();
	}

	var p2AboveMove = $("#" + playerTwo.position).prevAll().eq(8); //finds tile above player 2
	var p2BelowMove = $("#" + playerTwo.position).nextAll().eq(8);//finds tile below player 2
	var p2LeftMove = $("#" + playerTwo.position).prev();//finds tile to left of player
	var p2RightMove = $("#" + playerTwo.position).next();//finds tile to right of player
	var wallMove = document.getElementsByClassName("wall");
	var p1Move = document.getElementsByClassName("player1");
	var p1AboveMoveFight = $(p1Move).prevAll().eq(8).attr('id'); //finds tile above player 1
	var p1BelowMoveFight = $(p1Move).nextAll().eq(8).attr('id');//finds tile below player 1
	var p1LeftMoveFight = $(p1Move).prev().attr('id');//finds tile to left of player 1
	var p1RightMoveFight = $(p1Move).next().attr('id');//finds tile to right of player 1
	weapon1.weaponMove = document.getElementsByClassName("weapon1");
	weapon2.weaponMove = document.getElementsByClassName("weapon2");
	weapon3.weaponMove = document.getElementsByClassName("weapon3");
	weapon4.weaponMove = document.getElementsByClassName("weapon4");
	weapon5.weaponMove = document.getElementsByClassName("weapon5");
	var weaponsArray = [$(weapon1.weaponMove).attr('class'),$(weapon2.weaponMove).attr('class'), 
						$(weapon3.weaponMove).attr('class'),$(weapon4.weaponMove).attr('class'),
						$(weapon5.weaponMove).attr('class')];

	$('game-board').ready(function(){
		$('div').off().on("click", function(event){
			playerTwo.selectedTile = ($(this).attr('id'));
				playerTwo.selectedTileClass = ($(this).attr('class'));
					event.stopPropagation();

			if ((playerTwo.maxGo > 0) && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) &&
					((playerTwo.selectedTileClass != $(wallMove).attr('class'))) &&												
						(!(weaponsArray.includes(playerTwo.selectedTileClass)))							
							&& ((playerTwo.selectedTileClass != $(p1Move).attr('class')))){
								$("#" + playerTwo.selectedTile).removeClass().addClass('player2');
									$('.player2').css('background-color', '#d9d9d9');
										$("#" + playerTwo.position).removeClass().addClass('box');
											playerTwo.position = playerTwo.selectedTile;
												playerTwo.maxGo--;
													setTimeout(p2Movement() ,2000);													
			
			}else if ((playerTwo.maxGo > 0)  && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))
				||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				 	||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))
					    ||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) && (playerTwo.selectedTileClass == $(weapon1.weaponMove).attr('class'))){

							pickUpWeapon(playerTwo,p2Movement,weapon1.weaponPosition,playerTwo.position,15,"Laser Rifle",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerTwo.maxGo > 0)  && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))
				||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				 	||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))
					    ||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) && (playerTwo.selectedTileClass == $(weapon2.weaponMove).attr('class'))){

							pickUpWeapon(playerTwo,p2Movement,weapon2.weaponPosition,playerTwo.position,17,"Shotgun",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerTwo.maxGo > 0)  && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))
				||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				 	||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))
					    ||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) && (playerTwo.selectedTileClass == $(weapon3.weaponMove).attr('class'))){

							pickUpWeapon(playerTwo,p2Movement,weapon3.weaponPosition,playerTwo.position,30,"Railgun",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerTwo.maxGo > 0)  && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))
				||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				 	||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))
					    ||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) && (playerTwo.selectedTileClass == $(weapon4.weaponMove).attr('class'))){

							pickUpWeapon(playerTwo,p2Movement,weapon4.weaponPosition,playerTwo.position,10,"Laser Pistol",playerOne.selectedTile,playerTwo.selectedTile);

			}else if ((playerTwo.maxGo > 0)  && ((((playerTwo.selectedTile == $(p2BelowMove).attr('id')))
				||((playerTwo.selectedTile == $(p2AboveMove).attr('id')))
				 	||((playerTwo.selectedTile == $(p2LeftMove).attr('id')))
					    ||((playerTwo.selectedTile == $(p2RightMove).attr('id'))))) && (playerTwo.selectedTileClass == $(weapon5.weaponMove).attr('class'))){

							pickUpWeapon(playerTwo,p2Movement,weapon5.weaponPosition,playerTwo.position,10,"Revolver",playerOne.selectedTile,playerTwo.selectedTile);
			}

			if ((playerTwo.position==p1AboveMoveFight) || (playerTwo.position==p1BelowMoveFight) || (playerTwo.position==p1LeftMoveFight)
					|| (playerTwo.position==p1RightMoveFight)){
						playerTwo.maxGo = 0;
							$("#statusBoxText").html("FIGHT!!");
								setTimeout(fight() ,1000);	//calls the fight() when player 1's position is adjacent to player 2
			}

		});
	});
	}