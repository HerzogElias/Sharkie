/**
 * Represents a gift object in the game, extending the functionality of the `MovableObject` class.
 * This class handles the properties and behavior of collectible gifts, including their appearance,
 * position, and movement speed.
 * 
 * @extends MovableObject
 */
class Gift extends MovableObject {
    width = 60;
    height = 60;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    x = 200 + Math.random() * 1000;
    y = 50 + Math.random() * 250;
    speed = 0.15 + Math.random() * 0.13;

    IMAGES_GIFT = [
        'img/4. Marcadores/Posiขn/Dark_Left.png',
        'img/4. Marcadores/Posiขn/Dark_Right.png'
    ];
    /**
     * Constructs a new `Gift` object.
     * Sets a random position and speed for the gift, and preloads its appearance images.
     */
    constructor() {
        super().loadImage('img/4. Marcadores/Posiขn/Dark_Right.png');
        this.loadImages(this.IMAGES_GIFT);
    }
}
