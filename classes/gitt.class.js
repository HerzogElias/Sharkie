class Gift extends DrawableObject {
    whidth=10;
    height=70;
    
    IMAGES_GIFT =
        [
            'img/4. Marcadores/Posiขn/Dark_Left.png',
            'img/4. Marcadores/Posiขn/Dark_Right.png'
        ]

        constructor(){
            super().loadImage('img/4. Marcadores/Posiขn/Dark_Left.png');
            this.x=200+Math.random()*1000;
            this.y=350;
            this.loadImages(this.IMAGES_GIFT);
        }
    
}