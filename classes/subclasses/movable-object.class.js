/**
 * Class representing a movable object in a game.
 * Inherits from `DrawableObject` and provides basic functionality 
 * for movement, collision detection, and handling energy and damage.
 */
class MovableObject extends DrawableObject {
    speed = 0.1;
    otherDirection = false;
    energy = 3000;
    lastHit = 0;
    offset = {
        top: 20,
        bottom: 5,
        left: 5,
        right: 20
    }; 

    /**
     * Checks if the current object is colliding with another object, considering offsets.
     * @param {MovableObject} mo - The other object to check for collision.
     * @returns {boolean} `true` if the objects are colliding, `false` otherwise.
     */
    isColiding(mo) {
        return (
            this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
            this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
            this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
            this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        );
    }

    /**
     * Reduces the object's energy by x. If the energy goes below 0, it is set to 0.
     * Updates the timestamp of the last hit.
     */
    hit(x) {
        this.energy -= x;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt.
     * The object is considered hurt if less than 1 seconds have passed since the last hit.
     * 
     * @returns {boolean} `true` if the object is hurt, `false` otherwise.
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000; // Convert to seconds
        return timePassed < 1;
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
