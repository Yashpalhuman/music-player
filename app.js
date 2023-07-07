console.log("welcome to spotify")

let songIndex=0;
let audioElement =new Audio("music/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let playBar=document.getElementById("playbar");
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersonginfo');


let songs=[
    {songName: "Let me love you do", filePath: "music/1.mp3", coverPath:"img/1.jpg"},
    {songName: "Heat waves", filePath: "music/2.mp3", coverPath:"img/2.jpg"},
    {songName: "Faded", filePath: "music/3.mp3", coverPath:"img/3.jpg"},
    {songName: "Believer", filePath: "music/4.mp3", coverPath:"img/4.jpg"},
    {songName: "Don't Talk Anymore", filePath: "music/5.mp3", coverPath:"img/5.jpg"},
    {songName: "Joker", filePath: "music/6.mp3", coverPath:"img/6.jpg"},
    {songName: "One Kiss", filePath: "music/7.mp3", coverPath:"img/7.jpg"},
    {songName: "Attention", filePath: "music/8.mp3", coverPath:"img/8.jpg"},
    {songName: "Love Yourself", filePath: "music/9.mp3", coverPath:"img/9.jpg"},
    {songName: "Before You Go", filePath: "music/10.mp3", coverPath:"img/10.jpg"},
]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
})
//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    playBar.value=progress;
})
playBar.addEventListener('change',()=>{
    audioElement.currentTime=playBar.value*audioElement.duration/100;
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })   

}
Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='music/'+(songIndex+1)+'.mp3';
        mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src='music/'+(songIndex+1)+'.mp3';
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }
    audioElement.src='music/'+(songIndex+1)+'.mp3';
    mastersongname.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
})