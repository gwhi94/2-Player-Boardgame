function genMap(){   //randomly places walls, weapons and players on the map.

       //placing the walls on the map, using wall spawn zones to prevent spawn trapping and spreading the walls
       //more evenly and allowing for better game balance.
       var walls; //variable for walls

       for (i = 0; i < 1; i++){
       		var $wallSelectSpawnZone1 = $("#box1_1,#box1_2,#box2_1,#box2_2,#box1_3,#box2_4"); //defines wall spawn zones using jquery
       		walls = ($wallSelectSpawnZone1.eq(Math.floor(Math.random() * ($wallSelectSpawnZone1.length - 1))).attr('id')); //selecting the spawn zone then picking a random tile
       		$("#" + walls).addClass('wall').removeClass('box'); //adding wall to that random tile
            var $wallSelectSpawnZone2 = $("#box1_4,#box2_4,#box1_5,#box2_5,#box1_6,#box2_6,#box1_7,#box2_7");
       		walls = ($wallSelectSpawnZone2.eq(Math.floor(Math.random() * ($wallSelectSpawnZone2.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');      
       		var $wallSelectSpawnZone3 = $("#box3_1,#box3_2,#box3_3,#box4_1,#box4_2,#box4_3,#box5_1,#box5_2,#box5_3");
      		walls = ($wallSelectSpawnZone3.eq(Math.floor(Math.random() * ($wallSelectSpawnZone3.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');      
      		var $wallSelectSpawnZone4 = $("#box3_4,#box3_5,#box4_4,#box4_5,#box5_4,#box5_5");
       		walls = ($wallSelectSpawnZone4.eq(Math.floor(Math.random() * ($wallSelectSpawnZone4.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');      
       		var $wallSelectSpawnZone5 = $("#box3_6,#box3_7,#box4_6,#box4_7,#box5_6,#box5_7");
       		walls = ($wallSelectSpawnZone5.eq(Math.floor(Math.random() * ($wallSelectSpawnZone5.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');      
       		var $wallSelectSpawnZone6 = $("#box6_1,#box6_2,#box6_3,#box7_1,#box7_2,#box7_3");
       		walls = ($wallSelectSpawnZone6.eq(Math.floor(Math.random() * ($wallSelectSpawnZone6.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');      
       		var $wallSelectSpawnZone7 = $("#box6_4,#box7_4,#box6_5,#box6_6,#box6_7,#box7_5,#box7_6,#box7_7");
      		walls = ($wallSelectSpawnZone7.eq(Math.floor(Math.random() * ($wallSelectSpawnZone7.length - 1))).attr('id'));
       		$("#" + walls).addClass('wall').removeClass('box');
       		}

       //placing weapons on the map//loops through available box tiles and places//again using spawn zones to assist in game balance
       for (i = 0; i < 1; i++){
       		var $weapon1SpawnZone = $(".box").slice(0,20);//assigns empty boxes as variable again, using spawn zones for game balance, using slice method to get selection of tiles
       		weapon1.weaponPosition = ($weapon1SpawnZone.eq(Math.floor(Math.random()*($weapon1SpawnZone.length - 1))).attr("id"));//selects random boxes
       		$("#" + weapon1.weaponPosition).addClass('weapon1').removeClass('box');//adds weapons to the empty boxes     
       		var $weapon2SpawnZone = $(".box").slice(28,48);
       		weapon2.weaponPosition = ($weapon2SpawnZone.eq(Math.floor(Math.random()*($weapon2SpawnZone.length - 1))).attr("id"));
       		$("#" + weapon2.weaponPosition).addClass('weapon2').removeClass('box');      
       		var $weapon3SpawnZone = $(".box").slice(21,28);
       		weapon3.weaponPosition = ($weapon3SpawnZone.eq(Math.floor(Math.random()*($weapon3SpawnZone.length - 1))).attr("id"));
       		$("#" + weapon3.weaponPosition).addClass('weapon3').removeClass('box');
       		}

       //placing the players on the map
      
       		for (var i = 0; i < 1; i++){
       		var $player1SpawnZone = $(".box").slice(0,19);//defines the spawn zone to prevent players spawing next to eachtoher using slice method again
       		playerOne.position = ($player1SpawnZone.eq(Math.floor(Math.random()*($player1SpawnZone.length - 1))).attr("id"));
       		$("#" + playerOne.position).addClass('player1').removeClass('box');
       		var $player2SpawnZone = $(".box").slice(28,48);      		
       		playerTwo.position = ($player2SpawnZone.eq(Math.floor(Math.random()*($player2SpawnZone.length - 1))).attr("id"));
       		$("#" + playerTwo.position).addClass('player2').removeClass('box');
       		}

       		var playerOneName = prompt("Player One Enter a Name, 7 characters or less"); //taking user input for player names
       		var playerTwoName = prompt("Player Two Enter a Name, 7 characters or less");
       		playerOne.name = playerOneName; //updating player object with new names
       		playerTwo.name = playerTwoName;

       		if (playerOne.name.length > 7){ //if either players name is too long for the input box, then shorten to 3 characters to prevent undesirable visual effects
       			playerOne.name = playerOne.name[0]+playerOne.name[1]+playerOne.name[2];
       		}
        	if (playerTwo.name.length > 7){
       			playerTwo.name = playerTwo.name[0]+playerTwo.name[1]+playerTwo.name[2];
       		}

       		$("#p1Indicator").html(playerOne.name); //updating the UI with the new names
       		$("#p2Indicator").html(playerTwo.name);

       		$("#startGame").removeAttr("disabled");//enables start game button once map has been created
       		}