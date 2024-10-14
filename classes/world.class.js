class World {
    charackter = new Charackter();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];
    clouds = [
        new Cloud(),
        new Cloud()
    ];

    backgroundObjects = [
        new BackgroundObject('./img/3. Background/Layers/4.Fondo 2/D1.png', 0, 100)
    ];

    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.charackter)
        this.addObcetsToMap(this.clouds);
        this.addObcetsToMap(this.enemies);
        this.addObcetsToMap(this.backgroundObjects);
     
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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}