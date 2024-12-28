/**
 * Represents a coin object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible coins, including their appearance,
 * position, and animations.
 * 
 * @extends MovableObject
 */
class Coins extends MovableObject {
    width = 40;
    height = 40;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    x = 200 + Math.random() * 1000;
    y = 50 + Math.random() * 250;

    IMAGE_COINS = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ];

    /**
     * Constructs a new `Coins` object.
     * Sets a random position for the coin and preloads its animation images.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGE_COINS);
    }
}
