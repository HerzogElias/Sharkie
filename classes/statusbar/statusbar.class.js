/**
 * Represents the statusbar all general information.
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    percentage = 100;

    /**
     * 
     * @param {*} percentage - is the parm how much the percentage of a statusbar is. 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUSBAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * 
     * @param {*} percentage 
     * @returns 0 - whenn the statusbar of a percetnage smaler than 20 % is. It mean the zero time of the array of p
     */
    resolveImageIndex(percentage) {
        if (this.percentage == 100) return 5;
        if (this.percentage > 80) return 4;
        if (this.percentage > 60) return 3;
        if (this.percentage > 40) return 2;
        if (this.percentage > 20) return 1;
        return 0;
    }
}