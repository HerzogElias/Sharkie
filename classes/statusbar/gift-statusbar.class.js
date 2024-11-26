/**
 * Represents a status bar that displays the "gift" or "poisoned bubbles" state visually.
 * 
 * The `GiftStatusbar` class extends `StatusBar` and customizes it to represent
 * a specific type of status bar with unique images. It initializes its position,
 * size, and images upon creation.
 * 
 * @extends StatusBar
 */
class GiftStatusbar extends StatusBar {
    /**
     * The percentage value indicating the current fill level of the status bar.
     * Default is 0%.
     */
    percentage = 0;

    /**
     * An array of image paths representing the different states of the status bar,
     * ranging from empty (0%) to full (100%).
     */
    IMAGES_STATUSBAR = [
        'img/4. Marcadores/green/poisoned bubbles/0.png',
        'img/4. Marcadores/green/poisoned bubbles/20.png',
        'img/4. Marcadores/green/poisoned bubbles/40.png',
        'img/4. Marcadores/green/poisoned bubbles/60.png',
        'img/4. Marcadores/green/poisoned bubbles/80.png',
        'img/4. Marcadores/green/poisoned bubbles/100.png'
    ];

    /**
     * Creates a new `GiftStatusbar` instance.
     * 
     * The constructor initializes the position, size, and default state of the
     * status bar. It also loads the image assets and sets the initial percentage value.
     */
    constructor() {
        super();
        this.x = 20; // The x-coordinate position of the status bar.
        this.y = 40; // The y-coordinate position of the status bar.
        this.width = 200; // The width of the status bar.
        this.height = 60; // The height of the status bar.
        this.loadImages(this.IMAGES_STATUSBAR); // Preloads all status bar images.
        this.setPercentage(this.percentage); // Sets the initial percentage (default is 0%).
    }
}

