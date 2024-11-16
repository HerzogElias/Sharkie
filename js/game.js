let canves;
let world;
let keyboard = new Keyboard();

function init(world) {
    let canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    let ctx = canvas.getContext('2d');
    console.log('My character is', world.charackter);
    showGame();
    world.musicManager.backgroundmusic.play();
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

function showStartscreen() {
    document.getElementById('canvas-container').classList.add('dnone');
    document.getElementById('startscreen').classList.remove('dnone');
    document.getElementById('youwon').classList.add('dnone');
    document.getElementById('youlost').classList.add('dnone');
}

function showGame() {
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



