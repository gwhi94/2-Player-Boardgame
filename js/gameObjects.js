
function weapons(weaponPosition,weaponMove){ //objects for the weapons in the game and their positions

	this.weaponPosition = weaponPosition;
	this.weaponMove = weaponMove;
}
	var weapon1 = new weapons();
	var weapon2 = new weapons();
	var weapon3 = new weapons();
	var weapon4 = new weapons();
	var weapon5 = new weapons();

function player(name,health,weapon,damage,maxGo,defend,active,position,selectedTile,selectedTileClass){ //creating the player Object
	this.name= name;
	this.health = health;
	this.weapon = weapon;
	this.damage = damage;
	this.maxGo = maxGo;
	this.defend = defend;
	this.active = active;
	this.position = position;
	this.selectedTile= selectedTile;
	this.selectedTileClass = selectedTileClass;
}

	var playerOne = new player("", 100,"Laser Pistol",10,3,false,false);//setting the default values and weapons for both players
	var playerTwo = new player("", 100,"Revolver",10,3,false,false);














