# Project 5 - Build a turn-based board game in JavaScript
### OpenClassrooms 

 **1** - Generate a random game map with walls <br/>
 **2** - Randomly spawn weapons on the map to be picked up <br/>
 **3** - Randomly place the 2 players on the map <br/>
 **4** - Allow players to move and pick up weapons <br/>
 **5** - Allow players to fight each other until ones health drops below 0 <br/> 
 **6** - Present over video call to simulate real life conditions
 <br/>
 ### Skills Developed
 * JavaScript
 * jQuery
 * CSS Grid
 * HTML
 
 ### Setup
 
 ```
 open index.html
 
 ```
 
 ![game](https://user-images.githubusercontent.com/40371755/47440841-ea491080-d7a6-11e8-85ec-bba0226a2e2a.png)
<br/>
### Game can be played here:
<br/>
https://gwhi94.github.io/spaceforce.github.io/
<br/>

### Example Code
 
 ```JavaScript
 if (playerOne.active == true && playerTwo.active == false){ //checks to see which player is active

		$('#p1AttackButton,#p1DefendButton').prop("disabled", false);
    //enables attack and defend buttons
		$("#playerOneInfo").css("background-color", "#00cc66");
    //sets green background color to player 1

		$("#p1AttackButton").off().on('click' ,function(event){
    //listens for attack button clicked, one method to ensure only called once per click
			event.stopPropagation();
			event.preventDefault();
		$('#p1DefendButton').prop("disabled", true);//disables the defend button
		$('#p1AttackButton').prop("disabled", true);
			var p1AttackDamage = Math.floor(Math.random() * playerOne.damage);
      //calculates attack damage by multiplying the players current weapon damage with a random integer, to prevent linear attack             damages, can be zero
			if (playerTwo.defend == true){
      //IF player 2 defended on the previous round then the attack damage calculated will be halved
				p1AttackDamage = Math.floor(p1AttackDamage/2);
				playerTwo.defend = false;
			}
    
    
    
   
   
 
