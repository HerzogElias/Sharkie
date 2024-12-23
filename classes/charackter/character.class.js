/**
 * Represents a character in the game that extends the `MovableObject` class.
 * Handles animations, movement, and interactions with the game world.
 * 
 * @extends MovableObject
 */
class Charackter extends MovableObject {
    /**
     * @property {number} height - The height of the character in pixels.
     * @default 100
     */
    height = 100;

    /**
     * @property {number} width - The width of the character in pixels.
     * @default 200
     */
    width = 200;

    /**
     * @property {number} speed - The speed at which the character moves.
     * @default 10
     */
    speed = 10;

    /**
     * @property {object} world - Reference to the game world.
     */
    world;

    /**
     * @property {number} idleCounter - Counter to track idle time for triggering animations.
     * @default 0
     */
    idleCounter = 0;
    // x;

    /**
     * @property {object} offset - Defines the hitbox offset for the character.
     * @property {number} offset.top - Top offset in pixels.
     * @property {number} offset.bottom - Bottom offset in pixels.
     * @property {number} offset.left - Left offset in pixels.
     * @property {number} offset.right - Right offset in pixels.
     */
    offset = {
        top: 60,
        bottom: 10,
        left: 45,
        right: 25
    };

    /**
     * @property {string[]} IMAGES_WALKING - Paths to images used for the walking animation.
     */
    IMAGES_WALKING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    /**
     * @property {string[]} IMAGES_DEAD - Paths to images used for the dead animation.
     */
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];

    /**
     * @property {string[]} IMAGES_HURT - Paths to images used for the hurt animation.
     */
    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];

    /**
     * @property {string[]} IMAGES_THROW - Paths to images used for the throw animation.
     */
    IMAGES_THROW = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    /**
     * @property {string[]} IMAGES_SLEEPING - Paths to images used for the sleeping animation.
     */
    IMAGES_SLEEPING = [
        'img/1.Sharkie/2.Long_IDLE/I1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    /**
     * @property {string[]} IMAGES_IDLE - Paths to images used for the idle animation.
     */
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];


    IMAGES_FINSLAP =
        [
            'img/1.Sharkie/4.Attack/Fin slap/1.png',
            'img/1.Sharkie/4.Attack/Fin slap/2.png',
            'img/1.Sharkie/4.Attack/Fin slap/3.png',
            'img/1.Sharkie/4.Attack/Fin slap/4.png',
            'img/1.Sharkie/4.Attack/Fin slap/5.png',
            'img/1.Sharkie/4.Attack/Fin slap/6.png',
            'img/1.Sharkie/4.Attack/Fin slap/7.png',
            'img/1.Sharkie/4.Attack/Fin slap/8.png'
        ]

    healCharacter = false;
    
    /**
     * Creates a new character instance.
     * 
     * @param {object} world - Reference to the game world.
     */
    constructor(world) {
        super().loadImage('./img/1.Sharkie/2.Long_IDLE/I1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_FINSLAP);
        this.world = world;
        this.animate();
    }

    /**
     * Starts the character's animations and handles user input for movement.
     */
    animate() {
        setInterval(() => {
            this.world.charackterSwimmingSound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_x_End) {
                this.x += this.speed;
                this.otherDirection = false;
                this.world.charackterSwimmingSound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.world.charackterSwimmingSound.play();
            }
            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);

        setInterval(() => {
            this.world.charackterSwimmingSound.pause();
            if (this.world.keyboard.DOWN && this.y < 390) {
                this.y += this.speed;
                this.otherDirection = false;
                this.world.charackterSwimmingSound.play();
            } else if (this.world.keyboard.UP && this.y > 5) {
                this.y -= this.speed;
                this.otherDirection = false;
                this.world.charackterSwimmingSound.play();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.D && this.world.statusBarGift.percentage > 0) {
                this.playAnimation(this.IMAGES_THROW);
                this.world.charackterThrowSound.play();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDeat()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.idleCounter = 0;
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isWalking()) {
                this.idleCounter = 0;
                this.playAnimation(this.IMAGES_WALKING);
            } else if (this.idleCounter > 15) {
                this.playAnimation(this.IMAGES_SLEEPING);
            } else {
                this.idleCounter++;
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 200);
    }

    /**
     * Determines if the character is currently walking based on keyboard input.
     * 
     * @returns {boolean} - True if the character is walking, false otherwise.
     */
    isWalking() {
        return this.world.keyboard.LEFT || this.world.keyboard.RIGHT ||
            this.world.keyboard.UP || this.world.keyboard.DOWN;
    }
}
