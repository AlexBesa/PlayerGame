class Obstacle {
    constructor(){
        this.x;
        this.y;
        // this.body = [
        //     {
        //         x: this.x,
        //         y: this.y,
        //     },
        //     {
        //         x: this.x,
        //         y: this.y,
        //     },
        //     {
        //         x: this.x,
        //         y: this.y,
        //     }
        // ]; 
    }
    divObstacle(){
        context.fillStyle="yellow";
        context.fillRect(this.x,this.y,scale,scale);
    }
    setLocation(){
        this.x = (Math.floor(Math.random()* rows)) *scale;
        this.y = (Math.floor(Math.random()* columns)) *scale;
    } 
    // createObstacles(){
    //     for(let i=0;i < 3;i++){
    //         var obX = (Math.floor(Math.random()* rows)) *scale;
    //         var obY = (Math.floor(Math.random()* columns)) *scale;
    //         this.body.push({"x":obX,"y":obY});
    //     }  
    // }     
}
