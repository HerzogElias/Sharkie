class World {
    charackter = new Charackter();
    level = Level1;
    Endboss;
    canvas;
    ctx;
    keyboard;
    camera_x = 100;
    statusBar = new StatusbarCarackter();
    statusBarGift = new GiftStatusbar();
    stausBarCoin = new StatusbarCoin();
    statusBarEndboss = new EndbossStatusbar();
    throwableObject = [];
    isThrowing=false;

    backgroundSound = new Audio('audio/background.mp3');
    charackterHurtSound = new Audio('audio/charackterHurt.mp3');
    collectiingCoinAndGiftSound = new Audio('audio/collecting.mp3');
    endbossHurtSound = new Audio('audio/endbossHurt.mp3');
    charackterSwimmingSound = new Audio('audio/swimming.mp3');
    charackterThrowSound = new Audio('audio/throw.mp3');
    characterWonSound = new Audio('audio/win.mp3');
    charackterLostSound = new Audio('audio/lost.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkThrowableObject();
        this.checkifCharackterLostGame();
        this.checkifCharackterWon();
    }

    setWorld() {
        this.charackter.world = this;
    }

    draw() {
        this.clearCanvas();
        this.drawStaticElements();
        this.drawDynamicElements();
        this.drawUI();
        
        // Rekursiver Aufruf für kontinuierliches Zeichnen
        requestAnimationFrame(() => this.draw());
    }
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    drawStaticElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObcetsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
    }
    
    drawDynamicElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.charackter);
        this.addObcetsToMap(this.level.coins);
        this.addObcetsToMap(this.level.clouds);
        this.addObcetsToMap(this.level.jellyFish);
        this.addObcetsToMap(this.level.pufferfish);
        this.addObcetsToMap(this.level.gift);
        this.addObcetsToMap(this.level.Endboss);
        this.addObcetsToMap(this.throwableObject);
        this.ctx.translate(-this.camera_x, 0);
    }
    
    drawUI() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarGift);
        this.addToMap(this.stausBarCoin);
        this.addToMap(this.statusBarEndboss);
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
        setInterval(() => {
            if (this.keyboard.D && !this.isThrowing) {
                console.log('Test');
                if (this.statusBarGift.percentage > 0) {
                    let bubble = new ThrowableObject(
                        this.handleCharackterOtherDirection(),
                        this.charackter.y + this.charackter.height / 2,
                        this.charackter.otherDirection
                    );

                    this.throwableObject.push(bubble);
                    this.statusBarGift.percentage -= 5;
                    this.statusBarGift.setPercentage(this.statusBarGift.percentage);
                    this.checkCollisionWithThrowableObjects(bubble);
                    this.handleThrowing();
                }
            }
        }, 1);
    }

    handleThrowing(){
        this.isThrowing=true;
        setTimeout(() => {
            this.isThrowing=false;
        }, 200);
    }


    handleCharackterOtherDirection() {
        if (this.charackter.otherDirection) {
            return this.charackter.x - this.charackter.width
        } else {
            return this.charackter.x + this.charackter.width

        }
    }

    checkCollisions() {
        setInterval(() => {
            this.checkCollisionWithPufferfish();
            this.checkCollisionWithJellyfish();
            this.checkCollisionWithCoins();
            this.checkCollisionWithGift();
            this.checkCollisionWithThrowableObjects();
            this.checkCollisionWithEndboss() 
        }, 1);
    }
    
    checkCollisionWithPufferfish() {
        this.level.pufferfish.forEach((pufferfish, index) => {
            if (this.charackter.isColiding(pufferfish)) {
                this.charackter.hit();
                this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                this.level.pufferfish.splice(index, 1);
            }
        });
    }
    
    checkCollisionWithJellyfish() {
        this.level.jellyFish.forEach((jellyFish, index) => {
            if (this.charackter.isColiding(jellyFish)) {
                this.charackter.hit();
                this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                this.level.jellyFish.splice(index, 1);
            }
        });
    }
    
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.charackter.isColiding(coin)) {
                console.log('Coin getroffen');
                this.level.coins.splice(index, 1);
                this.updateStatusbar(this.stausBarCoin);
            }
        });
    }
    
    checkCollisionWithGift() {
        this.level.gift.forEach((gift, index) => {
            if (this.charackter.isColiding(gift)) {
                console.log('Gift getroffen');
                this.level.gift.splice(index, 1);
                this.updateStatusbar(this.statusBarGift);
            }
        });
    }

    updateStatusbar(statusbar) {
        console.log(statusbar);
        if (statusbar.percentage < 100) {
            statusbar.percentage += 20;
            statusbar.setPercentage(statusbar.percentage);
        }
    }

    checkCollisionWithEndboss() {
        this.level.Endboss.forEach((endboss) => {
            if (this.charackter.isColiding(endboss)) {
                this.charackter.hit();
                this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
            }
        });
    }

    checkCollisionWithThrowableObjects() {
        let endbossCooldown = false;
        this.throwableObject.forEach((bubble, bubbleIndex) => {
            this.level.Endboss.forEach((endboss) => {
                if (bubble.isColiding(endboss) && !endbossCooldown) {
                    endboss.hit();
                    this.statusBarEndboss.setPercentage(endboss.energy * 100 / endboss.maxEnergy);
                    this.throwableObject.splice(bubbleIndex, 1);
                    endbossCooldown = true;
    
                    setTimeout(() => {
                        endbossCooldown = false;
                    }, 500); // Cooldown von 500ms für Endboss
                }
            });
        });
    }


    checkifCharackterLostGame() {
        setInterval(() => {
            if (this.charackter.energy === 0) {
                this.schowLostscreen();
                this.clearAllIntervals();
                this.charackterLostSound.play();
                this.backgroundSound.pause();
            }
        }, 1);
    }

    schowLostscreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.add('dnone');
        document.getElementById('youlost').classList.remove('dnone');
    }

    showWinnerScreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }

    checkifCharackterWon() {
        setInterval(() => {
            if (this.level.Endboss[0].energy === 0) {
                this.showWinnerScreen();
                this.clearAllIntervals();
                this.characterWonSound.play();
                this.backgroundSound.pause();
            }
        }, 1);
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}
