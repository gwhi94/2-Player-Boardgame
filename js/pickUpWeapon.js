function pickUpWeapon(player,playerFunction,weapon,playerPos,damage,weaponName,playerOneselectedTile,playerTwoselectedTile){ //function to allow a player to pick up a weapon

	if  (playerOne.active == true){ //checks to see if player 1 is active
		$('.player1').css('background-color', '#d9d9d9');
		$("#" + playerOne.selectedTile).removeClass().addClass('player1'); //selects the tile the player wishes to move to and moves them there using remove and addClass() method.

	}else if (playerTwo.active == true){
			$('.player2').css('background-color', '#d9d9d9');
			$("#" + playerTwo.selectedTile).removeClass().addClass('player2');		
	}
		if (player.weapon == "Laser Rifle"){ //if the player currently holds the laser Rifle
			$("#" + player.position).removeClass().addClass('weapon1'); //select player position, remove them and add the laser rifle class, to 'drop' the weapon
			weapon1.weaponPosition = player.position; //updates the laser rifle position
		}else if (player.weapon == "Shotgun"){
			$("#" + player.position).removeClass().addClass('weapon2');	
			weapon2.weaponPosition = player.position; 	
		}else if (player.weapon == "Railgun"){
			$("#" + player.position).removeClass().addClass('weapon3');		
			weapon3.weaponPosition = player.position;	
		}else if (player.weapon == "Laser Pistol"){
			$("#" + player.position).removeClass().addClass('weapon4');
			weapon4.weaponPosition = player.position;
		}else if (player.weapon == "Revolver"){
			$("#" + player.position).removeClass().addClass('weapon5');
			weapon5.weaponPosition = player.position;
		}			
				player.position = player.selectedTile; //updates player position to moved tile
					player.maxGo--;	 //decrement max go
						setTimeout(playerFunction ,500);	//callback to player movement functions
							alert("You Picked up the "+ weaponName); //alerts player of new weapon
								player.weapon = weaponName; //updates the weapon
									player.damage = damage; //updates the damage
										
		if (playerOne.active == true){							

			document.getElementById("p1CurrentWeapon").innerHTML = playerOne.weapon;//prints the new weapon to the UI
			document.getElementById("p1CurrentDamage").innerHTML = playerOne.damage;//prints the new damage to the UI
					
		}else if (playerTwo.active == true){
		
			document.getElementById("p2CurrentWeapon").innerHTML = playerTwo.weapon;
			document.getElementById("p2CurrentDamage").innerHTML = playerTwo.damage;
		}									
}