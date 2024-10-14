class BackgroundObject extends MovableObject {
      width= 720; 
      height=400;
   constructor(imagePath,x,y){
      super().loadImage(imagePath,x,y);
       this.x=x
       this.y=y
    }
}