/**
 * Class representing a movable object in a game.
 * Inherits from `DrawableObject` and provides basic functionality 
 * for movement, collision detection, and handling energy and damage.
 */
class MovableObject extends DrawableObject {
    /**
     * The speed at which the object moves.
     * @type {number}
     */
    speed = 0.1;

    /**
     * A boolean that determines the direction of movement. 
     * `false` represents normal direction, `true` represents the opposite direction.
     * @type {boolean}
     */
    otherDirection = false;

    /**
     * The energy level of the object. When energy reaches 0, the object is considered "dead."
     * @type {number}
     */
    energy = 3000;

    /**
     * The timestamp of the last time the object was hit.
     * @type {number}
     */
    lastHit = 0;

    /**
     * Checks if the current object is colliding with another object.
     * A collision is detected when the bounding boxes of both objects overlap.
     * 
     * @param {MovableObject} mo - The other object to check for collision.
     * @returns {boolean} `true` if the objects are colliding, `false` otherwise.
     */
    isColiding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    /**
     * Reduces the object's energy by 500. If the energy goes below 0, it is set to 0.
     * Updates the timestamp of the last hit.
     */
    hit() {
        this.energy -= 500;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt.
     * The object is considered hurt if less than 2 seconds have passed since the last hit.
     * 
     * @returns {boolean} `true` if the object is hurt, `false` otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // Convert to seconds
        return timePassed < 2;
    }

    /**
     * Checks if the object is "dead."
     * The object is considered dead if its energy is 0.
     * 
     * @returns {boolean} `true` if the object is dead, `false` otherwise.
     */
    isDeat() {
        return this.energy == 0;
    }
    
    /**
     * Moves the object to the left by its speed value at a rate of 60 frames per second.
     * This method continuously moves the object by setting an interval.
     */
    moveleft() {
        setInterval(() => {
            this.x -= this.speed; // Decrease X to move left
        }, 1000 / 60); // Update 60 times per second
    }

    /**
     * Plays an animation by cycling through a set of images.
     * The current image is selected based on the `currentImage` index, which is then incremented.
     * 
     * @param {string[]} images - An array of image paths representing the animation frames.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // Get the current image index
        let path = images[i]; // Select the corresponding image path
        this.img = this.imageCache[path]; // Set the image from the cache
        this.currentImage++; // Move to the next image in the animation sequence
    }
} 