alert("Welcome to Song Bar");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songItemPlay = document.getElementById('songItemPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "24kGoldn - Mood ft. iann dior", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "DAKU - INDERPAL MOGA - CHANI NATTAN", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Tigini x No Love (JAZ Scape Mashup)", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Excuses - AP Dhillon - Gurinder Gill ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Glass Animals - Heat Waves", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Maar Dala X Divine ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "One Dance X Love Nwantiti", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ricky Rich x Habibi", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "The Chainsmokers - Don't Let Me Down ", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Drive Forever", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;      
    }
})
// listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
// space bar event
document.addEventListener('keydown', (e)=>{
    if(e.code == "Space"){
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    }
}
)
// 1-9 number event
document.addEventListener('keydown', (e)=>{
    if(e.code == "Digit1"){
        audioElement.currentTime = 10;
    }
    if(e.code == "Digit2"){
        audioElement.currentTime = 20;
    }
    if(e.code == "Digit3"){
        audioElement.currentTime = 30;
    }
    if(e.code == "Digit4"){
        audioElement.currentTime = 40;
    }
    if(e.code == "Digit5"){
        audioElement.currentTime = 50;
    }
    if(e.code == "Digit6"){
        audioElement.currentTime = 60;
    }
    if(e.code == "Digit7"){
        audioElement.currentTime = 70;
    }
    if(e.code == "Digit8"){
        audioElement.currentTime = 80;
    }
    if(e.code == "Digit9"){
        audioElement.currentTime = 90;
    }
    if(e.code == "Digit0"){
        audioElement.currentTime = 100;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    document.getElementById(songIndex).classList.remove('fa-play-circle');
    document.getElementById(songIndex).classList.add('fa-pause-circle');
})
audioElement.addEventListener('pause', ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    document.getElementById(songIndex).classList.remove('fa-pause-circle');
    document.getElementById(songIndex).classList.add('fa-play-circle');
})








