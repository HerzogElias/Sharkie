class World {
charackter =new Charackter();
enemies = [
    new Chicken(),
    new Chicken(),
    new Chicken (),
];
ctx;
    constructor(canvas){
        this.ctx=canvas.getContext('2d');   
        this.draw();
    }

    draw (){
        let self = this;
        this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y ,this.charackter.height, this.charackter.width)
        requestAnimationFrame(function(){
            self.draw();
        });
    }
}