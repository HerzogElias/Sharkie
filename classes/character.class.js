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
    walking_sound = new Audio('audio/swimming.mp3')
    constructor(){
        super().loadImage('./img/1.Sharkie/2.Long_IDLE/i1.png')
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
        this.fallDown();
    }

    animate(){
        setInterval(() => {
            this.walking_sound.pause();
            if(this.world.keyboard.RIGHT && this.x<this.world.level.level_x_End) {
                this.x +=this.speed;
                this.otherDirection=false;
                this.walking_sound.play();
            }

            if(this.world.keyboard.LEFT &&this.x >0) {
                this.x -=this.speed;
                this.otherDirection=true;
                this.walking_sound.play();
            }
            this.world.camera_x=-this.x +60;
        }, 1000/60);


        setInterval(() => {
            if(this.world.keyboard.DOWN &&this.y<390){
                this.y +=this.speed;
                this.otherDirection=false;
            }

            if(this.world.keyboard.UP &&this.y >5){
                this.y -=this.speed;
                this.otherDirection=false;
            }
        }, 1000/60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        },200)
    }

    fallDown() {
        setInterval(() => {
            if (!this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                if (this.y < 380) {
                    this.y += 2;
                }
            }
        }, 1000 / 10);
    }
}
