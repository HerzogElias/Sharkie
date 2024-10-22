class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 50;
    y = 250;
    height =150;
    width =100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    } 

    drawBorder(ctx) {
        if (this instanceof Charackter || this instanceof Pufferfish || this instanceof JellyFish) {
            ctx.beginPath();
            ctx.lineWidth = '5'
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}