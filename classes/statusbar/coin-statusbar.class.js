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
    percentage = 0;

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
        this.x = 20; 
        this.y = 80;   
        this.width = 200;  
        this.height = 60; 
        this.loadImages(this.IMAGES_STATUSBAR);
        this.setPercentage(this.percentage);   
    }
}