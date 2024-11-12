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
    throwableObject = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkColissionPufferfish(); 1
        this.checkColissionJellyFish();
        this.checkColissionCoins();
        this.checkColissionEndboss();
        this.checkColissionGift();
        this.checkThrowableObject();
        this.checkIfCharakterLostGame();
        this.checkifCharackterWon();
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
        this.addObcetsToMap(this.throwableObject);
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

    checkThrowableObject() {
        window.addEventListener("keydown", (event) => {
            // Nur Bubbles werfen, wenn genug Gift vorhanden ist
            if (event.key === "d" && this.statusBarGift.percentage > 0) {
                let bubble = new ThrowableObject(
                    this.charackter.x + this.charackter.width,
                    this.charackter.y + this.charackter.height / 2
                );
                this.throwableObject.push(bubble);

                // Reduziert das Gift um einen bestimmten Prozentsatz, wenn ein Bubble geworfen wird
                this.statusBarGift.percentage -= 5;
                this.statusBarGift.setPercentage(this.statusBarGift.percentage);

                // Überprüfe Kollision für die neue Bubble
                this.checkCollisionWithThrowableObjects(bubble);
            }
        });
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
                    this.level.gift.splice(index, 1);
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

    checkCollisionWithThrowableObjects() {
        setInterval(() => {
            this.throwableObject.forEach((bubble) => {
                this.level.Endboss.forEach((endbossThrow) => {
                    if (bubble.isColiding(endbossThrow)) {
                        console.log('Bubbles kollidieren mit Endboss');
                        this.level.Endboss[0].hit();
                        this.statusBarEndboss.setPercentage(this.level.Endboss.energy * 100 / 3000)
                    }
                });
            });
        }, 2000);
    }


    checkifCharackterWon() {
        setInterval(() => {
            if (this.charackter.energy===0) {
                this.showWinnerScreen()
            }
        },1);
    }

    showWinnerScreen() {
        document.getElementById('canvas').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }

    checkIfCharakterLostGame() {
        setInterval(() =>{
            if (this.statusBar.percentage === 0) {
                this.schowLostscreen();
            }
        }, 1);
    }

    schowLostscreen() {
        document.getElementById('canvas').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.add('dnone');
        document.getElementById('youlost').classList.remove('dnone');
    }
}

