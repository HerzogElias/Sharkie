/**
 * EndbossStatusbar represents the status bar for the final boss in the game.
 * It displays the current status of the final boss based on a percentage.
 * The status bar is represented by an array of images that change depending on the percentage value.
 * 
 * This class extends the `StatusBar` class and overrides the constructor and specific methods
 * to define the behavior and appearance of the final boss's status bar.
 * 
 * @extends StatusBar
 */
class EndbossStatusbar extends StatusBar {
    /**
     * The percentage of the final boss's health, displayed on the status bar.
     * The default value is 100, which means the final boss is at full health.
     * 
     * @type {number}
     */
    percentage = 100;

    /**
     * An array of image paths representing the different stages of the status bar.
     * These images are selected based on the `percentage` value.
     * 
     * @type {string[]}
     */
    IMAGES_STATUSBAR = [
        'img/7.Myown/statusbar/0.png',
        'img/7.Myown/statusbar/20.png',
        'img/7.Myown/statusbar/40.png',
        'img/7.Myown/statusbar/60.png',
        'img/7.Myown/statusbar/80.png',
        'img/7.Myown/statusbar/100.png',
    ];

    /**
     * Constructor initializes the position, size, and images for the status bar,
     * and sets the initial percentage value for the final boss.
     * 
     * @constructor
     */
    constructor() {
        super();
        this.x = 500;  // X position of the status bar
        this.y = 5;    // Y position of the status bar
        this.width = 200;  // Width of the status bar
        this.height = 60;  // Height of the status bar
        this.loadImages(this.IMAGES_STATUSBAR);  // Loads the images for the status bar
        this.setPercentage(this.percentage);  // Sets the initial percentage for the status bar
    }

    /**
     * Displays the "Winner" screen when the final boss is defeated.
     * This hides the canvas and start screens and shows the "You Won" screen.
     * 
     * @method
     */
    showWinnerScreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }
}
