class EndbossStatusbar extends DrawableObject {
    percentage = 100;

    IMAGES_GIFT_STATUSBAR = [
        'img/7.Myown/statusbar/0.png',
        'img/7.Myown/statusbar/20.png',
        'img/7.Myown/statusbar/40.png',
        'img/7.Myown/statusbar/60.png',
        'img/7.Myown/statusbar/80.png',
        'img/7.Myown/statusbar/100.png',
    ];

    constructor() {
        super();
        this.x = 500;
        this.y = 5;
        this.width = 200;
        this.height = 60;
        this.loadImages(this.IMAGES_GIFT_STATUSBAR);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
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
    
    showWinnerScreen() {
        document.getElementById('canvas').classList.add('dnone');
        document.getElementById('startscreen').classList.add('dnone');
        document.getElementById('youwon').classList.remove('dnone');
        document.getElementById('youlost').classList.add('dnone');
    }

    

    
}