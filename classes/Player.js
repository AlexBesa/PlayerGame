class Player {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale *1;
        this.ySpeed = 0;
        this.color = "green";
        this.life = 10;
    }
    
    display() {
        //to fill the rectangle
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, scale, scale);
    }
    notOutsideGameContainer() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > gameContainer.width){
            this.x = 0;
        }else if (this.y > gameContainer.height){
            this.y = 0;
        }else if (this.x < 0){
            this.x = gameContainer.width;
        }else if (this.y < 0){
            this.y = gameContainer.height;
        }  
        // for game over
        // if (this.x > gameContainer.width || this.x < 0 || this.y<0 || this.y >gameContainer.width){
        //     alert("Game Over!");
        //     location.reload()
        //     clearInterval(this.display())
        // }
        
    }
    changeDirection(){
        document.addEventListener('keydown',((event)=>{
            // console.log(event.keyCode);
            const dir = event.key.replace('Arrow','');
            console.log(dir)
            switch(dir){
                case 'Up':
                    this.xSpeed = 0;
                    this.ySpeed = -scale * 1;
                    break;
                case 'Down':
                    this.xSpeed = 0;
                    this.ySpeed = scale * 1;
                    break;
                case 'Left':
                    this.xSpeed = -scale * 1;
                    this.ySpeed = 0;
                    break;
                case 'Right':
                    this.xSpeed = scale * 1;
                    this.ySpeed = 0;
                    break;
            }
        }));
    }
    meetObstacle(obstacle){  
        if(this.x === obstacle.x && this.y === obstacle.y){
            console.log("meeting happen")
            this.color = "red";     
            this.xSpeed=0;
            this.ySpeed=0;
            setTimeout( () => {   
                this.color = "green";    
            },1000)
            // this.x = this.xSpeed;
            // this.y = this.ySpeed;
            return true;
        }
        return false;
    }
    reduceLife(){
        this.life--;
        context.font='15px Arial';
        context.fillStyle = "black";
        context.fillText(`Life:${this.life}`,this.x,this.y-3,scale*10)
        console.log("life left is: ",this.life)
        if(this.life === 0){
            alert("Game Over!")
        }
    }
}
