
//objects (they're like classes) (I think)

//test class
var Animal = function()
{
	this.type = "";
	this.name = "";
	this.age = 0;
	this.changeName = changeName;
	function changeName(newName)
	{
		this.name = newName;
	}
}

//Tile object
var Tile = function()
{
	this.type = "n/a";
	this.stack = [];
	
}

//Unit object
var Unit = function()
{
	this.id = Math.floor(Math.random()*1000000000);
	this.type = "n/a";
	this.row = 0;
	this.column = 0;
	this.color = "n/a";
	this.image = null;
	this.health = 0;
	this.maxHealth = 0;
	this.defense = 0;
	this.attack = 0;
	this.maxMovementPoints = 0;
	this.movementPoints = 0;
	this.shape = null;			//Unit's Easeljs graphics object
	this.move = move;
	
	function move(stage, map, newRow, newColumn)
	{
		if(this.movementPoints > 0)
		{
			//remove self from old tile's stack
			for(var i = 0 ; i < map[this.row][this.column].stack.length; i++)
			{
				//look for this unit in the tile's stack
				if(map[this.row][this.column].stack[i].id == this.id)
				{
					//found unit
					//remove the unit from the stack
					map[this.row][this.column].stack.splice(i,1);
				}
			}
			
			//add self to new tile's stack
			map[newRow][newColumn].stack.push(this);
			
			
			this.row = newRow;
			this.column = newColumn;
			this.movementPoints--;
			
			this.shape.x = 4 + 24*this.column;
			this.shape.y = 54 + 24*this.row; 
			
			stage.update();
		}
	}
	this.displayInfo = displayInfo;
	function displayInfo(stage)
	{
		infoText = this.type+":";
		stage.getChildByName("IEtext").text = this.type+":";
		
		//line 1
		if(stage.getChildByName("infoLine1") == null)
		{
			var infoLine1 = new createjs.Text("MP: "+this.movementPoints+"/"+this.maxMovementPoints, "bold 10px Arial", "black");
			infoLine1.x = 15 + stage.getChildByName("IEtext").x + stage.getChildByName("IEtext").getMeasuredWidth();
			infoLine1.y = 3;
			infoLine1.name = "infoLine1";
			stage.addChild(infoLine1);
		}
		else
		{
			var infoLine1 = stage.getChildByName("infoLine1");
			infoLine1.text = "MP: "+this.movementPoints+"/"+this.maxMovementPoints;
		}
		
		
		stage.update();
		
	}

}

//Structure object
var Structure = function()
{
	this.type = "n/a";
	this.row = 0;
	this.column = 0;
	this.color = "n/a";
	this.shape = null;		//Structure's Easeljs graphics object
	this.displayInfo = displayInfo;
	function displayInfo(stage)
	{
		infoText = this.type+":";
		stage.getChildByName("IEtext").text = this.type+":";
		
		stage.update()
		
	}
}

//Bank object
var Bank = function()
{
	this.food = 0;
	this.timber = 0;
	this.stone = 0;
	this.foodRate = 0;
	this.timberRate = 0;
	this.stoneRate = 0;
}

//Player object
var Player = function()
{
	this.id = Math.floor(Math.random()*1000000000);
	this.name = "n/a";
	this.color = "n/a";
	this.bank = new Bank();
	this.numFarms = 0;
	this.numVillages = 0;
	this.numVillagers = 0;
	this.numWarriors = 0;
	this.units = [];
	this.structures = [];
	this.createUnit = createUnit;
	function createUnit(stage, map, unitType, row, column)
	{
		if(unitType == "villager")
		{
			createVillager(stage, map, this, row, column);
		}
	}
	function createVillager(stage, map, player, row, column)
	{	
		var villager = new Unit();
		villager.type = "villager";
		villager.row = row;
		villager.column = column;
		villager.color = player.color;
		//villager image Location = "http://students.cse.tamu.edu/tjb33/assets/sprites/units/blue/Villager_1_blue.png";
		villager.health = 1;
		villager.maxHealth = 1;
		villager.defense = 0;
		villager.attack = 0;
		villager.maxMovementPoints = 4;
		villager.movementPoints = villager.maxMovementPoints;
		
		villager.image = new Image();
		villager.image.src = "http://students.cse.tamu.edu/tjb33/assets/sprites/units/blue/Villager_1_blue.png";
		villager.image.onload = 	function()
							{
								villager.shape = new createjs.Bitmap(this);
								villager.shape.x = 4 + 24*villager.column;
								villager.shape.y = 54 + 24*villager.row;
								villager.shape.name = "TIMMAH!";
								stage.addChild(villager.shape);
								
								stage.update();
							}
		
		
		player.units.push(villager);
		map[row][column].stack.push(villager);
	}
}

//Game object
var Game = function()
{
this.players = [];
this.map = [];
this.nurnNum = 0;
}

