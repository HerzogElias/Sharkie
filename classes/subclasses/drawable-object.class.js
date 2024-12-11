/**
 * Class representing an object that can be drawn onto a canvas.
 * This class provides functionality for loading images, drawing the object, 
 * and drawing a border around the object for debugging or visual aid.
 */
class DrawableObject {
    /**
     * The image to be drawn for this object.
     * @type {HTMLImageElement}
     */
    img;

    /**
     * A cache of loaded images, where the key is the image path and the value is the image element.
     * @type {Object.<string, HTMLImageElement>}
     */
    imageCache = {};

    /**
     * The current image index for animations or cycling images.
     * @type {number}
     */
    currentImage = 0;

    /**
     * The X-coordinate of the object on the canvas.
     * @type {number}
     */
    x = 50;

    /**
     * The Y-coordinate of the object on the canvas.
     * @type {number}
     */
    y = 250;

    /**
     * The height of the object.
     * @type {number}
     */
    height = 150;

    /**
     * The width of the object.
     * @type {number}
     */
    width = 100;

    /**
     * Loads an image from the specified path and assigns it to the object's `img` property.
     * 
     * @param {string} path - The path to the image file to be loaded.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Draws the object's image onto a canvas context at its current position and with its current size.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D rendering context to draw the image on.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Loads multiple images from an array of paths and caches them in `imageCache`.
     * Each image is stored with its path as the key and the `HTMLImageElement` as the value.
     * 
     * @param {string[]} arr - An array of image file paths to be loaded and cached.
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /*
    drawFrame(ctx) {
        if (this instanceof Pufferfish || this instanceof Charackter || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '4';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();   
        }
    }*/


}
