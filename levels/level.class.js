/**
 * Class representing a game level, containing various game objects such as enemies, 
 * background elements, and collectibles. This class organizes all the necessary 
 * components that make up the level.
 */
class level {
    /**
     * The jellyfish entities in the level.
     * @type {Array} 
     */
    jellyFish;

    /**
     * The pufferfish entities in the level.
     * @type {Array}
     */
    pufferfish;

    /**
     * The end boss entity of the level.
     * @type {Object}
     */
    Endboss;

    /**
     * The clouds in the level.
     * @type {Array}
     */
    clouds;

    /**
     * The background objects in the level (e.g., enemys, endboss, or collectable coins).
     * @type {Array}
     */
    backgroundObjects;

    /**
     * The collectible coins in the level.
     * @type {Array}
     */
    coins;

    /**
     * The gift or special object in the level.
     * @type {Object}
     */
    gift;

    /**
     * The X-coordinate where the level ends.
     * @type {number}
     */
    level_x_End = 2200;

    /**
     * Creates an instance of the `level` class with all the necessary game objects.
     * 
     * @param {Array} jellyFish - The jellyfish entities in the level.
     * @param {Array} pufferfish - The pufferfish entities in the level.
     * @param {Object} Endboss - The end boss entity in the level.
     * @param {Array} clouds - The clouds objects in the level.
     * @param {Array} backgroundObjects - The background objects (e.g., platforms, obstacles).
     * @param {Array} coins - The collectible coins in the level.
     * @param {Object} gift - The gift or special object in the level.
     */
    constructor(jellyFish, pufferfish, Endboss, clouds, backgroundObjects, coins, gift) {
        this.jellyFish = jellyFish;
        this.pufferfish = pufferfish;
        this.Endboss = Endboss;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.gift = gift;
    }
}
