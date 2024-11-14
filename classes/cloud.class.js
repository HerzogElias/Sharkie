class Cloud extends MovableObject {
    x = 150 + Math.random() * 500;
    y = 25;
    width = 350; 
    height = 250;

   

    constructor() {
        super().loadImage('./img/3. Background/Legacy/Layers/1. Light/2.png');
        this.animate();
    }

    animate() {
        this.moveleft();
    }

    moveleft(){
        setInterval(() => {
            this.x -=this.speed;
        }, 1000 / 60);
    }
}
