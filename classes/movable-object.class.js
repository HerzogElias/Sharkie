class MovableObject {
    x = 50;
    y = 250;
    img;
    height=200;
    width=150;
    imageCache ={};

    loadImage(path) {
        this.img = new Image();
        this.img.src= path;
    }


    loadImages(arr){
        arr.forEach(path => {
            let img= new Image();
            img.src=path;
            this.imageCache[path]=img;
        });
    }
    moveRight() {
        console.log('moving right');
    }
    moveleft() { };
} 