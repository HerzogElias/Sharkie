class StatusbarCoin extends DrawableObject {
    percentage = 0;

    IMAGES_COIN_STATUSBAR = [
        'img/4. Marcadores/orange/0_coin.png',
        'img/4. Marcadores/orange/20_coin.png',
        'img/4. Marcadores/orange/40_coin.png',
        'img/4. Marcadores/orange/60_coin.png',
        'img/4. Marcadores/orange/80_coin.png',
        'img/4. Marcadores/orange/100_coin.png'
    ];

   
    constructor() {
        super();
        this.x =20;
        this.y = 80;
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_COIN_STATUSBAR);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COIN_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) return 5;
        if (this.percentage > 80) return 4;
        if (this.percentage > 60) return 3;
        if (this.percentage > 40) return 2;
        if (this.percentage > 20) return 1;
        return 0;
    }
}
