let canves;
let world;
let keyboard = new Keyboard();

function init() {
    let canvas = document.getElementById('canvas');
    world= new World(canvas, keyboard);   
    let ctx = canvas.getContext('2d'); // Korrigierte Anführungszeichen und "canvas"
    
    console.log('My character is', world.charackter);
}
window.addEventListener("keydown",(e) => {
   /* console.log(e)*/

    if (e.keyCode == 32 ) {
        keyboard.SPACE=true;
    }

    if (e.keyCode == 37 ) {
        keyboard.LEFT=true;
    }

    if (e.keyCode == 38 ) {
        keyboard.UP=true;
    }

    if (e.keyCode == 39 ) {
        keyboard.RIGHT=true;
    }
    if (e.keyCode == 40 ) {
        keyboard.DOWN=true;
    }

    if (e.keyCode ==68) {
        keyboard.D=true;
    }
});


window.addEventListener("keyup",(e) => {
/*    console.log(e)*/

    if (e.keyCode == 32 ) {
        keyboard.SPACE=false;
    }

    if (e.keyCode == 37 ) {
        keyboard.LEFT=false;
    }

    if (e.keyCode == 38 ) {
        keyboard.UP=false;
    }

    if (e.keyCode == 39 ) {
        keyboard.RIGHT=false;
    }
    if (e.keyCode == 40 ) {
        keyboard.DOWN=false;
    }

    if (e.keyCode ==68) {
        keyboard.D=false;
    }
});

