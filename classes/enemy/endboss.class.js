/**
 * Represents the Endboss in the game.
 * @extends {Enemy}
 */
class Endboss extends Enemy {
    firstAnimationPlayed = false;   
    isAnimated =false; 
    i = 0; // Zähler für die Animation

    /**
     * Width of the Endboss in pixels.
     * @type {number}
     */
    width = 350;

    world;

    /**
     * Height of the Endboss in pixels.
     * @type {number}
     */
    height = 350;

    /**
     * Offset values for the collision boundary of the Endboss.
     * @type {{top: number, bottom: number, left: number, right: number}}
     */
    offset = {
        top: 150,
        bottom: 20,
        left: 5,
        right: 20
    };

    /**
     * Array of image paths for the walking animation of the Endboss.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    /**
     * Array of image paths for the first animation when the Endboss is introduced.
     * @type {string[]}
     */
    IMAGES_FIRST_ANIMATION = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    alreadyPlaying = false;

    /**
     * Creates an instance of the Endboss and initializes its properties, animations, and position.
     * 
     * The Endboss is initialized with predefined animations and a fixed position. The walking 
     * animation is loaded and automatically started upon creation.
     */
    constructor(world) {
        super();
        
        // this.world = world;

        // Load the first image of the walking animation
        this.loadImage(this.IMAGES_WALKING[0]);
        
        // Load the images for the walking and first animations
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FIRST_ANIMATION);

        /**
         * X-coordinate position of the Endboss in the game world.
         * @type {number}
         */
        this.x = 2000; // Endboss has a fixed position

        /**
         * Y-coordinate position of the Endboss in the game world.
         * @type {number}
         */
        this.y = 50;    
    }

    /**
     * Moves the Endboss to the left.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000);
    }

    /**
     * Animates the Endboss, playing its introduction animation first, followed by its walking animation.
     */
    animate() {
        this.isAnimated=true;
        setInterval(() => {
            if (this.currentImage < this.IMAGES_FIRST_ANIMATION.length) {
                this.playAnimation(this.IMAGES_FIRST_ANIMATION);
            } else {
                this.firstAnimationPlayed = true;
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 150);
    }
}
