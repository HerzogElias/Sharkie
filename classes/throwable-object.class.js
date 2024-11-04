class ThrowableObject extends MovableObject {
    width = 30;
    height = 30;
    bubbleY;
    bubbleSpeedY = 15;
    gravity = 0.5;
    world;

    IMAGES_THROW = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    constructor(world) {
        super();
        this.loadImages(this.IMAGES_THROW);
        this.world = world;

        setInterval(() => {
            if (this.world.keyboard.D) {
                this.throwToEndboss();
                this.throwBubble(this);
            }
        }, 1000 / 60);
    }

    throwBubble(mo) {
        let bubbleX = mo.x + mo.width;
        this.bubbleY = mo.y + mo.height * 0.5;

        setInterval(() => {
            this.bubbleY -= this.bubbleSpeedY;
            this.bubbleSpeedY -= this.gravity;
            if (this.bubbleSpeedY < -5) {
                this.bubbleSpeedY = -5;
            }
            this.draw(bubbleX, this.bubbleY);
        }, 1000 / 60);
    }

    throwToEndboss() {
        this.playAnimation(this.IMAGES_THROW);
    }

    draw(x, y) {
        this.world.ctx.drawImage(this.img, x, y, this.width, this.height);
    }
}



