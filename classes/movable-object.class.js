class MovableObject {
    x = 50;
    y = 250;
    img;
    height = 200;
    width = 150;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit=0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawBorder(ctx) {
        if (this instanceof Charackter || this instanceof Pufferfish || this instanceof JellyFish) {
            ctx.beginPath();
            ctx.lineWidth = '5'
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

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
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
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