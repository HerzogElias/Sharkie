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
    percentage = 0;

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
        this.x = 20; 
        this.y = 40; 
        this.width = 200; 
        this.height = 60; 
        this.loadImages(this.IMAGES_STATUSBAR); 
        this.setPercentage(this.percentage); 
    }
}

