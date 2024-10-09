class World {
    charackter = new Charackter();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds=[
        new Cloud(),
        new Cloud()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();

    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.charackter.img, this.charackter.x, this.charackter.y, this.charackter.height, this.charackter.width);

        this.enemies.forEach(enemy =>{
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.height, enemy.width);
        });

        this.clouds.forEach(cloud =>{
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.height, cloud.width);
        });

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }
}