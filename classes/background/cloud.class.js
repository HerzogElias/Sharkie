/**
 * Represents a cloud in the game, which moves from right to left.
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    /**
     * The x position of the cloud, randomly generated between 150 and 650.
     * @type {number}
     */
    x = 150 + Math.random() * 500;

    /**
     * The y position of the cloud.
     * @type {number}
     */
    y = 25;

    /**
     * The width of the cloud.
     * @type {number}
     */
    width = 350;

    /**
     * The height of the cloud.
     * @type {number}
     */
    height = 250;

    /**
     * Creates an instance of a cloud, loading its image and starting its animation.
     */
    constructor() {
        super().loadImage('./img/3. Background/Legacy/Layers/1. Light/2.png');
       
    }

    /**
     * Starts the cloud's animation by making it move to the left.
     */
   
}

