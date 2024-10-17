class World {
    charackter = new Charackter();
    jellyFish = [
        new JellyFish(),
        new JellyFish()
    ];

    pufferfish =[
        new Pufferfish(),
        new Pufferfish()
    ];

    clouds = [
        new Cloud(),
        new Cloud()
    ];

    backgroundObjects = [
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png',-719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', -719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png',-719),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png',0),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png',0),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png',719),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', 719),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png',719),

        new BackgroundObject('./img/3. Background/Layers/5. Water/D2.png',719*2),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 719*2),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L1.png', 719*2),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D1.png',719*2),
        new BackgroundObject('./img/3. Background/Layers/5. Water/D1.png',719*3),
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D2.png', 719*3),
        new BackgroundObject('./img/3. Background/Layers/3.Fondo 1/L2.png', 719*3),
        new BackgroundObject('./img/3. Background/Layers/2. Floor/D2.png',719*3),
    ];
    
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
        this.addObcetsToMap(this.backgroundObjects);
        this.addToMap(this.charackter)
        this.addObcetsToMap(this.clouds);
        this.addObcetsToMap(this.jellyFish);
        this.addObcetsToMap(this.pufferfish);
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