class MusicManager{
    constructor(){

        this.isMuted =false;

        this.characterMusic = new Audio('audio/swimming.mp3');
        this.backgroundmusic =new Audio('audio/background.mp3');
        this.throwmusic=new Audio ('audio/throw.mp3');
        this.endbosshurt= new Audio ('audio/endbossHurt.mp3');
        this.collectinmusik= new Audio('audio/collecting.mp3');
        this.backgroundmusic.loop = true;
    }


playBackgroundmusik (){
    if (!this.isMuted) {
        this.backgroundmusic.play();
    }
}
playCharackterMusik(){
    if (!this.isMuted) {
        this.characterMusic.play();
    }
}

playThrowMusik(){
    if(!this.isMuted){
        this.throwmusic.play();
    }
}

playEndbosshurtMusik(){
    if (!this.isMuted){
        this.endbosshurt.play();
    }
}

playCollectingMusik(){
    if (!this.isMuted){
        this.collectinmusik.play();
    }
}

}
