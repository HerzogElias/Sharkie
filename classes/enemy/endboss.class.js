/**
 * Represents the Endboss in the game.
 * @extends {Enemy}
 */
class Endboss extends Enemy {
    firstAnimationPlayed = false;   
    isAnimated =false; 
    i = 0; 
    width = 350;
    world;
    height = 350;
    offset = {
        top: 150,
        bottom: 20,
        left: 5,
        right: 20
    };

    IMAGES_WALKING = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png'
    ];

    IMAGES_FIRST_ANIMATION = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];


    /**
     * Creates an instance of the Endboss and initializes its properties, animations, and position.
     * 
     * The Endboss is initialized with predefined animations and a fixed position. The walking 
     * animation is loaded and automatically started upon creation.
     */
    constructor() {
        super();
        this.speed = 15;
        this.loadImage(this.IMAGES_FIRST_ANIMATION[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FIRST_ANIMATION);
        this.x = 2000; // Endboss has a fixed position
        this.y = 50;    
        this.moveLeft();
    }

    /**
     * Moves the Endboss to the left.
     */
    moveLeft() {
        setInterval(() => {
            if (this.firstAnimationPlayed){
                this.x -= this.speed;
            }
        }, 400);
    }

    /**
     * Animates the Endboss, playing its introduction animation first, followed by its walking animation.
     */
    animate() {
        this.isAnimated=true;
        setInterval(() => {
            if (this.currentImage < this.IMAGES_FIRST_ANIMATION.length) {
                this.playAnimation(this.IMAGES_FIRST_ANIMATION);
            } else {
                this.firstAnimationPlayed = true;
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 150);
    }
}
