class Pufferfish extends MovableObject {
    width=60;
    height=60;
    speed=10;
    IMAGES_WALKING=
    [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ]
    
    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        this.x=200+Math.random()*1800;
        this.y=50+Math.random()*250;
        this.speed=0.15+Math.random()*0.25;
        this.loadImages(this.IMAGES_WALKING)
        this.animate();
        this.moveleft();
    } 

    animate(){
        setInterval(() => {
           this.playAnimation(this.IMAGES_WALKING)
        },1000)
    }

    

    moveleft(){
        setInterval(() => { 
            this.x -=this.speed;
        }, 1000 / 60);
    }
}