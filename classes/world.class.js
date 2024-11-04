class World {
    charackter = new Charackter();
    level = Level1;
    Endboss;
    canvas;
    ctx;
    keyboard;
    camera_x = 100;
    statusBar = new Statusbars();
    statusBarGift = new GiftStatusbar();
    stausBarCoin = new StatusbarCoin();
    statusBarEndboss = new EndbossStatusbar();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.throwableObject = new ThrowableObject(this);
        this.draw();
        this.setWorld();
        this.checkColissionPufferfish(); 1
        this.checkColissionJellyFish();
        this.checkColissionCoins();
        this.checkColissionEndboss();
        this.checkColissionGift();
        this.updateStatusbar(this.statusBarGift);
        this.updateStatusbar(this.stausBarCoin);
    }

    setWorld() {
        this.charackter.world = this;
        this.throwableObject.world = this; 
    }
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObcetsToMap(this.level.backgroundObjects);
        this.addToMap(this.charackter);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarGift);
        this.addToMap(this.stausBarCoin);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0);

        this.addObcetsToMap(this.level.coins);
        this.addObcetsToMap(this.level.clouds);
        this.addObcetsToMap(this.level.jellyFish);
        this.addObcetsToMap(this.level.pufferfish);
        this.addObcetsToMap(this.level.gift);
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
            this.level.pufferfish.forEach((pufferfish, index) => {
                if (this.charackter.isColiding(pufferfish)) {
                    this.charackter.hit();
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                    this.level.pufferfish.splice(index, 1)
                }
            }, 2000);
        })
    }

    checkColissionJellyFish() {
        setInterval(() => {
            this.level.jellyFish.forEach((jellyFish, index) => {
                if (this.charackter.isColiding(jellyFish)) {
                    this.charackter.hit();
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                    this.level.jellyFish.splice(index, 1)
                }
            }, 2000);
        })
    }

    checkColissionCoins() {
        setInterval(() => {
            this.level.coins.forEach((coin, index) => {
                if (this.charackter.isColiding(coin)) {
                    console.log('Coin getroffen');
                    this.level.coins.splice(index, 1);
                    this.updateStatusbar(this.stausBarCoin);
                }
            }, 2000);
        })
    }

    checkColissionGift() {
        setInterval(() => {
            this.level.gift.forEach((gift, index) => {
                if (this.charackter.isColiding(gift)) {
                    console.log('Gift getroffen');
                    this.level.gift.splice(index, 1)
                    this.updateStatusbar(this.statusBarGift);
                }
            }, 2000);
        })
    }

    updateStatusbar(statusbar) {
        console.log(statusbar);
        if (statusbar.percentage < 100) {
            statusbar.percentage += 20;
            statusbar.setPercentage(statusbar.percentage);
        }
    }

    checkColissionEndboss() {
        setInterval(() => {
            this.level.Endboss.forEach((endboss) => {
                if (this.charackter.isColiding(endboss)) {
                    this.charackter.hit(800);
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                }
            }, 2000);
        });
    }
}
