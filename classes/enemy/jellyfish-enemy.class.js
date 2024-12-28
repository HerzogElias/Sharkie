/**
 * Represents a JellyFish enemy in the game.
 * @extends {Enemy}
 */
class JellyFish extends Enemy {
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
    constructor(world) {
        super();
        this.loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        this.world=world;
        this.setRandomPosition(1000, 250);
        this.loadImages(this.IMAGES_ENEMY);
        this.startAnimation(this.IMAGES_ENEMY, 1000);
    }
}
