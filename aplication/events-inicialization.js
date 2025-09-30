import * as elements from "./html_elements.js";
import player from "../domian/player.js";
import songs from "../ports/multimendia.js";

export default function(){
    
    window.addEventListener('DOMContentLoaded', () => {
        player.inicializationPlayer();
        const playingNow = songs[player.actualSong]
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
    
  
    
    elements.play_btn.addEventListener("click", playPause);
    


}