/**
 * Represents the status bar for the character, displaying the character's life status.
 * @extends StatusBar
 */
class StatusbarCarackter extends StatusBar {
    /**
     * Current percentage of the character's life displayed on the status bar.
     * @type {number}
     */
    percentage = 100;

    /**
     * Array of image paths for different life states of the status bar.
     * @type {string[]}
     */
    IMAGES_STATUSBAR = [
        'img/4. Marcadores/Purple/life0.png',
        'img/4. Marcadores/Purple/life20.png',
        'img/4. Marcadores/Purple/life40.png',
        'img/4. Marcadores/Purple/life60.png',
        'img/4. Marcadores/Purple/life80.png',
        'img/4. Marcadores/Purple/life100.png'
    ];

    /**
     * Creates an instance of `StatusbarCarackter`.
     * Sets the position, size, and loads the images for the status bar.
     * Initializes the percentage display.
     */
    constructor() {
        super();
        this.x = 20;
        this.y = 5;
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(this.percentage);
    }
}


