class Game {
    constructor(containerMap) {
      this.containerMap = containerMap;
    }
    startApp(){
        let player = new Player();
        let obstacle1 = new Obstacle();
        let obstacle2 = new Obstacle();
        let obstacle3 = new Obstacle();
        let obstacle4 = new Obstacle();
        // console.log("*********",obstacle1)
        obstacle1.setLocation();
        obstacle2.setLocation();
        obstacle3.setLocation();
        obstacle4.setLocation();
    
        window.setInterval(()=>{
            context.clearRect(0,0,gameContainer.width,gameContainer.height);
            player.notOutsideGameContainer();

            obstacle1.divObstacle();
            obstacle2.divObstacle();
            obstacle3.divObstacle();
            obstacle4.divObstacle();

            player.display();
            
            if(player.meetObstacle(obstacle1)){
                player.reduceLife();
                obstacle1.setLocation();  
            }
            if(player.meetObstacle(obstacle2)){
                player.reduceLife();
                obstacle2.setLocation();  
            }
            if(player.meetObstacle(obstacle3)){
                player.reduceLife();
                obstacle3.setLocation();  
            }
            if(player.meetObstacle(obstacle4)){
                player.reduceLife();
                obstacle4.setLocation();  
            }
        },200);
        player.changeDirection();       
    }
}

// let obstacle1 = new Obstacle(
//     {
//         x:this.x,
//         y:this.y
//     },
//     {
//         x:this.x,
//         y:this.y
//     },
//     {
//         x:this.x,
//         y:this.y
//     },
// );