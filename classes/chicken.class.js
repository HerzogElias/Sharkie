class Chicken extends MovableObject {
    constructor(){
        super().loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
   
        this.x=200+Math.random()*500;
        this.y=50+Math.random()*250;
        this.width=75;
        this.height=75;
    }   
}