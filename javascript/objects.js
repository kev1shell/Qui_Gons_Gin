
//objects (their like classes) (I think)

//Unit object
var Unit = Object.create(null);
Unit.type = "n/a";
Unit.row = 0;
Unit.column = 0;
Unit.color = "n/a";
Unit.imageLocation = "loc";
Unit.health = 0;
Unit.defense = 0;
Unit.attack = 0;
Unit.maxMovementPoints = 0;
Unit.movementPoints = 0;

//Structure object
var Structure = Object.create(null);
Structure.type = "n/a";
Structure.row = 0;
Structure.column = 0;
Unit.color = "n/a";

//Bank object
var Bank = Object.create(null);
Bank.food = 0;
Bank.timber = 0;
Bank.stone = 0;
Bank.foodRate = 0;
Bank.timberRate = 0;
Bank.stoneRate = 0;

//Player object
var Player = Object.create(null);
Player.name = "n/a";
Player.color = "n/a";
Player.bank = Bank;
Player.numFarms = 0;
Player.numVillages = 0;
Player.numVillagers = 0;
Player.numWarriors = 0;
Player.units = [];
Player.structures = [];

/*
//Game object
var Game = Object.create(null);
Game.players = [];
Game.allowCheats = false;
*/

