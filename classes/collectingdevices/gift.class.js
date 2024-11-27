/**
 * Represents a gift object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible gifts, including their appearance, position, and speed.
 */
class Gift extends MovableObject {
    /**
     * The width of the gift.
     * @type {number}
     */
    width = 60;

    /**
     * The height of the gift.
     * @type {number}
     */
    height = 60;

    /**
     * Array of image paths used for the appearance of the gift.
     * @type {string[]}
     */
    IMAGES_GIFT = [
        'img/4. Marcadores/Posiขn/Dark_Left.png',
        'img/4. Marcadores/Posiขn/Dark_Right.png'
    ];

    /**
     * Constructs a new `Gift` object.
     * Initializes the gift's position at a random `x` and `y` coordinate, sets a random speed,
     * and preloads the gift images.
     */
    constructor() {
        // Load the default image for the gift.
        super().loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        
        /**
         * The x-coordinate of the gift, initialized to a random value within a range.
         * @type {number}
         */
        this.x = 200 + Math.random() * 1000;

        /**
         * The y-coordinate of the gift, initialized to a random value within a range.
         * @type {number}
         */
        this.y = 50 + Math.random() * 250;

        /**
         * The speed of the gift, initialized to a random value within a range.
         * @type {number}
         */
        this.speed = 0.15 + Math.random() * 0.13;

        // Preload all images in IMAGES_GIFT for potential animations or appearance changes.
        this.loadImages(this.IMAGES_GIFT);
    }
}
