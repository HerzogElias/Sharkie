class JellyFish extends MovableObject {
    width=60;
    height=60;

    IMAGES_WALKING=
    [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    
    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        this.x=200+Math.random()*500;
        this.y=50+Math.random()*250;
        this.speed=0.15+Math.random()*0.13;
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
    } 

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        },1000)
    }

}