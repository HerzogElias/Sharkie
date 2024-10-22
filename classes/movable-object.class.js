class MovableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit=0;

   

    isColiding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit= new Date().getTime();
        }
    }

    isHurt(){
        let timepassed = new Date().getTime()-this.lastHit;
        timepassed=timepassed/1000;
        return timepassed<2;
    }

    isDeat(){
        return this.energy ==0; 
    }
    
    moveleft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(imeges) {
        let i = this.currentImage %imeges.length;
        let path = imeges[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
} 