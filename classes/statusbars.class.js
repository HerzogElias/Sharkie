class Statusbars extends DrawableObject {
    percentage = 100;

    IMAGES_LIFE_STATUSBAR = [
        'img/4. Marcadores/Purple/life0.png',
        'img/4. Marcadores/Purple/life20.png',
        'img/4. Marcadores/Purple/life40.png',
        'img/4. Marcadores/Purple/life60.png',
        'img/4. Marcadores/Purple/life80.png',
        'img/4. Marcadores/Purple/life100.png'
    ];

   
    constructor() {
        super();
        this.x = 20;
        this.y = 5;
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_LIFE_STATUSBAR);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE_STATUSBAR[this.resolveImageIndex()];
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
