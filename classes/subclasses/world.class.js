/**
 * Represents the game world, including the character, levels, and game logic.
 */
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
    isThrowing = false;
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
        this.Endboss = new Endboss(this);
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.checkThrowableObject();
        this.checkifCharackterLostGame();
        this.checkifCharackterWon();
        this.setSoundVolume();
    }

    /**
     * Sets the game world context for the character.
     */
    setWorld() {
        this.charackter.world = this;
        this.level.Endboss[0].world = this;
    }

    /**
     * Draws the game world by clearing and rendering elements.
     */
    draw() {
        this.clearCanvas();
        this.drawStaticElements();
        this.drawDynamicElements();
        this.drawUI();
        this.checckEndbossStart();
        requestAnimationFrame(() => this.draw());
    }

    /**
       * Checks if the Endboss animation should start when the character is near.
       * If the character's x-coordinate exceeds a threshold, the Endboss starts animating.
    */
    checckEndbossStart() {
        if (this.charackter.x > 1500 && !this.level.Endboss[0].isAnimated) {
            this.level.Endboss[0].animate();
        }
    }

    /**
     * Clears the canvas to prepare for the next frame.
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws static elements, such as the background.
     */
    drawStaticElements() {
        this.ctx.translate(this.camera_x, 0);
        this.addObcetsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
    }

    /**
     * Draws dynamic elements, such as the character and enemies.
     */
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

    /**
     * Draws the user interface, such as status bars.
     */
    drawUI() {
        this.addToMap(this.statusBar);
        this.addToMap(this.statusBarGift);
        this.addToMap(this.stausBarCoin);
        this.addToMap(this.statusBarEndboss);
    }


    offset = {
        top: 20,
        bottom: 5,
        left: 5,
        right: 20
    };

    /**
     * Adds an array of objects to the map by drawing them.
     * @param {Object[]} objekts Array of objects to add.
     */
    addObcetsToMap(objekts) {
        objekts.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx); // Zeichne das Objekt
        /*
        mo.drawFrame(this.ctx); // Zeichne den blauen Rahmen
    

        // Zeichne den roten Offset-Rahmen, falls das Objekt ein MovableObject ist
        if (mo instanceof MovableObject) {
            this.drawOffsetBorder(mo);
        }
        
        */
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /*
    drawOffsetBorder(mo) {
        const offset = mo.offset || this.offset; // Verwende das spezifische Offset des Objekts oder Standard-Offset
        const x = mo.x + this.offset.left;
        const y = mo.y + this.offset.top;
        const width = mo.width - (this.offset.left + this.offset.right);
        const height = mo.height - (this.offset.top + this.offset.bottom);
    
        this.ctx.strokeStyle = "red";
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x, y, width, height);
    }
*/

    /**
     * Flips the image horizontally for mirrored drawing.
     * @param {MovableObject} mo The object to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the image's original direction.
     * @param {MovableObject} mo The object to un-flip.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


    setSoundVolume() {
        this.backgroundSound.volume = 1.0;
        this.charackterHurtSound.volume = 0.9;
        this.collectiingCoinAndGiftSound.volume = 0.8;
        this.endbossHurtSound.volume = 0.7;
        this.charackterSwimmingSound.volume = 0.7;
        this.charackterThrowSound.volume = 0.7;
        this.characterWonSound.volume = 0.7;
        this.charackterLostSound.volume = 0.3;
    }


    /**
     * Periodically checks if throwable objects should be created.
     */
    checkThrowableObject() {
        setInterval(() => {
            if (this.keyboard.D && !this.isThrowing) {
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

    /**
     * Handles the cooldown for throwing objects.
     */
    handleThrowing() {
        this.isThrowing = true;
        setTimeout(() => {
            this.isThrowing = false;
        }, 200);
    }

    /**
     * Determines the x-coordinate for throwable objects based on character direction.
     * @returns {number} The x-coordinate for the throwable object.
     */
    handleCharackterOtherDirection() {
        if (this.charackter.otherDirection) {
            return this.charackter.x;
        } else {
            return this.charackter.x + this.charackter.width;
        }
    }


    /**
    * Checks collisions with various game objects periodically.
    */
    checkCollisions() {
        setInterval(() => {
            this.checkCollisionWithPufferfish();
            this.checkCollisionWithJellyfish();
            this.checkCollisionWithCoins();
            this.checkCollisionWithGift();
            this.checkCollisionWithThrowableObjects();
            this.checkCollisionWithEndboss();
            this.checkCollisionsBubbleWithPufferfish()
        }, 50);
    }

    /**
     * Checks for collisions between the character and pufferfish.
     * If a collision is detected, the character takes damage, and the pufferfish is removed.
     */
    checkCollisionWithPufferfish() {
        this.level.pufferfish.forEach((pufferfish, index) => {
            if (this.charackter.isColiding(pufferfish)) {
                if (this.charackter.healCharacter) {
                    this.level.pufferfish.splice(index, 1); // Pufferfish entfernen
                } else if (!this.charackter.isHurt()) {
                    this.charackter.hit(200); // Schaden zufügen
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                }
            }
        });
    }

    /**
     * Checks for collisions between the character and jellyfish.
     * If a collision is detected, the character takes damage, and the jellyfish is removed.
     */
    checkCollisionWithJellyfish() {
        this.level.jellyFish.forEach((jellyFish, index) => {
            if (this.charackter.isColiding(jellyFish)) {
                if (this.charackter.healCharacter) {
                    this.level.jellyFish.splice(index, 1); 
                } else if (!this.charackter.isHurt()) {
                    this.charackter.hit(300);
                    this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
                }
            }
        });
    }


    /**
     * Checks for collisions between the character and coins.
     * If a collision is detected, the coin is removed, and the coin status bar is updated.
     */
    checkCollisionWithCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.charackter.isColiding(coin)) {
                this.level.coins.splice(index, 1);
                this.updateStatusbar(this.stausBarCoin);
            }
        });
    }

    /**
     * Checks for collisions between the character and gifts.
     * If a collision is detected, the gift is removed, and the gift status bar is updated.
     */
    checkCollisionWithGift() {
        this.level.gift.forEach((gift, index) => {
            if (this.charackter.isColiding(gift)) {
                this.level.gift.splice(index, 1);
                this.updateStatusbar(this.statusBarGift);
            }
        });
    }

    /**
     * Updates the given status bar by increasing its percentage.
     * @param {Statusbar} statusbar The status bar to update.
     */
    updateStatusbar(statusbar) {
        if (statusbar.percentage < 100) {
            statusbar.percentage += 20;
            statusbar.setPercentage(statusbar.percentage);
        }
    }

    /**
     * Checks for collisions between the character and the end boss.
     * If a collision is detected, the character takes damage.
     */
    checkCollisionWithEndboss() {
        this.level.Endboss.forEach((endboss) => {
            if (this.charackter.isColiding(endboss) && !this.charackter.isHurt()) {
                this.charackter.hit(500);
                this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
            }
        });
    }

    /**
     * Checks for collisions between throwable objects (e.g., bubbles) and the end boss.
     * If a collision is detected, the end boss takes damage, and the throwable object is removed.
     */
    checkCollisionWithThrowableObjects() {
        let endbossCooldown = false;
        this.throwableObject.forEach((bubble, bubbleIndex) => {
            this.level.Endboss.forEach((endboss) => {
                if (bubble.isColiding(endboss) && !endbossCooldown) {
                    endboss.hit(400);
                    this.statusBarEndboss.setPercentage(endboss.energy * 100 / 4000);
                    this.throwableObject.splice(bubbleIndex, 1);
                    endbossCooldown = true;
                    this.charackter.idleCounter = 0;
                    // Cooldown to prevent rapid hits
                    setTimeout(() => {
                        endbossCooldown = false;
                    }, 850);


                }
            });
        });
    }

    /**
     * Checks for collisions between throwable bubbles and pufferfish.
     * Removes the pufferfish and updates the gift status bar if a collision occurs.
     */
    checkCollisionsBubbleWithPufferfish() {
        this.throwableObject.forEach((bubble, bubbleIndex) => {
            this.level.pufferfish.forEach((pufferfish, pufferfishIndex) => {
                if (bubble.isColiding(pufferfish)) {
                    this.level.pufferfish.splice(pufferfishIndex, 1);
                    this.updateStatusbar(this.statusBarGift);
                    this.throwableObject.splice(bubbleIndex, 1);
                }
            });
        });
    }

    /**
     * Periodically checks if the character has lost the game by running out of energy.
     */
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

    /**
     * Displays the "You Lost" screen and hides the canvas and other elements.
     */
    schowLostscreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.add('dnone');
        document.getElementById('youlost').classList.remove('dnone');
    }

    /**
     * Displays the "You Won" screen and hides the canvas and other elements.
     */
    showWinnerScreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }

    /**
     * Periodically checks if the character has won the game by defeating the end boss.
     */
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

    /**
     * Clears all active intervals, stopping all periodic functions.
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}