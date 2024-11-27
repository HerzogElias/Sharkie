/**
 * Represents a coin object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible coins, including their appearance and position.
 */
class Coins extends MovableObject {
    /**
     * The width of the coin.
     * @type {number}
     */
    width = 40;

    /**
     * The height of the coin.
     * @type {number}
     */
    height = 40;

    /**
     * Array of image paths used for the animation of the coin.
     * @type {string[]}
     */
    IMAGE_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    /**
     * Constructs a new `Coins` object.
     * Initializes the coin's position at a random `x` and `y` coordinate 
     * and preloads the animation images.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        
        /**
         * The x-coordinate of the coin, initialized to a random value within a range.
         * @type {number}
         */
        this.x = 200 + Math.random() * 1000;

        /**
         * The y-coordinate of the coin, initialized to a random value within a range.
         * @type {number}
         */
        this.y = 50 + Math.random() * 250;

        // Preload all images in IMAGE_COINS for animation.
        this.loadImages(this.IMAGE_COINS);
    }
}
