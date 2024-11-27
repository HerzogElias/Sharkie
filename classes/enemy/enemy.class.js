class Enemy extends MovableObject {
    width = 60; // Default-Werte
    height = 60;
    speed = 0.15 + Math.random() * 0.25;

    /**
     * Setzt die Position des Enemys zufällig.
     */
    setRandomPosition(xRange = 1000, yRange = 250) {
        this.x = 200 + Math.random() * xRange;
        this.y = 50 + Math.random() * yRange;
    }

    /**
     * Startet die Animation mit einem angegebenen Bilderset.
     * @param {string[]} imageArray - Array der Bilder für die Animation.
     * @param {number} interval - Intervallzeit in Millisekunden.
     */
    startAnimation(imageArray, interval = 1000) {
        setInterval(() => {
            this.playAnimation(imageArray);
        }, interval);
    }

    /**
     * Bewegt den Gegner nach links.
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}
