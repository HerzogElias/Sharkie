class Endboss extends MovableObject {
    width = 350;
    height = 350;
    IMAGES_WALKING =
        [
            'img/2.Enemy/3 Final Enemy/2.floating/1.png',
            'img/2.Enemy/3 Final Enemy/2.floating/2.png',
            'img/2.Enemy/3 Final Enemy/2.floating/3.png',
            'img/2.Enemy/3 Final Enemy/2.floating/4.png',
            'img/2.Enemy/3 Final Enemy/2.floating/5.png',
            'img/2.Enemy/3 Final Enemy/2.floating/6.png',
            'img/2.Enemy/3 Final Enemy/2.floating/7.png',
            'img/2.Enemy/3 Final Enemy/2.floating/8.png',
            'img/2.Enemy/3 Final Enemy/2.floating/9.png',
            'img/2.Enemy/3 Final Enemy/2.floating/10.png',
            'img/2.Enemy/3 Final Enemy/2.floating/11.png',
            'img/2.Enemy/3 Final Enemy/2.floating/12.png',
            'img/2.Enemy/3 Final Enemy/2.floating/13.png'
        ]

    IMAGES_FIRST_ANIMATEON =
        [
            'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
            'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
        ]
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_FIRST_ANIMATEON);
        this.x = 2000;
        this.y = 50;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING)
        }, 200)
    }

    endbossFirstAnimation() {
        if (this.world.charackter.x < -1440) {
            console.log(this.x);
            this.playAnimation(this.IMAGES_FIRST_ANIMATEON);
        }
    }
}