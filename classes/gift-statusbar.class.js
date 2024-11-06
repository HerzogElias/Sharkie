class GiftStatusbar extends DrawableObject {
    percentage = 0;

    IMAGES_GIFT_STATUSBAR = [
        'img/4. Marcadores/green/poisoned bubbles/0.png',
        'img/4. Marcadores/green/poisoned bubbles/20.png',
        'img/4. Marcadores/green/poisoned bubbles/40.png',
        'img/4. Marcadores/green/poisoned bubbles/60.png',
        'img/4. Marcadores/green/poisoned bubbles/80.png',
        'img/4. Marcadores/green/poisoned bubbles/100.png'
    ];

    constructor() {
        super();
        this.x = 20;
        this.y = 40;
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_GIFT_STATUSBAR);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES_GIFT_STATUSBAR[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(percentage) {
        if (this.percentage == 100) return 5;
        if (this.percentage > 80) return 4;
        if (this.percentage > 60) return 3;
        if (this.percentage > 40) return 2;
        if (this.percentage > 20) return 1;
        return 0;
    }

}