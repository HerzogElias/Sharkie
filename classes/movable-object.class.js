class MovableObject {
    x = 50;
    y = 250;
    img;
    height=200;
    width=150;

    loadImage(path) {
        this.img = new Image();
        this.img.src= path;
    }

    moveRight() {
        console.log('moving right');
    }
    moveleft() { };
} 