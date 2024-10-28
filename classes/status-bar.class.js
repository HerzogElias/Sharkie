class Statusbar extends DrawableObject {
    IMAGES_LIFE_STATUSBAR = [
        'img/4. Marcadores/Purple/life0.png',
        'img/4. Marcadores/Purple/life20.png',
        'img/4. Marcadores/Purple/life40.png',
        'img/4. Marcadores/Purple/life60.png',
        'img/4. Marcadores/Purple/life80.png',
        'img/4. Marcadores/Purple/life100.png'
    ];

    IMAGES_COINS_STATUSBAR = 
    [
        'img/4. Marcadores/green/Coin/0.png',
        'img/4. Marcadores/green/Coin/20.png',
        'img/4. Marcadores/green/Coin/40.png',
        'img/4. Marcadores/green/Coin/60.png',
        'img/4. Marcadores/green/Coin/80.png',
        'img/4. Marcadores/green/Coin/100.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES_LIFE_STATUSBAR);
        this.loadImages(this.IMAGES_COINS_STATUSBAR);
        this.x=20;
        this.y=10;
        this.width=200;
        this.height=60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path =this.IMAGES_LIFE_STATUSBAR[this.resolveImageIndex()];
        this.img=this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}