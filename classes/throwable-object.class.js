class ThrowableObject extends MovableObject {
    width = 30;
    height = 30;
    bubbleSpeedY = 15;
    gravity = 0.5;
    SpeedY = 0;
    acceleration = 2;

    constructor(x, y,otherDirection) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.otherDirection=otherDirection;
        this.throw(x, y);
        
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.SpeedY = -15;
        this.applyGravityY();
        this.applyGravityX();
    }

    applyGravityX() {
        setInterval(() => {
            if(this.otherDirection){
                this.x -=5;
            } else {
                this.x += 5;
            }
        }, 25);
    }

    applyGravityY() {
        setInterval(() => {
            this.y += this.SpeedY;
            if (this.otherDirection) {
                this.SpeedY -= this.gravity; 
            } else {
                this.SpeedY += this.gravity; 
            }

            if (this.y >= 420) {
                this.SpeedY = 0;
            }
        }, 1000 / 25);
    }
}
