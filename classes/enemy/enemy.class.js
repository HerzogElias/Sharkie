/**
 * Represents an enemy in the game, extending the functionality of the `MovableObject` class.
 * Handles properties, random positioning, animations, and movement logic for enemies.
 * 
 * @extends MovableObject
 */
class Enemy extends MovableObject {
    width = 60;
    height = 60;
    speed = 0.15 + Math.random() * 0.35;

    /**
     * Sets a random position for the enemy within specified ranges.
     * 
     * @param {number} [xRange=1000] - The range of the x-coordinate.
     * @param {number} [yRange=250] - The range of the y-coordinate.
     */
    setRandomPosition(xRange = 1000, yRange = 250) {
        this.x = 200 + Math.random() * xRange;
        this.y = 50 + Math.random() * yRange;
    }

    /**
     * Starts an animation for the enemy using the specified image set.
     * 
     * @param {string[]} imageArray - Array of image paths for the animation.
     * @param {number} [interval=1000] - The interval time in milliseconds between frame changes.
     */
    startAnimation(imageArray, interval = 1000) {
        setInterval(() => {
            this.playAnimation(imageArray);
        }, interval);
    }

    /**
     * Moves the enemy to the left continuously.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
