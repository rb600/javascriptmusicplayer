const music = document.querySelector("audio");
const play = document.getElementById("play");

const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");












const songs = [
    {
        id: 'song1',
        songName: 'Moonlight Sonata',
        artistName:'Beethoven'
    },
    {
        id: 'song2',
        songName: 'for the damaged',
        artistName:'Blonde Redhead'
    },
    {
        id: 'song3',
        songName: 'careless whisper',
        artistName:'wham!'
    },
    {
        id: 'song4',
        songName: 'Claire de lune',
        artistName:'debussy'
    },
    {
        id: 'song5',
        songName: 'rush',
        artistName:'unknown artist'
    },
    
]


let isAudioPlaying = false;

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
};


const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
};


play.addEventListener("click", ()=>{
  
    isAudioPlaying ? pauseTheMusic() : playTheMusic();

});




const loadTheSong = (songs)=>{
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;
    music.src = "music/" + songs.id + ".mp3";   
}

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

