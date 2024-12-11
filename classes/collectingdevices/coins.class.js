/**
 * Represents a coin object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible coins, including their appearance,
 * position, and animations.
 * 
 * @extends MovableObject
 */
class Coins extends MovableObject {
    /**
     * @property {number} width - The width of the coin in pixels.
     * @default 40
     */
    width = 40;

    /**
     * @property {number} height - The height of the coin in pixels.
     * @default 40
     */
    height = 40;

    /**
     * @property {object} offset - Defines the hitbox offset for the coin.
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
     * @property {string[]} IMAGE_COINS - Array of image paths used for the coin's animation.
     */
    IMAGE_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    /**
     * @property {number} x - The x-coordinate of the coin's position.
     * Initialized to a random value between 200 and 1200.
     */
    x = 200 + Math.random() * 1000;

    /**
     * @property {number} y - The y-coordinate of the coin's position.
     * Initialized to a random value between 50 and 300.
     */
    y = 50 + Math.random() * 250;

    /**
     * Constructs a new `Coins` object.
     * Sets a random position for the coin and preloads its animation images.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGE_COINS);
    }
}
