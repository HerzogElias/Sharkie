class Coins extends MovableObject {
    width=40;
    height=40;
    
    IMAGE_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ]

    constructor(){
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.x=200+Math.random()*1000;
        this.y=50+Math.random()*250;
        this.loadImages(this.IMAGE_COINS);
    }

}