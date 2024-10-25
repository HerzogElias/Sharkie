class World {
    charackter = new Charackter();
    level = Level1;
    Endboss;
    canvas;
    ctx;
    keyboard;
    camera_x = 100;
    statusBar = new Statusbar();


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkColissionPufferfish();
        this.checkColissionJellyFish();
        this.checkColissionCoins();
    }

    setWorld() {
        this.charackter.world = this;
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObcetsToMap(this.level.backgroundObjects);
        this.addToMap(this.charackter);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);

        this.addObcetsToMap(this.level.coins);
        this.addObcetsToMap(this.level.clouds);
        this.addObcetsToMap(this.level.jellyFish);
        this.addObcetsToMap(this.level.pufferfish);
        this.addObcetsToMap(this.level.Endboss);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObcetsToMap(objekts) {
        objekts.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo)
        }
        mo.draw(this.ctx);
        mo.drawBorder(this.ctx)

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

    checkColissionPufferfish() {
        setInterval(() => {
            this.level.pufferfish.forEach((pufferfish) => {
                if (this.charackter.isColiding(pufferfish)) {
                   this.charackter.hit();
                   this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                }
            },2000);
        } )
    }

    checkColissionJellyFish() {
        setInterval(() => {
            this.level.jellyFish.forEach((jellyFish) => {
                if (this.charackter.isColiding(jellyFish)) {
                    this.charackter.hit();
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                }
            }, 2000);
        } )
    }

    checkColissionCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin) => {
                if (this.charackter.isColiding(coin)) {
                    console.log('Coin getroffen');
                }
            }, 2000);
        } )
    }

}
