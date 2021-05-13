const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form, player, game;

var virus,secretAgent,Innocent1,Innocent2,Innocent3;
var knife,vaccine;

function preload()
{
Knife_Img=loadImage("images/knife.png");
Cure_Img=loadImage("images/cure.jpg")
}

function setup() {
	createCanvas(1500,900);
	
	game = new Game();
	game.getState();
	game.start();

	database = firebase.database();	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}
  
  function draw(){


   if(playerCount === 5){
	  game.update(1);
	}
	if(gameState === 1){
	  clear();
	  game.play();
	}
	if(gameState === 2){
	  game.end();
	}
  }
  


