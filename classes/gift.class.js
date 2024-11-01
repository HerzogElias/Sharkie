class Gift extends MovableObject {
    width = 60;
    height = 60;

    IMAGES_GIFT =
        [
            'img/4. Marcadores/Posiขn/Dark_Left.png',
            'img/4. Marcadores/Posiขn/Dark_Right.png'
        ];


    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Dead/green/g1.png');
        this.x = 200 + Math.random() * 1000;
        this.y = 50 + Math.random() * 250;
        this.speed = 0.15 + Math.random() * 0.13;
        this.loadImages(this.IMAGES_GIFT);
    }
}