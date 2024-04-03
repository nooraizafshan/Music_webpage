// let progress = document.getElementById("progress");
// let surahs = document.getElementById("surahs");
// let controlicon = document.getElementById("controlicon");

// surahs.onloadmetadata = function() {
//     progress.max = surahs.duration;
//     progress.value = surahs.currentTime;
// }

// function playpause() {
//     if (controlicon.classList.contains("fa-pause")) {
//         surahs.pause();
//         controlicon.classList.remove("fa-pause");
//         controlicon.classList.add("fa-play");
//     } else {
//         surahs.play();
//         controlicon.classList.add("fa-pause");
//         controlicon.classList.remove("fa-play");
//         setInterval(() => {
//             progress.value = surahs.currentTime;
//         }, 500);
//     }
// }

// progress.onchange = function() {
//     surahs.currentTime = progress.value;
//     surahs.play();
//     controlicon.classList.add("fa-pause");
//     controlicon.classList.remove("fa-play");
// }
// let playlist=document.querySelector('.playlist');
// let options=document.querySelector('.options');
// function open_p(){
//     playlist.classList.toggle('active');
// }
// function sidebar(){
//     options.classList.toggle('.active');
// }

// let progress = document.getElementById("progress");
// let surahs = document.getElementById("surahs");
// let controlicon = document.getElementById("controlicon");
// let playlist = document.querySelector('.playlist');
// let options = document.querySelector('.options');

// surahs.onloadmetadata = function() {
//     progress.max = surahs.duration;
//     progress.value = surahs.currentTime;
// }

// function playpause() {
//     if (controlicon.classList.contains("fa-pause")) {
//         surahs.pause();
//         controlicon.classList.remove("fa-pause");
//         controlicon.classList.add("fa-play");
//     } else {
//         surahs.play();
//         controlicon.classList.add("fa-pause");
//         controlicon.classList.remove("fa-play");
//         setInterval(() => {
//             progress.value = surahs.currentTime;
//         }, 500);
//     }
// }

// progress.onchange = function() {
//     surahs.currentTime = progress.value;
//     surahs.play();
//     controlicon.classList.add("fa-pause");
//     controlicon.classList.remove("fa-play");
// }

// function open_p(){
//     playlist.classList.toggle('active');
// }

// function sidebar(){
//     options.classList.toggle('.active');
// }


// Define global variables to store the current audio element and its associated play button
let currentAudio = document.getElementById("surahs");
let currentPlayButton = document.querySelector(".controls i.fa-solid.fa-play");
let progress = document.getElementById("progress");

// Update the playpause function to accept the audio element and play button as parameters
function playpause(audio, playButton) {
    if (playButton.classList.contains("fa-pause")) {
        audio.pause();
        playButton.classList.remove("fa-pause");
        playButton.classList.add("fa-play");
    } else {
        audio.play();
        playButton.classList.add("fa-pause");
        playButton.classList.remove("fa-play");
        setInterval(() => {
            progress.value = audio.currentTime;
        }, 500);
    }
}

// Update the onclick event for each play button in the playlist
document.querySelectorAll('.playlist .p-songs button').forEach(button => {
    button.onclick = function() {
        // Stop the currently playing audio
        currentAudio.pause();
        currentPlayButton.classList.remove("fa-pause");
        currentPlayButton.classList.add("fa-play");
        
        // Get the new audio element and play button
        currentAudio = button.previousElementSibling;
        currentPlayButton = button.querySelector("i.fa-solid");
        
        // Play the new audio
        playpause(currentAudio, currentPlayButton);
    };
});

surahs.onloadmetadata = function() {
    progress.max = surahs.duration;
    progress.value = surahs.currentTime;
}

function playpause() {
    if (controlicon.classList.contains("fa-pause")) {
        surahs.pause();
        controlicon.classList.remove("fa-pause");
        controlicon.classList.add("fa-play");
    } else {
        surahs.play();
        controlicon.classList.add("fa-pause");
        controlicon.classList.remove("fa-play");
        setInterval(() => {
            progress.value = surahs.currentTime;
        }, 500);
    }
}

progress.onchange = function() {
    surahs.currentTime = progress.value;
    surahs.play();
    controlicon.classList.add("fa-pause");
    controlicon.classList.remove("fa-play");
}

let playlist = document.querySelector('.playlist');
let options = document.querySelector('.options');

function open_p(){
    playlist.classList.toggle('active');
}

function sidebar(){
    options.classList.toggle('.active');
}
