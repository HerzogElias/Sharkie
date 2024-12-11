/**
 * Represents a gift object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible gifts, including their appearance,
 * position, and movement speed.
 * 
 * @extends MovableObject
 */
class Gift extends MovableObject {
    /**
     * @property {number} width - The width of the gift in pixels.
     * @default 60
     */
    width = 60;

    /**
     * @property {number} height - The height of the gift in pixels.
     * @default 60
     */
    height = 60;

    /**
     * @property {object} offset - Defines the hitbox offset for the gift.
     * @property {number} offset.top - Top offset in pixels.
     * @property {number} offset.bottom - Bottom offset in pixels.
     * @property {number} offset.left - Left offset in pixels.
     * @property {number} offset.right - Right offset in pixels.
     * @default { top: 0, bottom: 0, left: 0, right: 0 }
     */
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };

    /**
     * @property {string[]} IMAGES_GIFT - Array of image paths used for the appearance of the gift.
     */
    IMAGES_GIFT = [
        'img/4. Marcadores/Posiขn/Dark_Left.png',
        'img/4. Marcadores/Posiขn/Dark_Right.png'
    ];

    /**
     * @property {number} x - The x-coordinate of the gift's position.
     * Initialized to a random value between 200 and 1200.
     */
    x = 200 + Math.random() * 1000;

    /**
     * @property {number} y - The y-coordinate of the gift's position.
     * Initialized to a random value between 50 and 300.
     */
    y = 50 + Math.random() * 250;

    /**
     * @property {number} speed - The speed of the gift's movement.
     * Initialized to a random value between 0.15 and 0.28.
     */
    speed = 0.15 + Math.random() * 0.13;

    /**
     * Constructs a new `Gift` object.
     * Sets a random position and speed for the gift, and preloads its appearance images.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/Posiขn/Dark_Right.png');
        this.loadImages(this.IMAGES_GIFT);
    }
}
