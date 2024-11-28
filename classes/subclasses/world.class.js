/**
 * Represents the game world, including the character, levels, and game logic.
 */
class World {
    /** @type {Charackter} The main character in the game. */
    charackter = new Charackter();

    /** @type {Level1} The current level. */
    level = Level1;

    /** @type {Endboss | undefined} The end boss of the current level. */
    Endboss;

    /** @type {HTMLCanvasElement} The canvas element for rendering. */
    canvas;

    /** @type {CanvasRenderingContext2D} The 2D context of the canvas. */
    ctx;

    /** @type {Keyboard} The keyboard input handler. */
    keyboard;

    /** @type {number} The camera's horizontal offset. */
    camera_x = 100;

    /** @type {StatusbarCarackter} The character's health status bar. */
    statusBar = new StatusbarCarackter();

    /** @type {GiftStatusbar} The gift collection status bar. */
    statusBarGift = new GiftStatusbar();

    /** @type {StatusbarCoin} The coin collection status bar. */
    stausBarCoin = new StatusbarCoin();

    /** @type {EndbossStatusbar} The end boss health status bar. */
    statusBarEndboss = new EndbossStatusbar();

    /** @type {ThrowableObject[]} List of active throwable objects (e.g., bubbles). */
    throwableObject = [];

    /** @type {boolean} Whether the character is currently throwing. */
    isThrowing = false;

    /** @type {Audio} Background music for the game. */
    backgroundSound = new Audio('audio/background.mp3');

    /** @type {Audio} Sound effect when the character is hurt. */
    charackterHurtSound = new Audio('audio/charackterHurt.mp3');

    /** @type {Audio} Sound effect when collecting coins or gifts. */
    collectiingCoinAndGiftSound = new Audio('audio/collecting.mp3');

    /** @type {Audio} Sound effect when the end boss is hurt. */
    endbossHurtSound = new Audio('audio/endbossHurt.mp3');

    /** @type {Audio} Sound effect for swimming. */
    charackterSwimmingSound = new Audio('audio/swimming.mp3');

    /** @type {Audio} Sound effect for throwing objects. */
    charackterThrowSound = new Audio('audio/throw.mp3');

    /** @type {Audio} Sound effect when the character wins. */
    characterWonSound = new Audio('audio/win.mp3');

    /** @type {Audio} Sound effect when the character loses. */
    charackterLostSound = new Audio('audio/lost.mp3');

    /**
     * Initializes the game world.
     * @param {HTMLCanvasElement} canvas The canvas element for rendering.
     * @param {Keyboard} keyboard The keyboard input handler.
     */
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

    /**
     * Sets the game world context for the character.
     */
    setWorld() {
        this.charackter.world = this;
    }

    /**
     * Draws the game world by clearing and rendering elements.
     */
    draw() {
        this.clearCanvas();
        this.drawStaticElements();
        this.drawDynamicElements();
        this.drawUI();
        requestAnimationFrame(() => this.draw());
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

    /**
     * Adds an array of objects to the map by drawing them.
     * @param {Object[]} objekts Array of objects to add.
     */
    addObcetsToMap(objekts) {
        objekts.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds a single movable object to the map, flipping its direction if needed.
     * @param {MovableObject} mo The movable object to add.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawBorder(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

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
            return this.charackter.x - this.charackter.width;
        } else {
            return this.charackter.x + this.charackter.width;
        }
    }

    // Remaining methods can be similarly documented.



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
    }, 1);
}

/**
 * Checks for collisions between the character and pufferfish.
 * If a collision is detected, the character takes damage, and the pufferfish is removed.
 */
checkCollisionWithPufferfish() {
    this.level.pufferfish.forEach((pufferfish, index) => {
        if (this.charackter.isColiding(pufferfish)) {
            this.charackter.hit();
            this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
            this.level.pufferfish.splice(index, 1);
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
            this.charackter.hit();
            this.statusBar.setPercentage(this.charackter.energy * 100 / 3000);
            this.level.jellyFish.splice(index, 1);
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
            console.log('Coin getroffen');
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
            console.log('Gift getroffen');
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
    console.log(statusbar);
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
        if (this.charackter.isColiding(endboss)) {
            this.charackter.hit();
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
                endboss.hit();
                this.statusBarEndboss.setPercentage(endboss.energy * 100 / endboss.maxEnergy);
                this.throwableObject.splice(bubbleIndex, 1);
                endbossCooldown = true;

                // Cooldown to prevent rapid hits
                setTimeout(() => {
                    endbossCooldown = false;
                }, 500);
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