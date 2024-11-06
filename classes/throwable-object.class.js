class ThrowableObject extends MovableObject {
    width = 30;
    height = 30;
    bubbleSpeedY = 15;
    gravity = 0.5;
    SpeedY = 0;
    acceleration = 2;

    constructor(x, y) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;
        this.throw(x, y);
    }

    throw(x, y) {
        this.x = x;
        this.y = y;
        this.SpeedY = -15; // GEÄNDERT: Startwert für SpeedY, um die Bubble nach oben zu werfen
        this.applyGravityY();
        this.applyGravityX();
    }

    applyGravityX() {
        setInterval(() => {
            this.x += 5; // Bewegt die Bubble nach rechts
        }, 25);
    }

    applyGravityY() {
        setInterval(() => {
            // GEÄNDERT: y-Position mit SpeedY addieren, um die Bewegung zu simulieren
            this.y += this.SpeedY;
            
            // GEÄNDERT: Schwerkraft anwenden, SpeedY erhöhen
            if (this.y >= 420) { // Beispiel-Bodenwert
                this.SpeedY = 0; // Stoppt die Bewegung, wenn der Boden erreicht wird
            } else {
                this.SpeedY += this.gravity; // GEÄNDERT: Schwerkraft hinzufügen
            }
        }, 1000 / 25);
    }
}

    /*
    constructor(){
        super();
        this.world=world;
        this.width = 200;
        this.height = 60;
        this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.throwBubble(x,y);
       
    }
    
    throwBubble(x,y) {
        console.log('Tetschen');
        let bubbleX = x.x + x.width;
        this.bubbleY = y.y + y.height * 0.5;
        
        setInterval(() => {
            this.bubbleY -= this.bubbleSpeedY;
            this.bubbleSpeedY -= this.gravity;
            if (this.bubbleSpeedY < -5) {
                this.bubbleSpeedY = -5;
            }
        }, 1000 / 60);
}*/