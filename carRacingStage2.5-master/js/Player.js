class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }
//get playercount from database
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//update the count as per the game
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//update the player information
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//read the # of cars at the end
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value", (data) =>{
      this.rank = data.val()
    })
  }
  //update the # of cars at the end
    static updateCarsAtEnd(rank){
database.ref('/').update({
  CarsAtEnd:rank
})
    }
 //get the player information 
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
