import createPlaylist from "./utils/playlist.js";

import * as elements from "./aplication/html_elements.js";


const songs = [
        {
            song_name : "cancion CHIDA",
            artist_name: "artista 1",
            song_url: "./media/song.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 2",
            artist_name: "artista 1",
            song_url: "./media/song_2.mp3",
            caratula: "https://picsum.photos/200"
        },
        {
            song_name : "cancion CHIDA 3",
            artist_name: "artista 3",
            song_url: "./media/song_3.mp3",
            caratula: "https://picsum.photos/200"
        },
    ];

function loadSong(i){
        const title = document.getElementById("title");
        const artist = document.getElementById("artist");
    
        const now = songs[i];
    
        elements.media.src = now.song_url;
        title.innerText = now.song_name;
        artist.innerText = now.artist_name;
        song_img.src = now.caratula;
}


function playPause(){
    if(elements.play_btn.classList.contains("pause")){
        elements.media.pause();
        play_btn.classList.remove("pause");
        play_btn.classList.add("play");
        play_btn.innerText = "Play"
    }else{
        elements.media.play();
        play_btn.classList.remove("play");
        play_btn.classList.add("pause");
        play_btn.innerText = "Pause";
    }
}

