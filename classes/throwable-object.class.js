class ThrowableObject extends MovableObject {
    width = 30;
    height = 30;
    bubbleSpeedY = 15;
    gravity = 0.5;

    constructor(){
        super();
        this.width = 200;
        this.height = 60;
        this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
      this.throwBubble(x,y);
    }
    
    throwBubble(x,y) {
        let bubbleX = x.x + x.width;
        this.bubbleY = y.y + y.height * 0.5;

        setInterval(() => {
            this.bubbleY -= this.bubbleSpeedY;
            this.bubbleSpeedY -= this.gravity;
            if (this.bubbleSpeedY < -5) {
                this.bubbleSpeedY = -5;
            }
        }, 1000 / 60);
    }
    }