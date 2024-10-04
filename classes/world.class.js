class World {
charackter =new Charackter();
enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken (),
];
canvas;
ctx;
    constructor(canvas){
        this.ctx=canvas.getContext('2d');
        this.canvas=canvas;   

    }

    draw(){
        this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y,this.charackter.height) 
    }
}