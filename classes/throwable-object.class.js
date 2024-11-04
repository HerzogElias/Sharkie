class TrowableObject extends MovableObject {
    speedY;
    accerleration = 1;
    world;
    IMAGES_BUBLES_CHARACKTER = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]

    currentImageIndex = 0;

    constructor(world) {
        super();
        this.x = 20;
        this.y = 5;
        this.width = 200;
        this.height = 60;
        this.world=world;
        this.loadImages(this.IMAGES_BUBLES_CHARACKTER);
        this.loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png')
        this.throw();
    }


    throw() {
        if (this.world.keyboard.D) {
            console.log('juhu');
        }
        /*
        this.x = x;
        this.y = y;
        this.speedY = 30;
        if (world.keyboard.d){
            console.log('Testilein')
            setInterval(() => {
                this.x += 10;           // Horizontale Bewegung
                this.y -= this.speedY;   // Vertikale Bewegung mit Gravitation
                this.speedY -= this.accerleration; // Gravitationseffekt
            }, 1000 / 25);
        } */
    }
}



