let canves;
let world;
let keyboard = new Keyboard();
let soundOn = false;

function init() {
    let canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    let ctx = canvas.getContext('2d');
    console.log('My character is', world.charackter);
    soundOn=false;
    world.backgroundSound.play()
    allsoundsOff(soundOn);
    showGame();
    setupTouchControls();
}

function allsoundsOff(soundOn) {
    world.backgroundSound.muted=soundOn;
    world.charackterHurtSound.muted = soundOn;
    world.collectiingCoinAndGiftSound.muted = soundOn;
    world.endbossHurtSound.muted = soundOn;
    world.charackterSwimmingSound.muted = soundOn;  
    world.charackterThrowSound.muted = soundOn;  
    world.characterWonSound.muted=soundOn;
    world.charackterLostSound.muted=soundOn;
}

window.addEventListener("keydown", (e) => {
    /* console.log(e)*/

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    /*    console.log(e)*/

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});

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
        console.log(keyboard.D)
        keyboard.D = true;
    });
    document.getElementById('throw').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}



function showStartscreen() {
    document.getElementById('canvas-container').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

function showGame() {
    console.log('show game funktioniert')
    document.getElementById('canvas-container').classList.remove('dnone');
    document.getElementById('startscreen').classList.add('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

function stopGame(){
    console.log('go to start');
    showStartscreen();
    Level1= newLevel();
}


function toggleMute(){
    soundOn=!soundOn;
    allsoundsOff(soundOn);
}

