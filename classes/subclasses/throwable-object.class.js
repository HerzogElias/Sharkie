/**
 * Class representing a throwable object, such as a bubble, in a game.
 * Inherits from the `MovableObject` class and adds functionality for throwing 
 * the object with simulated gravity and horizontal movement.
 */
class ThrowableObject extends MovableObject {
    /**
     * Width of the throwable object in pixels.
     * @type {number}
     */
    width = 30;

    /**
     * Height of the throwable object in pixels.
     * @type {number}
     */
    height = 30;

    /**
     * Initial speed of the object in the Y direction when thrown.
     * @type {number}
     */
    bubbleSpeedY = 15;

    /**
     * Gravitational force applied to the object.
     * @type {number}
     */
    gravity = 0.5;

    /**
     * Current speed of the object in the Y direction.
     * @type {number}
     */
    SpeedY = 0;

    /**
     * Acceleration of the object.
     * @type {number}
     */
    acceleration = 2;

    /**
     * Creates an instance of `ThrowableObject` and initializes its position 
     * and direction.
     * 
     * @param {number} x - The initial X position of the object.
     * @param {number} y - The initial Y position of the object.
     * @param {boolean} otherDirection - Determines if the object moves in the opposite direction horizontally.
     */
    constructor(x, y, otherDirection, mo) {
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = mo.x;
        this.y = mo.y;
        this.otherDirection = otherDirection;
        this.throw(x, y);
    }

    /**
     * Throws the object by setting its initial position and applying gravity.
     * 
     * @param {number} x - The X position where the object is thrown.
     * @param {number} y - The Y position where the object is thrown.
     */
    throw(x, y) {
        this.x = x;
        this.y = y;
        this.SpeedY = -15;
        this.applyGravityY();
        this.applyGravityX();
    }

    /**
     * Applies gravity in the horizontal direction, moving the object left or right
     * depending on its direction.
     */
    applyGravityX() {
        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 5; // Moves left if otherDirection is true.
            } else {
                this.x += 5; // Moves right otherwise.
            }
        }, 25);
    }

    /**
  * Applies gravity in the vertical direction, updating the Y position and 
  * adjusting the vertical speed over time.
  */
    applyGravityY() {
        setInterval(() => {
            this.y += this.SpeedY;

            // Adjust vertical speed depending on direction
            this.SpeedY += this.otherDirection ? -this.gravity : this.gravity;

            // Stops vertical movement if the object reaches or exceeds a Y position of 420
            if (this.y >= 420) {
                this.SpeedY = 0;
            }
        }, 1000 / 25); // Update 25 times per second
    }

}

