class World {
    charackter = new Charackter();
    level=Level1;
    Endboss;
    canvas;
    ctx;
    keyboard; 
    camera_x= 0;

    constructor(canvas,keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard=keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld(){
        this.charackter.world=this;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x,0);
        this.addObcetsToMap(this.level.backgroundObjects);
        this.addToMap(this.charackter)
        this.addObcetsToMap(this.level.clouds);
        this.addObcetsToMap(this.level.jellyFish);
        this.addObcetsToMap(this.level.pufferfish);
        this.addObcetsToMap(this.level.Endboss);
        this.ctx.translate(-this.camera_x,0);
     
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObcetsToMap(objekts){
        objekts.forEach(o=>{
            this.addToMap(o); 
        })
    }

    addToMap(mo){
        if(mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width,0);
            this.ctx.scale(-1,1);
            mo.x=mo.x*-1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x=mo.x*-1;
            this.ctx.restore();
        }
    }
}