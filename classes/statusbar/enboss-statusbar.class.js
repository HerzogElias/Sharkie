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
    percentage = 100;

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
        this.x = 400;  
        this.y = 5;    
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_STATUSBAR);  
        this.setPercentage(this.percentage);  
    }

    /**
     * Displays the "Winner" screen when the final boss is defeated.
     * This hides the canvas and start screens and shows the "You Won" screen.
     * 
     */
    showWinnerScreen() {
        document.getElementById('canvas-container').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }
}
