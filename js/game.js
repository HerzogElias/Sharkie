/**
 * The main canvas element of the game.
 * @type {HTMLCanvasElement}
 */
let canves;

/**
 * The main world object representing the game state and interactions.
 * @type {World}
 */
let world;

/**
 * Object representing the state of the keyboard inputs.
 * @type {Keyboard}
 */
let keyboard = new Keyboard();

/**
 * Indicates whether the sound is currently on or muted.
 * @type {boolean}
 */
let soundOn = false;

/**
 * Initializes the game by setting up the canvas, world, and event listeners.
 */
function init() {
    let canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    let ctx = canvas.getContext('2d');
    soundOn = false;
    world.backgroundSound.play();
    world.backgroundSound.loop = true;
    allsoundsOff(soundOn);
    showGame();
    setupTouchControls();
}

/**
 * Displays the Impressum (about/legal) section and hides other sections.
 */
function showImpressum() {
    document.getElementById('impressum').classList.remove('dnone');
    document.getElementById('canvas-container').classList.add('dnone');
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}


function showUserStory() {
    document.getElementById('userStory').classList.remove('dnone');
    document.getElementById('canvas-container').classList.add('dnone');
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

/**
 * Toggles all game sounds on or off based on the `soundOn` state.
 * @param {boolean} soundOn - Whether sounds should be muted (true) or unmuted (false).
 */
function allsoundsOff(soundOn) {
    world.backgroundSound.muted = soundOn;
    world.charackterHurtSound.muted = soundOn;
    world.collectiingCoinAndGiftSound.muted = soundOn;
    world.endbossHurtSound.muted = soundOn;
    world.charackterSwimmingSound.muted = soundOn;
    world.charackterThrowSound.muted = soundOn;
    world.characterWonSound.muted = soundOn;
    world.charackterLostSound.muted = soundOn;
}

/**
 * Adds event listeners for keyboard controls.
 */
window.addEventListener("keydown", (e) => {
    if (e.keyCode === 32) keyboard.SPACE = true;
    if (e.keyCode === 37) keyboard.LEFT = true;
    if (e.keyCode === 38) keyboard.UP = true;
    if (e.keyCode === 39) keyboard.RIGHT = true;
    if (e.keyCode === 40) keyboard.DOWN = true;
    if (e.keyCode === 68) keyboard.D = true;
});

/**
 * Removes the keydown state for keyboard controls when keys are released.
 */
window.addEventListener("keyup", (e) => {
    if (e.keyCode === 32) keyboard.SPACE = false;
    if (e.keyCode === 37) keyboard.LEFT = false;
    if (e.keyCode === 38) keyboard.UP = false;
    if (e.keyCode === 39) keyboard.RIGHT = false;
    if (e.keyCode === 40) keyboard.DOWN = false;
    if (e.keyCode === 68) keyboard.D = false;
});

/**
 * Sets up touch controls for mobile devices.
 */
function setupTouchControls() {
    // LEFT
    document.getElementById('left').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('left').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    // RIGHT
    document.getElementById('right').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('right').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    // UP
    document.getElementById('up').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('up').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.UP = false;
    });

    // DOWN
    document.getElementById('down').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('down').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });

    // D
    document.getElementById('throw').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });

    // Finslap
    document.getElementById('finsalp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });
    document.getElementById('finsalp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

}

/**
 * Displays the start screen and hides other game screens.
 */
function showStartscreen() {
    document.getElementById('canvas-container').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

/**
 * Displays the game screen and hides other screens.
 */
function showGame() {
    document.getElementById('canvas-container').classList.remove('dnone');
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

/**
 * Stops the game and returns to the start screen.
 */
function stopGame() {
    showStartscreen();
    Level1 = newLevel();
}

/**
 * Starts a new game by reinitializing the game state.
 */
function newGame() {
    Level1 = newLevel();
    init();
}

/**
 * Toggles the mute state of the game sounds.
 */
function toggleMute() {
    soundOn = !soundOn;
    allsoundsOff(soundOn);

    if (soundOn){
        document.getElementById('mutebutton').src = "img/7.Myown/volume-mute.png";
        document.getElementById('mutebutton-d').src="img/7.Myown/volume-mute.png";
    } else {
        document.getElementById('mutebutton').src= "img/7.Myown/volume.png";
        document.getElementById('mutebutton-d').src="img/7.Myown/volume.png";
    }
}

