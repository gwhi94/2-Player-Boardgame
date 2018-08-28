function endGame(){//function to handle when a player dies
	$("#instructions,#generate,#startGame,#player1Go,#player2Go,#endGo").attr("disabled", true).
	css("color", "red");//disables all buttons and sets them to red

	$("#endGamePanel").fadeIn();//fades in the end game info box

	$("#resetBtn").click(function(event){//if the reset game button is clicked then the game will reset
		event.stopPropagation();
		event.preventDefault();
		$("#endGamePanel").fadeOut();
		$("#statusBoxText").html("Game Status");
		$('.player1,.player2').css('background-color', '#d9d9d9');
		$(".wall").not("#wall2").addClass("box").removeClass("wall");	//removes all walls that are not exterior walls and adds box class
		$(".weapon1").addClass("box").removeClass("weapon1");//removes weapon 1
		$(".weapon2").addClass("box").removeClass("weapon2");//removes weapon 2
		$(".weapon3").addClass("box").removeClass("weapon3");//removes weapon 3
		$(".weapon4").addClass("box").removeClass("weapon4");//removes weapon 4
		$(".weapon5").addClass("box").removeClass("weapon5");//removes weapon 5
		$(".player1").addClass("box").removeClass("player1");//removes player 1
		$(".player2").addClass("box").removeClass("player2");//removes player 2


		playerOne.active = false;
		playerTwo.active = false;
		playerOne.health = 100; //setting health and weapons back to default
		playerOne.weapon = "Laser Pistol";
		playerOne.damage = 10;
		playerTwo.health = 100;
		playerTwo.weapon = "Revolver";
		playerTwo.damage = 10;


		//setting the player stats and information back to default
		$("#p1CurrentWeapon").html("Laser Pistol");
		$("#p1CurrentDamage").html("10");
		$("#p1CurrentHealth").html("100");
		$("#p2CurrentWeapon").html("Revolver");
		$("#p2CurrentDamage").html("10");
		$("#p2CurrentHealth").html("100");
		$("#playerOneInfo,#playerTwoInfo").css("background-color", "white");
		$(".fightButtons").show().attr("disabled",true);
		$("#instructions,#generate").removeAttr("disabled");

	});

}