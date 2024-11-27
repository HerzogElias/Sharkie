/**
 * Represents the Endboss in the game.
 * @extends {Enemy}
 */
class Endboss extends Enemy {
    /**
     * Width of the Endboss.
     * @type {number}
     */
    width = 350;

    /**
     * Height of the Endboss.
     * @type {number}
     */
    height = 350;

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

    /**
     * Creates an instance of the Endboss and initializes the walking animation and position.
     * 
     * The Endboss is initialized with a walking animation and a fixed position. It starts with
     * the first frame of the walking animation and loads the images for both the walking and
     * the first animation.
     */
    constructor() {
        super();
        
        // Load the first image of the walking animation
        this.loadImage(this.IMAGES_WALKING[0]);
        
        // Load the images for the walking and first animations
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FIRST_ANIMATION);

        // Set the fixed position of the Endboss
        this.x = 2000;  // Endboss has a fixed position
        this.y = 50;
        
        // Start the walking animation with a 200ms interval between frames
        this.startAnimation(this.IMAGES_WALKING, 200);
    }

    /**
     * Starts the first animation for the Endboss if the character reaches a certain position.
     * 
     * This method checks if the character's x position is less than -1440, and if so, it plays
     * the first animation for the Endboss (e.g., introduction animation).
     */
    endbossFirstAnimation() {
        if (this.world.charackter.x < -1440) {
            this.playAnimation(this.IMAGES_FIRST_ANIMATION);
        }
    }
}
