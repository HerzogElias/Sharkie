class Charackter extends MovableObject {
    height = 100;
    width = 200;
    speed = 10;
    world;

    IMAGES_WALKING =
        [
            './img/1.Sharkie/3.Swim/1.png',
            './img/1.Sharkie/3.Swim/2.png',
            './img/1.Sharkie/3.Swim/3.png',
            './img/1.Sharkie/3.Swim/4.png',
            './img/1.Sharkie/3.Swim/5.png',
            './img/1.Sharkie/3.Swim/6.png'
        ]

    IMAGES_DEAD =
        [
            'img/1.Sharkie/6.dead/1.Poisoned/1.png',
            'img/1.Sharkie/6.dead/1.Poisoned/2.png',
            'img/1.Sharkie/6.dead/1.Poisoned/3.png',
            'img/1.Sharkie/6.dead/1.Poisoned/4.png',
            'img/1.Sharkie/6.dead/1.Poisoned/5.png',
            'img/1.Sharkie/6.dead/1.Poisoned/6.png',
            'img/1.Sharkie/6.dead/1.Poisoned/7.png',
            'img/1.Sharkie/6.dead/1.Poisoned/8.png',
            'img/1.Sharkie/6.dead/1.Poisoned/9.png',
            'img/1.Sharkie/6.dead/1.Poisoned/10.png',
            'img/1.Sharkie/6.dead/1.Poisoned/11.png',
            'img/1.Sharkie/6.dead/1.Poisoned/12.png'
        ]

    IMAGES_HURT = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ]

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



    walking_sound = new Audio('audio/swimming.mp3')
    constructor(world) {
        super().loadImage('./img/1.Sharkie/2.Long_IDLE/i1.png')
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_THROW);
        this.world=world;
        this.animate();
        this.fallDown();
    }

    animate() {
        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_x_End) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 60;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.DOWN && this.y < 390) {
                this.y += this.speed;
                this.otherDirection = false;
            }
            else
                if (this.world.keyboard.UP && this.y > 5) {
                    this.y -= this.speed;
                    this.otherDirection = false;
                }
        }, 1000 / 60)

        setInterval(() => {
            if(this.world.keyboard.D){
                this.playAnimation(this.IMAGES_THROW);
            }
        }, 1000/60);

        setInterval(() => {
            if (this.isDeat()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT)
                } else
                    this.playAnimation(this.IMAGES_WALKING);
        }, 200)
    }



    fallDown() {
        setInterval(() => {
            if (!this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                if (this.y < 380) {
                    this.y += 2;
                }
            }
        }, 1000 / 10);
    }
}
