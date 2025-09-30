import * as elements from "./html_elements.js";
import player from "./player.js";

export default function(){
    
    window.addEventListener('DOMContentLoaded', () => {
        playingNow = player.getListSong();
    })
    
    elements.media.addEventListener('loadedmetadata', () => {
        elements.progress_bar.max = 100;
        elements.progress_bar.value = 0;
        if(elements.play_btn.classList.contains("pause")){
            elements.media.play();
        }
    });
    
    elements.media.addEventListener('mediaupdate', function updateProgressBar() {
        const progress_value = (this.currentTime / this.duration) * 100;
        elements.progress_bar.value = progress_value;
    });
    
    elements.lastest.addEventListener('click', function(){
        if(!last.length == 0){
            playlist.push(playingNow);
            playingNow = last.pop();
            loadSong(playingNow)
        }
    });
    elements.forward.addEventListener('click', function(){
        if(!playlist.length == 0){
            last.push(playingNow);
            playingNow = playlist.pop();
            loadSong(playingNow)
        }
    });
    
    elements.progress_bar.addEventListener('input',function() {
        elements.media.currentTime = (this.value/100) * elements.media.duration;
    });
    
    elements.play_btn.addEventListener("click", playPause);
    


}