let canves;
let world;
 
function init() {
    let canvas = document.getElementById('canvas');
    world= new World(canvas);   
    let ctx = canvas.getContext('2d'); // Korrigierte Anführungszeichen und "canvas"
    
    console.log('My character is', world.charackter);
}
