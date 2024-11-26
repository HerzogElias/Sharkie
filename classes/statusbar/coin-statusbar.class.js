/**
 * StatusbarCoin represents a status bar that tracks the collection of coins in the game.
 * It displays the current coin collection status based on a percentage, with different images 
 * representing the various states of the coin counter.
 * 
 * This class extends the `StatusBar` class and overrides the constructor to define the position,
 * size, and specific images for the coin status bar.
 * 
 * @extends StatusBar
 */
class StatusbarCoin extends StatusBar {
    /**
     * The percentage of coins collected, displayed on the status bar.
     * The default value is 0, indicating no coins have been collected yet.
     * 
     * @type {number}
     */
    percentage = 0;

    /**
     * An array of image paths representing the different stages of the coin collection status.
     * The images change based on the `percentage` value, which corresponds to the amount of coins collected.
     * 
     * @type {string[]}
     */
    IMAGES_STATUSBAR = [
        'img/4. Marcadores/orange/0_coin.png',
        'img/4. Marcadores/orange/20_coin.png',
        'img/4. Marcadores/orange/40_coin.png',
        'img/4. Marcadores/orange/60_coin.png',
        'img/4. Marcadores/orange/80_coin.png',
        'img/4. Marcadores/orange/100_coin.png'
    ];

    /**
     * Constructor initializes the position, size, and images for the coin status bar,
     * and sets the initial percentage value to represent the coin collection progress.
     * 
     * @constructor
     */
    constructor() {
        super();
        this.x = 20;   // X position of the coin status bar
        this.y = 80;   // Y position of the coin status bar
        this.width = 200;  // Width of the status bar
        this.height = 60;  // Height of the status bar
        this.loadImages(this.IMAGES_STATUSBAR);  // Loads the images for the status bar
        this.setPercentage(this.percentage);   // Sets the initial percentage for the status bar
    }
}