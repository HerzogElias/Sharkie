/**
 * Represents a JellyFish enemy in the game.
 * @extends {Enemy}
 */
class JellyFish extends Enemy {
    /**
     * Array of image paths for the JellyFish enemy in various animation states.
     * @type {string[]}
     */
    IMAGES_ENEMY = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];

    /**
     * Creates an instance of the JellyFish enemy, sets its image, position, and starts its animation.
     * 
     * The JellyFish is given an initial image, a random position on the screen, and an animation sequence.
     * The animation will cycle through the images in the `IMAGES_ENEMY` array.
     */
    constructor() {
        super();
        // Load the dead image for the JellyFish
        this.loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        
        // Set a random position on the screen
        this.setRandomPosition(1000, 250);
        
        // Load the images for the animation of the JellyFish
        this.loadImages(this.IMAGES_ENEMY);
        
        // Start the animation with a 1-second interval
        this.startAnimation(this.IMAGES_ENEMY, 1000);
    }
}
