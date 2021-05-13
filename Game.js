class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    if(gameState === 1){
      random(1,5);

	  if(random===5){
	  player=Virus;
    }

    if(random===2){
    player=Agent;
    }

  	if(random===1||random===3||random===4){
    player=Innocent;
  	}
   
    }

  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    
  
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
