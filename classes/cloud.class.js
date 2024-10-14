class Cloud extends MovableObject {
    x = 150 + Math.random() * 500;
    y = 25;

    constructor() {
        super().loadImage('./img/3. Background/Legacy/Layers/1. Light/2.png');
        this.animate();
    }

    animate() {
        setInterval(() => { // Korrektur hier: das "=>" sollte nicht in Klammern stehen
            this.x -= 0.15;
        }, 1000 / 60);
    }
}
