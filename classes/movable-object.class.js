class MovableObject {
    x = 50;
    y = 250;
    img;
    height=200;
    width=150;
    imageCache ={};
    currentImage=0; 
    speed=0.15;
    otherDirection = false;

    loadImage(path) {
        this.img = new Image();
        this.img.src= path;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawBorder(ctx){
        ctx.beginPath();
        ctx.lineWidth ='5'
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    
    loadImages(arr){
        arr.forEach(path => {
            let img= new Image();
            img.src=path;
            this.imageCache[path]=img;
        });
    }
    moveright() {
        console.log('moving right');
    }
    
    moveleft(){
        setInterval(() => { 
            this.x -=this.speed;
        }, 1000 / 60);
    }
    playAnimation(imeges){
    let i = this.currentImage % this.IMAGES_WALKING.length;
    let path = imeges[i];
    this.img=this.imageCache[path];
    this.currentImage++;
    }
} 