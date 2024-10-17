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