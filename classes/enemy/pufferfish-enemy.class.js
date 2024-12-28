/**
 * Represents a Pufferfish enemy in the game.
 * @extends {Enemy}
 */
class Pufferfish extends Enemy {
    IMAGES_ENEMY = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];

    /**
     * Creates an instance of the Pufferfish enemy, sets its image, position, and starts its animation.
     * 
     * The Pufferfish is initialized with a "dead" image, a random position, and an animation sequence for swimming.
     * The animation will cycle through the images in the `IMAGES_ENEMY` array.
     * Additionally, the Pufferfish starts moving left after its creation.
     */
    constructor(world) {
        super();
        this.loadImage('img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/3.png');
        this.world=world;
        this.setRandomPosition(1800, 250);
        this.loadImages(this.IMAGES_ENEMY);
        this.startAnimation(this.IMAGES_ENEMY, 1000);
        this.moveLeft();
    }
}

