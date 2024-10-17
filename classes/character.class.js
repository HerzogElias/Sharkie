class Charackter extends MovableObject{
    height=100;
    width=200;
    speed=10;

    IMAGES_WALKING=
        [
            './img/1.Sharkie/3.Swim/1.png',
            './img/1.Sharkie/3.Swim/2.png',
            './img/1.Sharkie/3.Swim/3.png',
            './img/1.Sharkie/3.Swim/4.png',
            './img/1.Sharkie/3.Swim/5.png',
            './img/1.Sharkie/3.Swim/6.png'
        ]
  
    world;
    constructor(){
        super().loadImage('./img/1.Sharkie/2.Long_IDLE/i1.png')
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    }

    animate(){
        setInterval(() => {
            if(this.world.keyboard.RIGHT) {
                this.x +=this.speed;
                this.otherDirection=false;
            }

            if(this.world.keyboard.LEFT) {
                this.x -=this.speed;
                this.otherDirection=true;
            }
            this.world.camera_x=-this.x;
        }, 1000/60);

        setInterval(() => {
            if(this.world.keyboard.DOWN) {
                this.y +=this.speed;
                this.otherDirection=false;
            }

            if(this.world.keyboard.UP) {
                this.y -=this.speed;
                this.otherDirection=false;
            }
        }, 1000/60);

        setInterval(() => {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img=this.imageCache[path];
        this.currentImage++;
        },200)
    }

    jump(){}
}