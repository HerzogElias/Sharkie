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
     * @property {string[]} IMAGES_WALKING - Paths to images used for the walking animation.
     */
    IMAGES_WALKING =
        [
            'img/1.Sharkie/3.Swim/1.png',
            'img/1.Sharkie/3.Swim/2.png',
            'img/1.Sharkie/3.Swim/3.png',
            'img/1.Sharkie/3.Swim/4.png',
            'img/1.Sharkie/3.Swim/5.png',
            'img/1.Sharkie/3.Swim/6.png'
        ]
    /**
     @property {string[]} IMAGES_DEAD - Paths to images used for the dead animation.
    */
    IMAGES_DEAD =
        [
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
        ]
    /**
     * @property {string[]} IMAGES_HURT - Paths to images used for the hurt animation.
     */
    IMAGES_HURT =
        [
            'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
            'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
        ]

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
    ]

    /**
    * Creates a new character instance.
    *         
    *  @param {object} world - Reference to the game world.
    */
    constructor(world) {
        super().loadImage('./img/1.Sharkie/2.Long_IDLE/i1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SLEEPING);
        this.world = world;
        this.animate();
        this.fallDown();
        this.sleepingMode();
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
            }
            else
                if (this.world.keyboard.UP && this.y > 5) {
                    this.y -= this.speed;
                    this.otherDirection = false;
                    this.world.charackterSwimmingSound.play();
                }
        }, 1000 / 60)

        setInterval(() => {
            if (this.world.keyboard.D && this.world.statusBarGift.percentage > 0) {
                this.playAnimation(this.IMAGES_THROW);
                this.world.charackterThrowSound.play();
            }
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDeat()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT)
                } else
                    this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }

    /**
     * Handles the falling animation when the character is idle.
     */
    fallDown() {
        setInterval(() => {
            if (!this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                if (this.y < 380) {
                    this.y += 2;
                }
            }
        }, 1000 / 10);
    }

     /**
     * Activates the sleeping mode if the character remains idle for a certain time.
     */
    sleepingMode() {
        setInterval(() => {
            if (!this.world.keyboard.LEFT && !this.world.keyboard.RIGHT
                && !this.world.keyboard.UP && !this.world.keyboard.DOWN
                && !this.world.keyboard.D) {
                setTimeout(() => {
                    this.aktivateSleepingMode();
                }, 10000);
            }
        }, 200);
    }

    /**
     * Plays the sleeping animation.
     */
    aktivateSleepingMode() {
        this.playAnimation(this.IMAGES_SLEEPING);
    }
}
