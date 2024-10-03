let canves;
let ctx;
let charackter =new MovableObject();
 
function init() {
    canves=document.getElementById('canvas');
    ctx =canves.getContext('2d)');
    console.log('My charackter is', charackter);
}