import { media, progress_bar } from "../aplication/html_elements";

const player = {
    pastSong :[],
    nextSong : [],
    actualSong : null,
    playlist:[],
    controler: media,
    progress_bar : document.getElementById("progress"),

    inicializationPlayer(){
        this.actualSong = this.actualSong;
        this.progress_bar.max = 100;
        this.progress_bar.min = 0;
        this.initializationControlMedia(false);
        this.controler.addEventListener('mediaupdate',function(){
            const progress_value = (this.currentTime / this.duration) * 100;
            player.progress_bar.value = progress_value;
        });
        this.progress_bar.addEventListener('input', function(){
            player.controler.currentTime = (this.value/100)*player.controler.duration;
        });

    },
    initializationControlMedia: function(play){
        this.progress_bar.value = 0;

        if(play){
            this.controler.play()
        }

    },
    getListSong :function(){
        return playlist.pop();
    }

}

export default player;


